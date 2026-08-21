/**
 * Moves = bailes con efectos distintos.
 *
 * effect:
 *  - aura   → farmea AURA (clásico)
 *  - drain  → te da AURA y baja AURA del rival
 *  - shame  → mete más CRINGE al rival
 *  - safe   → si fallas, menos CRINGE propio
 *  - combo  → abre combo también con OK (no solo ÉPICO/ICÓNICO)
 *  - gamble → mucho poder, pero fallar duele más
 */

export const EFFECT_LABELS = {
  aura: { short: 'AURA', tip: 'Farmea aura' },
  drain: { short: 'ROBO', tip: 'Roba aura al rival' },
  shame: { short: 'VERGÜENZA', tip: 'Sube cringe rival' },
  safe: { short: 'SAFE', tip: 'Fallo menos doloroso' },
  combo: { short: 'COMBO', tip: 'Combo más fácil' },
  gamble: { short: 'RIESGO', tip: 'Alto riesgo / recompensa' },
}

/** Moves = bailes de farmeo de aura */
export const MOVES = [
  {
    id: 'aura-walk',
    name: 'Step Hip Hop',
    tag: 'baile',
    effect: 'aura',
    power: 22,
    risk: 0.12,
    desc: 'Flow estable. Buen farmeo de AURA.',
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
    power: 17,
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
    power: 20,
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
    power: 18,
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
    power: 24,
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
    power: 30,
    risk: 0.32,
    desc: 'All-in. ICÓNICO = jackpot. Fallo = cringe brutal.',
    color: '#ff9f1c',
    bar: { zone: 0.68, width: 0.09, speed: 1.5 },
    camera: 'side',
    anim: 'wave',
    animSpeed: 1.05,
  },
]

export const RIVALS = [
  {
    name: 'El Plaza Kid',
    style: 'meme',
    color: 0xf72585,
    difficulty: 0.4,
    hp: 90,
    prefers: ['boat-kid', 'six-seven'],
  },
  {
    name: 'Sigma del Parque',
    style: 'pose',
    color: 0xc77dff,
    difficulty: 0.52,
    hp: 100,
    prefers: ['sigma-stare', 'mewing'],
  },
  {
    name: 'Streamer Local',
    style: 'flex',
    color: 0xff9f1c,
    difficulty: 0.62,
    hp: 110,
    prefers: ['no-look', 'aura-walk'],
  },
  {
    name: 'TikTok Boss',
    style: 'dance',
    color: 0x4cc9f0,
    difficulty: 0.72,
    hp: 120,
    prefers: ['six-seven', 'boat-kid', 'aura-walk'],
  },
  {
    name: 'Rey del Fame',
    style: 'flex',
    color: 0xffd166,
    difficulty: 0.85,
    hp: 140,
    prefers: ['no-look', 'boat-kid', 'sigma-stare'],
  },
]

export const UPGRADES = [
  {
    id: 'pwr-all',
    name: 'Más Perrón',
    desc: '+3 poder a todos los bailes',
    apply: (run) => {
      Object.keys(run.moveBonus).forEach((id) => {
        run.moveBonus[id] += 3
      })
    },
  },
  {
    id: 'pwr-best',
    name: 'Main Baile',
    desc: '+8 poder a tu baile más fuerte',
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
    desc: 'Empiezas la pelea con +20 AURA',
    apply: (run) => {
      run.startAura = (run.startAura || 0) + 20
      run.healAfter = true
    },
  },
  {
    id: 'crit',
    name: 'Iconic Boost',
    desc: 'Timing ICÓNICO llena más AURA',
    apply: (run) => {
      run.iconicBonus += 0.25
    },
  },
  {
    id: 'shield',
    name: 'No Cringe',
    desc: 'Los misses llenan menos CRINGE',
    apply: (run) => {
      run.noSelfCringe = true
    },
  },
  {
    id: 'drain-up',
    name: 'Ladrón de Aura',
    desc: 'Habilidades ROBO quitan +30% aura rival',
    apply: (run) => {
      run.drainBonus = (run.drainBonus || 0) + 0.3
    },
  },
  {
    id: 'combo-up',
    name: 'Flow State',
    desc: 'Combos dan +20% AURA extra',
    apply: (run) => {
      run.comboBonus = (run.comboBonus || 0) + 0.2
    },
  },
]
