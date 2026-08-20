import * as THREE from 'three'
import { createFighter, playPose, updateFighter } from './characters.js'

const ARENA_LIMIT = 3.4

export function createBattleScene(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
  renderer.shadowMap.enabled = true

  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x0b1220, 12, 28)
  scene.background = new THREE.Color(0x0b1220)

  const camera = new THREE.PerspectiveCamera(
    42,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100,
  )
  camera.position.set(0, 3.4, 8.8)
  camera.lookAt(0, 1.2, 0)

  const hemi = new THREE.HemisphereLight(0xb8c7ff, 0x1a1520, 1.1)
  scene.add(hemi)

  const key = new THREE.DirectionalLight(0xffffff, 1.35)
  key.position.set(4, 8, 5)
  key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  scene.add(key)

  const rim = new THREE.DirectionalLight(0x4cc9f0, 0.55)
  rim.position.set(-6, 3, -4)
  scene.add(rim)

  const rivalRim = new THREE.DirectionalLight(0xf72585, 0.45)
  rivalRim.position.set(6, 3, -4)
  scene.add(rivalRim)

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(10, 48),
    new THREE.MeshStandardMaterial({
      color: 0x1c2438,
      roughness: 0.9,
      metalness: 0.05,
    }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  const court = new THREE.Mesh(
    new THREE.RingGeometry(2.2, 2.45, 64),
    new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.55 }),
  )
  court.rotation.x = -Math.PI / 2
  court.position.y = 0.01
  scene.add(court)

  const crowdGroup = new THREE.Group()
  const crowdMat = new THREE.MeshStandardMaterial({
    color: 0x121826,
    roughness: 1,
  })
  for (let i = 0; i < 28; i++) {
    const h = 1.2 + Math.random() * 0.9
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.45, h, 0.35), crowdMat)
    const angle = (i / 28) * Math.PI * 2
    const radius = 5.2 + (i % 3) * 0.55
    body.position.set(Math.cos(angle) * radius, h / 2, Math.sin(angle) * radius)
    body.lookAt(0, h / 2, 0)
    crowdGroup.add(body)
  }
  scene.add(crowdGroup)

  const spot = new THREE.SpotLight(0xffffff, 40, 20, 0.45, 0.4, 1)
  spot.position.set(0, 9, 2)
  spot.target.position.set(0, 0, 0)
  scene.add(spot)
  scene.add(spot.target)

  const player = createFighter({ color: 0x4cc9f0, name: 'player' })
  player.position.set(-1.6, 0, 0.4)
  scene.add(player)

  const rival = createFighter({ color: 0xf72585, name: 'rival' })
  rival.position.set(1.6, 0, 0.4)
  scene.add(rival)

  const hypeGeo = new THREE.BufferGeometry()
  const count = 80
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6
    positions[i * 3 + 1] = Math.random() * 4
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6
  }
  hypeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const hype = new THREE.Points(
    hypeGeo,
    new THREE.PointsMaterial({
      color: 0xffd166,
      size: 0.06,
      transparent: true,
      opacity: 0.35,
    }),
  )
  scene.add(hype)

  // Impact burst particles
  const burstCount = 48
  const burstGeo = new THREE.BufferGeometry()
  const burstPos = new Float32Array(burstCount * 3)
  const burstVel = []
  for (let i = 0; i < burstCount; i++) {
    burstPos[i * 3] = 0
    burstPos[i * 3 + 1] = -10
    burstPos[i * 3 + 2] = 0
    burstVel.push(new THREE.Vector3())
  }
  burstGeo.setAttribute('position', new THREE.BufferAttribute(burstPos, 3))
  const burstMat = new THREE.PointsMaterial({
    color: 0x80ed99,
    size: 0.12,
    transparent: true,
    opacity: 0,
    depthWrite: false,
  })
  const burst = new THREE.Points(burstGeo, burstMat)
  scene.add(burst)
  let burstLife = 0

  let crowdEnergy = 0.5
  let flash = 0
  let canMove = false
  let attacking = false
  let focusMode = 0 // 0 idle, 1 focusing attack
  let shake = 0
  const input = { x: 0, z: 0 }
  const clock = new THREE.Clock()
  let running = true
  const speed = 3.6
  const camTarget = new THREE.Vector3(0, 1.2, 0)
  const camPosGoal = new THREE.Vector3(0, 3.4, 8.8)
  let dash = null // { from, to, t, dur, who }

  function clampArena(v) {
    return Math.max(-ARENA_LIMIT, Math.min(ARENA_LIMIT, v))
  }

  function resize() {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    if (w === 0 || h === 0) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  }

  function setCrowd(value01) {
    crowdEnergy = value01
    hype.material.opacity = 0.15 + value01 * 0.55
    const scale = 1 + (value01 - 0.5) * 0.08
    crowdGroup.scale.set(1, scale, 1)
  }

  function setInput(next) {
    input.x = next.x ?? input.x
    input.z = next.z ?? input.z
  }

  function setCanMove(value) {
    canMove = value
    if (!value) {
      input.x = 0
      input.z = 0
    }
  }

  function setAttacking(value) {
    attacking = value
  }

  function faceEachOther() {
    const dx = rival.position.x - player.position.x
    const dz = rival.position.z - player.position.z
    player.userData.facing = Math.atan2(dx, dz)
    rival.userData.facing = Math.atan2(-dx, -dz)
  }

  function centerOnFight(intense = false) {
    focusMode = intense ? 1 : 0.65
    const mid = new THREE.Vector3().addVectors(player.position, rival.position).multiplyScalar(0.5)
    camTarget.set(mid.x, 1.35, mid.z)
    const dist = intense ? 5.2 : 7.2
    camPosGoal.set(mid.x * 0.15, intense ? 2.6 : 3.2, mid.z + dist)
    spot.target.position.copy(mid)
    spot.target.updateMatrixWorld()
  }

  function releaseFocus() {
    focusMode = 0
    camTarget.set(0, 1.2, 0)
    camPosGoal.set(0, 3.4, 8.8)
  }

  function dashTowardRival() {
    faceEachOther()
    const dir = new THREE.Vector3()
      .subVectors(rival.position, player.position)
      .setY(0)
    const dist = dir.length()
    if (dist < 0.01) return
    dir.normalize()
    const stopAt = Math.max(1.15, dist - 1.35)
    const to = player.position.clone().add(dir.multiplyScalar(Math.min(stopAt, dist - 1.1)))
    to.x = clampArena(to.x)
    to.z = clampArena(to.z)
    dash = {
      who: 'player',
      from: player.position.clone(),
      to,
      t: 0,
      dur: 0.28,
    }
    playPose(player, 'aura-walk', 1.4)
    centerOnFight(true)
  }

  function triggerMove(who, moveId, intensity = 1) {
    const fighter = who === 'player' ? player : rival
    playPose(fighter, moveId, intensity)
    flash = 1
    shake = who === 'player' ? 0.18 : 0.12
    faceEachOther()
    centerOnFight(true)
  }

  function showAuraBurst(who, amount) {
    const fighter = who === 'player' ? player : rival
    const good = amount >= 0
    burstMat.color.setHex(good ? 0x80ed99 : 0xff6b6b)
    burstMat.opacity = 0.95
    burstLife = 0.7
    const origin = fighter.position.clone()
    origin.y = 1.4
    const attr = burst.geometry.attributes.position
    for (let i = 0; i < burstCount; i++) {
      attr.setXYZ(i, origin.x, origin.y, origin.z)
      const dir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        Math.random() * 1.6 + 0.2,
        (Math.random() - 0.5) * 2,
      ).normalize()
      burstVel[i].copy(dir).multiplyScalar(2.5 + Math.random() * 3.5)
    }
    attr.needsUpdate = true

    // aura ring pop
    fighter.userData.aura.material.opacity = good ? 0.45 : 0.08
    fighter.userData.aura.scale.setScalar(good ? 1.45 : 0.7)
    if (!good) playPose(fighter, 'cringe', 1)
    shake = Math.max(shake, good ? 0.12 : 0.28)
    flash = 1
  }

  function pulse(who, good) {
    showAuraBurst(who, good ? 10 : -10)
  }

  function resetPoses() {
    playPose(player, 'idle', 1)
    playPose(rival, 'idle', 1)
    attacking = false
    releaseFocus()
  }

  function resetPositions() {
    player.position.set(-1.6, 0, 0.4)
    rival.position.set(1.6, 0, 0.4)
    player.userData.facing = 0.4
    rival.userData.facing = -0.4
    input.x = 0
    input.z = 0
    dash = null
    releaseFocus()
  }

  function getDistance() {
    return player.position.distanceTo(rival.position)
  }

  function projectToScreen(who) {
    const fighter = who === 'player' ? player : rival
    const v = new THREE.Vector3(fighter.position.x, 2.2, fighter.position.z)
    v.project(camera)
    const rect = canvas.getBoundingClientRect()
    return {
      x: ((v.x + 1) / 2) * rect.width,
      y: ((-v.y + 1) / 2) * rect.height,
    }
  }

  function frame() {
    if (!running) return
    const dt = Math.min(clock.getDelta(), 0.05)
    const time = clock.elapsedTime

    if (dash) {
      dash.t += dt
      const p = Math.min(1, dash.t / dash.dur)
      const ease = 1 - Math.pow(1 - p, 3)
      const f = dash.who === 'player' ? player : rival
      f.position.lerpVectors(dash.from, dash.to, ease)
      if (p >= 1) dash = null
    } else if (canMove && !attacking) {
      const len = Math.hypot(input.x, input.z)
      if (len > 0.01) {
        const nx = input.x / len
        const nz = input.z / len
        player.position.x = clampArena(player.position.x + nx * speed * dt)
        player.position.z = clampArena(player.position.z + nz * speed * dt)
        player.userData.facing = Math.atan2(nx, nz)
        if (player.userData.pose !== 'aura-walk') {
          playPose(player, 'aura-walk', 1)
        }
      } else if (player.userData.pose === 'aura-walk') {
        playPose(player, 'idle', 1)
      }

      const dx = player.position.x - rival.position.x
      const dz = player.position.z - rival.position.z
      rival.userData.facing = Math.atan2(dx, dz)

      // soft follow cam while roaming
      const mid = new THREE.Vector3().addVectors(player.position, rival.position).multiplyScalar(0.5)
      camTarget.lerp(new THREE.Vector3(mid.x * 0.4, 1.2, mid.z * 0.2), 0.04)
      camPosGoal.x = THREE.MathUtils.lerp(camPosGoal.x, mid.x * 0.25, 0.04)
    }

    // decay aura scale back
    ;[player, rival].forEach((f) => {
      const s = f.userData.aura.scale.x
      f.userData.aura.scale.setScalar(THREE.MathUtils.lerp(s, 1, 0.08))
    })

    updateFighter(player, dt, time)
    updateFighter(rival, dt, time)

    crowdGroup.children.forEach((c, i) => {
      c.position.y =
        c.geometry.parameters.height / 2 +
        Math.sin(time * (2 + crowdEnergy * 4) + i) * 0.05 * crowdEnergy
    })

    const pos = hype.geometry.attributes.position
    for (let i = 0; i < count; i++) {
      let y = pos.getY(i) + dt * (0.4 + crowdEnergy)
      if (y > 4.5) y = 0
      pos.setY(i, y)
    }
    pos.needsUpdate = true

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
      flash = Math.max(0, flash - dt * 2.2)
      spot.intensity = 40 + flash * 50
    }
    if (shake > 0) shake = Math.max(0, shake - dt * 1.8)

    camera.position.lerp(camPosGoal, focusMode > 0 ? 0.12 : 0.06)
    if (shake > 0) {
      camera.position.x += (Math.random() - 0.5) * shake
      camera.position.y += (Math.random() - 0.5) * shake * 0.6
    }
    camera.lookAt(camTarget)

    renderer.render(scene, camera)
    requestAnimationFrame(frame)
  }

  resize()
  window.addEventListener('resize', resize)
  requestAnimationFrame(frame)

  return {
    setCrowd,
    setInput,
    setCanMove,
    setAttacking,
    triggerMove,
    dashTowardRival,
    centerOnFight,
    releaseFocus,
    showAuraBurst,
    setRivalColor() {},
    pulse,
    resetPoses,
    resetPositions,
    getDistance,
    projectToScreen,
    resize,
    dispose() {
      running = false
      window.removeEventListener('resize', resize)
      renderer.dispose()
    },
  }
}
