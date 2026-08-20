import { MOVES } from './moves.js'
import { getMovePower } from './run.js'

/** Niveles de timing: más icónico = más daño */
export function timingTier(accuracy) {
  if (accuracy >= 0.9) return { id: 'perfect', label: 'ICÓNICO', mult: 1.55, color: '#ffd166' }
  if (accuracy >= 0.72) return { id: 'great', label: 'ÉPICO', mult: 1.2, color: '#80ed99' }
  if (accuracy >= 0.48) return { id: 'ok', label: 'OK', mult: 0.9, color: '#4cc9f0' }
  if (accuracy >= 0.28) return { id: 'weak', label: 'DÉBIL', mult: 0.5, color: '#c77dff' }
  return { id: 'miss', label: 'CRINGE', mult: 0.15, color: '#ff6b6b' }
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
    outcome: null, // 'win' | 'lose' | null
    message: `${rival.name} quiere farmear. Elige habilidad (← →).`,
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
    message: 'SPACE una vez en la zona dorada',
  }
}

export function resolvePlayerAttack(state, accuracy, run) {
  if (state.phase !== 'timing' || !state.selectedMove) return state

  const move = state.selectedMove
  const tier = timingTier(accuracy)
  const base = getMovePower(run, move)
  let mult = tier.mult
  if (tier.id === 'perfect') mult += run.iconicBonus || 0
  let damage = Math.round(base * mult)

  let selfDamage = 0
  if (tier.id === 'miss') {
    damage = Math.max(1, Math.round(base * 0.12))
    if (!run.noSelfCringe) selfDamage = Math.round(base * 0.3)
  }

  // Double hit chance on perfect
  let hits = 1
  if (tier.id === 'perfect' && Math.random() < 0.45) {
    hits = 2
    damage = Math.round(damage * 1.35)
  }

  const rivalAura = clamp(state.rivalAura - damage, 0, state.rivalMax)
  const playerAura = clamp(state.playerAura - selfDamage, 0, state.playerMax)
  const won = rivalAura <= 0
  const lost = playerAura <= 0

  return {
    ...state,
    phase: won ? 'matchEnd' : lost ? 'matchEnd' : 'playerShow',
    outcome: won ? 'win' : lost ? 'lose' : null,
    playerAura,
    rivalAura,
    timingScore: accuracy,
    lastResult: {
      side: 'player',
      move,
      accuracy,
      tier,
      damage,
      selfDamage,
      hits,
    },
    message: won
      ? '¡SOY MÁS FAME!'
      : lost
        ? 'PERDISTE'
        : `${move.name}${hits > 1 ? ' x2' : ''} → ${damage} (${tier.label})`,
    log: [...state.log, { turn: state.turn, side: 'player', move: move.name, damage, tier: tier.id }],
  }
}

export function resolveRivalAttack(state) {
  if (state.rivalAura <= 0) {
    return { ...state, phase: 'matchEnd', outcome: 'win', message: '¡SOY MÁS FAME!' }
  }
  if (state.playerAura <= 0) {
    return { ...state, phase: 'matchEnd', outcome: 'lose', message: 'PERDISTE' }
  }

  const move = MOVES[Math.floor(Math.random() * MOVES.length)]
  const roll = 0.35 + state.rival.difficulty * 0.5 + Math.random() * 0.2
  const accuracy = clamp(roll, 0.15, 0.98)
  const tier = timingTier(accuracy)
  let damage = Math.round(move.power * tier.mult * (0.85 + state.rival.difficulty * 0.3))
  let hits = 1
  if (tier.id === 'perfect' && Math.random() < 0.35) {
    hits = 2
    damage = Math.round(damage * 1.25)
  }
  if (tier.id === 'miss') damage = Math.max(1, Math.round(move.power * 0.15))

  const playerAura = clamp(state.playerAura - damage, 0, state.playerMax)
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
      damage,
      selfDamage: 0,
      hits,
    },
    message: lost
      ? 'PERDISTE'
      : `${state.rival.name}: ${move.name}${hits > 1 ? ' x2' : ''} → ${damage}`,
    log: [...state.log, { turn: state.turn, side: 'rival', move: move.name, damage, tier: tier.id }],
  }
}

export function nextPlayerTurn(state) {
  if (state.playerAura <= 0) {
    return { ...state, phase: 'matchEnd', outcome: 'lose', message: 'PERDISTE' }
  }
  if (state.rivalAura <= 0) {
    return { ...state, phase: 'matchEnd', outcome: 'win', message: '¡SOY MÁS FAME!' }
  }
  return {
    ...state,
    phase: 'pick',
    turn: state.turn + 1,
    selectedMove: null,
    lastResult: null,
    message: `Turno ${state.turn + 1}. ← → elige · SPACE usa`,
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}
