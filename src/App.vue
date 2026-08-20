<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import AuraScene from './components/AuraScene.vue'
import BattleHud from './components/BattleHud.vue'
import TimingBar from './components/TimingBar.vue'
import MainMenu from './components/MainMenu.vue'
import { MOVES } from './game/moves.js'
import {
  createBattle,
  pickMove,
  resolveTiming,
  endRound,
  startBattle,
} from './game/battle.js'

const battle = reactive(createBattle(0))
const fx = ref(null)
const timingRef = ref(null)
const sceneRef = ref(null)
const moveIndex = ref(0)
const distance = ref(3)
const keys = reactive({
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  w: false,
  a: false,
  s: false,
  d: false,
})

let rivalIndex = 0
let distTimer = 0

const input = computed(() => {
  let x = 0
  let z = 0
  if (keys.ArrowLeft || keys.a) x -= 1
  if (keys.ArrowRight || keys.d) x += 1
  if (keys.ArrowUp || keys.w) z -= 1
  if (keys.ArrowDown || keys.s) z += 1
  return { x, z }
})

const canMove = computed(() => battle.phase === 'pick')

function bumpFx(payload) {
  fx.value = { ...payload, t: Date.now() }
}

function syncDistance() {
  distance.value = sceneRef.value?.getDistance?.() ?? 3
}

function onSelectMove(i) {
  moveIndex.value = i
  battle.moveIndex = i
}

function attackWithSelected() {
  if (battle.phase !== 'pick') return
  const move = MOVES[moveIndex.value]
  if (!move) return
  syncDistance()
  Object.assign(battle, pickMove(battle, move.id))
  nextTick(() => timingRef.value?.start())
}

function onPick(moveId) {
  const idx = MOVES.findIndex((m) => m.id === moveId)
  if (idx >= 0) onSelectMove(idx)
  Object.assign(battle, pickMove(battle, moveId))
  nextTick(() => timingRef.value?.start())
}

function onTiming(accuracy) {
  syncDistance()
  const next = resolveTiming(battle, accuracy, distance.value)
  Object.assign(battle, next)

  const result = next.lastResult
  if (!result) return

  bumpFx({
    type: 'move',
    who: 'player',
    moveId: result.move.id,
    intensity: result.accuracy,
  })

  setTimeout(() => {
    bumpFx({
      type: 'move',
      who: 'rival',
      moveId: result.rivalMove.id,
      intensity: 0.8 + Math.random() * 0.3,
    })
  }, 280)

  setTimeout(() => {
    if (result.verdict === 'cringe') {
      bumpFx({ type: 'pulse', who: 'player', good: false })
    } else if (result.verdict === 'win') {
      bumpFx({ type: 'pulse', who: 'player', good: true })
    } else if (result.verdict === 'lose') {
      bumpFx({ type: 'pulse', who: 'rival', good: true })
    }
  }, 700)
}

function onContinue() {
  if (battle.phase === 'resolve') {
    Object.assign(battle, endRound(battle))
    bumpFx({ type: 'reset' })
  }
}

function onStartFromMenu() {
  Object.assign(battle, startBattle(battle))
  bumpFx({ type: 'resetAll' })
}

function onRestart() {
  rivalIndex += 1
  Object.assign(battle, createBattle(rivalIndex))
  moveIndex.value = 0
  bumpFx({ type: 'resetAll' })
}

function cycleMove(dir) {
  if (battle.phase !== 'pick') return
  moveIndex.value = (moveIndex.value + dir + MOVES.length) % MOVES.length
  battle.moveIndex = moveIndex.value
}

function onKeyDown(e) {
  const key = e.key
  const lower = key.length === 1 ? key.toLowerCase() : key

  if (key in keys || lower in keys) {
    if (key in keys) keys[key] = true
    if (lower in keys) keys[lower] = true
    if (battle.phase === 'pick') e.preventDefault()
  }

  if (battle.phase === 'menu') return

  if (key === 'q' || key === 'Q') {
    e.preventDefault()
    cycleMove(-1)
    return
  }
  if (key === 'e' || key === 'E') {
    e.preventDefault()
    cycleMove(1)
    return
  }

  if (/^[1-6]$/.test(key) && battle.phase === 'pick') {
    e.preventDefault()
    onSelectMove(Number(key) - 1)
    return
  }

  if (key === ' ' || key === 'Enter') {
    e.preventDefault()
    if (battle.phase === 'pick') attackWithSelected()
    else if (battle.phase === 'timing') timingRef.value?.lock()
    else if (battle.phase === 'resolve') onContinue()
    else if (battle.phase === 'matchEnd') onRestart()
  }
}

function onKeyUp(e) {
  const key = e.key
  const lower = key.length === 1 ? key.toLowerCase() : key
  if (key in keys) keys[key] = false
  if (lower in keys) keys[lower] = false
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
  distTimer = window.setInterval(() => {
    if (battle.phase === 'pick') syncDistance()
  }, 120)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('keyup', onKeyUp)
  clearInterval(distTimer)
})

watch(
  () => battle.phase,
  (phase) => {
    if (phase === 'timing') nextTick(() => timingRef.value?.start())
  },
)
</script>

<template>
  <div class="app">
    <AuraScene
      ref="sceneRef"
      class="canvas-wrap"
      :crowd="battle.crowd"
      :fx="fx"
      :can-move="canMove"
      :input="input"
    />

    <MainMenu v-if="battle.phase === 'menu'" @start="onStartFromMenu" />

    <div v-if="battle.phase !== 'menu'" class="overlay">
      <BattleHud
        :phase="battle.phase"
        :round="battle.round"
        :player-wins="battle.playerWins"
        :rival-wins="battle.rivalWins"
        :player-aura="battle.playerAura"
        :rival-aura="battle.rivalAura"
        :crowd="battle.crowd"
        :message="battle.message"
        :rival-name="battle.rival.name"
        :last-result="battle.lastResult"
        :move-index="moveIndex"
        :distance="distance"
        @pick="onPick"
        @select-move="onSelectMove"
        @continue="onContinue"
        @restart="onRestart"
      />

      <div v-if="battle.phase === 'timing'" class="timing-wrap">
        <TimingBar ref="timingRef" :active="true" @hit="onTiming" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  width: 100%;
  height: 100%;
}

.canvas-wrap {
  position: absolute;
  inset: 0;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(0.75rem, 2vw, 1.4rem);
  pointer-events: none;
  z-index: 5;
}

.timing-wrap {
  pointer-events: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
}
</style>
