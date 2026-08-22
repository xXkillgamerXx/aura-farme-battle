<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  choices: { type: Array, required: true },
  title: { type: String, default: 'SOY EL MÁS PERRÓN' },
})
const emit = defineEmits(['pick'])

const selected = ref(0)

function confirm() {
  const c = props.choices[selected.value]
  if (c) emit('pick', c.id)
}

function onChoiceClick(i) {
  if (selected.value === i) confirm()
  else selected.value = i
}

function onKey(e) {
  if (e.repeat) return
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    selected.value = (selected.value - 1 + props.choices.length) % props.choices.length
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault()
    selected.value = (selected.value + 1) % props.choices.length
  } else if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault()
    confirm()
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="up">
    <div class="card">
      <h1 class="display">{{ title }}</h1>
      <p class="sub">Clic elige · doble clic / SPACE confirma</p>
      <div class="choices">
        <button
          v-for="(c, i) in choices"
          :key="c.id"
          type="button"
          class="choice"
          :class="{ on: selected === i, move: c.kind === 'move' }"
          :style="c.color ? { '--c': c.color } : undefined"
          @mouseenter="selected = i"
          @click="onChoiceClick(i)"
        >
          <strong>{{ c.name }}</strong>
          <span>{{ c.desc }}</span>
          <em v-if="c.kind === 'move'">BAILE NUEVO</em>
          <em v-else-if="c.kind === 'upgrade'">MEJORA</em>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.up {
  position: absolute;
  inset: 0;
  z-index: 25;
  display: grid;
  place-items: center;
  background: rgba(6, 10, 20, 0.75);
  backdrop-filter: blur(8px);
  pointer-events: auto;
  padding: 1rem;
}
.card {
  width: min(520px, 100%);
  padding: 1.4rem;
  border-radius: 20px;
  background: rgba(10, 16, 32, 0.94);
  border: 1px solid rgba(255, 209, 102, 0.35);
  text-align: center;
}
.display {
  font-size: clamp(2.2rem, 7vw, 3.2rem);
  color: #ffd166;
  margin: 0;
}
.sub {
  color: var(--muted);
  margin: 0.4rem 0 1rem;
}
.choices {
  display: grid;
  gap: 0.5rem;
}
.choice {
  text-align: left;
  padding: 0.9rem 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid transparent;
  color: var(--ink);
  display: grid;
  gap: 0.2rem;
}
.choice span {
  color: var(--muted);
  font-size: 0.85rem;
}
.choice em {
  font-style: normal;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  font-weight: 800;
  color: var(--c, var(--accent));
}
.choice.move {
  border-color: color-mix(in srgb, var(--c, #4cc9f0) 35%, transparent);
}
.choice.on {
  border-color: color-mix(in srgb, var(--c, #ffd166) 70%, transparent);
  background: color-mix(in srgb, var(--c, #ffd166) 14%, rgba(10, 16, 32, 0.9));
}
</style>
