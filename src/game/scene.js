import * as THREE from 'three'
import {
  createFighter,
  playPose,
  updateFighter,
  createCrowd,
  updateSpectator,
  setCrowdReaction,
  resetCrowdIdle,
  updateCrowdOcclusion,
} from './characters.js'

/**
 * Escena fija estilo Pokémon: dos fighters 3D con animaciones Mixamo.
 */
export async function createBattleScene(canvas) {
  const isMobile = window.matchMedia('(max-width: 900px), (pointer: coarse)').matches
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.5))
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
  // Sombras solo en desktop; en móvil cuestan demasiado
  renderer.shadowMap.enabled = !isMobile

  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x0b1220, 14, 32)
  scene.background = new THREE.Color(0x0b1220)

  const camera = new THREE.PerspectiveCamera(
    38,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100,
  )
  // Más atrás/alto: se ve el público detrás, pelea abajo (HUD de vida libre arriba)
  camera.position.set(0, 3.85, 10.2)
  camera.lookAt(0, 0.95, -0.4)

  scene.add(new THREE.HemisphereLight(0xb8c7ff, 0x1a1520, 1.15))

  const key = new THREE.DirectionalLight(0xffffff, 1.35)
  key.position.set(4, 8, 5)
  key.castShadow = !isMobile
  if (!isMobile) {
    key.shadow.mapSize.set(1024, 1024)
    key.shadow.camera.near = 1
    key.shadow.camera.far = 24
  }
  scene.add(key)

  const rim = new THREE.DirectionalLight(0x4cc9f0, 0.55)
  rim.position.set(-6, 3, -4)
  scene.add(rim)
  const rivalRim = new THREE.DirectionalLight(0xf72585, 0.45)
  rivalRim.position.set(6, 3, -4)
  scene.add(rivalRim)

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(11, isMobile ? 24 : 32),
    new THREE.MeshLambertMaterial({ color: 0x1c2438 }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = !isMobile
  scene.add(ground)

  // Plaza / ring de baile (el círculo = zona de combate, como el campo)
  const plazaFill = new THREE.Mesh(
    new THREE.CircleGeometry(2.35, isMobile ? 32 : 48),
    new THREE.MeshLambertMaterial({ color: 0x243044 }),
  )
  plazaFill.rotation.x = -Math.PI / 2
  plazaFill.position.y = 0.005
  plazaFill.receiveShadow = !isMobile
  scene.add(plazaFill)

  const court = new THREE.Mesh(
    new THREE.RingGeometry(2.25, 2.55, isMobile ? 32 : 48),
    new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.75 }),
  )
  court.rotation.x = -Math.PI / 2
  court.position.y = 0.012
  scene.add(court)

  const courtInner = new THREE.Mesh(
    new THREE.RingGeometry(0.9, 1.0, 32),
    new THREE.MeshBasicMaterial({ color: 0x4cc9f0, transparent: true, opacity: 0.35 }),
  )
  courtInner.rotation.x = -Math.PI / 2
  courtInner.position.y = 0.013
  scene.add(courtInner)

  // Línea central VS
  const midLine = new THREE.Mesh(
    new THREE.PlaneGeometry(0.06, 4.5),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 }),
  )
  midLine.rotation.x = -Math.PI / 2
  midLine.position.y = 0.014
  scene.add(midLine)

  // Marcador de quién ataca (bajo los pies)
  const attackMark = new THREE.Mesh(
    new THREE.RingGeometry(0.55, 0.78, 24),
    new THREE.MeshBasicMaterial({
      color: 0x4cc9f0,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    }),
  )
  attackMark.rotation.x = -Math.PI / 2
  attackMark.position.y = 0.03
  scene.add(attackMark)
  let attackMarkWho = null
  let attackMarkPulse = 0

  const spot = new THREE.SpotLight(0xffffff, 42, 20, 0.45, 0.4, 1)
  spot.position.set(0, 9, 2)
  scene.add(spot)
  scene.add(spot.target)

  // Pintar arena ya, mientras cargan los FBX
  let player = null
  let rival = null
  let crowdGroup = new THREE.Group()
  scene.add(crowdGroup)

  // burst VFX
  const burstCount = 40
  const burstGeo = new THREE.BufferGeometry()
  const burstPos = new Float32Array(burstCount * 3)
  const burstVel = []
  for (let i = 0; i < burstCount; i++) {
    burstPos[i * 3 + 1] = -10
    burstVel.push(new THREE.Vector3())
  }
  burstGeo.setAttribute('position', new THREE.BufferAttribute(burstPos, 3))
  const burstMat = new THREE.PointsMaterial({
    color: 0x80ed99,
    size: 0.11,
    transparent: true,
    opacity: 0,
    depthWrite: false,
  })
  const burst = new THREE.Points(burstGeo, burstMat)
  scene.add(burst)
  let burstLife = 0
  let flash = 0
  let shake = 0
  let crowdEnergy = 0.5
  let lunge = null
  let camMode = 'idle' // idle | close | side | low | spin
  let camT = 0
  let crowdIdleTimer = null
  let modelsReady = false

  const clock = new THREE.Clock()
  let running = true

  const PLAYER_HOME = -1.85
  const RIVAL_HOME = 1.85

  function resize() {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  }

  resize()
  window.addEventListener('resize', resize)

  // Cargar modelos (1 sola vez compartida)
  try {
    const loaded = await Promise.all([
      createFighter({ color: 0x4cc9f0, name: 'player', gender: 'male' }),
      createFighter({ color: 0xf72585, name: 'rival', gender: 'female' }),
      createCrowd(isMobile ? 8 : 10),
    ])
    player = loaded[0]
    rival = loaded[1]
    scene.remove(crowdGroup)
    crowdGroup = loaded[2]
    player.position.set(PLAYER_HOME, 0, 0.35)
    rival.position.set(RIVAL_HOME, 0, 0.35)
    scene.add(player)
    scene.add(rival)
    scene.add(crowdGroup)
    modelsReady = true
  } catch (err) {
    console.error('[aura] models', err)
    throw err
  }

  function setCrowd(v) {
    crowdEnergy = v
  }

  function reactCrowd(kind = 'cheer') {
    if (!modelsReady) return
    setCrowdReaction(crowdGroup, kind)
    crowdEnergy = kind === 'cheer' ? 1 : kind === 'boo' ? 0.9 : 0.55
    if (crowdIdleTimer) clearTimeout(crowdIdleTimer)
    // Todos reaccionan juntos ~2.5s y vuelven a idle juntos
    crowdIdleTimer = setTimeout(() => {
      if (!running) return
      resetCrowdIdle(crowdGroup)
      crowdEnergy = 0.5
      crowdIdleTimer = null
    }, 2500)
  }

  function setAttacker(who = null) {
    attackMarkWho = who
    if (!who || !player || !rival) {
      attackMark.material.opacity = 0
      return
    }
    const f = who === 'player' ? player : rival
    attackMark.position.x = f.position.x
    attackMark.position.z = f.position.z
    attackMark.material.color.setHex(who === 'player' ? 0x4cc9f0 : 0xf72585)
    attackMark.material.opacity = 0.9
    attackMarkPulse = 0
  }

  function setCameraMode(mode = 'idle') {
    camMode = mode || 'idle'
    camT = 0
  }

  function triggerMove(who, moveId, intensity = 1, hits = 1, cameraStyle = 'side') {
    if (!player || !rival) return
    const f = who === 'player' ? player : rival
    const other = who === 'player' ? rival : player

    // Turno estilo Pokémon: solo uno baila, el otro en idle
    playPose(other, 'idle', 1)
    other.position.x = who === 'player' ? RIVAL_HOME : PLAYER_HOME
    other.position.y = 0

    setAttacker(who)
    playPose(f, moveId, intensity)
    flash = 1
    shake = 0.1
    setCameraMode(cameraStyle)
    const homeX = who === 'player' ? PLAYER_HOME : RIVAL_HOME
    lunge = {
      who,
      t: 0,
      dur: hits > 1 ? 2.4 : 2.2,
      hits,
      homeX,
      moveId,
      intensity,
      dance: true,
    }
  }

  function showAuraBurst(who, amount) {
    if (!player || !rival) return
    const f = who === 'player' ? player : rival
    const hit = amount < 0
    burstMat.color.setHex(hit ? 0xff6b6b : 0x80ed99)
    burstMat.opacity = 0.95
    burstLife = 0.65
    const o = f.position.clone()
    o.y = 1.45
    const attr = burst.geometry.attributes.position
    for (let i = 0; i < burstCount; i++) {
      attr.setXYZ(i, o.x, o.y, o.z)
      burstVel[i]
        .set((Math.random() - 0.5) * 2, Math.random() * 1.5 + 0.2, (Math.random() - 0.5) * 2)
        .normalize()
        .multiplyScalar(2.2 + Math.random() * 3)
    }
    attr.needsUpdate = true
    f.userData.aura.material.opacity = hit ? 0.08 : 0.4
    f.userData.aura.scale.setScalar(hit ? 0.75 : 1.4)
    // Sin baile de cringe aquí: el flinch visual es solo VFX (turnos limpios)
    shake = hit ? 0.22 : 0.1
    flash = 1
  }

  function pulse(who, good) {
    showAuraBurst(who, good ? 10 : -10)
  }

  function resetPoses() {
    if (!player || !rival) return
    playPose(player, 'idle', 1)
    playPose(rival, 'idle', 1)
    lunge = null
    player.position.x = PLAYER_HOME
    rival.position.x = RIVAL_HOME
    player.position.y = 0
    rival.position.y = 0
    setCameraMode('idle')
    setAttacker(null)
  }

  function resetPositions() {
    if (!player || !rival) return
    player.position.set(PLAYER_HOME, 0, 0.35)
    rival.position.set(RIVAL_HOME, 0, 0.35)
    player.userData.facing = Math.PI / 2
    rival.userData.facing = -Math.PI / 2
    resetPoses()
  }

  function projectToScreen(who) {
    const f = who === 'player' ? player : rival
    const v = new THREE.Vector3(f.position.x, 2.25, f.position.z)
    v.project(camera)
    const rect = canvas.getBoundingClientRect()
    return {
      x: ((v.x + 1) / 2) * rect.width,
      y: ((-v.y + 1) / 2) * rect.height,
    }
  }

  let crowdOccTick = 0

  function frame() {
    if (!running) return
    const dt = Math.min(clock.getDelta(), 0.05)
    const time = clock.elapsedTime
    camT += dt

    if (modelsReady && player && rival) {
      if (lunge) {
        lunge.t += dt
        const f = lunge.who === 'player' ? player : rival
        const p = Math.min(1, lunge.t / lunge.dur)
        // Solo un leve sway en X — pies pegados al suelo
        lunge.hopX = lunge.homeX + Math.sin(p * Math.PI * 2) * 0.08 * (lunge.who === 'player' ? 1 : -1)
        if (p >= 0.45 && lunge.hits > 1 && !lunge.secondPose) {
          lunge.secondPose = true
          playPose(f, lunge.moveId, lunge.intensity * 1.2)
          flash = 1
        }
        if (p >= 1) {
          f.position.x = lunge.homeX
          f.position.y = 0
          playPose(f, 'idle', 1)
          setAttacker(null)
          lunge = null
        }
      }

      ;[player, rival].forEach((f) => {
        const s = f.userData.aura.scale.x
        f.userData.aura.scale.setScalar(THREE.MathUtils.lerp(s, 1, 0.08))
      })

      updateFighter(player, dt, time)
      updateFighter(rival, dt, time)

      if (lunge) {
        const f = lunge.who === 'player' ? player : rival
        f.position.x = lunge.hopX
        f.position.y = 0
        attackMark.position.x = f.position.x
        attackMark.position.z = f.position.z
      }

      if (attackMarkWho) {
        attackMarkPulse += dt
        const pulse = 0.72 + Math.sin(attackMarkPulse * 8) * 0.22
        attackMark.material.opacity = pulse
        const sc = 1 + Math.sin(attackMarkPulse * 6) * 0.08
        attackMark.scale.set(sc, sc, sc)
      } else if (attackMark.material.opacity > 0) {
        attackMark.material.opacity = Math.max(0, attackMark.material.opacity - dt * 2)
      }

      crowdGroup.children.forEach((c) => {
        updateSpectator(c, dt)
      })
    }
    if (burstLife > 0) {
      burstLife -= dt
      burstMat.opacity = Math.max(0, burstLife * 1.3)
      const attr = burst.geometry.attributes.position
      for (let i = 0; i < burstCount; i++) {
        attr.setX(i, attr.getX(i) + burstVel[i].x * dt)
        attr.setY(i, attr.getY(i) + burstVel[i].y * dt)
        attr.setZ(i, attr.getZ(i) + burstVel[i].z * dt)
        burstVel[i].y -= 4 * dt
      }
      attr.needsUpdate = true
    }

    if (flash > 0) {
      flash = Math.max(0, flash - dt * 2)
      spot.intensity = 40 + flash * 45
    }
    if (shake > 0) shake = Math.max(0, shake - dt * 1.8)

    // Cámara: órbita lenta + cambios de plano (cuts)
    let goal = new THREE.Vector3()
    let look = new THREE.Vector3(0, 1.1, 0)
    const focus =
      attackMarkWho === 'player' && player
        ? player.position
        : attackMarkWho === 'rival' && rival
          ? rival.position
          : null

    if (camMode === 'close') {
      const a = camT * 0.35
      const fx = focus ? focus.x * 0.45 : 0
      goal.set(fx + Math.sin(a) * 1.4, 2.35, 5.6 + Math.cos(a) * 0.5)
      look.set(fx, 1.4, 0)
    } else if (camMode === 'side') {
      const a = camT * 0.28
      const side = focus && focus.x > 0 ? 1 : -1
      goal.set(side * (-3.4 + Math.sin(a) * 0.4), 2.85, 7.0)
      look.set(focus ? focus.x * 0.3 : 0.1, 1.2, -0.1)
    } else if (camMode === 'low') {
      const a = camT * 0.3
      goal.set(Math.sin(a) * 1.2, 1.55, 6.8)
      look.set(focus ? focus.x * 0.35 : 0, 1.45, 0)
    } else if (camMode === 'spin') {
      const a = camT * 0.7
      goal.set(Math.sin(a) * 5.5, 3.0, Math.cos(a) * 5.5)
      look.set(0, 1.15, 0)
    } else {
      // Idle: cambia de plano cada ~4.5s + deriva lenta
      const SHOTS = [
        { x: 0, y: 3.4, z: 9.2, lx: 0, ly: 1.05, lz: -0.2 },
        { x: -4.2, y: 2.9, z: 7.4, lx: 0.3, ly: 1.15, lz: 0 },
        { x: 4.0, y: 3.1, z: 7.6, lx: -0.3, ly: 1.1, lz: 0 },
        { x: 0.2, y: 2.2, z: 7.0, lx: 0, ly: 1.35, lz: -0.15 },
        { x: -2.2, y: 4.0, z: 8.4, lx: 0, ly: 0.9, lz: -0.3 },
        { x: 2.6, y: 2.6, z: 8.8, lx: -0.2, ly: 1.2, lz: -0.1 },
      ]
      const shotIdx = Math.floor(time / 4.5) % SHOTS.length
      const shot = SHOTS[shotIdx]
      const drift = time * 0.22
      goal.set(
        shot.x + Math.sin(drift) * 0.35,
        shot.y + Math.sin(drift * 0.7) * 0.12,
        shot.z + Math.cos(drift) * 0.25,
      )
      look.set(shot.lx, shot.ly, shot.lz)
    }

    const lerpSpeed = camMode === 'idle' ? 0.045 : 0.085
    camera.position.lerp(goal, lerpSpeed)
    camera.position.x += (Math.random() - 0.5) * shake
    camera.position.y += (Math.random() - 0.5) * shake * 0.5
    camera.lookAt(look)

    // NPCs delante de la cámara → se ocultan (cada 3 frames)
    if (++crowdOccTick % 3 === 0) {
      updateCrowdOcclusion(crowdGroup, camera, look)
    }

    renderer.render(scene, camera)
    requestAnimationFrame(frame)
  }

  resize()
  requestAnimationFrame(frame)

  return {
    setCrowd,
    reactCrowd,
    setAttacker,
    setInput() {},
    setCanMove() {},
    setAttacking() {},
    dashTowardRival() {},
    centerOnFight() {},
    releaseFocus() {},
    triggerMove,
    setCameraMode,
    showAuraBurst,
    pulse,
    resetPoses,
    resetPositions,
    getDistance: () => 3.7,
    projectToScreen,
    resize,
    dispose() {
      running = false
      if (crowdIdleTimer) clearTimeout(crowdIdleTimer)
      window.removeEventListener('resize', resize)
      renderer.dispose()
    },
  }
}
