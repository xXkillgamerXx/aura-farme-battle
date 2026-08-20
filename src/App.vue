<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import AuraScene from './components/AuraScene.vue'
import BattleHud from './components/BattleHud.vue'
import TimingBar from './components/TimingBar.vue'
import MainMenu from './components/MainMenu.vue'
import AuraFloats from './components/AuraFloats.vue'
import CrowdReact from './components/CrowdReact.vue'
import RunMap from './components/RunMap.vue'
import UpgradePick from './components/UpgradePick.vue'
import { MOVES } from './game/moves.js'
import {
  createRun,
  getRivalForFloor,
  pickUpgradeChoices,
  applyUpgrade,
} from './game/run.js'
import {
  createBattle,
  pickMove,
  resolvePlayerAttack,
  resolveRivalAttack,
  nextPlayerTurn,
  WIN_LINE,
} from './game/battle.js'

/** screen: menu | map | battle | upgrade | runWin */
const screen = ref('menu')
const run = reactive(createRun())
const battle = reactive(createBattle(getRivalForFloor(0), run))
const fx = ref(null)
const floatEvent = ref(null)
const timingRef = ref(null)
const sceneRef = ref(null)
const moveIndex = ref(0)
const upgradeChoices = ref([])
const crowdEvent = ref(null)
const spaceDown = ref(false)

const inBattle = computed(() => screen.value === 'battle')
const selectedMove = computed(() => MOVES[moveIndex.value])

function bumpFx(payload) {
  fx.value = { ...payload, t: Date.now() }
}
function spawnFloat(payload) {
  floatEvent.value = { ...payload, t: Date.now() }
}
function spawnCrowd(kind) {
  crowdEvent.value = { kind, t: Date.now() }
}

function resetRun() {
  Object.assign(run, createRun())
  moveIndex.value = 0
}

function goMenu() {
  screen.value = 'menu'
  battle.phase = 'menu'
}

function goMap() {
  screen.value = 'map'
}

function startFight() {
  const rival = getRivalForFloor(run.floor)
  Object.assign(battle, createBattle(rival, run))
  run.healAfter = false
  moveIndex.value = 0
  screen.value = 'battle'
  bumpFx({ type: 'resetAll' })
}

function onSelectMove(i) {
  if (battle.phase !== 'pick') return
  const idx = ((i % MOVES.length) + MOVES.length) % MOVES.length
  moveIndex.value = idx
  battle.moveIndex = idx
  battle.message = `${MOVES[idx].name} · SPACE para bailar`
}

function startAbility() {
  if (battle.phase !== 'pick') return
  const move = MOVES[moveIndex.value]
  Object.assign(battle, pickMove(battle, move.id))
  // preview camera for this dance
  bumpFx({ type: 'camera', mode: move.camera || 'side' })
  nextTick(() => timingRef.value?.start())
}

