import * as THREE from 'three'

/**
 * Personaje low-poly estilizado para batallas de aura.
 */
export function createFighter({ color = 0x4cc9f0, name = 'player' } = {}) {
  const root = new THREE.Group()
  root.name = name

  const mat = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.45,
    metalness: 0.15,
  })
  const dark = new THREE.MeshStandardMaterial({
    color: 0x1a1f2e,
    roughness: 0.7,
  })
  const skin = new THREE.MeshStandardMaterial({
    color: 0xe8c4a8,
    roughness: 0.55,
  })

  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.4), mat)
  torso.position.y = 1.15
  torso.castShadow = true
  root.add(torso)

  const hips = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.35, 0.38), dark)
  hips.position.y = 0.6
  root.add(hips)

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), skin)
  head.position.y = 1.85
  head.castShadow = true
  root.add(head)

  const shades = new THREE.Mesh(
    new THREE.BoxGeometry(0.48, 0.12, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8, roughness: 0.2 }),
  )
  shades.position.set(0, 1.88, 0.22)
  root.add(shades)

  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.7, 0.18), mat)
  leftArm.position.set(-0.5, 1.15, 0)
  leftArm.name = 'leftArm'
  root.add(leftArm)

  const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.7, 0.18), mat)
  rightArm.position.set(0.5, 1.15, 0)
  rightArm.name = 'rightArm'
  root.add(rightArm)

  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), dark)
  leftLeg.position.set(-0.2, 0.2, 0)
  leftLeg.name = 'leftLeg'
  root.add(leftLeg)

  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), dark)
  rightLeg.position.set(0.2, 0.2, 0)
  rightLeg.name = 'rightLeg'
  root.add(rightLeg)

  const aura = new THREE.Mesh(
    new THREE.SphereGeometry(1.1, 24, 16),
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
    new THREE.RingGeometry(0.55, 0.7, 32),
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

  root.userData = {
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    head,
    torso,
    aura,
    ring,
    baseColor: color,
    pose: 'idle',
    poseT: 0,
    facing: name === 'player' ? 0.25 : -0.25,
  }

  return root
}

export function playPose(fighter, poseId, intensity = 1) {
  const u = fighter.userData
  u.pose = poseId
  u.poseT = 0
  u.intensity = intensity
}

export function updateFighter(fighter, dt, time) {
  const u = fighter.userData
  u.poseT += dt
  const t = u.poseT
  const breath = Math.sin(time * 2) * 0.02
  u.torso.position.y = 1.15 + breath

  // reset soft
  u.leftArm.rotation.set(0, 0, 0.15)
  u.rightArm.rotation.set(0, 0, -0.15)
  u.leftLeg.rotation.set(0, 0, 0)
  u.rightLeg.rotation.set(0, 0, 0)
  u.head.rotation.set(0, 0, 0)
  u.torso.rotation.set(0, 0, 0)
  u.aura.scale.setScalar(1)
  fighter.position.y = 0
  let facing = u.facing ?? 0

  const i = u.intensity ?? 1

  switch (u.pose) {
    case 'aura-walk': {
      const step = Math.sin(t * 6) * 0.35 * i
      u.leftLeg.rotation.x = step
      u.rightLeg.rotation.x = -step
      u.leftArm.rotation.x = -step * 0.6
      u.rightArm.rotation.x = step * 0.6
      u.head.rotation.x = -0.1
      break
    }
    case 'mewing': {
      u.head.rotation.x = -0.15
      u.leftArm.rotation.z = 0.4
      u.rightArm.rotation.z = -0.4
      u.aura.material.opacity = 0.18 + Math.sin(t * 4) * 0.06
      break
    }
    case 'six-seven': {
      const wave = Math.sin(t * 10) * 0.9 * i
      u.leftArm.rotation.z = 1.2 + wave * 0.3
      u.rightArm.rotation.z = -1.2 - wave * 0.3
      u.leftArm.rotation.x = wave
      u.rightArm.rotation.x = -wave
      break
    }
    case 'sigma-stare': {
      u.head.rotation.x = 0.05
      facing += Math.sin(t * 2) * 0.02
      u.leftArm.rotation.z = 0.55
      u.rightArm.rotation.z = -0.55
      u.aura.scale.setScalar(1 + Math.sin(t * 3) * 0.08 * i)
      break
    }
    case 'boat-kid': {
      const bounce = Math.abs(Math.sin(t * 8)) * 0.12 * i
      fighter.position.y = bounce
      u.leftArm.rotation.z = 1.4 + Math.sin(t * 8) * 0.4
      u.rightArm.rotation.z = -0.2
      u.torso.rotation.z = Math.sin(t * 8) * 0.15
      break
    }
    case 'no-look': {
      u.head.rotation.y = fighter.name === 'player' ? -0.8 : 0.8
      u.rightArm.rotation.z = -1.6
      u.rightArm.rotation.x = 0.4
      facing += fighter.name === 'player' ? -0.35 : 0.35
      break
    }
    case 'cringe': {
      u.head.rotation.x = 0.35
      u.leftArm.rotation.z = 1.1
      u.rightArm.rotation.z = -1.1
      fighter.position.y = Math.sin(t * 20) * 0.03
      break
    }
    default: {
      u.leftArm.rotation.z = 0.2 + Math.sin(time * 2) * 0.05
      u.rightArm.rotation.z = -0.2 - Math.sin(time * 2) * 0.05
      u.aura.material.opacity = 0.1 + Math.sin(time * 1.5) * 0.03
    }
  }

  fighter.rotation.y = facing

  u.ring.rotation.z = time * 0.6
}
