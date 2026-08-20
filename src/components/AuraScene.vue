<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { createBattleScene } from '../game/scene.js'

const props = defineProps({
  crowd: { type: Number, default: 50 },
  fx: { type: Object, default: null },
  canMove: { type: Boolean, default: false },
  input: { type: Object, default: () => ({ x: 0, z: 0 }) },
})

const canvasRef = ref(null)
let api = null

onMounted(() => {
  api = createBattleScene(canvasRef.value)
  api.setCrowd(props.crowd / 100)
  api.setCanMove(props.canMove)
})

onBeforeUnmount(() => {
  api?.dispose()
  api = null
})

watch(
  () => props.crowd,
  (v) => api?.setCrowd(v / 100),
)

watch(
  () => props.canMove,
  (v) => api?.setCanMove(v),
)

watch(
  () => props.input,
  (v) => api?.setInput(v),
  { deep: true },
)

watch(
  () => props.fx,
  (fx) => {
    if (!api || !fx) return
    if (fx.type === 'move') {
      api.setAttacking(true)
      api.triggerMove(fx.who, fx.moveId, fx.intensity ?? 1)
    }
    if (fx.type === 'pulse') {
      api.pulse(fx.who, fx.good)
    }
    if (fx.type === 'reset') {
      api.resetPoses()
      api.setAttacking(false)
    }
    if (fx.type === 'resetAll') {
      api.resetPoses()
      api.resetPositions()
      api.setAttacking(false)
    }
  },
)

defineExpose({
  getDistance: () => api?.getDistance?.() ?? 3,
})
</script>

<template>
  <canvas ref="canvasRef" class="scene" />
</template>

<style scoped>
.scene {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
