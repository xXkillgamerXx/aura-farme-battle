<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  event: { type: Object, default: null },
})

const bubbles = ref([])
let seq = 0

const CHEERS = ['HOOO!!', 'HIOOO!', '¡WUUU!', 'HOOO HIOOO!!']
const BOOS = ['¡ABUUU!', 'BUUU!', '¡ABUCHEO!', 'CRINGE…']
const MEH = ['ehh…', 'mmm', '…']

watch(
  () => props.event,
  (ev) => {
    if (!ev) return
    const kind = ev.kind || 'cheer'
    const pool = kind === 'boo' ? BOOS : kind === 'meh' ? MEH : CHEERS
    const text = ev.text || pool[Math.floor(Math.random() * pool.length)]
    const id = ++seq
    bubbles.value.push({
      id,
      text,
      kind,
      x: 18 + Math.random() * 64,
      y: 25 + Math.random() * 40,
      rot: (Math.random() - 0.5) * 18,
    })
    // extra bubbles for strong reactions
    if (kind === 'cheer' || kind === 'boo') {
      for (let i = 0; i < 2; i++) {
        const id2 = ++seq
        bubbles.value.push({
          id: id2,
          text: pool[Math.floor(Math.random() * pool.length)],
          kind,
          x: 10 + Math.random() * 80,
          y: 20 + Math.random() * 50,
          rot: (Math.random() - 0.5) * 22,
        })
        setTimeout(() => {
          bubbles.value = bubbles.value.filter((b) => b.id !== id2)
        }, 1600 + i * 200)
      }
    }
    setTimeout(() => {
      bubbles.value = bubbles.value.filter((b) => b.id !== id)
    }, 1700)
  },
)
</script>

<template>
  <div class="crowd">
    <div
      v-for="b in bubbles"
      :key="b.id"
      class="bubble"
      :class="b.kind"
      :style="{
        left: b.x + '%',
        top: b.y + '%',
        transform: `rotate(${b.rot}deg)`,
      }"
    >
      {{ b.text }}
    </div>
  </div>
</template>

<style scoped>
.crowd {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 9;
  overflow: hidden;
}
.bubble {
  position: absolute;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.6rem, 5vw, 2.8rem);
  letter-spacing: 0.06em;
  animation: pop 1.6s ease-out forwards;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.55);
  white-space: nowrap;
}
.bubble.cheer {
  color: #ffd166;
}
.bubble.boo {
  color: #ff6b6b;
}
.bubble.meh {
  color: #9aa8c7;
  font-size: clamp(1.1rem, 3vw, 1.6rem);
}

@keyframes pop {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(20px);
  }
  20% {
    opacity: 1;
    transform: scale(1.15) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(1) translateY(-40px);
  }
}
</style>
