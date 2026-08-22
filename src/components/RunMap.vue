<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { mapNodes, mapEdges } from '../game/run.js'

const props = defineProps({
  run: { type: Object, required: true },
})
const emit = defineEmits(['enter', 'menu'])

const nodes = computed(() => mapNodes(props.run))
const edges = computed(() => mapEdges(props.run))
const selected = ref(props.run.map?.available?.[0] || props.run.map?.currentId)

watch(
  () => props.run.map?.available,
  (avail) => {
    if (avail?.length && !avail.includes(selected.value)) {
      selected.value = avail[0]
    }
  },
  { deep: true },
)

const nodeById = computed(() => {
  const m = {}
  nodes.value.forEach((n) => {
    m[n.id] = n
  })
  return m
})

function padStyle(n) {
  return {
    left: n.x + '%',
    top: n.y + '%',
    '--theme': n.theme || n.color || '#4cc9f0',
  }
}

function edgePath(e) {
  const a = nodeById.value[e.from]
  const b = nodeById.value[e.to]
  if (!a || !b) return ''
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2 - 4
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`
}

function confirm() {
  const id = selected.value
  const n = nodeById.value[id]
  if (!n || n.state !== 'current') return
  emit('enter', id)
}

function onNodeClick(n) {
  if (n.state !== 'current') return
  if (selected.value === n.id) confirm()
  else selected.value = n.id
}

function onKey(e) {
  if (e.repeat) return
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault()
    confirm()
  } else if (e.key === 'Escape') {
    emit('menu')
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="map">
    <div class="sky" />
    <div class="clouds" />

    <header class="top">
      <div>
        <p class="eyebrow">Aura Place · Multi-path World</p>
        <h1 class="display">MAPA</h1>
      </div>
      <div class="stats">
        <span>🪙 {{ run.coins || 0 }}</span>
        <span>⭐ {{ run.fame }}</span>
        <span> Bailes {{ run.ownedMoves?.length || 0 }}/6</span>
        <span>🛡️ {{ Math.round((run.armor || 0) * 100) }}%</span>
      </div>
    </header>

    <p class="hint">Elige un camino: pelea, tienda, cofre o lobby. Varias rutas = distintas recompensas.</p>

    <div class="world">
      <svg class="routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          v-for="(e, i) in edges"
          :key="i"
          class="edge"
          :class="{ hot: nodeById[e.from]?.state === 'done' || nodeById[e.from]?.state === 'current' }"
          :d="edgePath(e)"
        />
      </svg>

      <button
        v-for="n in nodes"
        :key="n.id"
        type="button"
        class="pad"
        :class="[n.state, n.type, { on: selected === n.id && n.state === 'current' }]"
        :style="padStyle(n)"
        :disabled="n.state === 'locked'"
        @click="onNodeClick(n)"
      >
        <span class="pad-top" />
        <span class="pad-side" />
        <span class="pad-face">
          <strong class="zone">{{ n.icon }} {{ n.label }}</strong>
          <em>{{ n.rivalName || n.zone }}</em>
          <small v-if="n.state === 'current'">entrar · SPACE</small>
          <small v-else-if="n.state === 'done'">✓ listo</small>
          <small v-else>🔒</small>
        </span>
        <span v-if="n.state === 'current'" class="pulse" />
      </button>
    </div>

    <footer class="dock">
      <button type="button" class="go" @click="confirm">¡ENTRAR AL PAD! <kbd>SPACE</kbd></button>
      <button type="button" class="back" @click="$emit('menu')">Menú</button>
    </footer>
  </div>
</template>

<style scoped>
.map {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: max(0.55rem, var(--safe-top)) max(0.55rem, var(--safe-right))
    max(0.55rem, var(--safe-bottom)) max(0.55rem, var(--safe-left));
  overflow: hidden;
  pointer-events: auto;
  background: #5dade2;
}
.sky {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #7ec8f5 0%, #5dade2 40%, #3dba7a 100%);
  z-index: 0;
}
.clouds {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(ellipse 120px 40px at 12% 16%, rgba(255, 255, 255, 0.85), transparent 70%),
    radial-gradient(ellipse 150px 48px at 82% 10%, rgba(255, 255, 255, 0.75), transparent 70%),
    radial-gradient(ellipse 90px 34px at 48% 24%, rgba(255, 255, 255, 0.5), transparent 70%);
  animation: drift 14s ease-in-out infinite alternate;
}
@keyframes drift {
  from { transform: translateX(0); }
  to { transform: translateX(14px); }
}

.top {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.eyebrow {
  margin: 0;
  color: #1a3a5c;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 800;
}
.display {
  font-size: clamp(2.2rem, 8vw, 3.4rem);
  line-height: 0.9;
  color: #fff;
  text-shadow: 3px 3px 0 #1a3a5c;
  margin: 0.1rem 0 0;
}
.stats {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
}
.stats span {
  padding: 0.32rem 0.5rem;
  border-radius: 10px;
  background: #fff;
  border: 3px solid #1a3a5c;
  color: #1a3a5c;
  font-weight: 800;
  font-size: 0.68rem;
  box-shadow: 3px 3px 0 #1a3a5c;
}
.hint {
  position: relative;
  z-index: 5;
  margin: 0.35rem 0 0.15rem;
  color: #0f2a44;
  font-weight: 700;
  font-size: 0.78rem;
}

.world {
  position: relative;
  z-index: 3;
  flex: 1;
  min-height: 260px;
  margin: 0.25rem 0;
}
.routes {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.edge {
  fill: none;
  stroke: rgba(255, 255, 255, 0.35);
  stroke-width: 1.4;
  stroke-dasharray: 2.5 2;
  stroke-linecap: round;
}
.edge.hot {
  stroke: #ffd166;
  stroke-width: 2;
  animation: dash 1.1s linear infinite;
}
@keyframes dash {
  to { stroke-dashoffset: -9; }
}

.pad {
  position: absolute;
  transform: translate(-50%, -50%);
  width: min(128px, 30vw);
  border: none;
  background: transparent;
  padding: 0;
  cursor: default;
  filter: drop-shadow(0 7px 0 rgba(0, 0, 0, 0.16));
}
.pad-face {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 0.08rem;
  padding: 0.45rem 0.4rem 0.55rem;
  border-radius: 12px;
  background: var(--theme, #4cc9f0);
  border: 3px solid #1a3a5c;
  color: #0b1220;
  text-align: left;
  min-height: 68px;
}
.pad-top {
  position: absolute;
  left: 5px;
  right: 5px;
  top: -6px;
  height: 10px;
  border-radius: 10px 10px 3px 3px;
  background: color-mix(in srgb, var(--theme) 70%, #fff);
  border: 3px solid #1a3a5c;
  border-bottom: none;
  z-index: 1;
}
.pad-side {
  position: absolute;
  left: 2px;
  right: 2px;
  bottom: -7px;
  height: 10px;
  border-radius: 0 0 10px 10px;
  background: color-mix(in srgb, var(--theme) 55%, #000);
  border: 3px solid #1a3a5c;
  border-top: none;
  z-index: 0;
}
.zone {
  font-size: 0.58rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 800;
}
.pad em {
  font-style: normal;
  font-weight: 800;
  font-size: 0.72rem;
  line-height: 1.1;
}
.pad small {
  font-size: 0.55rem;
  font-weight: 700;
  opacity: 0.8;
}

.pad.locked {
  opacity: 0.4;
  filter: grayscale(0.55) drop-shadow(0 7px 0 rgba(0, 0, 0, 0.1));
}
.pad.done .pad-face {
  background: #80ed99;
}
.pad.current {
  cursor: pointer;
  z-index: 4;
  animation: bob 1.35s ease-in-out infinite;
}
.pad.current.on .pad-face {
  outline: 3px solid #fff;
  box-shadow: 0 0 0 3px #1a3a5c;
}
.pad.shop .pad-face { background: #80ed99; }
.pad.reward .pad-face { background: #c77dff; color: #fff; }
.pad.rest .pad-face { background: #56cfe1; }
.pad.elite .pad-face { background: #f72585; color: #fff; }
.pad.boss .pad-face {
  background: linear-gradient(145deg, #ffd166, #f72585);
  color: #1a1200;
}

@keyframes bob {
  0%, 100% { transform: translate(-50%, -50%); }
  50% { transform: translate(-50%, calc(-50% - 5px)); }
}
.pulse {
  position: absolute;
  inset: -8px;
  border-radius: 16px;
  border: 3px solid #fff;
  opacity: 0.5;
  animation: pulse 1.2s ease-out infinite;
  pointer-events: none;
}
@keyframes pulse {
  from { transform: scale(0.92); opacity: 0.65; }
  to { transform: scale(1.1); opacity: 0; }
}

.dock {
  position: relative;
  z-index: 5;
  display: grid;
  gap: 0.35rem;
  width: min(400px, 100%);
  margin: 0 auto;
}
.go {
  width: 100%;
  border-radius: 14px;
  padding: 0.9rem;
  min-height: 48px;
  background: #ffd166;
  color: #1a3a5c;
  font-weight: 900;
  border: 3px solid #1a3a5c;
  box-shadow: 4px 4px 0 #1a3a5c;
}
.back {
  width: 100%;
  border-radius: 12px;
  padding: 0.65rem;
  min-height: 42px;
  background: #fff;
  color: #1a3a5c;
  font-weight: 800;
  border: 3px solid #1a3a5c;
  box-shadow: 3px 3px 0 #1a3a5c;
}
kbd {
  margin-left: 0.3rem;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
  background: rgba(26, 58, 92, 0.12);
  font-size: 0.68rem;
}

@media (max-width: 520px) {
  .pad { width: min(112px, 36vw); }
  .pad-face { min-height: 62px; }
  .pad em { font-size: 0.66rem; }
}
</style>
