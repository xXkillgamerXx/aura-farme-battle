/** Moves de farmeo de aura */
export const MOVES = [
  {
    id: 'aura-walk',
    name: 'Aura Walk',
    tag: 'walk',
    power: 22,
    risk: 0.12,
    desc: 'Camina lento. No mires atrás.',
    color: '#4cc9f0',
  },
  {
    id: 'mewing',
    name: 'Mewing',
    tag: 'pose',
    power: 18,
    risk: 0.08,
    desc: 'Mandíbula. Mirada fija. Silencio.',
    color: '#80ed99',
  },
  {
    id: 'six-seven',
    name: 'Six Seven',
    tag: 'meme',
    power: 26,
    risk: 0.22,
    desc: 'Gesto viral. Si fallas timing = cringe.',
    color: '#ffd166',
  },
  {
    id: 'sigma-stare',
    name: 'Sigma Stare',
    tag: 'pose',
    power: 20,
    risk: 0.1,
    desc: 'Contacto visual. El rival parpadea primero.',
    color: '#c77dff',
  },
  {
    id: 'boat-kid',
    name: 'Boat Rhythm',
    tag: 'dance',
    power: 28,
    risk: 0.18,
    desc: 'El baile del barco. Ritmo frío.',
    color: '#f72585',
  },
  {
    id: 'no-look',
    name: 'No Look Flex',
    tag: 'flex',
    power: 24,
    risk: 0.25,
    desc: 'Ganas y ni miras. Máximo aura… o cero.',
    color: '#ff9f1c',
  },
]

export const RIVALS = [
  { name: 'El Plaza Kid', style: 'meme', color: 0xf72585, difficulty: 0.4, hp: 90 },
  { name: 'Sigma del Parque', style: 'pose', color: 0xc77dff, difficulty: 0.52, hp: 100 },
  { name: 'Streamer Local', style: 'flex', color: 0xff9f1c, difficulty: 0.62, hp: 110 },
  { name: 'TikTok Boss', style: 'dance', color: 0x4cc9f0, difficulty: 0.72, hp: 120 },
  { name: 'Rey del Fame', style: 'flex', color: 0xffd166, difficulty: 0.85, hp: 140 },
]

export const UPGRADES = [
  {
    id: 'pwr-all',
    name: 'Más Fame',
    desc: '+3 poder a todas las habilidades',
    apply: (run) => {
      Object.keys(run.moveBonus).forEach((id) => {
        run.moveBonus[id] += 3
      })
    },
  },
  {
    id: 'pwr-best',
    name: 'Main Move',
    desc: '+8 poder a tu habilidad más fuerte',
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
    name: 'Aura Tank',
    desc: '+20 HP máximo y curación completa',
    apply: (run) => {
      run.maxHp += 20
      run.healAfter = true
    },
  },
  {
    id: 'crit',
    name: 'Iconic Boost',
    desc: 'Timing ICÓNICO hace +25% daño extra',
    apply: (run) => {
      run.iconicBonus += 0.25
    },
  },
  {
    id: 'shield',
    name: 'No Cringe',
    desc: 'Los misses ya no te hacen daño a ti',
    apply: (run) => {
      run.noSelfCringe = true
    },
  },
]
