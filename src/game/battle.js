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

export function createBattle(rival, run) {
  return {
    phase: 'pick',
    turn: 1,
    playerAura: run.maxHp,
    rivalAura: rival.hp ?? 100,
    rivalMax: rival.hp ?? 100,
    playerMax: run.maxHp,
    selectedMove: null,
    moveIndex: 0,
    lastResult: null,
    outcome: null,
    message: `${rival.name} en la plaza. Elige baile (← →).`,
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
    message: `Baila ${move.name} — SPACE en tu ritmo`,
  }
}

export function resolvePlayerAttack(state, accuracy, run) {
  if (state.phase !== 'timing' || !state.selectedMove) return state

  const move = state.selectedMove
  const tier = timingTier(accuracy)
  const base = getMovePower(run, move)
  let mult = tier.mult
  if (tier.id === 'perfect') mult += run.iconicBonus || 0
  let shame = Math.round(base * mult) // vergüenza al rival

  let selfShame = 0
  if (tier.id === 'miss') {
    shame = Math.max(1, Math.round(base * 0.12))
    if (!run.noSelfCringe) selfShame = Math.round(base * 0.3)
  }

  let hits = 1
  if (tier.id === 'perfect' && Math.random() < 0.45) {
    hits = 2
    shame = Math.round(shame * 1.35)
  }

  const rivalAura = clamp(state.rivalAura - shame, 0, state.rivalMax)
  const playerAura = clamp(state.playerAura - selfShame, 0, state.playerMax)
  const won = rivalAura <= 0
  const lost = playerAura <= 0

  return {
    ...state,
    phase: won || lost ? 'matchEnd' : 'playerShow',
    outcome: won ? 'win' : lost ? 'lose' : null,
    playerAura,
    rivalAura,
    timingScore: accuracy,
    lastResult: {
      side: 'player',
      move,
      accuracy,
      tier,
      damage: shame,
      selfDamage: selfShame,
      hits,
      crowd: tier.crowd,
    },
    message: won
      ? WIN_LINE
      : lost
        ? LOSE_LINE
        : `${move.name} → -${shame} menos aura (${tier.label})`,
    log: [...state.log, { turn: state.turn, side: 'player', move: move.name, damage: shame, tier: tier.id }],
  }
}

export function resolveRivalAttack(state) {
  if (state.rivalAura <= 0) {
    return { ...state, phase: 'matchEnd', outcome: 'win', message: WIN_LINE }
  }
  if (state.playerAura <= 0) {
    return { ...state, phase: 'matchEnd', outcome: 'lose', message: LOSE_LINE }
  }

  const move = MOVES[Math.floor(Math.random() * MOVES.length)]
  const roll = 0.35 + state.rival.difficulty * 0.5 + Math.random() * 0.2
  const accuracy = clamp(roll, 0.15, 0.98)
  const tier = timingTier(accuracy)
  let shame = Math.round(move.power * tier.mult * (0.85 + state.rival.difficulty * 0.3))
  let hits = 1
  if (tier.id === 'perfect' && Math.random() < 0.35) {
    hits = 2
    shame = Math.round(shame * 1.25)
  }
  if (tier.id === 'miss') shame = Math.max(1, Math.round(move.power * 0.15))

  const playerAura = clamp(state.playerAura - shame, 0, state.playerMax)
  const lost = playerAura <= 0

  return {
    ...state,
    phase: lost ? 'matchEnd' : 'rivalShow',
    outcome: lost ? 'lose' : null,
    playerAura,
    lastResult: {
      side: 'rival',
      move,
      accuracy,
      tier,
      damage: shame,
      selfDamage: 0,
      hits,
      crowd: tier.crowd,
    },
    message: lost
      ? LOSE_LINE
      : `${state.rival.name} bailó ${move.name} → -${shame} menos aura`,
    log: [...state.log, { turn: state.turn, side: 'rival', move: move.name, damage: shame, tier: tier.id }],
  }
}

export function nextPlayerTurn(state) {
  if (state.playerAura <= 0) {
    return { ...state, phase: 'matchEnd', outcome: 'lose', message: LOSE_LINE }
  }
  if (state.rivalAura <= 0) {
    return { ...state, phase: 'matchEnd', outcome: 'win', message: WIN_LINE }
  }
  return {
    ...state,
    phase: 'pick',
    turn: state.turn + 1,
    selectedMove: null,
    lastResult: null,
    message: `Turno ${state.turn + 1}. ← → baile · SPACE ritmo`,
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}
