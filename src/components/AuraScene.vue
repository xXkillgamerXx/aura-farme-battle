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
const loadError = ref('')
let api = null

onMounted(async () => {
  try {
    api = await createBattleScene(canvasRef.value)
    api.setCrowd(props.crowd / 100)
    api.setCanMove(props.canMove)
  } catch (err) {
    console.error('[aura] scene failed', err)
    loadError.value = err?.message || 'Error cargando modelos 3D'
  }
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
    if (fx.type === 'prepare') {
      api.setAttacking(true)
      api.dashTowardRival()
      api.centerOnFight(true)
    }
    if (fx.type === 'move') {
      api.setAttacking(true)
      api.setAttacker?.(fx.who)
      api.triggerMove(
        fx.who,
        fx.moveId,
        fx.intensity ?? 1,
        fx.hits ?? 1,
        fx.camera || 'side',
      )
    }
    if (fx.type === 'attacker') {
      api.setAttacker?.(fx.who || null)
    }
    if (fx.type === 'camera') {
      api.setCameraMode?.(fx.mode || 'idle')
    }
    if (fx.type === 'react') {
      api.reactFighter?.(fx.who)
    }
    if (fx.type === 'crowd') {
      api.reactCrowd?.(fx.kind || 'cheer')
    }
    if (fx.type === 'shame') {
      api.showAuraBurst(fx.who, -10)
    }
    if (fx.type === 'aura') {
      api.showAuraBurst(fx.who, fx.amount)
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
  projectToScreen: (who) => api?.projectToScreen?.(who) ?? { x: 0, y: 0 },
})
</script>

<template>
  <div class="wrap">
    <canvas ref="canvasRef" class="scene" />
    <p v-if="loadError" class="err">{{ loadError }}</p>
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
}
.scene {
  width: 100%;
  height: 100%;
  display: block;
}
.err {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #ff8a8a;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.75rem 1rem;
  border-radius: 10px;
  z-index: 2;
  max-width: 90%;
  text-align: center;
}
</style>
