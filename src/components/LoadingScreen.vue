<script setup>
defineProps({
  progress: { type: Number, default: 0 },
  label: { type: String, default: 'Cargando…' },
  error: { type: String, default: '' },
})

const emit = defineEmits(['retry'])
</script>

<template>
  <div class="boot">
    <div class="glow" />
    <div class="panel">
      <p class="eyebrow">Farmeo de Aura</p>
      <h1 class="display">AURA<br />BATTLE</h1>
      <p class="tag">{{ error || label }}</p>

      <div class="bar" role="progressbar" :aria-valuenow="Math.round(progress * 100)" aria-valuemin="0" aria-valuemax="100">
        <i :style="{ width: Math.min(100, Math.round(progress * 100)) + '%' }" />
      </div>
      <p class="pct">{{ Math.min(100, Math.round(progress * 100)) }}%</p>

      <button v-if="error" type="button" class="retry" @click="emit('retry')">Reintentar</button>
    </div>
  </div>
</template>

<style scoped>
.boot {
  position: absolute;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  padding:
    max(1rem, var(--safe-top))
    max(1rem, var(--safe-right))
    max(1rem, var(--safe-bottom))
    max(1rem, var(--safe-left));
  background:
    radial-gradient(ellipse 80% 50% at 50% 20%, rgba(76, 201, 240, 0.18), transparent 55%),
    radial-gradient(ellipse 70% 45% at 80% 80%, rgba(247, 37, 133, 0.14), transparent 50%),
    #0b1220;
}

.glow {
  position: absolute;
  width: min(420px, 80vw);
  height: min(420px, 80vw);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 209, 102, 0.12), transparent 70%);
  filter: blur(8px);
  pointer-events: none;
}

.panel {
  position: relative;
  width: min(360px, 100%);
  text-align: center;
}

.eyebrow {
  margin: 0 0 0.35rem;
  color: var(--accent);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.display {
  font-size: clamp(3rem, 14vw, 4.5rem);
  line-height: 0.88;
  margin-bottom: 0.75rem;
}

.tag {
  margin: 0 0 1.25rem;
  color: var(--muted);
  font-size: 0.9rem;
  min-height: 1.35em;
}

.bar {
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--line);
  overflow: hidden;
}

.bar i {
  display: block;
  height: 100%;
  width: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, #4cc9f0, #ffd166, #f72585);
  transition: width 0.2s ease;
}

.pct {
  margin: 0.55rem 0 0;
  font-size: 0.8rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

.retry {
  margin-top: 1rem;
  padding: 0.7rem 1.2rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #4cc9f0, #80ed99);
  color: #041018;
  font-weight: 700;
}
</style>
