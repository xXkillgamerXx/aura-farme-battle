<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { mapNodes } from '../game/run.js'

const props = defineProps({
  run: { type: Object, required: true },
})
const emit = defineEmits(['fight', 'menu'])

const nodes = computed(() => mapNodes(props.run))
const selected = ref(0)

function confirm() {
  const n = nodes.value[props.run.floor]
  if (n) emit('fight')
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
    <div class="card">
      <p class="eyebrow">Roguelite · Ruta del Fame</p>
      <h1 class="display">MAPA</h1>
      <p class="sub">Fame {{ run.fame }} · HP máx {{ run.maxHp }}</p>

      <div class="path">
        <div
          v-for="n in nodes"
          :key="n.index"
          class="node"
          :class="[n.state, { boss: n.boss }]"
        >
          <span class="dot" />
          <strong>{{ n.boss ? 'BOSS · ' : '' }}{{ n.name }}</strong>
          <small v-if="n.state === 'current'">← pelea actual</small>
          <small v-else-if="n.state === 'done'">ganada</small>
          <small v-else>bloqueada</small>
        </div>
      </div>

      <button type="button" class="go" @click="confirm">
        ENTRAR A LA PELEA <kbd>SPACE</kbd>
      </button>
      <button type="button" class="back" @click="$emit('menu')">Menú</button>
    </div>
  </div>
</template>

<style scoped>
.map {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(6, 10, 20, 0.72);
  backdrop-filter: blur(8px);
  pointer-events: auto;
}
.card {
  width: min(480px, 100%);
  padding: 1.4rem;
  border-radius: 20px;
  background: rgba(10, 16, 32, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.eyebrow {
  margin: 0;
  color: var(--accent);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.display {
  font-size: 3rem;
  line-height: 0.9;
  margin: 0.2rem 0;
}
.sub {
  color: var(--muted);
  margin: 0 0 1rem;
}
.path {
  display: grid;
  gap: 0.45rem;
  margin-bottom: 1rem;
}
.node {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  gap: 0.55rem;
  align-items: center;
  padding: 0.65rem 0.75rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid transparent;
  color: var(--muted);
}
.node strong {
  color: #d7e0f5;
  font-size: 0.92rem;
}
.node .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #445;
}
.node.done .dot {
  background: #80ed99;
}
.node.current {
  border-color: rgba(255, 209, 102, 0.5);
  background: rgba(255, 209, 102, 0.08);
}
.node.current .dot {
  background: #ffd166;
  box-shadow: 0 0 10px #ffd166;
}
.node.boss.current,
.node.boss.locked {
  border-color: rgba(247, 37, 133, 0.35);
}
.go {
  width: 100%;
  border-radius: 14px;
  padding: 0.9rem;
  background: linear-gradient(135deg, #4cc9f0, #80ed99);
  color: #041018;
  font-weight: 800;
}
.back {
  width: 100%;
  margin-top: 0.45rem;
  border-radius: 12px;
  padding: 0.65rem;
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--line);
}
kbd {
  margin-left: 0.35rem;
  padding: 0.1rem 0.35rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.15);
  font-size: 0.7rem;
}
</style>
