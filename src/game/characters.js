import * as THREE from 'three'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js'

const BASE = import.meta.env.BASE_URL || './'

const ANIM_URLS = {
  idle: `${BASE}models/idle.fbx`,
  step: `${BASE}models/step-hiphop.fbx`,
  wave: `${BASE}models/wave-hiphop.fbx`,
  chicken: `${BASE}models/chicken-dance.fbx`,
  clapping: `${BASE}models/clapping.fbx`,
  cheering: `${BASE}models/cheering.fbx`,
  rallying: `${BASE}models/rallying.fbx`,
  arguing: `${BASE}models/arguing.fbx`,
}

/** Pose del juego → clip Mixamo + velocidad */
const POSE_TO_ANIM = {
  idle: { clip: 'idle', timeScale: 1 },
  'aura-walk': { clip: 'step', timeScale: 1.05 },
  mewing: { clip: 'wave', timeScale: 0.5 },
  'six-seven': { clip: 'wave', timeScale: 1.3 },
  'sigma-stare': { clip: 'wave', timeScale: 0.35 },
  'boat-kid': { clip: 'chicken', timeScale: 1.15 },
  'no-look': { clip: 'wave', timeScale: 0.95 },
  cringe: { clip: 'chicken', timeScale: 1.7 },
  'aura-guard': { clip: 'wave', timeScale: 0.55 },
  'tank-pose': { clip: 'wave', timeScale: 0.45 },
}

const FIGHTER_CLIP_KEYS = ['idle', 'step', 'wave', 'chicken']

let shared = null
let sharedPromise = null

function pickClip(fbx) {
  const list = fbx?.animations || []
  const good = list.find((a) => a.tracks && a.tracks.length > 0)
  return good ? good.clone() : null
}

/** Quita tracks de scale (suelen romper el mesh). */
function sanitizeClip(clip) {
  if (!clip) return null
  const out = clip.clone()
  out.tracks = out.tracks.filter((track) => !track.name.includes('.scale'))
  return out
}

const ASSET_LABELS = {
  idle: 'Pose idle',
  step: 'Step Hip Hop',
  wave: 'Wave Hip Hop',
  chicken: 'Chicken Dance',
  clapping: 'Público · aplausos',
  cheering: 'Público · ovación',
  rallying: 'Público · ánimo',
  arguing: 'Público · abucheo',
}

/**
 * Precarga FBX con progreso (0–1). Idempotente: si ya está, resuelve al instante.
 */
export async function preloadAssets(onProgress) {
  if (shared) {
    onProgress?.(1, 'Listo')
    return shared
  }
  if (sharedPromise) {
    const result = await sharedPromise
    onProgress?.(1, 'Listo')
    return result
  }

  sharedPromise = (async () => {
    const loader = new FBXLoader()
    const entries = Object.entries(ANIM_URLS)
    const byKey = {}
    let done = 0
    const total = entries.length

    onProgress?.(0, 'Preparando assets…')

    for (const [key, url] of entries) {
      onProgress?.(done / total, ASSET_LABELS[key] || key)
      try {
        byKey[key] = await loader.loadAsync(url)
      } catch (err) {
        console.error('[aura] FBX fail', url, err)
        byKey[key] = null
      }
      done += 1
      onProgress?.(done / total, ASSET_LABELS[key] || key)
    }

    const base = byKey.idle
    if (!base) throw new Error('No se pudo cargar idle.fbx')

    const clips = {}
    for (const key of Object.keys(ANIM_URLS)) {
      const raw = pickClip(byKey[key])
      if (!raw) {
        clips[key] = null
        continue
      }
      raw.name = key
      clips[key] = sanitizeClip(raw)
    }

    console.info(
      '[aura] clips',
      Object.fromEntries(Object.entries(clips).map(([k, c]) => [k, c ? c.duration : null])),
    )

    shared = { base, clips }
    onProgress?.(1, 'Listo')
    return shared
  })()

  try {
    return await sharedPromise
  } catch (err) {
    sharedPromise = null
    throw err
  }
}

