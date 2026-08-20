/** Moves de farmeo de aura — prototipo */
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
  { name: 'El Plaza Kid', style: 'meme', color: 0xf72585, difficulty: 0.45 },
  { name: 'Sigma del Parque', style: 'pose', color: 0xc77dff, difficulty: 0.6 },
  { name: 'Streamer Local', style: 'flex', color: 0xff9f1c, difficulty: 0.75 },
]
