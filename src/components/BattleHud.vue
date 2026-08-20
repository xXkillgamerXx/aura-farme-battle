<script setup>
import { computed } from 'vue'
import { MOVES } from '../game/moves.js'

const props = defineProps({
  phase: String,
  turn: Number,
  playerAura: Number,
  playerCringe: Number,
  rivalAura: Number,
  rivalCringe: Number,
  auraMax: { type: Number, default: 100 },
  cringeMax: { type: Number, default: 100 },
  message: String,
  rivalName: String,
  lastResult: Object,
  moveIndex: { type: Number, default: 0 },
  outcome: String,
  floor: Number,
  maxFloors: Number,
})

defineEmits(['select-move', 'attack', 'continue', 'restart'])

const pAura = computed(() => (props.playerAura / props.auraMax) * 100)
const pCringe = computed(() => (props.playerCringe / props.cringeMax) * 100)
const rAura = computed(() => (props.rivalAura / props.auraMax) * 100)
const rCringe = computed(() => (props.rivalCringe / props.cringeMax) * 100)
</script>

<template>
  <div class="hud">
    <div class="top-block">
      <header class="top">
        <div class="brand">
          <p class="eyebrow">Pelea {{ floor }}/{{ maxFloors }} · Turno {{ turn }}</p>
          <h1>Aura Battle</h1>
        </div>
        <div class="score">
          <span v-if="phase === 'pick'">Elige (← →)</span>
          <span v-else-if="phase === 'timing'">Ritmo</span>
          <span v-else-if="outcome === 'win'">Victoria</span>
          <span v-else-if="outcome === 'lose'">Derrota</span>
          <span v-else>Combate</span>
        </div>
      </header>

      <div class="fighters">
        <div class="fighter you">
          <p class="name">Tú</p>
          <div class="meter aura">
            <div class="meta"><strong>AURA</strong><span>{{ Math.round(playerAura) }}</span></div>
            <div class="bar"><i :style="{ width: pAura + '%' }" /></div>
          </div>
          <div class="meter cringe">
            <div class="meta"><strong>CRINGE</strong><span>{{ Math.round(playerCringe) }}</span></div>
            <div class="bar"><i :style="{ width: pCringe + '%' }" /></div>
          </div>
        </div>

        <div class="vs">VS</div>

        <div class="fighter rival">
          <p class="name">{{ rivalName }}</p>
          <div class="meter aura">
            <div class="meta"><strong>AURA</strong><span>{{ Math.round(rivalAura) }}</span></div>
            <div class="bar"><i :style="{ width: rAura + '%' }" /></div>
          </div>
          <div class="meter cringe">
            <div class="meta"><strong>CRINGE</strong><span>{{ Math.round(rivalCringe) }}</span></div>
            <div class="bar"><i :style="{ width: rCringe + '%' }" /></div>
          </div>
        </div>
      </div>

      <p class="legend">
        Meta: 100 AURA · Si tu CRINGE llega a 100 primero, pierdes · Rival bien = te baja AURA (no cringe)
      </p>

      <p class="message">{{ message }}</p>

      <div v-if="lastResult && (phase === 'playerShow' || phase === 'rivalShow')" class="result">
        <span :style="{ color: lastResult.tier?.color }">{{ lastResult.tier?.label }}</span>
        <span>{{ lastResult.move?.name }}</span>
        <span v-if="lastResult.hits > 1" class="x2">x2</span>
        <span v-if="lastResult.auraGain > 0" class="up">+{{ lastResult.auraGain }} aura</span>
        <span v-if="lastResult.auraLoss > 0" class="dmg">-{{ lastResult.auraLoss }} aura</span>
        <span v-if="lastResult.cringeGain > 0" class="dmg">+{{ lastResult.cringeGain }} cringe</span>
        <span v-if="lastResult.rivalCringeGain > 0" class="up">+{{ lastResult.rivalCringeGain }} cringe rival</span>
      </div>
    </div>

    <div v-if="phase === 'pick'" class="attack-dock">
      <div class="moves">
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
        </button>
      </div>
      <div class="dock-footer">
        <p class="hint">← → seleccionar · SPACE una vez</p>
        <button type="button" class="attack-btn" @click="$emit('attack')">
          USAR BAILE <kbd>SPACE</kbd>
        </button>
      </div>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.7rem;
  pointer-events: none;
}
.hud :is(button, .moves, .actions, .attack-dock) {
  pointer-events: auto;
}
.top-block {
  display: grid;
  gap: 0.55rem;
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
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.brand h1 {
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  line-height: 0.9;
}
.score {
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: var(--panel);
  border: 1px solid var(--line);
  font-size: 0.8rem;
  color: var(--muted);
}

.fighters {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0.5rem;
  align-items: stretch;
}
.fighter {
  padding: 0.65rem 0.7rem;
  border-radius: 14px;
  background: var(--panel);
  border: 1px solid var(--line);
  backdrop-filter: blur(10px);
  display: grid;
  gap: 0.4rem;
}
.fighter .name {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
}
.vs {
  align-self: center;
  color: var(--muted);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
}
.meter .meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  margin-bottom: 0.2rem;
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
  transition: width 0.3s ease;
}
.aura .bar i {
  background: linear-gradient(90deg, #4cc9f0, #80ed99);
}
.cringe .bar i {
  background: linear-gradient(90deg, #f72585, #ff6b6b);
}

.legend {
  margin: 0;
  text-align: center;
  font-size: 0.72rem;
  color: var(--muted);
}
.message {
  margin: 0;
  text-align: center;
  font-size: 1rem;
  color: #e8eeff;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.45);
}
.result {
  display: flex;
  justify-content: center;
  gap: 0.55rem;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: var(--muted);
}
.dmg {
  color: #ff6b6b;
  font-weight: 700;
}
.up {
  color: #80ed99;
  font-weight: 700;
}
.x2 {
  color: #ffd166;
  font-weight: 800;
}

.attack-dock {
  width: 100%;
  padding: 0.75rem 0.85rem 0.9rem;
  border-radius: 18px 18px 14px 14px;
  background: rgba(8, 12, 24, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
}
.moves {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.45rem;
  width: 100%;
}
.move {
  text-align: left;
  padding: 0.6rem 0.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid color-mix(in srgb, var(--c) 40%, transparent);
  color: var(--ink);
  display: grid;
  gap: 0.12rem;
  min-width: 0;
}
.move.on {
  border-color: var(--c);
  background: color-mix(in srgb, var(--c) 18%, rgba(12, 18, 34, 0.9));
}
.move-top {
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
}
.move-top strong {
  font-size: 0.8rem;
  line-height: 1.15;
}
.move small {
  color: var(--muted);
  font-size: 0.62rem;
  text-transform: uppercase;
}
.dock-footer {
  margin-top: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  flex-wrap: wrap;
}
.hint {
  margin: 0;
  color: var(--muted);
  font-size: 0.78rem;
}
.attack-btn {
  border-radius: 12px;
  padding: 0.75rem 1.35rem;
  background: linear-gradient(135deg, #f72585, #ff9f1c);
  color: #fff;
  font-weight: 800;
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
  min-width: 1.2rem;
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
@media (max-width: 900px) {
  .moves {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .fighters {
    grid-template-columns: 1fr;
  }
  .vs {
    display: none;
  }
}
</style>
