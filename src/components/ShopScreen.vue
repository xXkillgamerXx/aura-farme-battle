<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  coins: { type: Number, default: 0 },
  title: { type: String, default: 'TIENDA ROBLOX' },
})
const emit = defineEmits(['buy', 'leave'])

const selected = ref(0)
const flash = ref('')

const selectedItem = computed(() => props.items[selected.value] || null)

const canBuy = computed(() => {
  const it = selectedItem.value
  return Boolean(it && props.coins >= it.price)
})

watch(
  () => props.items.length,
  (len) => {
    if (selected.value >= len) selected.value = Math.max(0, len - 1)
  },
)

function select(i) {
  selected.value = i
  flash.value = ''
}

function confirm() {
  const it = selectedItem.value
  if (!it) return
  if (props.coins < it.price) {
    flash.value = 'No te alcanzan las monedas'
    return
  }
  emit('buy', it.id)
  flash.value = `Comprado: ${it.name}`
}

function onKey(e) {
  if (e.repeat) return
  if (e.key === 'Escape') {
    e.preventDefault()
    emit('leave')
    return
  }
  if (!props.items.length) return
  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    e.preventDefault()
    selected.value = (selected.value - 1 + props.items.length) % props.items.length
    flash.value = ''
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    e.preventDefault()
    selected.value = (selected.value + 1) % props.items.length
    flash.value = ''
  } else if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault()
    confirm()
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="shop">
    <div class="card">
      <header class="head">
        <div>
          <p class="eyebrow">Game Pass · Catalog</p>
          <h1 class="display">{{ title }}</h1>
        </div>
        <div class="coins">🪙 {{ coins }}</div>
      </header>

      <p class="sub">Toca un ítem para elegirlo. Compra con el botón de abajo.</p>

      <div class="list" role="listbox">
        <button
          v-for="(it, i) in items"
          :key="it.id"
          type="button"
          role="option"
          class="item"
          :class="{ on: selected === i, locked: coins < it.price }"
          :style="{ '--c': it.color || '#ffd166' }"
          :aria-selected="selected === i"
          @click="select(i)"
        >
          <div class="meta">
            <strong>{{ it.name }}</strong>
            <span>{{ it.desc }}</span>
            <em>{{ it.kind === 'move' ? 'BAILE' : it.kind === 'heal' ? 'BUFF' : 'MEJORA' }}</em>
          </div>
          <div class="price">{{ it.price }} 🪙</div>
        </button>
        <p v-if="!items.length" class="empty">Catálogo vacío · sal y vuelve luego</p>
      </div>

      <footer class="dock">
        <p v-if="flash" class="flash" :class="{ bad: flash.startsWith('No') }">{{ flash }}</p>
        <p v-else-if="selectedItem" class="pick">
          Elegido: <strong>{{ selectedItem.name }}</strong>
          · {{ selectedItem.price }} 🪙
        </p>
        <button
          type="button"
          class="buy"
          :disabled="!canBuy"
          @click.stop="confirm"
        >
          {{ canBuy ? 'COMPRAR' : (selectedItem ? 'SIN MONEDAS' : 'ELIGE UN ÍTEM') }}
          <kbd v-if="canBuy">SPACE</kbd>
        </button>
        <button type="button" class="leave" @click.stop="$emit('leave')">
          Salir al mapa <kbd>ESC</kbd>
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.shop {
  position: absolute;
  inset: 0;
  z-index: 26;
  display: grid;
  place-items: center;
  padding: max(0.6rem, var(--safe-top)) max(0.6rem, var(--safe-right))
    max(0.6rem, var(--safe-bottom)) max(0.6rem, var(--safe-left));
  background:
    radial-gradient(ellipse at 30% 20%, rgba(128, 237, 153, 0.2), transparent 50%),
    rgba(6, 14, 28, 0.88);
  backdrop-filter: blur(8px);
  pointer-events: auto;
}
.card {
  width: min(520px, 100%);
  max-height: min(92dvh, 680px);
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  padding: 0;
  border-radius: 18px;
  background: #0e1a2e;
  border: 4px solid #1a3a5c;
  box-shadow: 6px 6px 0 #080e18;
}
.head {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 0.75rem;
  padding: 1rem 1.1rem 0.35rem;
}
.eyebrow {
  margin: 0;
  color: #80ed99;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 800;
}
.display {
  margin: 0.15rem 0 0;
  font-size: clamp(1.8rem, 6vw, 2.6rem);
  color: #fff;
  text-shadow: 3px 3px 0 #1a3a5c;
  line-height: 0.95;
}
.coins {
  padding: 0.45rem 0.7rem;
  border-radius: 12px;
  background: #ffd166;
  color: #1a3a5c;
  font-weight: 900;
  border: 3px solid #1a3a5c;
  box-shadow: 3px 3px 0 #1a3a5c;
  white-space: nowrap;
}
.sub {
  flex-shrink: 0;
  color: #9aa8c7;
  margin: 0;
  padding: 0 1.1rem 0.65rem;
  font-size: 0.82rem;
}

.list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  display: grid;
  gap: 0.4rem;
  align-content: start;
  padding: 0.15rem 1.1rem 0.75rem;
  -webkit-overflow-scrolling: touch;
}
.item {
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  align-items: center;
  text-align: left;
  padding: 0.75rem 0.85rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 3px solid transparent;
  color: #f4f7ff;
  cursor: pointer;
  touch-action: manipulation;
}
.item .meta {
  display: grid;
  gap: 0.12rem;
  min-width: 0;
}
.item span {
  color: #9aa8c7;
  font-size: 0.78rem;
}
.item em {
  font-style: normal;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--c);
}
.price {
  flex-shrink: 0;
  font-weight: 900;
  color: #ffd166;
}
.item.on {
  border-color: var(--c);
  background: color-mix(in srgb, var(--c) 16%, #0e1a2e);
}
.item.locked {
  opacity: 0.65;
}
.empty {
  margin: 1rem 0;
  text-align: center;
  color: #9aa8c7;
}

.dock {
  flex-shrink: 0;
  display: grid;
  gap: 0.4rem;
  padding: 0.75rem 1.1rem max(0.85rem, env(safe-area-inset-bottom, 0px));
  border-top: 3px solid #1a3a5c;
  background: #0a1424;
}
.pick,
.flash {
  margin: 0;
  font-size: 0.8rem;
  color: #9aa8c7;
  text-align: center;
}
.pick strong {
  color: #ffd166;
}
.flash {
  color: #80ed99;
  font-weight: 800;
}
.flash.bad {
  color: #ff6b6b;
}
.buy {
  width: 100%;
  border-radius: 12px;
  padding: 0.9rem;
  min-height: 52px;
  background: #80ed99;
  color: #041018;
  font-weight: 900;
  font-size: 1rem;
  border: 3px solid #1a3a5c;
  box-shadow: 3px 3px 0 #1a3a5c;
  touch-action: manipulation;
}
.buy:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}
.buy:not(:disabled):active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 #1a3a5c;
}
.leave {
  width: 100%;
  border-radius: 12px;
  padding: 0.75rem;
  min-height: 46px;
  background: #fff;
  color: #1a3a5c;
  font-weight: 800;
  border: 3px solid #1a3a5c;
  touch-action: manipulation;
}
kbd {
  margin-left: 0.3rem;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.12);
  font-size: 0.68rem;
}
</style>