function onTiming(accuracy) {
  const next = resolvePlayerAttack(battle, accuracy, run)
  Object.assign(battle, next)
  const result = next.lastResult
  if (!result) return

  // 1) baile + cámara
  bumpFx({
    type: 'move',
    who: 'player',
    moveId: result.move.id,
    intensity: Math.max(0.55, result.accuracy),
    hits: result.hits || 1,
    camera: result.move.camera || 'side',
  })

  // 2) crowd reacciona
  setTimeout(() => spawnCrowd(result.crowd || result.tier.crowd || 'meh'), 280)

  // 3) feedback barras
  setTimeout(() => {
    const p = sceneRef.value?.projectToScreen?.('player') ?? { x: 140, y: 220 }
    const r = sceneRef.value?.projectToScreen?.('rival') ?? { x: window.innerWidth * 0.7, y: 220 }
    if (result.auraGain > 0) {
      bumpFx({ type: 'aura', who: 'player', amount: result.auraGain })
      spawnFloat({ who: 'player', kind: 'up', text: `+${result.auraGain} AURA`, x: p.x, y: p.y })
    }
    if (result.cringeGain > 0) {
      bumpFx({ type: 'shame', who: 'player' })
      spawnFloat({ who: 'player', kind: 'down', text: `+${result.cringeGain} CRINGE`, x: p.x, y: p.y + 36 })
    }
    if (result.rivalCringeGain > 0) {
      bumpFx({ type: 'shame', who: 'rival' })
      spawnFloat({
        who: 'rival',
        kind: 'down',
        text: `+${result.rivalCringeGain} CRINGE`,
        x: r.x,
        y: r.y,
      })
    }
    if (result.hits > 1) {
      spawnFloat({
        who: 'player',
        kind: 'up',
        text: 'DOBLE BAILE',
        x: window.innerWidth / 2,
        y: 120,
      })
    }
  }, 650)
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
    hits: result.hits || 1,
    camera: result.move.camera || 'side',
  })

  setTimeout(() => spawnCrowd(result.crowd || result.tier.crowd || 'meh'), 280)

  setTimeout(() => {
    const p = sceneRef.value?.projectToScreen?.('player') ?? { x: 140, y: 220 }
    const r = sceneRef.value?.projectToScreen?.('rival') ?? { x: window.innerWidth * 0.7, y: 220 }
    // Rival bien: te baja AURA (no cringe)
    if (result.auraLoss > 0) {
      bumpFx({ type: 'aura', who: 'player', amount: -result.auraLoss })
      spawnFloat({
        who: 'player',
        kind: 'down',
        text: `-${result.auraLoss} AURA`,
        x: p.x,
        y: p.y,
      })
    }
    if (result.auraGain > 0) {
      bumpFx({ type: 'aura', who: 'rival', amount: result.auraGain })
      spawnFloat({
        who: 'rival',
        kind: 'up',
        text: `+${result.auraGain} AURA`,
        x: r.x,
        y: r.y,
      })
    }
    if (result.rivalCringeGain > 0) {
      bumpFx({ type: 'shame', who: 'rival' })
      spawnFloat({
        who: 'rival',
        kind: 'down',
        text: `+${result.rivalCringeGain} CRINGE`,
        x: r.x,
        y: r.y + 36,
      })
    }
  }, 650)
}

function onWinFlow() {
  run.fame += 1
  if (run.floor >= run.maxFloors - 1) {
    run.wonRun = true
    screen.value = 'runWin'
    return
  }
  upgradeChoices.value = pickUpgradeChoices(3)
  screen.value = 'upgrade'
}

function onUpgradePick(id) {
  Object.assign(run, applyUpgrade(run, id))
  run.floor += 1
  goMap()
}

function onContinue() {
  if (battle.phase === 'matchEnd') {
    if (battle.outcome === 'lose') {
      // stay on lose until SPACE → menu
      return
    }
    if (battle.outcome === 'win') onWinFlow()
    return
  }
  if (battle.phase === 'playerShow') {
    if (battle.outcome === 'win') {
      battle.phase = 'matchEnd'
      battle.message = WIN_LINE
      return
    }
    playRivalTurn()
    return
  }
  if (battle.phase === 'rivalShow') {
    Object.assign(battle, nextPlayerTurn(battle))
    bumpFx({ type: 'reset' })
  }
}

function handleSpace() {
  if (screen.value === 'menu' || screen.value === 'map' || screen.value === 'upgrade') return
  if (screen.value === 'runWin') {
    resetRun()
    goMap()
    return
  }
  if (!inBattle.value) return

  if (battle.phase === 'pick') startAbility()
  else if (battle.phase === 'timing') timingRef.value?.lock()
  else if (battle.phase === 'playerShow' || battle.phase === 'rivalShow') onContinue()
  else if (battle.phase === 'matchEnd') {
    if (battle.outcome === 'lose') {
      resetRun()
      goMenu()
    } else if (battle.outcome === 'win') {
      onWinFlow()
    }
  }
}

function onKeyDown(e) {
  if (e.repeat) return

  if (e.key === ' ' || e.key === 'Enter') {
    if (spaceDown.value) {
      e.preventDefault()
      return
    }
    spaceDown.value = true
    e.preventDefault()
    handleSpace()
    return
  }

  if (screen.value !== 'battle' || battle.phase !== 'pick') return

  if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A' || e.key === 'q' || e.key === 'Q') {
    e.preventDefault()
    onSelectMove(moveIndex.value - 1)
  } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D' || e.key === 'e' || e.key === 'E') {
    e.preventDefault()
    onSelectMove(moveIndex.value + 1)
  } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
    e.preventDefault()
    onSelectMove(moveIndex.value - 3)
  } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
    e.preventDefault()
    onSelectMove(moveIndex.value + 3)
  } else if (/^[1-6]$/.test(e.key)) {
    e.preventDefault()
    onSelectMove(Number(e.key) - 1)
  }
}

