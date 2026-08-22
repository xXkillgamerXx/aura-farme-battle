<script setup>
import { computed } from 'vue'

const props = defineProps({
  rivalName: { type: String, default: 'Rival' },
  stats: { type: Object, required: true },
  coinsEarned: { type: Number, default: 0 },
  isBoss: { type: Boolean, default: false },
})
const emit = defineEmits(['next'])

const bestLabel = computed(() => {
  const t = props.stats.bestTier
  if (t === 'perfect') return 'ICÓNICO'
  if (t === 'great') return 'ÉPICO'
  if (t === 'ok') return 'OK'
  return '—'
})
</script>

<template>
  <div class="result">
    <div class="card">
      <p class="eyebrow">Victoria</p>
      <h1 class="display">{{ isBoss ? '¡BOSS DERROTADO!' : '¡GANASTE!' }}</h1>
      <p class="sub">vs {{ rivalName }}</p>

      <div class="stats">
        <div class="stat">
          <span class="n">{{ stats.turns }}</span>
          <span class="l">Turnos</span>
        </div>
        <div class="stat">
          <span class="n">+{{ stats.auraGained }}</span>
          <span class="l">AURA farmeada</span>
        </div>
        <div class="stat">
          <span class="n">{{ stats.cringeTaken }}</span>
          <span class="l">CRINGE recibido</span>
        </div>
        <div class="stat">
          <span class="n">{{ bestLabel }}</span>
          <span class="l">Mejor ritmo</span>
        </div>
        <div class="stat">
          <span class="n">{{ stats.movesUsed }}</span>
          <span class="l">Bailes usados</span>
        </div>
        <div class="stat gold">
          <span class="n">+{{ coinsEarned }} 🪙</span>
          <span class="l">Monedas</span>
        </div>
      </div>

      <ul v-if="stats.highlights?.length" class="log">
        <li v-for="(line, i) in stats.highlights" :key="i">{{ line }}</li>
      </ul>

      <button type="button" class="next" @click="$emit('next')">
        Siguiente al mapa <kbd>SPACE</kbd>
      </button>
    </div>
  </div>
</template>

<style scoped>
.result {
  position: absolute;
  inset: 0;
  z-index: 28;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(6, 14, 28, 0.88);
  backdrop-filter: blur(10px);
  pointer-events: auto;
}
.card {
  width: min(440px, 100%);
  padding: 1.3rem 1.2rem;
  border-radius: 18px;
  background: #0e1a2e;
  border: 4px solid #1a3a5c;
  box-shadow: 6px 6px 0 #080e18;
  text-align: center;
}
.eyebrow {
  margin: 0;
  color: #80ed99;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 800;
}
.display {
  margin: 0.2rem 0 0;
  font-size: clamp(2rem, 8vw, 2.8rem);
  color: #ffd166;
  text-shadow: 3px 3px 0 #1a3a5c;
  line-height: 0.95;
}
.sub {
  margin: 0.35rem 0 1rem;
  color: #9aa8c7;
  font-size: 0.9rem;
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.45rem;
  margin-bottom: 0.85rem;
}
.stat {
  padding: 0.55rem 0.35rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 2px solid rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 0.1rem;
}
.stat.gold {
  border-color: rgba(255, 209, 102, 0.35);
  background: rgba(255, 209, 102, 0.08);
}
.stat .n {
  font-weight: 900;
  font-size: 1.05rem;
  color: #f4f7ff;
}
.stat .l {
  font-size: 0.58rem;
  color: #9aa8c7;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.log {
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
  text-align: left;
  font-size: 0.78rem;
  color: #9aa8c7;
  display: grid;
  gap: 0.25rem;
  max-height: 100px;
  overflow-y: auto;
}
.next {
  width: 100%;
  border-radius: 14px;
  padding: 0.95rem;
  min-height: 52px;
  background: linear-gradient(135deg, #4cc9f0, #80ed99);
  color: #041018;
  font-weight: 900;
  font-size: 1rem;
  border: 3px solid #1a3a5c;
  box-shadow: 4px 4px 0 #1a3a5c;
}
kbd {
  margin-left: 0.3rem;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.12);
  font-size: 0.68rem;
}
</style>