async function loadShared() {
  return preloadAssets()
}

function tintModel(model, color, { cheap = false } = {}) {
  const tint = new THREE.Color(color)
  const mats = []
  model.traverse((child) => {
    if (!child.isMesh) return
    // Ocultar esqueleto visual de Mixamo (Beta_Joints)
    if (/joint/i.test(child.name)) {
      child.visible = false
      return
    }
    child.castShadow = !cheap
    child.receiveShadow = false
    child.frustumCulled = true
    // Siempre Standard (skinning seguro). En crowd: sin mapas = más barato.
    const mat = new THREE.MeshStandardMaterial({
      color: tint.clone(),
      roughness: cheap ? 0.85 : 0.55,
      metalness: 0.08,
    })
    if (!cheap) {
      const src = Array.isArray(child.material) ? child.material[0] : child.material
      if (src?.color) mat.color.copy(src.color).lerp(tint, 0.5)
      if (src?.map) mat.map = src.map
    } else {
      mat.color.multiplyScalar(0.85)
    }
    child.material = mat
    mats.push(mat)
  })
  return mats
}

function fitModel(model, targetHeight = 2.05, { male = false } = {}) {
  model.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(model)
  const size = box.getSize(new THREE.Vector3())
  if (size.y < 0.001) {
    model.scale.setScalar(0.012)
    return
  }
  const s = targetHeight / size.y
  // Hombre: un poco más alto y ancho (mismo mesh, sin retarget roto)
  if (male) {
    model.scale.set(s * 1.1, s * 1.04, s * 1.1)
  } else {
    model.scale.setScalar(s)
  }
  model.updateMatrixWorld(true)
  const fitted = new THREE.Box3().setFromObject(model)
  model.position.y = -fitted.min.y
}

/**
 * Fighter 3D (Mixamo).
 * gender solo cambia proporción/tinte — mismo mesh que las animaciones (no se deforma).
 */
export async function createFighter({
  color = 0x4cc9f0,
  name = 'player',
  gender = 'male',
} = {}) {
  const { base, clips } = await loadShared()
  const male = gender === 'male'

  const root = new THREE.Group()
  root.name = name

  const model = cloneSkeleton(base)
  model.animations = []
  tintModel(model, color)
  fitModel(model, male ? 2.15 : 2.0, { male })
  root.add(model)

  let hips = null
  model.traverse((c) => {
    if (hips) return
    const n = c.name || ''
    if (n === 'mixamorigHips' || n === 'Hips' || n.endsWith('Hips')) hips = c
  })
  const hipsHome = hips
    ? { x: hips.position.x, y: hips.position.y, z: hips.position.z }
    : null

  const aura = new THREE.Mesh(
    new THREE.SphereGeometry(1.15, 16, 12),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    }),
  )
  aura.position.y = 1.1
  aura.name = 'aura'
  root.add(aura)

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.55, 0.72, 24),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    }),
  )
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.02
  ring.name = 'ring'
  root.add(ring)

  const mixer = new THREE.AnimationMixer(model)
  const actions = {}
  for (const key of FIGHTER_CLIP_KEYS) {
    const clip = clips[key]
    if (!clip) continue
    const action = mixer.clipAction(clip)
    action.enabled = true
    action.setLoop(THREE.LoopRepeat, Infinity)
    actions[key] = action
  }

  root.userData = {
    model,
    mixer,
    actions,
    currentAction: null,
    hips,
    hipsHome,
    aura,
    ring,
    baseColor: color,
    pose: 'idle',
    poseT: 0,
    intensity: 1,
    gender,
    facing: name === 'player' ? Math.PI / 2 : -Math.PI / 2,
  }

  playPose(root, 'idle', 1)
  return root
}

