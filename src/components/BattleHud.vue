<script setup>
import { MOVES } from '../game/moves.js'

defineProps({
  phase: String,
  round: Number,
  playerWins: Number,
  rivalWins: Number,
  playerAura: Number,
  rivalAura: Number,
  crowd: Number,
  message: String,
  rivalName: String,
  lastResult: Object,
  moveIndex: { type: Number, default: 0 },
  distance: { type: Number, default: 3 },
})

defineEmits(['pick', 'continue', 'restart', 'select-move'])
</script>

<template>
  <div class="hud">
    <header class="top">
      <div class="brand">
        <p class="eyebrow">Plaza Battle</p>
        <h1>Aura Battle</h1>
      </div>
      <div class="score">
        <span>Tú {{ playerWins }}</span>
        <span class="sep">·</span>
        <span>R{{ round }}</span>
        <span class="sep">·</span>
        <span>{{ rivalWins }} {{ rivalName }}</span>
      </div>
    </header>

    <div class="meters">
      <div class="meter player">
        <div class="meta">
          <strong>Tu Aura</strong>
          <span>{{ Math.round(playerAura) }}</span>
        </div>
        <div class="bar"><i :style="{ width: playerAura + '%' }" /></div>
      </div>

      <div class="meter crowd">
        <div class="meta">
          <strong>Crowd</strong>
          <span>{{ Math.round(crowd) }}%</span>
        </div>
        <div class="bar"><i :style="{ width: crowd + '%' }" /></div>
      </div>

      <div class="meter rival">
        <div class="meta">
          <strong>{{ rivalName }}</strong>
          <span>{{ Math.round(rivalAura) }}</span>
        </div>
        <div class="bar"><i :style="{ width: rivalAura + '%' }" /></div>
      </div>
    </div>

    <p class="message">{{ message }}</p>

    <div v-if="phase === 'pick'" class="range" :class="{ hot: distance < 2.2 }">
      Distancia {{ distance.toFixed(1) }}m
      <span v-if="distance < 1.6">· MAX AURA</span>
      <span v-else-if="distance > 3.2">· acércate</span>
    </div>

    <div v-if="lastResult && phase === 'resolve'" class="result">
      <span :class="lastResult.verdict">{{ lastResult.verdict.toUpperCase() }}</span>
      <span>{{ lastResult.move.name }} vs {{ lastResult.rivalMove.name }}</span>
      <span>{{ lastResult.playerGain >= 0 ? '+' : '' }}{{ lastResult.playerGain }} aura</span>
    </div>

    <div v-if="phase === 'pick'" class="moves">
      <button
        v-for="(m, i) in MOVES"
        :key="m.id"
        type="button"
        class="move"
        :class="{ on: i === moveIndex }"
        :style="{ '--c': m.color }"
        @click="$emit('select-move', i); $emit('pick', m.id)"
      >
        <div class="move-top">
          <strong>{{ m.name }}</strong>
          <kbd>{{ i + 1 }}</kbd>
        </div>
        <small>{{ m.tag }} · pwr {{ m.power }}</small>
        <em>{{ m.desc }}</em>
      </button>
    </div>

    <div v-if="phase === 'pick'" class="controls">
      <span><kbd>←</kbd><kbd>→</kbd><kbd>↑</kbd><kbd>↓</kbd> mover</span>
      <span><kbd>Q</kbd><kbd>E</kbd> move</span>
      <span><kbd>SPACE</kbd> atacar</span>
    </div>

    <div v-if="phase === 'resolve' || phase === 'matchEnd'" class="actions">
      <button
        v-if="phase === 'resolve'"
        type="button"
        class="primary"
        @click="$emit('continue')"
      >
        Siguiente <kbd>SPACE</kbd>
      </button>
      <button
        v-if="phase === 'matchEnd'"
        type="button"
        class="primary"
        @click="$emit('restart')"
      >
        Menú / Revancha <kbd>SPACE</kbd>
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

.hud :is(button, .moves, .actions) {
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
  letter-spacing: 0.14em;
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
  max-width: 55%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sep {
  opacity: 0.4;
  margin: 0 0.25rem;
}

.meters {
  display: grid;
  grid-template-columns: 1fr 0.9fr 1fr;
  gap: 0.55rem;
}

.meter {
  padding: 0.6rem 0.7rem;
  border-radius: 14px;
  background: var(--panel);
  border: 1px solid var(--line);
  backdrop-filter: blur(10px);
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  margin-bottom: 0.3rem;
  gap: 0.4rem;
}

.bar {
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.bar i {
  display: block;
  height: 100%;
  border-radius: inherit;
}

.player .bar i {
  background: linear-gradient(90deg, #4cc9f0, #80ed99);
}
.crowd .bar i {
  background: linear-gradient(90deg, #ffd166, #ff9f1c);
}
.rival .bar i {
  background: linear-gradient(90deg, #f72585, #c77dff);
}

.message {
  margin: 0;
  text-align: center;
  font-size: 1.02rem;
  color: #e8eeff;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.45);
}

.range {
  justify-self: center;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(12, 18, 34, 0.75);
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.8rem;
}

.range.hot {
  color: #041018;
  background: linear-gradient(135deg, #ffd166, #80ed99);
  border-color: transparent;
  font-weight: 700;
}

.result {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: var(--muted);
}

.result .win {
  color: var(--good);
  font-weight: 700;
}
.result .lose,
.result .cringe {
  color: var(--bad);
  font-weight: 700;
}
.result .tie {
  color: var(--accent);
  font-weight: 700;
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
  gap: 0.18rem;
  transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}

.move.on {
  transform: translateY(-2px);
  border-color: var(--c);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--c) 55%, transparent),
    0 10px 24px rgba(0, 0, 0, 0.25);
}

.move-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
}

.move small {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.66rem;
}

.move em {
  font-style: normal;
  color: #c5d0ea;
  font-size: 0.76rem;
  line-height: 1.25;
}

.controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem 1.1rem;
  color: var(--muted);
  font-size: 0.78rem;
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
  text-align: center;
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.primary kbd {
  background: rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 0, 0, 0.12);
  color: #041018;
}

@media (max-width: 800px) {
  .meters {
    grid-template-columns: 1fr;
  }
  .moves {
    grid-template-columns: 1fr 1fr;
  }
  .top {
    flex-direction: column;
    align-items: start;
  }
}
</style>
