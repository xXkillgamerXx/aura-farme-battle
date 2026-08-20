<script setup>
import { nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import AuraScene from './components/AuraScene.vue'
import BattleHud from './components/BattleHud.vue'
import TimingBar from './components/TimingBar.vue'
import MainMenu from './components/MainMenu.vue'
import AuraFloats from './components/AuraFloats.vue'
import { MOVES } from './game/moves.js'
import {
  createBattle,
  pickMove,
  resolvePlayerAttack,
  resolveRivalAttack,
  nextPlayerTurn,
  startBattle,
} from './game/battle.js'

const battle = reactive(createBattle(0))
const fx = ref(null)
const floatEvent = ref(null)
const timingRef = ref(null)
const sceneRef = ref(null)
const moveIndex = ref(0)
let rivalIndex = 0

function bumpFx(payload) {
  fx.value = { ...payload, t: Date.now() }
}

function spawnFloat(payload) {
  floatEvent.value = { ...payload, t: Date.now() }
}

function onSelectMove(i) {
  moveIndex.value = i
  battle.moveIndex = i
  battle.message = `${MOVES[i].name} lista. SPACE para usar.`
}

function startAbility() {
  if (battle.phase !== 'pick') return
  const move = MOVES[moveIndex.value]
  if (!move) return
  Object.assign(battle, pickMove(battle, move.id))
  nextTick(() => timingRef.value?.start())
}

function onTiming(accuracy) {
  const next = resolvePlayerAttack(battle, accuracy)
  Object.assign(battle, next)
  const result = next.lastResult
  if (!result) return

  bumpFx({
    type: 'move',
    who: 'player',
    moveId: result.move.id,
    intensity: Math.max(0.5, result.accuracy),
  })

  setTimeout(() => {
    // daño al rival = aura baja
    bumpFx({ type: 'aura', who: 'rival', amount: -result.damage })
    const r = sceneRef.value?.projectToScreen?.('rival') ?? { x: window.innerWidth * 0.7, y: 220 }
    spawnFloat({
      who: 'rival',
      kind: 'down',
      text: `-${result.damage}`,
      x: r.x,
      y: r.y,
    })
    spawnFloat({
      who: 'player',
      kind: result.tier.id === 'miss' ? 'down' : 'up',
      text: result.tier.label,
      x: (sceneRef.value?.projectToScreen?.('player') ?? { x: 140, y: 180 }).x,
      y: 160,
    })
    if (result.selfDamage) {
      bumpFx({ type: 'aura', who: 'player', amount: -result.selfDamage })
    }
  }, 380)
}

function playRivalTurn() {
  const next = resolveRivalAttack(battle)
  Object.assign(battle, next)
  const result = next.lastResult
  if (!result || result.side !== 'rival') return

  bumpFx({
    type: 'move',
    who: 'rival',
    moveId: result.move.id,
    intensity: 0.9,
  })

  setTimeout(() => {
    bumpFx({ type: 'aura', who: 'player', amount: -result.damage })
    const p = sceneRef.value?.projectToScreen?.('player') ?? { x: 140, y: 220 }
    spawnFloat({
      who: 'player',
      kind: 'down',
      text: `-${result.damage}`,
      x: p.x,
      y: p.y,
    })
  }, 350)
}

function onContinue() {
  if (battle.phase === 'playerShow') {
    if (battle.rivalAura <= 0 || battle.playerAura <= 0) {
      battle.phase = 'matchEnd'
      return
    }
    // rival turn
    playRivalTurn()
    return
  }
  if (battle.phase === 'rivalShow') {
    Object.assign(battle, nextPlayerTurn(battle))
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
}

function cycleMove(dir) {
  if (battle.phase !== 'pick') return
  onSelectMove((moveIndex.value + dir + MOVES.length) % MOVES.length)
}

function onKeyDown(e) {
  if (battle.phase === 'menu') return
  const key = e.key

  if (key === 'ArrowLeft' || key === 'q' || key === 'Q') {
    e.preventDefault()
    cycleMove(-1)
    return
  }
  if (key === 'ArrowRight' || key === 'e' || key === 'E') {
    e.preventDefault()
    cycleMove(1)
    return
  }
  if (key === 'ArrowUp') {
    e.preventDefault()
    cycleMove(-3)
    return
  }
  if (key === 'ArrowDown') {
    e.preventDefault()
    cycleMove(3)
    return
  }

  if (/^[1-6]$/.test(key) && battle.phase === 'pick') {
    e.preventDefault()
    onSelectMove(Number(key) - 1)
    return
  }

  if (key === ' ' || key === 'Enter') {
    e.preventDefault()
    if (battle.phase === 'pick') startAbility()
    else if (battle.phase === 'timing') timingRef.value?.lock()
    else if (battle.phase === 'playerShow' || battle.phase === 'rivalShow') onContinue()
    else if (battle.phase === 'matchEnd') {
      onRestart()
      onStartFromMenu()
    }
  }
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeyDown))

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
      :crowd="55"
      :fx="fx"
      :can-move="false"
      :input="{ x: 0, z: 0 }"
    />

    <AuraFloats :event="floatEvent" />
    <MainMenu v-if="battle.phase === 'menu'" @start="onStartFromMenu" />

    <div v-if="battle.phase !== 'menu'" class="overlay">
      <BattleHud
        :phase="battle.phase"
        :turn="battle.turn"
        :player-aura="battle.playerAura"
        :rival-aura="battle.rivalAura"
        :message="battle.message"
        :rival-name="battle.rival.name"
        :last-result="battle.lastResult"
        :move-index="moveIndex"
        @select-move="onSelectMove"
        @attack="startAbility"
        @continue="onContinue"
        @restart="() => { onRestart(); onStartFromMenu() }"
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
