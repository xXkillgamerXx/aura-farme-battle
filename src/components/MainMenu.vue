<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const emit = defineEmits(['start', 'howto'])

const items = [
  { id: 'start', label: 'Empezar batalla', hint: 'Entra a la plaza' },
  { id: 'howto', label: 'Cómo se juega', hint: 'Controles y reglas' },
]

const selected = ref(0)
const showHowto = ref(false)

function confirm() {
  const id = items[selected.value].id
  if (id === 'howto') {
    showHowto.value = !showHowto.value
    return
  }
  emit('start')
}

function onKey(e) {
  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
    e.preventDefault()
    selected.value = (selected.value - 1 + items.length) % items.length
  } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
    e.preventDefault()
    selected.value = (selected.value + 1) % items.length
  } else if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault()
    confirm()
  } else if (e.key === 'Escape' && showHowto.value) {
    showHowto.value = false
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="menu">
    <div class="glow" />
    <div class="card">
      <p class="eyebrow">Farmeo de Aura · Plaza Battle</p>
      <h1 class="display">AURA<br />BATTLE</h1>
      <p class="tagline">No pelees. Impón. El crowd decide.</p>

      <nav class="nav">
        <button
          v-for="(item, i) in items"
          :key="item.id"
          type="button"
          class="nav-item"
          :class="{ on: selected === i }"
          @mouseenter="selected = i"
          @click="selected = i; confirm()"
        >
          <span class="cursor">▶</span>
          <span>
            <strong>{{ item.label }}</strong>
            <small>{{ item.hint }}</small>
          </span>
        </button>
      </nav>

      <div class="keys">
        <div><kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> mover</div>
        <div><kbd>Q</kbd><kbd>E</kbd> cambiar move</div>
        <div><kbd>SPACE</kbd> atacar</div>
      </div>

      <div v-if="showHowto" class="howto">
        <h2>Cómo se juega</h2>
        <ol>
          <li>Muévete en la plaza con las flechas.</li>
          <li>Elige un move con Q / E.</li>
          <li>Acércate al rival y pulsa SPACE para atacar.</li>
          <li>Clava el timing en la zona dorada (SPACE otra vez).</li>
          <li>Más cerca = más aura. Cringe = pierdes.</li>
        </ol>
        <p class="close-hint">ESC o SPACE para cerrar</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 1.25rem;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(76, 201, 240, 0.18), transparent 45%),
    radial-gradient(ellipse at 70% 80%, rgba(247, 37, 133, 0.16), transparent 40%),
    rgba(6, 10, 20, 0.55);
  backdrop-filter: blur(6px);
  pointer-events: auto;
}

.glow {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 209, 102, 0.14), transparent 65%);
  filter: blur(10px);
  pointer-events: none;
}

.card {
  position: relative;
  width: min(440px, 100%);
  padding: 1.6rem 1.5rem 1.35rem;
  border-radius: 22px;
  background: rgba(10, 16, 32, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
}

.eyebrow {
  margin: 0 0 0.35rem;
  color: var(--accent);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.display {
  font-size: clamp(3.4rem, 10vw, 4.6rem);
  line-height: 0.88;
  margin-bottom: 0.55rem;
}

.tagline {
  margin: 0 0 1.25rem;
  color: var(--muted);
}

.nav {
  display: grid;
  gap: 0.45rem;
  margin-bottom: 1.1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  text-align: left;
  padding: 0.85rem 0.95rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid transparent;
  color: var(--ink);
}

.nav-item .cursor {
  opacity: 0;
  color: var(--accent);
  font-size: 0.75rem;
}

.nav-item span {
  display: grid;
  gap: 0.1rem;
}

.nav-item small {
  color: var(--muted);
  font-size: 0.75rem;
}

.nav-item.on {
  background: rgba(76, 201, 240, 0.12);
  border-color: rgba(76, 201, 240, 0.45);
}

.nav-item.on .cursor {
  opacity: 1;
}

.keys {
  display: grid;
  gap: 0.35rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.8rem;
}

kbd {
  display: inline-block;
  min-width: 1.4rem;
  padding: 0.12rem 0.35rem;
  margin-right: 0.2rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  font-size: 0.72rem;
  text-align: center;
  color: #fff;
}

.howto {
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
}

.howto h2 {
  font-size: 1.4rem;
  margin-bottom: 0.45rem;
}

.howto ol {
  margin: 0;
  padding-left: 1.15rem;
  color: #d7e0f5;
  font-size: 0.9rem;
  display: grid;
  gap: 0.35rem;
}

.close-hint {
  margin: 0.7rem 0 0;
  color: var(--muted);
  font-size: 0.75rem;
}
</style>
