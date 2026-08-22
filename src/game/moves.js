/**
 * Moves = bailes con efectos distintos.
 *
 * effect:
 *  - aura   → farmea AURA (clásico)
 *  - drain  → te da AURA y baja AURA del rival
 *  - shame  → mete más CRINGE al rival
 *  - safe   → si fallas, menos CRINGE propio
 *  - combo  → abre combo también con OK
 *  - gamble → mucho poder, pero fallar duele más
 *  - guard  → gana armadura temporal (defensa)
 *  - armor  → reduce daño recibido este turno + farmea
 */

export const EFFECT_LABELS = {
  aura: { short: 'AURA', tip: 'Farmea aura' },
  drain: { short: 'ROBO', tip: 'Roba aura al rival' },
  shame: { short: 'VERGÜENZA', tip: 'Sube cringe rival' },
  safe: { short: 'SAFE', tip: 'Fallo menos doloroso' },
  combo: { short: 'COMBO', tip: 'Combo más fácil' },
  gamble: { short: 'RIESGO', tip: 'Alto riesgo / recompensa' },
  guard: { short: 'BLOQUEO', tip: 'Gana armadura' },
  armor: { short: 'TANQUE', tip: 'Defensa + aura' },
}

export const MAX_MOVE_SLOTS = 6
export const START_MOVE_IDS = ['aura-walk', 'mewing', 'aura-guard']

/** Moves = bailes de farmeo de aura */
export const MOVES = [
  {
    id: 'aura-walk',
    name: 'Step Hip Hop',
    tag: 'baile',
    effect: 'aura',
    power: 32,
    risk: 0.12,
    desc: 'Flow estable. Farmeo fuerte de AURA.',
    color: '#4cc9f0',
    bar: { zone: 0.5, width: 0.15, speed: 1.0 },
    camera: 'side',
    anim: 'step',
  },
  {
    id: 'mewing',
    name: 'Mewing',
    tag: 'pose',
    effect: 'safe',
    power: 26,
    risk: 0.06,
    desc: 'Pose fría. Si fallas, casi no te da cringe.',
    color: '#80ed99',
    bar: { zone: 0.55, width: 0.2, speed: 0.8 },
    camera: 'close',
    anim: 'wave',
    animSpeed: 0.5,
  },
  {
    id: 'six-seven',
    name: 'Wave Hip Hop',
    tag: 'baile',
    effect: 'combo',
    power: 30,
    risk: 0.16,
    desc: 'Ritmo viral. Abre combo desde un OK.',
    color: '#ffd166',
    bar: { zone: 0.42, width: 0.13, speed: 1.2 },
    camera: 'low',
    anim: 'wave',
    animSpeed: 1.25,
  },
  {
    id: 'sigma-stare',
    name: 'Sigma Stare',
    tag: 'pose',
    effect: 'shame',
    power: 28,
    risk: 0.1,
    desc: 'Mirada asesina. Empuja CRINGE al rival.',
    color: '#c77dff',
    bar: { zone: 0.6, width: 0.14, speed: 0.9 },
    camera: 'close',
    anim: 'wave',
    animSpeed: 0.4,
  },
  {
    id: 'boat-kid',
    name: 'Chicken Dance',
    tag: 'baile',
    effect: 'drain',
    power: 34,
    risk: 0.18,
    desc: 'Clásico tóxico: te sube AURA y le baja al rival.',
    color: '#f72585',
    bar: { zone: 0.48, width: 0.12, speed: 1.15 },
    camera: 'spin',
    anim: 'chicken',
    animSpeed: 1.1,
  },
  {
    id: 'no-look',
    name: 'No Look Flex',
    tag: 'flex',
    effect: 'gamble',
    power: 38,
    risk: 0.32,
    desc: 'All-in. ICÓNICO = jackpot. Fallo = cringe brutal.',
    color: '#ff9f1c',
    bar: { zone: 0.68, width: 0.09, speed: 1.5 },
    camera: 'side',
    anim: 'wave',
    animSpeed: 1.05,
  },
  {
    id: 'aura-guard',
    name: 'Aura Guard',
    tag: 'defensa',
    effect: 'guard',
    power: 22,
    risk: 0.08,
    desc: 'Bloqueo de aura. Ganas armadura para el siguiente hit.',
    color: '#56cfe1',
    bar: { zone: 0.52, width: 0.18, speed: 0.85 },
    camera: 'close',
    anim: 'wave',
    animSpeed: 0.55,
  },
  {
    id: 'tank-pose',
    name: 'Tank Pose',
    tag: 'defensa',
    effect: 'armor',
    power: 24,
    risk: 0.1,
    desc: 'Pose tanque. Farmea y reduces el daño del rival.',
    color: '#48bfe3',
    bar: { zone: 0.58, width: 0.16, speed: 0.9 },
    camera: 'side',
    anim: 'wave',
    animSpeed: 0.45,
  },
]