export function playPose(fighter, poseId, intensity = 1) {
  const u = fighter.userData
  u.pose = poseId
  u.poseT = 0
  u.intensity = intensity

  const map = POSE_TO_ANIM[poseId] || POSE_TO_ANIM.idle
  const next = u.actions?.[map.clip]
  if (!next) {
    console.warn('[aura] sin clip para pose', poseId, map.clip)
    return
  }

  const speed = map.timeScale * (0.75 + intensity * 0.45)
  next.setEffectiveTimeScale(speed)

  if (u.currentAction === next) {
    next.setEffectiveWeight(1)
    return
  }

  if (u.currentAction) {
    u.currentAction.fadeOut(0.2)
  }
  next.reset()
  next.setEffectiveWeight(1)
  next.fadeIn(0.2)
  next.play()
  u.currentAction = next
}

export function updateFighter(fighter, dt, time) {
  const u = fighter.userData
  u.poseT += dt
  u.mixer?.update(dt)

  if (u.hips && u.hipsHome) {
    u.hips.position.x = u.hipsHome.x
    u.hips.position.z = u.hipsHome.z
  }
  fighter.position.y = 0

  if (u.pose === 'idle' || u.pose === 'mewing' || u.pose === 'sigma-stare') {
    u.aura.material.opacity = 0.1 + Math.sin(time * 1.5) * 0.03
  }
  u.ring.rotation.z = time * 0.6
  fighter.rotation.y = u.facing ?? 0
}

/**
 * Espectador del público — siempre con animación en loop (no parado).
 */
export async function createSpectator({
  color = 0x8899aa,
  height = 1.7,
  timeScale = 1,
  homeClip = 'idle',
  gender = 'female',
} = {}) {
  const { base, clips } = await loadShared()
  const male = gender === 'male'
  const root = new THREE.Group()
  root.name = 'spectator'

  const model = cloneSkeleton(base)
  model.animations = []
  const mats = tintModel(model, color, { cheap: true })
  fitModel(model, height, { male })
  root.add(model)

  let hips = null
  model.traverse((c) => {
    if (hips) return
    const n = c.name || ''
    if (n === 'mixamorigHips' || n === 'Hips' || n.endsWith('Hips')) hips = c
  })
  const hipsHome = hips
    ? { x: hips.position.x, y: hips.position.y, z: hips.position.z }
    : null

  const mixer = new THREE.AnimationMixer(model)
  const actions = {}
  const ensureAction = (key) => {
    if (actions[key]) return actions[key]
    const clip = clips[key]
    if (!clip) return null
    const action = mixer.clipAction(clip)
    action.enabled = true
    action.setLoop(THREE.LoopRepeat, Infinity)
    actions[key] = action
    return action
  }

  const home = clips[homeClip] ? homeClip : 'idle'
  const start = ensureAction(home) || ensureAction('idle')
  if (start) {
    start.setEffectiveTimeScale(timeScale)
    start.setEffectiveWeight(1)
    start.play()
    start.time = Math.random() * (start.getClip()?.duration || 1)
  }

  root.userData = {
    model,
    mixer,
    hips,
    hipsHome,
    actions,
    ensureAction,
    clips,
    currentAction: start || null,
    idleScale: timeScale,
    homeClip: home,
    mats,
    opacity: 1,
    animAcc: Math.random(),
  }
  return root
}

/** Si el NPC tapa mucho la vista → se oculta. */
export function setSpectatorOpacity(person, opacity) {
  const blocking = opacity < 0.45
  if (person.userData.blocking === blocking) return
  person.userData.blocking = blocking
  person.visible = !blocking
}

const _cam = new THREE.Vector3()
const _toFocus = new THREE.Vector3()
const _toP = new THREE.Vector3()
const _lat = new THREE.Vector3()

export function updateCrowdOcclusion(group, camera, focus) {
  if (!group?.children?.length) return
  camera.getWorldPosition(_cam)
  _toFocus.set(focus.x - _cam.x, focus.y - _cam.y, focus.z - _cam.z)
  const distF = _toFocus.length()
  if (distF < 0.2) return
  _toFocus.multiplyScalar(1 / distF)

  for (const person of group.children) {
    _toP.set(person.position.x - _cam.x, 1.05 - _cam.y, person.position.z - _cam.z)
    const along = _toP.dot(_toFocus)
    _lat.copy(_toP).addScaledVector(_toFocus, -along)
    const lateral = _lat.length()

    let opacity = 1
    if (along > 0.6 && along < distF + 0.6 && lateral < 2.1) {
      const nearAxis = 1 - lateral / 2.1
      opacity = 1 - nearAxis * 0.95
    }
    setSpectatorOpacity(person, opacity)
  }
}

