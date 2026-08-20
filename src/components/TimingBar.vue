<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { timingTier } from '../game/battle.js'

const props = defineProps({
  active: Boolean,
  move: { type: Object, default: null },
})

const emit = defineEmits(['hit'])

const pos = ref(0)
const dir = ref(1)
const running = ref(false)
let raf = 0
let last = 0

const zoneCenter = computed(() => props.move?.bar?.zone ?? 0.5)
const zoneWidth = computed(() => props.move?.bar?.width ?? 0.14)
const speed = computed(() => props.move?.bar?.speed ?? 1.05)
const accent = computed(() => props.move?.color ?? '#ffd166')

const zoneStart = computed(() => Math.max(0.05, zoneCenter.value - zoneWidth.value / 2))
const zoneEnd = computed(() => Math.min(0.95, zoneCenter.value + zoneWidth.value / 2))

const liveTier = computed(() => {
  const center = (zoneStart.value + zoneEnd.value) / 2
  const half = Math.max(0.2, (zoneEnd.value - zoneStart.value) / 2 + 0.25)
  const dist = Math.abs(pos.value - center)
  const accuracy = Math.max(0, 1 - dist / half)
  return timingTier(accuracy)
})

function loop(t) {
  if (!running.value) return
  if (!last) last = t
  const dt = Math.min((t - last) / 1000, 0.05)
  last = t
  pos.value += dir.value * speed.value * dt
  if (pos.value >= 1) {
    pos.value = 1
    dir.value = -1
  } else if (pos.value <= 0) {
    pos.value = 0
    dir.value = 1
  }
  raf = requestAnimationFrame(loop)
}

function start() {
  pos.value = 0.02
  dir.value = 1
  running.value = true
  last = 0
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(loop)
}

function stop() {
  running.value = false
  cancelAnimationFrame(raf)
}

function lock() {
  if (!running.value) return
  stop()
  const center = (zoneStart.value + zoneEnd.value) / 2
  const half = Math.max(0.2, (zoneEnd.value - zoneStart.value) / 2 + 0.25)
  const dist = Math.abs(pos.value - center)
  const accuracy = Math.max(0, 1 - dist / half)
  emit('hit', accuracy)
}

watch(
  () => props.move?.id,
  () => {
    if (running.value) {
      // keep running but reset needle soft
      pos.value = 0.05
      dir.value = 1
    }
  },
)

onMounted(() => {
  if (props.active) start()
})

onBeforeUnmount(stop)

defineExpose({ start, stop, lock })
</script>

<template>
  <div class="timing" :style="{ '--accent': accent }">
    <div class="label">
      Ritmo de <strong>{{ move?.name || 'baile' }}</strong>
      <span class="spc"> — SPACE</span>
    </div>
    <div class="tiers">
      <span>CRINGE</span>
      <span>DÉBIL</span>
      <span>OK</span>
      <span class="gold">ICÓNICO</span>
      <span>OK</span>
      <span>DÉBIL</span>
    </div>
    <div class="track" @click="lock">
      <div
        class="sweet"
        :style="{
          left: zoneStart * 100 + '%',
          width: (zoneEnd - zoneStart) * 100 + '%',
          background: `linear-gradient(180deg, ${accent}, #fff3)`,
        }"
      />
      <div class="needle" :style="{ left: pos * 100 + '%' }" />
    </div>
    <div class="live" :style="{ color: liveTier.color }">
      {{ liveTier.label }} · bien = AURA · mal = CRINGE
    </div>
    <button class="lock" type="button" @click="lock">¡AHORA! <kbd>SPACE</kbd></button>
  </div>
</template>

<style scoped>
.timing {
  display: grid;
  gap: 0.5rem;
  padding: 0.85rem 0.9rem;
  border-radius: 16px;
  background: var(--panel);
  border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
  backdrop-filter: blur(10px);
  width: min(460px, 100%);
  box-shadow: 0 0 24px color-mix(in srgb, var(--accent) 25%, transparent);
}

.label {
  font-size: 0.8rem;
  color: var(--muted);
  text-align: center;
}
.label strong {
  color: var(--accent);
}

.tiers {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.15rem;
  font-size: 0.58rem;
  color: var(--muted);
  text-align: center;
}
.tiers .gold {
  color: var(--accent);
  font-weight: 700;
}

.track {
  position: relative;
  height: 34px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
  cursor: pointer;
  touch-action: manipulation;
}

.sweet {
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0.95;
  z-index: 2;
}

.needle {
  position: absolute;
  top: 2px;
  bottom: 2px;
  width: 6px;
  margin-left: -3px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.7);
  z-index: 3;
}

.live {
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.lock {
  border-radius: 12px;
  padding: 0.85rem 1rem;
  min-height: 48px;
  background: linear-gradient(135deg, var(--accent), #ff9f1c);
  color: #1a1200;
  font-weight: 700;
  width: 100%;
}

.lock kbd {
  margin-left: 0.35rem;
  padding: 0.1rem 0.35rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.12);
  font-size: 0.7rem;
}

@media (max-width: 700px) {
  .tiers {
    font-size: 0.52rem;
  }
  .spc,
  .lock kbd {
    display: none;
  }
  .lock::after {
    content: ' (toca)';
    font-weight: 600;
  }
}
</style>
