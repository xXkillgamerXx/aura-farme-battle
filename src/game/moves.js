/** Moves = bailes de farmeo de aura */
export const MOVES = [
  {
    id: 'aura-walk',
    name: 'Aura Walk',
    tag: 'baile',
    power: 22,
    risk: 0.12,
    desc: 'Caminata lenta. El rival se siente pequeño.',
    color: '#4cc9f0',
    bar: { zone: 0.5, width: 0.14, speed: 1.0 },
    camera: 'side',
  },
  {
    id: 'mewing',
    name: 'Mewing',
    tag: 'pose',
    power: 18,
    risk: 0.08,
    desc: 'Mandíbula. Silencio. Vergüenza ajena.',
    color: '#80ed99',
    bar: { zone: 0.55, width: 0.18, speed: 0.85 },
    camera: 'close',
  },
  {
    id: 'six-seven',
    name: 'Six Seven',
    tag: 'baile',
    power: 26,
    risk: 0.22,
    desc: 'Gesto viral. Si fallas = abucheo.',
    color: '#ffd166',
    bar: { zone: 0.38, width: 0.11, speed: 1.35 },
    camera: 'low',
  },
  {
    id: 'sigma-stare',
    name: 'Sigma Stare',
    tag: 'pose',
    power: 20,
    risk: 0.1,
    desc: 'Mirada fija. El crowd susurra hooo.',
    color: '#c77dff',
    bar: { zone: 0.62, width: 0.13, speed: 0.95 },
    camera: 'close',
  },
  {
    id: 'boat-kid',
    name: 'Boat Rhythm',
    tag: 'baile',
    power: 28,
    risk: 0.18,
    desc: 'Ritmo del barco. Baile frío.',
    color: '#f72585',
    bar: { zone: 0.48, width: 0.12, speed: 1.2 },
    camera: 'spin',
  },
  {
    id: 'no-look',
    name: 'No Look Flex',
    tag: 'flex',
    power: 24,
    risk: 0.25,
    desc: 'Ni miras. O eres leyenda… o cringe.',
    color: '#ff9f1c',
    bar: { zone: 0.7, width: 0.1, speed: 1.45 },
    camera: 'side',
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
    desc: 'Timing ICÓNICO hace +25% vergüenza extra',
    apply: (run) => {
      run.iconicBonus += 0.25
    },
  },
  {
    id: 'shield',
    name: 'No Cringe',
    desc: 'Los misses ya no te dan vergüenza a ti',
    apply: (run) => {
      run.noSelfCringe = true
    },
  },
]
