<script setup>
import { computed } from 'vue'
import { MOVES } from '../game/moves.js'

const props = defineProps({
  phase: String,
  turn: Number,
  playerAura: Number,
  rivalAura: Number,
  playerMax: { type: Number, default: 100 },
  rivalMax: { type: Number, default: 100 },
  message: String,
  rivalName: String,
  lastResult: Object,
  moveIndex: { type: Number, default: 0 },
  outcome: String,
  floor: Number,
  maxFloors: Number,
})

defineEmits(['select-move', 'attack', 'continue', 'restart'])

const playerPct = computed(() => (props.playerAura / props.playerMax) * 100)
const rivalPct = computed(() => (props.rivalAura / props.rivalMax) * 100)
</script>

<template>
  <div class="hud">
    <header class="top">
      <div class="brand">
        <p class="eyebrow">Pelea {{ floor }}/{{ maxFloors }} · Turno {{ turn }}</p>
        <h1>Aura Battle</h1>
      </div>
      <div class="score">
        <span v-if="phase === 'pick'">Elige (← →)</span>
        <span v-else-if="phase === 'timing'">Timing</span>
        <span v-else-if="phase === 'matchEnd' && outcome === 'win'">Victoria</span>
        <span v-else-if="phase === 'matchEnd' && outcome === 'lose'">Derrota</span>
        <span v-else>Combate</span>
      </div>
    </header>

    <div class="meters">
      <div class="meter player">
        <div class="meta">
          <strong>Tú</strong>
          <span>{{ Math.round(playerAura) }}/{{ playerMax }}</span>
        </div>
        <div class="bar"><i :style="{ width: playerPct + '%' }" /></div>
      </div>
      <div class="meter rival">
        <div class="meta">
          <strong>{{ rivalName }}</strong>
          <span>{{ Math.round(rivalAura) }}/{{ rivalMax }}</span>
        </div>
        <div class="bar"><i :style="{ width: rivalPct + '%' }" /></div>
      </div>
    </div>

    <p class="message">{{ message }}</p>

    <div v-if="lastResult && (phase === 'playerShow' || phase === 'rivalShow')" class="result">
      <span :style="{ color: lastResult.tier?.color }">{{ lastResult.tier?.label }}</span>
      <span>{{ lastResult.move?.name }}</span>
      <span v-if="lastResult.hits > 1" class="x2">x2 baile</span>
      <span class="dmg">-{{ lastResult.damage }} vergüenza</span>
    </div>

    <div v-if="phase === 'pick'" class="moves">
      <button
        v-for="(m, i) in MOVES"
        :key="m.id"
        type="button"
        class="move"
        :class="{ on: i === moveIndex }"
        :style="{ '--c': m.color }"
        @click="$emit('select-move', i)"
      >
        <div class="move-top">
          <strong>{{ m.name }}</strong>
          <kbd>{{ i + 1 }}</kbd>
        </div>
        <small>poder {{ m.power }}</small>
        <em>{{ m.desc }}</em>
      </button>
    </div>

    <div v-if="phase === 'pick'" class="attack-row">
      <button type="button" class="attack-btn" @click="$emit('attack')">
        USAR BAILE <kbd>SPACE</kbd>
      </button>
    </div>

    <div v-if="phase === 'pick'" class="hint">
      ← → seleccionar · SPACE una vez (no mantengas)
    </div>

    <div
      v-if="phase === 'playerShow' || phase === 'rivalShow' || (phase === 'matchEnd' && outcome === 'win')"
      class="actions"
    >
      <button type="button" class="primary" @click="$emit('continue')">
        Continuar <kbd>SPACE</kbd>
      </button>
    </div>
  </div>
</template>

<style scoped>
.hud {
  display: grid;
  gap: 0.7rem;
  pointer-events: none;
}
.hud :is(button, .moves, .actions, .attack-row) {
  pointer-events: auto;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
}
.eyebrow {
  margin: 0;
  color: var(--accent);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.brand h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 0.9;
}
.score {
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: var(--panel);
  border: 1px solid var(--line);
  font-size: 0.85rem;
  color: var(--muted);
}
.meters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
}
.meter {
  padding: 0.65rem 0.75rem;
  border-radius: 14px;
  background: var(--panel);
  border: 1px solid var(--line);
  backdrop-filter: blur(10px);
}
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 0.35rem;
  gap: 0.4rem;
}
.bar {
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
.bar i {
  display: block;
  height: 100%;
  border-radius: inherit;
  transition: width 0.25s ease;
}
.player .bar i {
  background: linear-gradient(90deg, #4cc9f0, #80ed99);
}
.rival .bar i {
  background: linear-gradient(90deg, #f72585, #c77dff);
}
.message {
  margin: 0;
  text-align: center;
  font-size: 1.05rem;
  color: #e8eeff;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.45);
}
.result {
  display: flex;
  justify-content: center;
  gap: 0.65rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: var(--muted);
}
.dmg {
  color: #ff6b6b;
  font-weight: 700;
}
.x2 {
  color: #ffd166;
  font-weight: 800;
}
.moves {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
}
.move {
  text-align: left;
  padding: 0.7rem;
  border-radius: 14px;
  background: rgba(12, 18, 34, 0.82);
  border: 1px solid color-mix(in srgb, var(--c) 40%, transparent);
  color: var(--ink);
  display: grid;
  gap: 0.15rem;
}
.move.on {
  border-color: var(--c);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--c) 55%, transparent);
  transform: translateY(-2px);
}
.move-top {
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
}
.move small {
  color: var(--muted);
  font-size: 0.68rem;
  text-transform: uppercase;
}
.move em {
  font-style: normal;
  color: #c5d0ea;
  font-size: 0.76rem;
}
.attack-row {
  display: flex;
  justify-content: center;
}
.attack-btn {
  border-radius: 14px;
  padding: 0.9rem 1.4rem;
  background: linear-gradient(135deg, #f72585, #ff9f1c);
  color: #fff;
  font-weight: 800;
}
.hint {
  text-align: center;
  color: var(--muted);
  font-size: 0.78rem;
}
.actions {
  display: flex;
  justify-content: center;
}
.primary {
  border-radius: 14px;
  padding: 0.85rem 1.25rem;
  background: linear-gradient(135deg, #4cc9f0, #80ed99);
  color: #041018;
  font-weight: 700;
}
kbd {
  display: inline-block;
  min-width: 1.25rem;
  padding: 0.1rem 0.3rem;
  margin: 0 0.1rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  font-size: 0.68rem;
  color: #fff;
}
.attack-btn kbd,
.primary kbd {
  background: rgba(0, 0, 0, 0.15);
  color: inherit;
}
@media (max-width: 800px) {
  .moves {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
