import { MOVES } from './moves.js'
import { getMovePower } from './run.js'

export const WIN_LINE = 'SOY EL MÁS PERRÓN'
export const LOSE_LINE = 'PERDISTE'

export function timingTier(accuracy) {
  if (accuracy >= 0.9) return { id: 'perfect', label: 'ICÓNICO', mult: 1.55, color: '#ffd166', crowd: 'cheer' }
  if (accuracy >= 0.72) return { id: 'great', label: 'ÉPICO', mult: 1.2, color: '#80ed99', crowd: 'cheer' }
  if (accuracy >= 0.48) return { id: 'ok', label: 'OK', mult: 0.9, color: '#4cc9f0', crowd: 'meh' }
  if (accuracy >= 0.28) return { id: 'weak', label: 'DÉBIL', mult: 0.5, color: '#c77dff', crowd: 'boo' }
  return { id: 'miss', label: 'CRINGE', mult: 0.15, color: '#ff6b6b', crowd: 'boo' }
}

/**
 * Tu baile:
 * - bien → +tu AURA (+ cringe al rival)
 * - mal → +tu CRINGE
 */
function playerMeterDelta(tierId, power, run) {
  const p = power / 24
  switch (tierId) {
    case 'perfect': {
      let aura = Math.round(24 * p)
      if (run.iconicBonus) aura = Math.round(aura * (1 + run.iconicBonus))
      return { auraGain: aura, cringeGain: 0, rivalCringe: Math.round(10 * p), rivalAuraDrain: 0 }
    }
    case 'great':
      return { auraGain: Math.round(17 * p), cringeGain: 0, rivalCringe: Math.round(6 * p), rivalAuraDrain: 0 }
    case 'ok':
      return { auraGain: Math.round(10 * p), cringeGain: Math.round(5 * p), rivalCringe: 2, rivalAuraDrain: 0 }
    case 'weak':
      return { auraGain: Math.round(3 * p), cringeGain: Math.round(14 * p), rivalCringe: 0, rivalAuraDrain: 0 }
    default:
      return {
        auraGain: 0,
        cringeGain: run.noSelfCringe ? Math.round(8 * p) : Math.round(22 * p),
        rivalCringe: 0,
        rivalAuraDrain: 0,
      }
  }
}

/**
 * Baile del rival:
 * - bien → te BAJA AURA (no te sube cringe) + él gana aura
 * - mal → le sube CRINGE a él
 */
function rivalMeterDelta(tierId, difficulty) {
  const d = 0.7 + difficulty
  switch (tierId) {
    case 'perfect':
      return { playerAuraLoss: Math.round(18 * d), rivalAuraGain: Math.round(20 * d), rivalCringeGain: 0 }
    case 'great':
      return { playerAuraLoss: Math.round(12 * d), rivalAuraGain: Math.round(14 * d), rivalCringeGain: 0 }
    case 'ok':
      return { playerAuraLoss: Math.round(6 * d), rivalAuraGain: Math.round(8 * d), rivalCringeGain: Math.round(4 * d) }
    case 'weak':
      return { playerAuraLoss: 2, rivalAuraGain: 3, rivalCringeGain: Math.round(12 * d) }
    default:
      return { playerAuraLoss: 0, rivalAuraGain: 0, rivalCringeGain: Math.round(18 * d) }
  }
}

export function createBattle(rival, run) {
  const auraMax = run.maxHp || 100
  return {
    phase: 'pick',
    turn: 1,
    playerAura: Math.min(run.startAura || 0, auraMax),
    playerCringe: 0,
    rivalAura: 0,
    rivalCringe: 0,
    auraMax,
    cringeMax: 100,
    selectedMove: null,
    moveIndex: 0,
    lastResult: null,
    outcome: null,
    message: `${rival.name}: llena tu AURA a 100. CRINGE a 100 = pierdes.`,
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
    message: `Baila ${move.name} — bien = +AURA · mal = +CRINGE`,
  }
}

function checkEnd(state) {
  if (state.playerCringe >= state.cringeMax) {
    return { ...state, phase: 'matchEnd', outcome: 'lose', message: LOSE_LINE }
  }
  if (state.rivalCringe >= state.cringeMax) {
    // rival se quemó de cringe → ganas
    return { ...state, phase: 'matchEnd', outcome: 'win', message: WIN_LINE }
  }
  if (state.playerAura >= state.auraMax) {
    return { ...state, phase: 'matchEnd', outcome: 'win', message: WIN_LINE }
  }
  if (state.rivalAura >= state.auraMax) {
    return { ...state, phase: 'matchEnd', outcome: 'lose', message: LOSE_LINE }
  }
  return null
}

