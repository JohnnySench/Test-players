<template>
  <TabsPlayer @update:current-tab="currentTab = $event" />
  <Component
      :is="currentComponentByTab"
      :playersList="playersList"
      @players-list="createdPlayers"
      @update:players-list="updatePlayers"
      @update:player-name="updateName"
  />
</template>

<script setup>
import TabsPlayer from "@/components/TabsPlayer.vue";
import {computed, defineAsyncComponent, ref, shallowRef} from "vue";

const playersList = ref([])
const createdPlayers = (list) => {
  playersList.value = list;
}

const updatePlayers = (list) => {
  playersList.value = list;
}

const updateName = ({value, id}) => {
  playersList.value = playersList.value.map((player) => (player.id === id ? { ...player, name: value } : player))
}


const currentTab = shallowRef(0)

const currentComponentByTab = computed(() => {
    if (currentTab.value === 0) {
      return defineAsyncComponent(() => import("@/components/CreatePlayer.vue"))
    }
    return defineAsyncComponent(() => import("@/components/EditPlayers.vue"))
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 600px;
}
</style>
