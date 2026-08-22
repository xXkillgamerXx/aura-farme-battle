import { MOVES, RIVALS, UPGRADES, MAX_MOVE_SLOTS, START_MOVE_IDS } from './moves.js'

const NODE_META = {
  fight: { label: 'Pelea', icon: '⚔️', color: '#4cc9f0' },
  elite: { label: 'Elite', icon: '💀', color: '#f72585' },
  boss: { label: 'BOSS', icon: '👑', color: '#ffd166' },
  shop: { label: 'Tienda', icon: '🛒', color: '#80ed99' },
  reward: { label: 'Cofre', icon: '🎁', color: '#c77dff' },
  rest: { label: 'Lobby', icon: '🏠', color: '#56cfe1' },
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Mapa Roblox: columnas (layers) con varios pads y caminos.
 * layer 0 = entrada · última = boss
 */
export function generateRunMap() {
  const layerPlans = [
    ['fight'],
    shuffle(['fight', 'shop', 'reward']).slice(0, 2),
    shuffle(['fight', 'elite', 'rest', 'shop']).slice(0, 3),
    shuffle(['reward', 'fight', 'shop', 'rest']).slice(0, 3),
    shuffle(['elite', 'fight', 'reward']).slice(0, 2),
    ['boss'],
  ]

  const nodes = {}
  const layers = []

  layerPlans.forEach((types, layer) => {
    const ids = []
    types.forEach((type, row) => {
      const id = `${layer}-${row}`
      const rivalIdx = Math.min(layer, RIVALS.length - 1)
      const rival =
        type === 'boss'
          ? RIVALS[RIVALS.length - 1]
          : type === 'elite'
            ? RIVALS[Math.min(rivalIdx + 1, RIVALS.length - 1)]
            : type === 'fight'
              ? RIVALS[rivalIdx]
              : null

      const x = 10 + (layer / Math.max(1, layerPlans.length - 1)) * 80
      const spread = types.length === 1 ? 50 : 22 + row * (56 / Math.max(1, types.length - 1))
      const y = types.length === 1 ? 50 : spread

      nodes[id] = {
        id,
        layer,
        row,
        type,
        next: [],
        rivalName: rival?.name || null,
        rivalIndex: rival ? RIVALS.indexOf(rival) : -1,
        zone: rival?.zone || NODE_META[type].label,
        theme: rival?.theme || NODE_META[type].color,
        x,
        y,
        ...NODE_META[type],
      }
      ids.push(id)
    })
    layers.push(ids)
  })

  // Conectar cada pad con 1–2 del siguiente layer (caminos múltiples)
  for (let L = 0; L < layers.length - 1; L++) {
    const cur = layers[L]
    const nxt = layers[L + 1]
    cur.forEach((id, i) => {
      const targets = new Set()
      targets.add(nxt[Math.min(i, nxt.length - 1)])
      targets.add(nxt[Math.floor((i / Math.max(1, cur.length - 1)) * (nxt.length - 1))])
      if (nxt.length > 1 && Math.random() > 0.35) {
        targets.add(pick(nxt))
      }
      nodes[id].next = [...targets]
    })
    // todo nodo del siguiente layer debe ser alcanzable
    nxt.forEach((nid) => {
      const hasIn = cur.some((cid) => nodes[cid].next.includes(nid))
      if (!hasIn) nodes[cur[Math.floor(Math.random() * cur.length)]].next.push(nid)
    })
  }

  const startId = layers[0][0]
  return {
    nodes,
    layers,
    startId,
    currentId: startId,
    visited: [],
    available: [startId],
  }
}

export function createRun() {
  const moveBonus = {}
  MOVES.forEach((m) => {
    moveBonus[m.id] = 0
  })
  const map = generateRunMap()

  return {
    floor: 0,
    maxFloors: map.layers.length,
    fame: 0,
    coins: 50,
    maxHp: 100,
    startAura: 8,
    ownedMoves: [...START_MOVE_IDS],
    moveBonus,
    iconicBonus: 0,
    noSelfCringe: false,
    drainBonus: 0,
    armor: 0,
    thorns: 0,
    auraShield: 0,
    cringeResist: 0,
    guardBoost: 0,
    secondWind: false,
    healAfter: false,
    upgradesTaken: [],
    wonRun: false,
    map,
  }
}

export function getCurrentNode(run) {
  return run.map?.nodes?.[run.map.currentId] || null
}

export function getRivalForNode(node) {
  if (!node || node.rivalIndex < 0) return RIVALS[0]
  return RIVALS[Math.min(node.rivalIndex, RIVALS.length - 1)]
}

/** @deprecated linear floor — use getRivalForNode */
export function getRivalForFloor(floor) {
  return RIVALS[Math.min(floor, RIVALS.length - 1)]
}

export function getMovePower(run, move) {
  return move.power + (run.moveBonus[move.id] || 0)
}

export function getOwnedMoves(run) {
  return (run.ownedMoves || [])
    .map((id) => MOVES.find((m) => m.id === id))
    .filter(Boolean)
}

export function getMoveSlots(run) {
  const owned = getOwnedMoves(run)
  const slots = []
  for (let i = 0; i < MAX_MOVE_SLOTS; i++) {
    slots.push(owned[i] || null)
  }
  return slots
}

export function canUnlockMove(run) {
  return (run.ownedMoves?.length || 0) < MAX_MOVE_SLOTS
}

export function getUnlockableMoves(run) {
  const owned = new Set(run.ownedMoves || [])
  return MOVES.filter((m) => !owned.has(m.id))
}

export function unlockMove(run, moveId) {
  if (!canUnlockMove(run)) return run
  if ((run.ownedMoves || []).includes(moveId)) return run
  if (!MOVES.some((m) => m.id === moveId)) return run
  return {
    ...run,
    ownedMoves: [...(run.ownedMoves || []), moveId],
    moveBonus: { ...run.moveBonus },
  }
}

export function pickRewardChoices(run, count = 3) {
  const out = []

  if (canUnlockMove(run)) {
    const unlockable = [...getUnlockableMoves(run)]
    const nMoves = Math.min(2, unlockable.length, count)
    for (let i = 0; i < nMoves; i++) {
      const idx = Math.floor(Math.random() * unlockable.length)
      const m = unlockable.splice(idx, 1)[0]
      if (!m) break
      out.push({
        id: `move:${m.id}`,
        kind: 'move',
        moveId: m.id,
        name: `Nuevo baile: ${m.name}`,
        desc: `${m.desc} · slot ${(run.ownedMoves?.length || 0) + 1}/${MAX_MOVE_SLOTS}`,
        color: m.color,
        price: 0,
      })
    }
  }

  const defense = UPGRADES.filter((u) => u.kind === 'defense')
  const offense = UPGRADES.filter((u) => u.kind !== 'defense')
  if (defense.length && out.length < count) {
    const i = Math.floor(Math.random() * defense.length)
    const u = defense.splice(i, 1)[0]
    out.push({
      id: u.id,
      kind: 'upgrade',
      name: u.name,
      desc: u.desc,
      color: '#56cfe1',
      price: 0,
    })
  }

  const pool = [...defense, ...offense]
  while (out.length < count && pool.length) {
    const i = Math.floor(Math.random() * pool.length)
    const u = pool.splice(i, 1)[0]
    if (out.some((x) => x.id === u.id)) continue
    out.push({
      id: u.id,
      kind: 'upgrade',
      name: u.name,
      desc: u.desc,
      color: u.kind === 'defense' ? '#56cfe1' : '#ffd166',
      price: 0,
    })
  }

  return out
}

/** Catálogo de tienda: 3 ítems aleatorios por visita */
function buildShopPool(run) {
  const items = []

  getUnlockableMoves(run).forEach((m) => {
    items.push({
      id: `move:${m.id}`,
      kind: 'move',
      moveId: m.id,
      name: m.name,
      desc: m.desc,
      color: m.color,
      price: shopPriceForMove(m),
    })
  })

  UPGRADES.filter((u) => !(run.upgradesTaken || []).includes(u.id)).forEach((u) => {
    items.push({
      id: u.id,
      kind: 'upgrade',
      name: u.name,
      desc: u.desc,
      color: u.kind === 'defense' ? '#56cfe1' : '#ffd166',
      price: shopPriceForUpgrade(u),
    })
  })

  items.push({
    id: 'coin-heal',
    kind: 'heal',
    name: 'Aura Snack',
    desc: '+12 AURA al empezar la próxima pelea',
    color: '#80ed99',
    price: 12,
  })

  return items
}

function shufflePool(pool) {
  const out = [...pool]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export function rollShopStock(run, count = 3) {
  return shufflePool(buildShopPool(run)).slice(0, count)
}

/** Entrar a tienda: genera stock fijo de 3 ítems */
export function enterShop(run) {
  return { ...run, shopStock: rollShopStock(run, 3) }
}

export function getShopCatalog(run) {
  return run.shopStock || []
}

function shopPriceForMove(m) {
  // Bailes: asequibles al inicio, más caros si son potentes
  return 20 + Math.round(m.power * 0.35)
}

function shopPriceForUpgrade(u) {
  return u.kind === 'defense' ? 18 : 22
}

/** Resuelve un ítem de tienda desde el stock actual */
export function resolveShopItem(run, itemId) {
  const fromStock = (run.shopStock || []).find((i) => i.id === itemId)
  if (fromStock) return fromStock

  if (itemId === 'coin-heal') {
    return {
      id: 'coin-heal',
      kind: 'heal',
      name: 'Aura Snack',
      price: 12,
    }
  }
  if (String(itemId).startsWith('move:')) {
    const moveId = String(itemId).slice(5)
    const m = MOVES.find((x) => x.id === moveId)
    if (!m) return null
    if ((run.ownedMoves || []).includes(moveId)) return null
    return {
      id: itemId,
      kind: 'move',
      moveId,
      name: m.name,
      price: shopPriceForMove(m),
    }
  }
  const u = UPGRADES.find((x) => x.id === itemId)
  if (!u) return null
  if ((run.upgradesTaken || []).includes(u.id)) return null
  return {
    id: u.id,
    kind: 'upgrade',
    name: u.name,
    price: shopPriceForUpgrade(u),
  }
}

export function buyShopItem(run, itemId) {
  const item = resolveShopItem(run, itemId)
  if (!item) return run
  if ((run.coins || 0) < item.price) return run

  let next = {
    ...run,
    coins: run.coins - item.price,
    ownedMoves: [...(run.ownedMoves || [])],
    moveBonus: { ...run.moveBonus },
    upgradesTaken: [...(run.upgradesTaken || [])],
    map: run.map,
  }

  if (item.kind === 'heal') {
    next.startAura = (next.startAura || 0) + 12
    next.healAfter = true
    next.shopStock = (next.shopStock || []).filter((i) => i.id !== itemId)
    return next
  }
  if (item.kind === 'move') {
    next = unlockMove(next, item.moveId)
  } else if (item.kind === 'upgrade') {
    next = applyUpgrade(next, itemId)
  }
  next.shopStock = (next.shopStock || []).filter((i) => i.id !== itemId)
  return next
}

export function applyRest(run) {
  return {
    ...run,
    coins: (run.coins || 0) + 8,
    startAura: Math.min(35, (run.startAura || 0) + 12),
    healAfter: true,
    armor: Math.min(0.45, (run.armor || 0) + 0.04),
  }
}

/** Recompensa de coins según tipo de nodo y capa (progresivo) */
export function coinsForNode(node) {
  if (!node) return 20
  const layer = node.layer || 0
  if (node.type === 'boss') return 55 + layer * 5
  if (node.type === 'elite') return 22 + layer * 6
  if (node.type === 'fight') return 14 + layer * 5
  return 6 + layer * 2
}

export function applyReward(run, rewardId) {
  if (String(rewardId).startsWith('move:')) {
    const moveId = String(rewardId).slice(5)
    return unlockMove(run, moveId)
  }
  return applyUpgrade(run, rewardId)
}

export function applyUpgrade(run, upgradeId) {
  const up = UPGRADES.find((u) => u.id === upgradeId)
  if (!up) return run
  const next = {
    ...run,
    ownedMoves: [...(run.ownedMoves || [])],
    moveBonus: { ...run.moveBonus },
    upgradesTaken: [...(run.upgradesTaken || []), up.id],
  }
  up.apply(next)
  return next
}

/** Completar nodo actual y desbloquear siguientes caminos */
export function completeCurrentNode(run, { coinsGain = 0 } = {}) {
  const map = run.map
  if (!map) return run
  const cur = map.currentId
  const node = map.nodes[cur]
  const visited = map.visited.includes(cur) ? map.visited : [...map.visited, cur]
  const nextIds = node?.next || []
  const available = nextIds.length ? [...nextIds] : []

  return {
    ...run,
    coins: (run.coins || 0) + coinsGain,
    fame: run.fame + (node?.type === 'fight' || node?.type === 'elite' || node?.type === 'boss' ? 1 : 0),
    floor: Math.min(run.maxFloors - 1, (node?.layer || 0) + (nextIds.length ? 0 : 0)),
    map: {
      ...map,
      visited,
      available,
      currentId: cur,
    },
  }
}

/** Elegir un pad disponible y “entrar” */
export function selectMapNode(run, nodeId) {
  const map = run.map
  if (!map?.available?.includes(nodeId)) return run
  return {
    ...run,
    map: {
      ...map,
      currentId: nodeId,
    },
  }
}

export function mapNodes(run) {
  const map = run.map
  if (!map?.nodes) return []
  return Object.values(map.nodes).map((n) => {
    let state = 'locked'
    if (map.visited.includes(n.id)) state = 'done'
    else if (map.available.includes(n.id)) state = 'current'
    else if (n.id === map.currentId && !map.visited.includes(n.id)) state = 'current'
    return {
      ...n,
      state,
      boss: n.type === 'boss',
      index: n.id,
    }
  })
}

export function mapEdges(run) {
  const map = run.map
  if (!map?.nodes) return []
  const edges = []
  Object.values(map.nodes).forEach((n) => {
    ;(n.next || []).forEach((to) => {
      edges.push({ from: n.id, to })
    })
  })
  return edges
}
