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
 * effect del move modifica el resultado
 */
function playerMeterDelta(tierId, power, run, move) {
  const p = power / 38
  const effect = move?.effect || 'aura'
  let auraGain = 0
  let cringeGain = 0
  let rivalCringe = 0
  let rivalAuraDrain = 0
  let armorGain = 0

  switch (tierId) {
    case 'perfect': {
      auraGain = Math.round(14 * p)
      if (run.iconicBonus) auraGain = Math.round(auraGain * (1 + run.iconicBonus))
      rivalCringe = Math.round(6 * p)
      break
    }
    case 'great':
      auraGain = Math.round(10 * p)
      rivalCringe = Math.round(4 * p)
      break
    case 'ok':
      auraGain = Math.round(6 * p)
      cringeGain = Math.round(3 * p)
      rivalCringe = 1
      break
    case 'weak':
      auraGain = Math.round(2 * p)
      cringeGain = Math.round(8 * p)
      break
    default:
      auraGain = 0
      cringeGain = run.noSelfCringe ? Math.round(4 * p) : Math.round(12 * p)
  }

  // Un solo baile no puede llenar la barra
  auraGain = Math.min(18, auraGain)

  if (effect === 'safe' && cringeGain > 0) {
    cringeGain = Math.max(1, Math.round(cringeGain * 0.35))
  }
  if (effect === 'shame' && rivalCringe > 0) {
    rivalCringe = Math.round(rivalCringe * 1.55)
  }
  if (effect === 'shame' && tierId === 'perfect') {
    rivalCringe += Math.round(8 * p)
  }
  if (effect === 'drain' && auraGain > 0) {
    const drainMult = 0.4 + (run.drainBonus || 0)
    rivalAuraDrain = Math.round(auraGain * drainMult)
  }
  if (effect === 'gamble') {
    if (tierId === 'perfect' || tierId === 'great') {
      auraGain = Math.round(auraGain * 1.35)
      rivalCringe = Math.round(rivalCringe * 1.15)
    } else if (tierId === 'miss' || tierId === 'weak') {
      cringeGain = Math.round(cringeGain * 1.45)
    }
  }
  // Defensa activa
  if (effect === 'guard' && tierId !== 'miss') {
    armorGain = (tierId === 'perfect' ? 0.38 : tierId === 'great' ? 0.28 : 0.18) * (1 + (run.guardBoost || 0))
    auraGain = Math.round(auraGain * 0.8)
  }
  if (effect === 'armor' && tierId !== 'miss') {
    armorGain = (tierId === 'perfect' ? 0.26 : tierId === 'great' ? 0.18 : 0.12) * (1 + (run.guardBoost || 0))
  }

  if (run.cringeResist && cringeGain > 0) {
    cringeGain = Math.max(0, Math.round(cringeGain * (1 - run.cringeResist)))
  }

  return { auraGain, cringeGain, rivalCringe, rivalAuraDrain, armorGain }
}

/**
 * Baile del rival — daño más suave al inicio, sube con difficulty.
 */
function rivalMeterDelta(tierId, difficulty) {
  const d = 0.55 + difficulty * 0.85
  switch (tierId) {
    case 'perfect':
      return { playerAuraLoss: Math.round(14 * d), rivalAuraGain: Math.round(16 * d), rivalCringeGain: 0 }
    case 'great':
      return { playerAuraLoss: Math.round(10 * d), rivalAuraGain: Math.round(12 * d), rivalCringeGain: 0 }
    case 'ok':
      return { playerAuraLoss: Math.round(5 * d), rivalAuraGain: Math.round(7 * d), rivalCringeGain: Math.round(3 * d) }
    case 'weak':
      return { playerAuraLoss: 1, rivalAuraGain: 2, rivalCringeGain: Math.round(10 * d) }
    default:
      return { playerAuraLoss: 0, rivalAuraGain: 0, rivalCringeGain: Math.round(16 * d) }
  }
}

