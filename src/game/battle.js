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
  const p = power / 24
  const effect = move?.effect || 'aura'
  let auraGain = 0
  let cringeGain = 0
  let rivalCringe = 0
  let rivalAuraDrain = 0

  switch (tierId) {
    case 'perfect': {
      auraGain = Math.round(24 * p)
      if (run.iconicBonus) auraGain = Math.round(auraGain * (1 + run.iconicBonus))
      rivalCringe = Math.round(10 * p)
      break
    }
    case 'great':
      auraGain = Math.round(17 * p)
      rivalCringe = Math.round(6 * p)
      break
    case 'ok':
      auraGain = Math.round(10 * p)
      cringeGain = Math.round(5 * p)
      rivalCringe = 2
      break
    case 'weak':
      auraGain = Math.round(3 * p)
      cringeGain = Math.round(14 * p)
      break
    default:
      auraGain = 0
      cringeGain = run.noSelfCringe ? Math.round(8 * p) : Math.round(22 * p)
  }

  // Efectos por habilidad
  if (effect === 'safe' && cringeGain > 0) {
    cringeGain = Math.max(1, Math.round(cringeGain * 0.35))
  }
  if (effect === 'shame' && rivalCringe > 0) {
    rivalCringe = Math.round(rivalCringe * 1.75)
  }
  if (effect === 'shame' && tierId === 'perfect') {
    rivalCringe += Math.round(8 * p)
  }
  if (effect === 'drain' && auraGain > 0) {
    const drainMult = 0.45 + (run.drainBonus || 0)
    rivalAuraDrain = Math.round(auraGain * drainMult)
  }
  if (effect === 'gamble') {
    if (tierId === 'perfect' || tierId === 'great') {
      auraGain = Math.round(auraGain * 1.45)
      rivalCringe = Math.round(rivalCringe * 1.2)
    } else if (tierId === 'miss' || tierId === 'weak') {
      cringeGain = Math.round(cringeGain * 1.6)
    }
  }

  return { auraGain, cringeGain, rivalCringe, rivalAuraDrain }
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
    combo: null,
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
  if (state.phase !== 'timing' && state.phase !== 'combo') return state
  if (!state.selectedMove) return state

  const move = state.selectedMove
  const tier = timingTier(accuracy)
  const effect = move.effect || 'aura'

  // Combo: ICÓNICO/ÉPICO siempre · move "combo" también con OK
  const opensCombo =
    tier.id === 'perfect' ||
    tier.id === 'great' ||
    (effect === 'combo' && tier.id === 'ok')

  if (state.phase === 'timing' && opensCombo) {
    const max = tier.id === 'perfect' ? 3 : tier.id === 'great' ? 2 : 2
    return {
      ...state,
      phase: 'combo',
      combo: {
        step: 1,
        max,
        accuracies: [accuracy],
        tiers: [tier.id],
      },
      message: `COMBO 1/${max} — ¡sigue el ritmo!`,
      outcome: null,
    }
  }

  // En combo: acumular o romper
  if (state.phase === 'combo' && state.combo) {
    const accuracies = [...state.combo.accuracies, accuracy]
    const tiers = [...state.combo.tiers, tier.id]
    const step = state.combo.step + 1
    const broke = tier.id === 'miss' || tier.id === 'weak'
    if (!broke && step < state.combo.max) {
      return {
        ...state,
        phase: 'combo',
        combo: { ...state.combo, step, accuracies, tiers },
        message: `COMBO ${step}/${state.combo.max} — ¡sigue!`,
      }
    }
    return finalizePlayerHits(
      { ...state, combo: { ...state.combo, step, accuracies, tiers } },
      run,
      broke,
    )
  }

  // Sin combo (OK / débil / cringe de una)
  return finalizePlayerHits(
    {
      ...state,
      combo: { step: 1, max: 1, accuracies: [accuracy], tiers: [tier.id] },
    },
    run,
    false,
  )
}

function finalizePlayerHits(state, run, broke) {
  const move = state.selectedMove
  const power = getMovePower(run, move)
  const accuracies = state.combo?.accuracies || [0]
  const hits = accuracies.length

  let auraGain = 0
  let cringeGain = 0
  let rivalCringe = 0
  let rivalAuraDrain = 0
  let bestTier = timingTier(accuracies[0] ?? 0)

  accuracies.forEach((acc, i) => {
    const t = timingTier(acc)
    if (t.mult >= bestTier.mult) bestTier = t
    const d = playerMeterDelta(t.id, power, run, move)
    const scale = 1 + (i > 0 ? 0.35 * i : 0)
    auraGain += Math.round(d.auraGain * scale)
    cringeGain += d.cringeGain
    rivalCringe += Math.round(d.rivalCringe * (i === 0 ? 1 : 0.7))
    rivalAuraDrain += Math.round(d.rivalAuraDrain * (i === 0 ? 1 : 0.6))
  })

  // Bonus de combo completo
  if (!broke && hits >= 2) {
    let comboMult = hits >= 3 ? 1.4 : 1.22
    if (run.comboBonus) comboMult += run.comboBonus
    auraGain = Math.round(auraGain * comboMult)
    rivalCringe = Math.round(rivalCringe * 1.15)
    rivalAuraDrain = Math.round(rivalAuraDrain * 1.1)
  }

  const playerAura = clamp(state.playerAura + auraGain, 0, state.auraMax)
  const playerCringe = clamp(state.playerCringe + cringeGain, 0, state.cringeMax)
  const rivalCringeNext = clamp(state.rivalCringe + rivalCringe, 0, state.cringeMax)
  const rivalAura = clamp((state.rivalAura || 0) - rivalAuraDrain, 0, state.auraMax)

  let msg
  if (hits >= 3) msg = `COMBO x${hits}: +${auraGain} AURA`
  else if (hits === 2 && !broke) msg = `COMBO x2: +${auraGain} AURA`
  else if (auraGain > 0) msg = `${move.name}: +${auraGain} AURA (${bestTier.label})`
  else msg = `${move.name}: +${cringeGain} CRINGE (${bestTier.label})`
  if (rivalAuraDrain > 0) msg += ` · −${rivalAuraDrain} aura rival`
  if (broke && hits > 1) msg = `Combo roto · ${msg}`

  let next = {
    ...state,
    playerAura,
    playerCringe,
    rivalCringe: rivalCringeNext,
    rivalAura,
    combo: null,
    timingScore: accuracies.reduce((a, b) => a + b, 0) / hits,
    lastResult: {
      side: 'player',
      move,
      accuracy: accuracies[accuracies.length - 1],
      tier: bestTier,
      auraGain,
      cringeGain,
      rivalCringeGain: rivalCringe,
      auraLoss: 0,
      rivalAuraDrain,
      hits,
      crowd: bestTier.crowd,
      comboBroke: broke,
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
        tier: bestTier.id,
        hits,
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

  const prefers = state.rival.prefers || []
  let move
  if (prefers.length && Math.random() < 0.65) {
    const id = prefers[Math.floor(Math.random() * prefers.length)]
    move = MOVES.find((m) => m.id === id) || MOVES[Math.floor(Math.random() * MOVES.length)]
  } else {
    move = MOVES[Math.floor(Math.random() * MOVES.length)]
  }
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
    combo: null,
    message: `Turno ${state.turn + 1}. Llena AURA a 100 · CRINGE lleno = pierdes`,
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}