export const RIVALS = [
  {
    name: 'El Plaza Kid',
    style: 'meme',
    color: 0xf72585,
    difficulty: 0.28,
    hp: 90,
    prefers: ['boat-kid', 'six-seven'],
    zone: 'Plaza',
    theme: '#4cc9f0',
  },
  {
    name: 'Sigma del Parque',
    style: 'pose',
    color: 0xc77dff,
    difficulty: 0.4,
    hp: 100,
    prefers: ['sigma-stare', 'mewing'],
    zone: 'Parque',
    theme: '#80ed99',
  },
  {
    name: 'Streamer Local',
    style: 'flex',
    color: 0xff9f1c,
    difficulty: 0.52,
    hp: 110,
    prefers: ['no-look', 'aura-walk'],
    zone: 'Studio',
    theme: '#ff9f1c',
  },
  {
    name: 'TikTok Boss',
    style: 'dance',
    color: 0x4cc9f0,
    difficulty: 0.64,
    hp: 120,
    prefers: ['six-seven', 'boat-kid', 'aura-walk'],
    zone: 'Trend Tower',
    theme: '#c77dff',
  },
  {
    name: 'Rey del Fame',
    style: 'flex',
    color: 0xffd166,
    difficulty: 0.78,
    hp: 140,
    prefers: ['no-look', 'boat-kid', 'sigma-stare'],
    zone: 'Fame Peak',
    theme: '#ffd166',
  },
]

export const UPGRADES = [
  {
    id: 'pwr-all',
    name: 'Más Perrón',
    desc: '+4 poder a todos los bailes',
    kind: 'offense',
    apply: (run) => {
      Object.keys(run.moveBonus).forEach((id) => {
        run.moveBonus[id] += 4
      })
    },
  },
  {
    id: 'pwr-best',
    name: 'Main Baile',
    desc: '+8 poder a tu baile más fuerte',
    kind: 'offense',
    apply: (run) => {
      let best = MOVES[0].id
      let bestP = 0
      MOVES.forEach((m) => {
        const p = m.power + (run.moveBonus[m.id] || 0)
        if (p > bestP) {
          bestP = p
          best = m.id
        }
      })
      run.moveBonus[best] = (run.moveBonus[best] || 0) + 8
    },
  },
  {
    id: 'hp',
    name: 'Aura Headstart',
    desc: 'Empiezas la pelea con +12 AURA',
    kind: 'offense',
    apply: (run) => {
      run.startAura = (run.startAura || 0) + 12
      run.healAfter = true
    },
  },
  {
    id: 'crit',
    name: 'Iconic Boost',
    desc: 'Timing ICÓNICO llena +20% AURA',
    kind: 'offense',
    apply: (run) => {
      run.iconicBonus += 0.2
    },
  },
  {
    id: 'shield',
    name: 'No Cringe',
    desc: 'Los misses llenan mucho menos CRINGE',
    kind: 'defense',
    apply: (run) => {
      run.noSelfCringe = true
    },
  },
  {
    id: 'drain-up',
    name: 'Ladrón de Aura',
    desc: 'Habilidades ROBO quitan +25% aura rival',
    kind: 'offense',
    apply: (run) => {
      run.drainBonus = (run.drainBonus || 0) + 0.25
    },
  },
  {
    id: 'combo-up',
    name: 'Flow State',
    desc: 'Combos dan +18% AURA extra',
    kind: 'offense',
    apply: (run) => {
      run.comboBonus = (run.comboBonus || 0) + 0.18
    },
  },
  // —— Defensa pasiva ——
  {
    id: 'armor-passive',
    name: 'Aura Armor',
    desc: 'Pasiva: −15% daño de aura del rival',
    kind: 'defense',
    apply: (run) => {
      run.armor = Math.min(0.45, (run.armor || 0) + 0.15)
    },
  },
  {
    id: 'thorns',
    name: 'Cringe Thorns',
    desc: 'Pasiva: si te golpean bien, el rival gana CRINGE',
    kind: 'defense',
    apply: (run) => {
      run.thorns = (run.thorns || 0) + 6
    },
  },
  {
    id: 'aura-shield',
    name: 'Bubble Shield',
    desc: 'Pasiva: escudo que absorbe 12 de daño de aura',
    kind: 'defense',
    apply: (run) => {
      run.auraShield = (run.auraShield || 0) + 12
    },
  },
  {
    id: 'cringe-resist',
    name: 'Thick Skin',
    desc: 'Pasiva: −25% CRINGE que te ganas tú',
    kind: 'defense',
    apply: (run) => {
      run.cringeResist = Math.min(0.55, (run.cringeResist || 0) + 0.25)
    },
  },
  {
    id: 'guard-master',
    name: 'Guard Master',
    desc: 'Pasiva: BLOQUEO / TANQUE dan +35% armadura',
    kind: 'defense',
    apply: (run) => {
      run.guardBoost = (run.guardBoost || 0) + 0.35
    },
  },
  {
    id: 'second-wind',
    name: 'Second Wind',
    desc: 'Pasiva: la 1ª vez que bajes de 30 AURA, recuperas 15',
    kind: 'defense',
    apply: (run) => {
      run.secondWind = true
    },
  },
]