export function buildBattleStats(battle) {
  const log = battle.log || []
  let auraGained = 0
  let cringeTaken = 0
  let rivalDrain = 0
  let bestTier = 'weak'
  const tierRank = { miss: 0, weak: 1, ok: 2, great: 3, perfect: 4 }
  const moveSet = new Set()
  const highlights = []

  for (const entry of log) {
    if (entry.side === 'player') {
      auraGained += entry.auraGain || 0
      cringeTaken += entry.cringeGain || 0
      rivalDrain += entry.rivalAuraDrain || 0
      if (entry.move) moveSet.add(entry.move)
      if ((tierRank[entry.tier] ?? 0) > (tierRank[bestTier] ?? 0)) bestTier = entry.tier
      if (entry.auraGain > 0) {
        highlights.push(`T${entry.turn}: ${entry.move} +${entry.auraGain} AURA`)
      }
    } else if (entry.side === 'rival' && entry.auraLoss > 0) {
      highlights.push(`T${entry.turn}: rival −${entry.auraLoss} AURA`)
    }
  }

  return {
    turns: battle.turn || 1,
    auraGained,
    cringeTaken,
    rivalDrain,
    bestTier,
    movesUsed: moveSet.size,
    highlights: highlights.slice(-5),
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
    pendingOutcome: null,
    pendingMessage: null,
    tempArmor: 0,
    shieldLeft: run.auraShield || 0,
    secondWindUsed: false,
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
    message: `Baila ${move.name} [${move.effect || 'aura'}] — ${move.desc}`,
  }
}

function peekOutcome(state) {
  if (state.playerCringe >= state.cringeMax) {
    return { outcome: 'lose', message: LOSE_LINE }
  }
  if (state.rivalCringe >= state.cringeMax) {
    return { outcome: 'win', message: WIN_LINE }
  }
  if (state.playerAura >= state.auraMax) {
    return { outcome: 'win', message: WIN_LINE }
  }
  if (state.rivalAura >= state.auraMax) {
    return { outcome: 'lose', message: LOSE_LINE }
  }
  return null
}

/** Tras la animación del turno, pasar a pantalla final */
export function resolveMatchEnd(state) {
  if (!state.pendingOutcome) return state
  return {
    ...state,
    phase: 'matchEnd',
    outcome: state.pendingOutcome,
    message: state.pendingMessage || (state.pendingOutcome === 'win' ? WIN_LINE : LOSE_LINE),
    pendingOutcome: null,
    pendingMessage: null,
  }
}

function finishShowPhase(state, showPhase) {
  const end = peekOutcome(state)
  if (!end) return { ...state, phase: showPhase, outcome: null }
  return {
    ...state,
    phase: showPhase,
    outcome: null,
    pendingOutcome: end.outcome,
    pendingMessage: end.message,
  }
}

export function resolvePlayerAttack(state, accuracy, run) {
  if (state.phase !== 'timing') return state
  if (!state.selectedMove) return state

  const move = state.selectedMove
  const tier = timingTier(accuracy)
  const power = getMovePower(run, move)
  const d = playerMeterDelta(tier.id, power, run, move)

  const auraGain = d.auraGain
  const cringeGain = d.cringeGain
  const rivalCringe = d.rivalCringe
  const rivalAuraDrain = d.rivalAuraDrain
  const armorGain = d.armorGain || 0

  const tempArmor = Math.min(0.55, (state.tempArmor || 0) + armorGain)
  const playerAura = clamp(state.playerAura + auraGain, 0, state.auraMax)
  const playerCringe = clamp(state.playerCringe + cringeGain, 0, state.cringeMax)
  const rivalCringeNext = clamp(state.rivalCringe + rivalCringe, 0, state.cringeMax)
  const rivalAura = clamp((state.rivalAura || 0) - rivalAuraDrain, 0, state.auraMax)

  let msg
  if (auraGain > 0) msg = `${move.name}: +${auraGain} AURA (${tier.label})`
  else msg = `${move.name}: +${cringeGain} CRINGE (${tier.label})`
  if (rivalAuraDrain > 0) msg += ` · −${rivalAuraDrain} aura rival`
  if (armorGain > 0) msg += ` · +${Math.round(armorGain * 100)}% armadura`

  let next = {
    ...state,
    playerAura,
    playerCringe,
    rivalCringe: rivalCringeNext,
    rivalAura,
    tempArmor,
    timingScore: accuracy,
    lastResult: {
      side: 'player',
      move,
      accuracy,
      tier,
      auraGain,
      cringeGain,
      rivalCringeGain: rivalCringe,
      auraLoss: 0,
      rivalAuraDrain,
      armorGain,
      hits: 1,
      crowd: tier.crowd,
    },
    message: msg,
    log: [
      ...state.log,
      {
        turn: state.turn,
        side: 'player',
        move: move.name,
        auraGain,
        cringeGain,
        rivalAuraDrain,
        armorGain,
        tier: tier.id,
      },
    ],
  }

  return finishShowPhase(next, 'playerShow')
}

