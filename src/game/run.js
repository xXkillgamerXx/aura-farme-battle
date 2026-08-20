import { MOVES, RIVALS, UPGRADES } from './moves.js'

export function createRun() {
  const moveBonus = {}
  MOVES.forEach((m) => {
    moveBonus[m.id] = 0
  })

  return {
    floor: 0,
    maxFloors: RIVALS.length,
    fame: 0,
    maxHp: 100,
    startAura: 0,
    moveBonus,
    iconicBonus: 0,
    noSelfCringe: false,
    healAfter: false,
    upgradesTaken: [],
    wonRun: false,
  }
}

export function getRivalForFloor(floor) {
  return RIVALS[Math.min(floor, RIVALS.length - 1)]
}

export function getMovePower(run, move) {
  return move.power + (run.moveBonus[move.id] || 0)
}

export function pickUpgradeChoices(count = 3) {
  const pool = [...UPGRADES]
  const out = []
  while (out.length < count && pool.length) {
    const i = Math.floor(Math.random() * pool.length)
    out.push(pool.splice(i, 1)[0])
  }
  return out
}

export function applyUpgrade(run, upgradeId) {
  const up = UPGRADES.find((u) => u.id === upgradeId)
  if (!up) return run
  const next = {
    ...run,
    moveBonus: { ...run.moveBonus },
    upgradesTaken: [...run.upgradesTaken, up.id],
  }
  up.apply(next)
  return next
}

export function mapNodes(run) {
  return RIVALS.map((r, i) => ({
    index: i,
    name: r.name,
    difficulty: r.difficulty,
    state: i < run.floor ? 'done' : i === run.floor ? 'current' : 'locked',
    boss: i === RIVALS.length - 1,
  }))
}