function onKeyUp(e) {
  if (e.key === ' ' || e.key === 'Enter') spaceDown.value = false
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('keyup', onKeyUp)
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
      :crowd="55"
      :fx="fx"
      :can-move="false"
      :input="{ x: 0, z: 0 }"
    />

    <AuraFloats :event="floatEvent" />
    <CrowdReact :event="crowdEvent" />

    <MainMenu
      v-if="screen === 'menu'"
      @start="() => { resetRun(); goMap() }"
    />

    <RunMap
      v-if="screen === 'map'"
      :run="run"
      @fight="startFight"
      @menu="goMenu"
    />

    <UpgradePick
      v-if="screen === 'upgrade'"
      :choices="upgradeChoices"
      :title="WIN_LINE"
      @pick="onUpgradePick"
    />

    <div v-if="screen === 'runWin'" class="banner win">
      <h1>{{ WIN_LINE }}</h1>
      <p>Completaste la ruta. Fame {{ run.fame }}</p>
      <button type="button" @click="() => { resetRun(); goMap() }">Nueva ruta <kbd>SPACE</kbd></button>
    </div>

    <div v-if="screen === 'battle' && battle.phase === 'matchEnd' && battle.outcome === 'lose'" class="banner lose">
      <h1>PERDISTE</h1>
      <p>Tu CRINGE llegó a 100 primero (o el rival llenó su AURA). Punto.</p>
      <button type="button" @click="() => { resetRun(); goMenu() }">Menú <kbd>SPACE</kbd></button>
    </div>

    <div v-if="screen === 'battle'" class="overlay">
      <BattleHud
        :phase="battle.phase"
        :turn="battle.turn"
        :player-aura="battle.playerAura"
        :player-cringe="battle.playerCringe"
        :rival-aura="battle.rivalAura"
        :rival-cringe="battle.rivalCringe"
        :aura-max="battle.auraMax"
        :cringe-max="battle.cringeMax"
        :message="battle.message"
        :rival-name="battle.rival.name"
        :last-result="battle.lastResult"
        :move-index="moveIndex"
        :outcome="battle.outcome"
        :floor="run.floor + 1"
        :max-floors="run.maxFloors"
        @select-move="onSelectMove"
        @attack="startAbility"
        @continue="onContinue"
        @restart="() => { resetRun(); goMenu() }"
      />

      <div v-if="battle.phase === 'timing'" class="timing-wrap">
        <TimingBar
          ref="timingRef"
          :active="true"
          :move="battle.selectedMove || selectedMove"
          @hit="onTiming"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  width: 100%;
  height: 100%;
  height: 100dvh;
  overflow: hidden;
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
  padding:
    max(0.45rem, var(--safe-top))
    max(0.45rem, var(--safe-right))
    max(0.45rem, var(--safe-bottom))
    max(0.45rem, var(--safe-left));
  pointer-events: none;
  z-index: 5;
  min-height: 0;
}
.timing-wrap {
  pointer-events: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.25rem 0 max(0.35rem, var(--safe-bottom));
  margin-top: auto;
  flex-shrink: 0;
}
.banner {
  position: absolute;
  inset: 0;
  z-index: 30;
  display: grid;
  place-content: center;
  gap: 0.6rem;
  text-align: center;
  pointer-events: auto;
  padding: max(1rem, var(--safe-top)) 1rem max(1rem, var(--safe-bottom));
}
.banner.lose {
  background: rgba(40, 0, 10, 0.78);
}
.banner.win {
  background: rgba(20, 30, 10, 0.78);
}
.banner h1 {
  font-size: clamp(2.4rem, 12vw, 5rem);
  margin: 0;
  line-height: 0.95;
  padding: 0 0.5rem;
}
.banner.lose h1 {
  color: #ff6b6b;
}
.banner.win h1 {
  color: #ffd166;
}
.banner p {
  color: #d7e0f5;
  margin: 0 0 0.6rem;
  padding: 0 1rem;
  font-size: 0.95rem;
}
.banner button {
  justify-self: center;
  border-radius: 14px;
  padding: 0.95rem 1.4rem;
  min-height: 48px;
  background: linear-gradient(135deg, #4cc9f0, #80ed99);
  color: #041018;
  font-weight: 800;
}

@media (max-width: 700px) and (orientation: portrait) {
  .overlay {
    padding:
      max(0.35rem, var(--safe-top))
      0.4rem
      max(0.35rem, var(--safe-bottom))
      0.4rem;
  }
}
</style>