export function resolveRivalAttack(state, run = {}) {
  if (state.pendingOutcome) return state

  const prefers = state.rival.prefers || []
  let move
  if (prefers.length && Math.random() < 0.65) {
    const id = prefers[Math.floor(Math.random() * prefers.length)]
    move = MOVES.find((m) => m.id === id) || MOVES[Math.floor(Math.random() * MOVES.length)]
  } else {
    move = MOVES[Math.floor(Math.random() * MOVES.length)]
  }
  const roll = 0.28 + state.rival.difficulty * 0.48 + Math.random() * 0.22
  const accuracy = clamp(roll, 0.12, 0.95)
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

  // Defensa pasiva + temporal
  let loss = delta.playerAuraLoss
  const armorTotal = Math.min(0.55, (run.armor || 0) + (state.tempArmor || 0))
  if (loss > 0 && armorTotal > 0) {
    loss = Math.round(loss * (1 - armorTotal))
  }

  let shieldLeft = state.shieldLeft || 0
  let absorbed = 0
  if (loss > 0 && shieldLeft > 0) {
    absorbed = Math.min(shieldLeft, loss)
    loss -= absorbed
    shieldLeft -= absorbed
  }

  let thornsCringe = 0
  if (delta.playerAuraLoss > 0 && (run.thorns || 0) > 0) {
    thornsCringe = run.thorns
  }

  let playerAura = clamp(state.playerAura - loss, 0, state.auraMax)
  let secondWindUsed = state.secondWindUsed || false
  let windHeal = 0
  if (run.secondWind && !secondWindUsed && playerAura < 30 && state.playerAura >= 30) {
    windHeal = 15
    playerAura = clamp(playerAura + windHeal, 0, state.auraMax)
    secondWindUsed = true
  }

  const rivalAura = clamp(state.rivalAura + delta.rivalAuraGain, 0, state.auraMax)
  const rivalCringe = clamp(state.rivalCringe + delta.rivalCringeGain + thornsCringe, 0, state.cringeMax)

  let msg
  if (delta.playerAuraLoss > 0) {
    msg = `${state.rival.name} bien: -${loss} AURA tuya`
    if (absorbed > 0) msg += ` (${absorbed} bloqueado)`
    if (armorTotal > 0) msg += ` · armadura`
    if (thornsCringe > 0) msg += ` · +${thornsCringe} cringe rival`
    if (windHeal > 0) msg += ` · Second Wind +${windHeal}`
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
    tempArmor: 0,
    shieldLeft,
    secondWindUsed,
    lastResult: {
      side: 'rival',
      move,
      accuracy,
      tier,
      auraGain: delta.rivalAuraGain,
      cringeGain: 0,
      rivalCringeGain: delta.rivalCringeGain + thornsCringe,
      auraLoss: loss,
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
        auraLoss: loss,
        rivalAuraGain: delta.rivalAuraGain,
        tier: tier.id,
      },
    ],
  }

  return finishShowPhase(next, 'rivalShow')
}

export function nextPlayerTurn(state) {
  if (state.pendingOutcome) return resolveMatchEnd(state)
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
