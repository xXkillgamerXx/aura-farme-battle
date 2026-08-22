<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const emit = defineEmits(['start', 'howto'])

const items = [
  { id: 'start', label: 'Entrar a Aura Place', hint: 'Mapa con varios caminos' },
  { id: 'howto', label: 'Cómo se juega', hint: 'Peleas, tienda y cofres' },
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

function onItemClick(i) {
  if (selected.value === i) confirm()
  else selected.value = i
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
      <p class="eyebrow">Roblox Aura Place</p>
      <h1 class="display">AURA<br />BATTLE</h1>
      <p class="tagline">Elige tu camino. Compra. Mejora. Domina la plaza.</p>

      <nav class="nav">
        <button
          v-for="(item, i) in items"
          :key="item.id"
          type="button"
          class="nav-item"
          :class="{ on: selected === i }"
          @mouseenter="selected = i"
          @click="onItemClick(i)"
        >
          <span class="cursor">▶</span>
          <span>
            <strong>{{ item.label }}</strong>
            <small>{{ item.hint }}</small>
          </span>
        </button>
      </nav>

      <div class="keys">
        <div class="desk"><kbd>clic</kbd> elegir · <kbd>doble clic</kbd> / <kbd>SPACE</kbd> entrar</div>
        <div class="mob">Toca para elegir · toca otra vez para entrar</div>
        <div>Mapa multi-path · tienda · cofres · boss</div>
      </div>

      <div v-if="showHowto" class="howto">
        <h2>Cómo se juega</h2>
        <ol>
          <li>Mapa Roblox: varios caminos (pelea, tienda, cofre, lobby).</li>
          <li>Ganas 🪙 en peleas y compras mejoras/bailes en la tienda.</li>
          <li>Cofres dan recompensas gratis; el lobby te cura un poco.</li>
          <li>En pelea: clic elige baile · doble clic / SPACE lo usa.</li>
          <li>AURA llena = ganas. CRINGE lleno = pierdes. Llega al BOSS.</li>
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
  padding: max(1rem, var(--safe-top)) max(1rem, var(--safe-right)) max(1rem, var(--safe-bottom))
    max(1rem, var(--safe-left));
  overflow: auto;
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
  padding: 0.95rem 0.95rem;
  min-height: 52px;
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

.mob {
  display: none;
}
@media (max-width: 700px) {
  .desk {
    display: none;
  }
  .mob {
    display: block;
  }
  .display {
    font-size: clamp(2.8rem, 16vw, 3.6rem);
  }
  .card {
    padding: 1.2rem 1rem 1.1rem;
  }
}
</style>
