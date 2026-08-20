import * as THREE from 'three'
import { createFighter, playPose, updateFighter } from './characters.js'

/**
 * Escena fija estilo Pokémon: dos fighters en posturas, sin moverse.
 */
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
    40,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100,
  )
  camera.position.set(0, 3.1, 8.2)
  camera.lookAt(0, 1.15, 0)

  scene.add(new THREE.HemisphereLight(0xb8c7ff, 0x1a1520, 1.1))

  const key = new THREE.DirectionalLight(0xffffff, 1.35)
  key.position.set(4, 8, 5)
  key.castShadow = true
  scene.add(key)

  const rim = new THREE.DirectionalLight(0x4cc9f0, 0.55)
  rim.position.set(-6, 3, -4)
  scene.add(rim)
  const rivalRim = new THREE.DirectionalLight(0xf72585, 0.45)
  rivalRim.position.set(6, 3, -4)
  scene.add(rivalRim)

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(10, 48),
    new THREE.MeshStandardMaterial({ color: 0x1c2438, roughness: 0.9 }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  const court = new THREE.Mesh(
    new THREE.RingGeometry(2.2, 2.45, 64),
    new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.5 }),
  )
  court.rotation.x = -Math.PI / 2
  court.position.y = 0.01
  scene.add(court)

  const crowdGroup = new THREE.Group()
  const crowdMat = new THREE.MeshStandardMaterial({ color: 0x121826, roughness: 1 })
  for (let i = 0; i < 24; i++) {
    const h = 1.2 + Math.random() * 0.9
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.45, h, 0.35), crowdMat)
    const angle = (i / 24) * Math.PI * 2
    const radius = 5.3 + (i % 3) * 0.45
    body.position.set(Math.cos(angle) * radius, h / 2, Math.sin(angle) * radius)
    body.lookAt(0, h / 2, 0)
    crowdGroup.add(body)
  }
  scene.add(crowdGroup)

  const spot = new THREE.SpotLight(0xffffff, 42, 20, 0.45, 0.4, 1)
  spot.position.set(0, 9, 2)
  scene.add(spot)
  scene.add(spot.target)

  const player = createFighter({ color: 0x4cc9f0, name: 'player' })
  player.position.set(-1.85, 0, 0.35)
  player.userData.facing = 0.55
  scene.add(player)

  const rival = createFighter({ color: 0xf72585, name: 'rival' })
  rival.position.set(1.85, 0, 0.35)
  rival.userData.facing = -0.55
  scene.add(rival)

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

  function setCrowd(v) {
    crowdEnergy = v
  }

  function setCameraMode(mode = 'idle') {
    camMode = mode || 'idle'
    camT = 0
  }

  function triggerMove(who, moveId, intensity = 1, hits = 1, cameraStyle = 'side') {
    const f = who === 'player' ? player : rival
    playPose(f, moveId, intensity)
    flash = 1
    shake = 0.1
    setCameraMode(cameraStyle)
    const homeX = who === 'player' ? PLAYER_HOME : RIVAL_HOME
    // baile: bounce in place / small hop, no "golpe"
    lunge = {
      who,
      t: 0,
      dur: hits > 1 ? 1.05 : 0.7,
      hits,
      homeX,
      moveId,
      intensity,
      dance: true,
    }
  }

  function showAuraBurst(who, amount) {
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
    if (hit) playPose(f, 'cringe', 1)
    shake = hit ? 0.22 : 0.1
    flash = 1
  }

  function pulse(who, good) {
    showAuraBurst(who, good ? 10 : -10)
  }

  function resetPoses() {
    playPose(player, 'idle', 1)
    playPose(rival, 'idle', 1)
    lunge = null
    player.position.x = PLAYER_HOME
    rival.position.x = RIVAL_HOME
    player.position.y = 0
    rival.position.y = 0
    setCameraMode('idle')
  }

  function resetPositions() {
    player.position.set(PLAYER_HOME, 0, 0.35)
    rival.position.set(RIVAL_HOME, 0, 0.35)
    player.userData.facing = 0.55
    rival.userData.facing = -0.55
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

  function frame() {
    if (!running) return
    const dt = Math.min(clock.getDelta(), 0.05)
    const time = clock.elapsedTime
    camT += dt

    if (lunge) {
      lunge.t += dt
      const f = lunge.who === 'player' ? player : rival
      const p = Math.min(1, lunge.t / lunge.dur)
      const hops = lunge.hits > 1 ? 4 : 2
      lunge.hopY = Math.abs(Math.sin(p * Math.PI * hops)) * 0.28
      lunge.hopX = lunge.homeX + Math.sin(p * Math.PI * hops) * 0.22 * (lunge.who === 'player' ? 1 : -1)
      if (p >= 0.45 && lunge.hits > 1 && !lunge.secondPose) {
        lunge.secondPose = true
        playPose(f, lunge.moveId, lunge.intensity * 1.2)
        flash = 1
      }
      if (p >= 1) {
        f.position.x = lunge.homeX
        f.position.y = 0
        lunge = null
      }
    }

    ;[player, rival].forEach((f) => {
      const s = f.userData.aura.scale.x
      f.userData.aura.scale.setScalar(THREE.MathUtils.lerp(s, 1, 0.08))
    })

    updateFighter(player, dt, time)
    updateFighter(rival, dt, time)

    // apply dance hop after pose update (poses reset y)
    if (lunge) {
      const f = lunge.who === 'player' ? player : rival
      f.position.x = lunge.hopX
      f.position.y = lunge.hopY
    }

    crowdGroup.children.forEach((c, i) => {
      const hype = camMode === 'idle' ? crowdEnergy : crowdEnergy + 0.4
      c.position.y =
        c.geometry.parameters.height / 2 +
        Math.sin(time * (2 + hype * 4) + i) * 0.05 * hype
    })

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

    // camera styles por baile
    let goal = new THREE.Vector3(0, 3.1, 8.2)
    let look = new THREE.Vector3(0, 1.15, 0)
    if (camMode === 'close') {
      goal.set(0, 2.2, 5.2)
      look.set(0, 1.5, 0)
    } else if (camMode === 'side') {
      goal.set(-2.8, 2.6, 6.5)
      look.set(0.4, 1.3, 0)
    } else if (camMode === 'low') {
      goal.set(0.4, 1.4, 6.8)
      look.set(0, 1.6, 0)
    } else if (camMode === 'spin') {
      const a = camT * 1.4
      goal.set(Math.sin(a) * 4.5, 2.8, 6.2 + Math.cos(a) * 2.2)
      look.set(0, 1.3, 0)
    } else {
      goal.set(Math.sin(time * 0.2) * 0.12, 3.1, 8.2)
    }

    camera.position.lerp(goal, camMode === 'idle' ? 0.04 : 0.1)
    camera.position.x += (Math.random() - 0.5) * shake
    camera.position.y += (Math.random() - 0.5) * shake * 0.5
    camera.lookAt(look)

    renderer.render(scene, camera)
    requestAnimationFrame(frame)
  }

  resize()
  window.addEventListener('resize', resize)
  requestAnimationFrame(frame)

  return {
    setCrowd,
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
      window.removeEventListener('resize', resize)
      renderer.dispose()
    },
  }
}