export function playSpectatorAnim(person, clipName, timeScale = 1) {
  const u = person.userData
  const next = u.ensureAction?.(clipName) || u.actions?.[clipName]
  if (!next) return

  if (u.currentAction === next) {
    next.setEffectiveTimeScale(timeScale)
    next.setEffectiveWeight(1)
    if (!next.isRunning()) next.play()
    return
  }

  if (u.currentAction) {
    u.currentAction.fadeOut(0.18)
  }
  next.reset()
  next.setEffectiveTimeScale(timeScale)
  next.setEffectiveWeight(1)
  next.fadeIn(0.18)
  next.play()
  u.currentAction = next
}

export function updateSpectator(person, dt) {
  if (!person.visible) return
  const u = person.userData
  u.animAcc = (u.animAcc || 0) + dt
  if (u.animAcc < 1 / 28) return
  const step = u.animAcc
  u.animAcc = 0
  u.mixer?.update(step)
  if (u.hips && u.hipsHome) {
    u.hips.position.x = u.hipsHome.x
    u.hips.position.z = u.hipsHome.z
  }
  person.position.y = 0
}

export function setCrowdReaction(group, kind = 'cheer') {
  let clips
  if (kind === 'cheer') clips = ['cheering', 'clapping', 'rallying']
  else if (kind === 'boo') clips = ['arguing', 'arguing']
  else clips = ['arguing', 'clapping']

  group.children.forEach((person, i) => {
    const clip = clips[i % clips.length]
    const scale = 1.15 + Math.random() * 0.25
    playSpectatorAnim(person, clip, scale)
    if (person.userData.currentAction) {
      person.userData.currentAction.time = (i % 4) * 0.08
    }
  })
}

export function resetCrowdIdle(group) {
  group.children.forEach((person) => {
    const home = person.userData.homeClip || 'clapping'
    playSpectatorAnim(person, home, person.userData.idleScale || 1)
  })
}

/** Público alrededor del ring. */
export async function createCrowd(count = 10) {
  const group = new THREE.Group()
  group.name = 'crowd'
  const colors = [0x4a5568, 0x2d3748, 0x718096, 0x5a4a6a, 0x3d5a5b, 0x6b4f4f, 0x455a64, 0x556677]
  const homeClips = ['clapping', 'arguing', 'cheering', 'idle', 'clapping', 'rallying', 'arguing', 'cheering']

  const rings = [
    { radius: 4.4, n: Math.ceil(count * 0.55) },
    { radius: 5.35, n: Math.floor(count * 0.45) },
  ]

  const slots = []
  for (const ring of rings) {
    for (let i = 0; i < ring.n; i++) {
      const a = (i / ring.n) * Math.PI * 2 + ring.radius * 0.05 + (Math.random() - 0.5) * 0.08
      slots.push({
        a,
        r: ring.radius + (Math.random() - 0.5) * 0.25,
      })
    }
  }

  const people = await Promise.all(
    slots.map(async ({ a, r }, i) => {
      const male = i % 2 === 0
      const person = await createSpectator({
        color: colors[i % colors.length],
        height: (male ? 1.72 : 1.58) + Math.random() * 0.28,
        timeScale: 0.9 + Math.random() * 0.35,
        homeClip: homeClips[i % homeClips.length],
        gender: male ? 'male' : 'female',
      })
      person.position.set(Math.cos(a) * r, 0, Math.sin(a) * r)
      person.lookAt(0, 1.0, 0)
      person.userData.bobPhase = Math.random() * Math.PI * 2
      return person
    }),
  )

  people.forEach((p) => group.add(p))
  return group
}
