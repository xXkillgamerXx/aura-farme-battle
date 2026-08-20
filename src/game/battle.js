import { MOVES, RIVALS } from './moves.js'

/**
 * Estado de batalla estilo B-boy: rounds + crowd + timing.
 */
export function startBattle(state) {
  return {
    ...state,
    phase: 'pick',
    message: 'Muévete con flechas · Q/E elige move · SPACE ataca',
  }
}

export function createBattle(rivalIndex = 0) {
  const rival = RIVALS[rivalIndex % RIVALS.length]
  return {
    phase: 'menu', // menu | pick | timing | resolve | matchEnd
    round: 1,
    maxRounds: 3,
    playerWins: 0,
    rivalWins: 0,
    playerAura: 50,
    rivalAura: 50,
    crowd: 50,
    lastResult: null,
    selectedMove: null,
    moveIndex: 0,
    timingScore: 0,
    message: `${rival.name} te mira. No parpadees.`,
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
    message: `SPACE otra vez — clava ${move.name}`,
  }
}

export function resolveTiming(state, accuracy, distance = 3) {
  // accuracy 0..1 — 1 = perfecto centro
  // distance closer = stronger aura attack
  if (state.phase !== 'timing' || !state.selectedMove) return state

  const move = state.selectedMove
  const rangeBonus = distance < 1.6 ? 1.35 : distance < 2.4 ? 1.15 : distance < 3.2 ? 1 : 0.72
  const timingMult = accuracy > 0.85 ? 1.35 : accuracy > 0.6 ? 1.1 : accuracy > 0.35 ? 0.85 : 0.45
  const cringe = accuracy < 0.3 || Math.random() < move.risk * (1.2 - accuracy)

  const playerBase = move.power * timingMult * rangeBonus
  const rivalMove = MOVES[Math.floor(Math.random() * MOVES.length)]
  const rivalBase =
    rivalMove.power *
    (0.75 + state.rival.difficulty * 0.45) *
    (0.85 + Math.random() * 0.3)

  let playerGain = Math.round(playerBase)
  let rivalGain = Math.round(rivalBase)
  let crowdDelta = 0
  let verdict = 'neutral'

  if (cringe) {
    playerGain = -Math.round(move.power * 0.6)
    crowdDelta = -18
    verdict = 'cringe'
  } else if (playerGain > rivalGain + 4) {
    crowdDelta = 14 + Math.round(accuracy * 10)
    verdict = 'win'
  } else if (rivalGain > playerGain + 4) {
    crowdDelta = -10
    verdict = 'lose'
  } else {
    crowdDelta = 2
    verdict = 'tie'
  }

  const playerAura = clamp(state.playerAura + playerGain, 0, 100)
  const rivalAura = clamp(state.rivalAura + rivalGain, 0, 100)
  const crowd = clamp(state.crowd + crowdDelta, 0, 100)

  const rangeText =
    rangeBonus >= 1.3 ? ' (cerca = max aura)' : rangeBonus < 0.8 ? ' (muy lejos)' : ''

  const messages = {
    cringe: `Cringe total. ${move.name} te restó aura.`,
    win: `El público enloquece. +${playerGain} aura${rangeText}`,
    lose: `${state.rival.name} te robó la escena.`,
    tie: 'Empate de presencia. El crowd no decide.',
  }

  return {
    ...state,
    phase: 'resolve',
    timingScore: accuracy,
    playerAura,
    rivalAura,
    crowd,
    lastResult: {
      verdict,
      move,
      rivalMove,
      playerGain,
      rivalGain,
      crowdDelta,
      accuracy,
      distance,
      rangeBonus,
    },
    message: messages[verdict],
    log: [
      ...state.log,
      {
        round: state.round,
        move: move.name,
        verdict,
        playerGain,
        rivalGain,
      },
    ],
  }
}

export function endRound(state) {
  if (state.phase !== 'resolve') return state

  const playerEdge = state.playerAura + state.crowd * 0.25
  const rivalEdge = state.rivalAura + (100 - state.crowd) * 0.25
  const playerTookRound = playerEdge >= rivalEdge

  let playerWins = state.playerWins + (playerTookRound ? 1 : 0)
  let rivalWins = state.rivalWins + (playerTookRound ? 0 : 1)
  const round = state.round + 1

  const matchOver =
    playerWins >= 2 || rivalWins >= 2 || round > state.maxRounds

  if (matchOver) {
    const won = playerWins > rivalWins
    return {
      ...state,
      phase: 'matchEnd',
      playerWins,
      rivalWins,
      message: won
        ? 'Ganaste la batalla. Eres el rey del farmeo.'
        : 'Perdiste aura. El plaza te recuerda… por ahora.',
    }
  }

  return {
    ...state,
    phase: 'pick',
    round,
    playerWins,
    rivalWins,
    playerAura: 50,
    rivalAura: 50,
    crowd: 50,
    selectedMove: null,
    lastResult: null,
    message: `Round ${round}. Flechas + SPACE para atacar.`,
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}