export function resolvePlayerAttack(state, accuracy, run) {
  if (state.phase !== 'timing' || !state.selectedMove) return state

  const move = state.selectedMove
  const tier = timingTier(accuracy)
  const power = getMovePower(run, move)
  let delta = playerMeterDelta(tier.id, power, run)

  let hits = 1
  if (tier.id === 'perfect' && Math.random() < 0.4) {
    hits = 2
    delta = {
      ...delta,
      auraGain: Math.round(delta.auraGain * 1.35),
      rivalCringe: Math.round(delta.rivalCringe * 1.2),
    }
  }

  const playerAura = clamp(state.playerAura + delta.auraGain, 0, state.auraMax)
  const playerCringe = clamp(state.playerCringe + delta.cringeGain, 0, state.cringeMax)
  const rivalCringe = clamp(state.rivalCringe + delta.rivalCringe, 0, state.cringeMax)

  let next = {
    ...state,
    playerAura,
    playerCringe,
    rivalCringe,
    timingScore: accuracy,
    lastResult: {
      side: 'player',
      move,
      accuracy,
      tier,
      auraGain: delta.auraGain,
      cringeGain: delta.cringeGain,
      rivalCringeGain: delta.rivalCringe,
      auraLoss: 0,
      hits,
      crowd: tier.crowd,
    },
    message:
      delta.auraGain > 0
        ? `${move.name}: +${delta.auraGain} AURA (${tier.label})`
        : `${move.name}: +${delta.cringeGain} CRINGE (${tier.label})`,
    log: [
      ...state.log,
      {
        turn: state.turn,
        side: 'player',
        move: move.name,
        auraGain: delta.auraGain,
        cringeGain: delta.cringeGain,
        tier: tier.id,
      },
    ],
  }

  const ended = checkEnd(next)
  if (ended) return ended

  return { ...next, phase: 'playerShow', outcome: null }
}

export function resolveRivalAttack(state) {
  const early = checkEnd(state)
  if (early) return early

  const move = MOVES[Math.floor(Math.random() * MOVES.length)]
  const roll = 0.35 + state.rival.difficulty * 0.5 + Math.random() * 0.2
  const accuracy = clamp(roll, 0.15, 0.98)
  const tier = timingTier(accuracy)
  let delta = rivalMeterDelta(tier.id, state.rival.difficulty)

  let hits = 1
  if (tier.id === 'perfect' && Math.random() < 0.3) {
    hits = 2
    delta = {
      ...delta,
      playerAuraLoss: Math.round(delta.playerAuraLoss * 1.25),
      rivalAuraGain: Math.round(delta.rivalAuraGain * 1.25),
    }
  }

  // Rival bien → baja TU aura, NO sube tu cringe
  const playerAura = clamp(state.playerAura - delta.playerAuraLoss, 0, state.auraMax)
  const rivalAura = clamp(state.rivalAura + delta.rivalAuraGain, 0, state.auraMax)
  const rivalCringe = clamp(state.rivalCringe + delta.rivalCringeGain, 0, state.cringeMax)

  let msg
  if (delta.playerAuraLoss > 0) {
    msg = `${state.rival.name} bien: -${delta.playerAuraLoss} AURA tuya`
  } else if (delta.rivalCringeGain > 0) {
    msg = `${state.rival.name} falló: +${delta.rivalCringeGain} CRINGE rival`
  } else {
    msg = `${state.rival.name} bailó ${move.name}`
  }

  let next = {
    ...state,
    playerAura,
    rivalAura,
    rivalCringe,
    lastResult: {
      side: 'rival',
      move,
      accuracy,
      tier,
      auraGain: delta.rivalAuraGain,
      cringeGain: 0,
      rivalCringeGain: delta.rivalCringeGain,
      auraLoss: delta.playerAuraLoss,
      hits,
      crowd: tier.crowd,
    },
    message: msg,
    log: [
      ...state.log,
      {
        turn: state.turn,
        side: 'rival',
        move: move.name,
        auraLoss: delta.playerAuraLoss,
        rivalAuraGain: delta.rivalAuraGain,
        tier: tier.id,
      },
    ],
  }

  const ended = checkEnd(next)
  if (ended) return ended

  return { ...next, phase: 'rivalShow', outcome: null }
}

export function nextPlayerTurn(state) {
  const ended = checkEnd(state)
  if (ended) return ended
  return {
    ...state,
    phase: 'pick',
    turn: state.turn + 1,
    selectedMove: null,
    lastResult: null,
    message: `Turno ${state.turn + 1}. Llena AURA a 100 · CRINGE lleno = pierdes`,
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}
