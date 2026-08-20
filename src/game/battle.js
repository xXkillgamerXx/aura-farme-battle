import { MOVES, RIVALS } from './moves.js'

/** Niveles de timing: más icónico = más daño */
export function timingTier(accuracy) {
  if (accuracy >= 0.9) return { id: 'perfect', label: 'ICÓNICO', mult: 1.55, color: '#ffd166' }
  if (accuracy >= 0.72) return { id: 'great', label: 'ÉPICO', mult: 1.2, color: '#80ed99' }
  if (accuracy >= 0.48) return { id: 'ok', label: 'OK', mult: 0.9, color: '#4cc9f0' }
  if (accuracy >= 0.28) return { id: 'weak', label: 'DÉBIL', mult: 0.5, color: '#c77dff' }
  return { id: 'miss', label: 'CRINGE', mult: 0.15, color: '#ff6b6b' }
}

export function createBattle(rivalIndex = 0) {
  const rival = RIVALS[rivalIndex % RIVALS.length]
  return {
    phase: 'menu', // menu | pick | timing | playerShow | rivalShow | turnEnd | matchEnd
    turn: 1,
    playerAura: 100,
    rivalAura: 100,
    selectedMove: null,
    moveIndex: 0,
    lastResult: null,
    message: `${rival.name} quiere farmear aura. Elige habilidad.`,
    rival,
    log: [],
  }
}

export function startBattle(state) {
  return {
    ...state,
    phase: 'pick',
    turn: 1,
    playerAura: 100,
    rivalAura: 100,
    selectedMove: null,
    lastResult: null,
    message: 'Tu turno. Elige una habilidad y pulsa SPACE.',
  }
}

export function pickMove(state, moveId) {
  const move = MOVES.find((m) => m.id === moveId)
  if (!move || state.phase !== 'pick') return state
  return {
    ...state,
    phase: 'timing',
    selectedMove: move,
    message: `SPACE en la zona dorada — mejor timing = más daño`,
  }
}

/** Turno del jugador: timing decide el daño al rival */
export function resolvePlayerAttack(state, accuracy) {
  if (state.phase !== 'timing' || !state.selectedMove) return state

  const move = state.selectedMove
  const tier = timingTier(accuracy)
  let damage = Math.round(move.power * tier.mult)

  // Cringe: poco daño o te pegas a ti
  let selfDamage = 0
  if (tier.id === 'miss') {
    damage = Math.max(1, Math.round(move.power * 0.12))
    selfDamage = Math.round(move.power * 0.35)
  }

  const rivalAura = clamp(state.rivalAura - damage, 0, 100)
  const playerAura = clamp(state.playerAura - selfDamage, 0, 100)

  const result = {
    side: 'player',
    move,
    accuracy,
    tier,
    damage,
    selfDamage,
    rivalAuraAfter: rivalAura,
    playerAuraAfter: playerAura,
  }

  const won = rivalAura <= 0
  const lost = playerAura <= 0

  return {
    ...state,
    phase: won || lost ? 'matchEnd' : 'playerShow',
    playerAura,
    rivalAura,
    timingScore: accuracy,
    lastResult: result,
    message: won
      ? `¡Victoria! ${move.name} fue ${tier.label}.`
      : lost
        ? 'Te quedaste sin aura…'
        : `${move.name} → ${damage} daño (${tier.label})`,
    log: [...state.log, { turn: state.turn, side: 'player', move: move.name, damage, tier: tier.id }],
  }
}

/** Turno del rival automático */
export function resolveRivalAttack(state) {
  if (state.rivalAura <= 0 || state.playerAura <= 0) {
    return { ...state, phase: 'matchEnd' }
  }

  const move = MOVES[Math.floor(Math.random() * MOVES.length)]
  const roll = 0.35 + state.rival.difficulty * 0.5 + Math.random() * 0.2
  const accuracy = clamp(roll, 0.15, 0.98)
  const tier = timingTier(accuracy)
  let damage = Math.round(move.power * tier.mult * (0.85 + state.rival.difficulty * 0.25))

  if (tier.id === 'miss') {
    damage = Math.max(1, Math.round(move.power * 0.15))
  }

  const playerAura = clamp(state.playerAura - damage, 0, 100)
  const lost = playerAura <= 0

  const result = {
    side: 'rival',
    move,
    accuracy,
    tier,
    damage,
    selfDamage: 0,
    rivalAuraAfter: state.rivalAura,
    playerAuraAfter: playerAura,
  }

  return {
    ...state,
    phase: lost ? 'matchEnd' : 'rivalShow',
    playerAura,
    lastResult: result,
    message: lost
      ? `${state.rival.name} te vació el aura.`
      : `${state.rival.name} usó ${move.name} → ${damage} daño (${tier.label})`,
    log: [...state.log, { turn: state.turn, side: 'rival', move: move.name, damage, tier: tier.id }],
  }
}

export function nextPlayerTurn(state) {
  if (state.playerAura <= 0 || state.rivalAura <= 0) {
    const won = state.rivalAura <= 0 && state.playerAura > 0
    return {
      ...state,
      phase: 'matchEnd',
      message: won
        ? 'Ganaste la batalla de aura.'
        : 'Perdiste. El rival farmeó más.',
    }
  }

  return {
    ...state,
    phase: 'pick',
    turn: state.turn + 1,
    selectedMove: null,
    lastResult: null,
    message: `Turno ${state.turn + 1}. Elige habilidad.`,
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}
