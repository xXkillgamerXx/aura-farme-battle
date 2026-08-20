<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { timingTier } from '../game/battle.js'

const props = defineProps({
  active: Boolean,
})

const emit = defineEmits(['hit'])

const pos = ref(0)
const dir = ref(1)
const running = ref(false)
let raf = 0
let last = 0

const zoneStart = 0.42
const zoneEnd = 0.58

const liveTier = computed(() => {
  const center = (zoneStart + zoneEnd) / 2
  const dist = Math.abs(pos.value - center)
  const accuracy = Math.max(0, 1 - dist / 0.42)
  return timingTier(accuracy)
})

function loop(t) {
  if (!running.value) return
  if (!last) last = t
  const dt = Math.min((t - last) / 1000, 0.05)
  last = t
  pos.value += dir.value * 1.05 * dt
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
  pos.value = 0.05
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
  const center = (zoneStart + zoneEnd) / 2
  const dist = Math.abs(pos.value - center)
  const accuracy = Math.max(0, 1 - dist / 0.42)
  emit('hit', accuracy)
}

onMounted(() => {
  if (props.active) start()
})

onBeforeUnmount(stop)

defineExpose({ start, stop, lock })
</script>

<template>
  <div class="timing">
    <div class="label">Efectividad del ataque — SPACE</div>
    <div class="tiers">
      <span>CRINGE</span>
      <span>DÉBIL</span>
      <span>OK</span>
      <span class="gold">ICÓNICO</span>
      <span>OK</span>
      <span>DÉBIL</span>
    </div>
    <div class="track" @click="lock">
      <div class="weak-l" />
      <div class="ok-l" />
      <div
        class="sweet"
        :style="{ left: zoneStart * 100 + '%', width: (zoneEnd - zoneStart) * 100 + '%' }"
      />
      <div class="ok-r" />
      <div class="weak-r" />
      <div class="needle" :style="{ left: pos * 100 + '%' }" />
    </div>
    <div class="live" :style="{ color: liveTier.color }">
      {{ liveTier.label }} · x{{ liveTier.mult }} daño
    </div>
    <button class="lock" type="button" @click="lock">¡AHORA! <kbd>SPACE</kbd></button>
  </div>
</template>

<style scoped>
.timing {
  display: grid;
  gap: 0.55rem;
  padding: 0.95rem 1rem;
  border-radius: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
  backdrop-filter: blur(10px);
  width: min(460px, 100%);
}

.label {
  font-size: 0.85rem;
  color: var(--muted);
  text-align: center;
}

.tiers {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.2rem;
  font-size: 0.62rem;
  color: var(--muted);
  text-align: center;
}

.tiers .gold {
  color: var(--accent);
  font-weight: 700;
}

.track {
  position: relative;
  height: 30px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
  cursor: pointer;
}

.sweet {
  position: absolute;
  top: 0;
  bottom: 0;
  background: linear-gradient(180deg, #ffe08a, #ffd166);
  opacity: 0.95;
  z-index: 2;
}

.ok-l,
.ok-r {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 14%;
  background: rgba(76, 201, 240, 0.35);
  z-index: 1;
}
.ok-l {
  left: 28%;
}
.ok-r {
  right: 28%;
}

.weak-l,
.weak-r {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 14%;
  background: rgba(199, 125, 255, 0.28);
  z-index: 1;
}
.weak-l {
  left: 14%;
}
.weak-r {
  right: 14%;
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
  font-size: 0.95rem;
}

.lock {
  border-radius: 12px;
  padding: 0.7rem 1rem;
  background: linear-gradient(135deg, #ffd166, #ff9f1c);
  color: #1a1200;
  font-weight: 700;
}

.lock kbd {
  margin-left: 0.35rem;
  padding: 0.1rem 0.35rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.12);
  font-size: 0.7rem;
}
</style>
