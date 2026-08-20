import { MOVES } from './moves.js'
import { getMovePower } from './run.js'

export const WIN_LINE = 'SOY EL MÁS PERRÓN'
export const LOSE_LINE = 'PERDISTE'

/** Niveles de timing */
export function timingTier(accuracy) {
  if (accuracy >= 0.9) return { id: 'perfect', label: 'ICÓNICO', mult: 1.55, color: '#ffd166', crowd: 'cheer' }
  if (accuracy >= 0.72) return { id: 'great', label: 'ÉPICO', mult: 1.2, color: '#80ed99', crowd: 'cheer' }
  if (accuracy >= 0.48) return { id: 'ok', label: 'OK', mult: 0.9, color: '#4cc9f0', crowd: 'meh' }
  if (accuracy >= 0.28) return { id: 'weak', label: 'DÉBIL', mult: 0.5, color: '#c77dff', crowd: 'boo' }
  return { id: 'miss', label: 'CRINGE', mult: 0.15, color: '#ff6b6b', crowd: 'boo' }
}

/** Cuánto llena cada barra según el timing */
function meterGains(tierId, power, run) {
  const p = power / 24
  switch (tierId) {
    case 'perfect': {
      let aura = Math.round(22 * p)
      if (run.iconicBonus) aura = Math.round(aura * (1 + run.iconicBonus))
      return { aura, cringe: 0 }
    }
    case 'great':
      return { aura: Math.round(16 * p), cringe: Math.round(2 * p) }
    case 'ok':
      return { aura: Math.round(10 * p), cringe: Math.round(7 * p) }
    case 'weak':
      return { aura: Math.round(3 * p), cringe: Math.round(14 * p) }
    default: // miss
      return {
        aura: 0,
        cringe: run.noSelfCringe ? Math.round(8 * p) : Math.round(22 * p),
      }
  }
}

export function createBattle(rival, run) {
  return {
    phase: 'pick',
    turn: 1,
    playerAura: Math.min(run.startAura || 0, run.maxHp || 100),
    playerCringe: 0,
    auraMax: run.maxHp || 100,
    cringeMax: 100,
    // rival solo para UI / presión
    rivalAura: 0,
    rivalMax: 100,
    selectedMove: null,
    moveIndex: 0,
    lastResult: null,
    outcome: null,
    message: `${rival.name} en la plaza. Llena AURA. Evita CRINGE.`,
    rival,
    log: [],
  }
}

export function pickMove(state, moveId) {
  const move = MOVES.find((m) => m.id === moveId)
  if (!move || state.phase !== 'pick') return state
  return {
    ...state,
    phase: 'timing',
    selectedMove: move,
    message: `Baila ${move.name} — bien = AURA · mal = CRINGE`,
  }
}

export function resolvePlayerAttack(state, accuracy, run) {
  if (state.phase !== 'timing' || !state.selectedMove) return state

  const move = state.selectedMove
  const tier = timingTier(accuracy)
  const power = getMovePower(run, move)
  let { aura: auraGain, cringe: cringeGain } = meterGains(tier.id, power, run)

  let hits = 1
  if (tier.id === 'perfect' && Math.random() < 0.4) {
    hits = 2
    auraGain = Math.round(auraGain * 1.35)
  }

  const playerAura = clamp(state.playerAura + auraGain, 0, state.auraMax)
  const playerCringe = clamp(state.playerCringe + cringeGain, 0, state.cringeMax)

  const won = playerAura >= state.auraMax
  const lost = playerCringe >= state.cringeMax

  let msg
  if (won) msg = WIN_LINE
  else if (lost) msg = LOSE_LINE
  else if (auraGain > cringeGain) msg = `${move.name}: +${auraGain} AURA (${tier.label})`
  else if (cringeGain > 0) msg = `${move.name}: +${cringeGain} CRINGE (${tier.label})`
  else msg = `${move.name} (${tier.label})`

  return {
    ...state,
    phase: won || lost ? 'matchEnd' : 'playerShow',
    outcome: won ? 'win' : lost ? 'lose' : null,
    playerAura,
    playerCringe,
    timingScore: accuracy,
    lastResult: {
      side: 'player',
      move,
      accuracy,
      tier,
      auraGain,
      cringeGain,
      damage: auraGain,
      selfDamage: cringeGain,
      hits,
      crowd: tier.crowd,
    },
    message: msg,
    log: [
      ...state.log,
      { turn: state.turn, side: 'player', move: move.name, auraGain, cringeGain, tier: tier.id },
    ],
  }
}

/** El rival baila bien → te llena CRINGE (y un poco su “aura” de presión) */
export function resolveRivalAttack(state) {
  if (state.playerAura >= state.auraMax) {
    return { ...state, phase: 'matchEnd', outcome: 'win', message: WIN_LINE }
  }
  if (state.playerCringe >= state.cringeMax) {
    return { ...state, phase: 'matchEnd', outcome: 'lose', message: LOSE_LINE }
  }

  const move = MOVES[Math.floor(Math.random() * MOVES.length)]
  const roll = 0.35 + state.rival.difficulty * 0.5 + Math.random() * 0.2
  const accuracy = clamp(roll, 0.15, 0.98)
  const tier = timingTier(accuracy)

  // Si el rival baila bien, te mete cringe; si falla, poco
  let cringeGain = 0
  let rivalAuraGain = 0
  if (tier.id === 'perfect' || tier.id === 'great') {
    cringeGain = Math.round(14 + state.rival.difficulty * 16)
    rivalAuraGain = Math.round(12 + state.rival.difficulty * 10)
  } else if (tier.id === 'ok') {
    cringeGain = Math.round(8 + state.rival.difficulty * 8)
    rivalAuraGain = 6
  } else if (tier.id === 'weak') {
    cringeGain = Math.round(4 + state.rival.difficulty * 4)
  } else {
    cringeGain = 2
  }

  let hits = 1
  if (tier.id === 'perfect' && Math.random() < 0.3) {
    hits = 2
    cringeGain = Math.round(cringeGain * 1.25)
  }

  const playerCringe = clamp(state.playerCringe + cringeGain, 0, state.cringeMax)
  const rivalAura = clamp(state.rivalAura + rivalAuraGain, 0, state.rivalMax)
  const lost = playerCringe >= state.cringeMax

  return {
    ...state,
    phase: lost ? 'matchEnd' : 'rivalShow',
    outcome: lost ? 'lose' : null,
    playerCringe,
    rivalAura,
    lastResult: {
      side: 'rival',
      move,
      accuracy,
      tier,
      auraGain: 0,
      cringeGain,
      damage: cringeGain,
      selfDamage: 0,
      hits,
      crowd: tier.crowd,
    },
    message: lost
      ? LOSE_LINE
      : `${state.rival.name}: +${cringeGain} CRINGE a ti (${tier.label})`,
    log: [
      ...state.log,
      { turn: state.turn, side: 'rival', move: move.name, cringeGain, tier: tier.id },
    ],
  }
}

export function nextPlayerTurn(state) {
  if (state.playerCringe >= state.cringeMax) {
    return { ...state, phase: 'matchEnd', outcome: 'lose', message: LOSE_LINE }
  }
  if (state.playerAura >= state.auraMax) {
    return { ...state, phase: 'matchEnd', outcome: 'win', message: WIN_LINE }
  }
  return {
    ...state,
    phase: 'pick',
    turn: state.turn + 1,
    selectedMove: null,
    lastResult: null,
    message: `Turno ${state.turn + 1}. Llena AURA · no llenes CRINGE`,
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}
