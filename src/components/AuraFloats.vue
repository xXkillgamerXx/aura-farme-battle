<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  event: { type: Object, default: null },
})

const floats = ref([])
let seq = 0

watch(
  () => props.event,
  (ev) => {
    if (!ev) return
    const id = ++seq
    floats.value.push({
      id,
      text: ev.text,
      who: ev.who,
      kind: ev.kind,
      x: ev.x,
      y: ev.y,
    })
    setTimeout(() => {
      floats.value = floats.value.filter((f) => f.id !== id)
    }, 1400)
  },
)
</script>

<template>
  <div class="fx-layer">
    <div
      v-for="f in floats"
      :key="f.id"
      class="float"
      :class="[f.kind, f.who]"
      :style="{ left: f.x + 'px', top: f.y + 'px' }"
    >
      {{ f.text }}
    </div>
  </div>
</template>

<style scoped>
.fx-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 8;
}

.float {
  position: absolute;
  transform: translate(-50%, -50%);
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  letter-spacing: 0.04em;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.55);
  animation: rise 1.35s ease-out forwards;
  white-space: nowrap;
}

.float.up {
  color: #80ed99;
}
.float.down {
  color: #ff6b6b;
}
.float.crowd {
  color: #ffd166;
  font-size: clamp(1.3rem, 3.5vw, 1.9rem);
}

@keyframes rise {
  0% {
    opacity: 0;
    transform: translate(-50%, -20%) scale(0.6);
  }
  18% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.15);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -160%) scale(1);
  }
}
</style>
