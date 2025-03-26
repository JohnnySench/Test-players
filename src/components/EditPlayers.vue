<template>
  <div v-if="playersList?.length">
    <h1>Редактирование игроков</h1>
    <div
        v-for="({name, lifes, id}, index) in playersList"
        :key="`${name}-${index}`"
        class="row"
    >
      <UserPlayer
          :lifes="lifes"
          :name="name"
          :id="id"
          @click:plus-life="handleChangeValueLifes($event, 'plus')"
          @click:minus-life="handleChangeValueLifes($event, 'minus')"
          @update:player-name="handleChangeName"
      />
    </div>

    <h2>Рейтинг</h2>
    <table v-if="sortedRating?.length">
      <tr
          v-for="(item, index) in sortedRating"
          :key="index"
      >
        <td v-text="`${index + 1}`"></td>
        <td>
          У игрока <b>{{item.name}}</b>, {{item.lifes}} жизней
        </td>
      </tr>
    </table>
  </div>
  <div v-else>Нет созданных игроков</div>

</template>

<script setup>
import {computed, defineProps, defineEmits} from "vue";
import UserPlayer from "@/components/UserPlayer.vue";

const props = defineProps({
  playersList: {
    type: Array
  },
})

const sortedRating = computed(() => {
  return props.playersList.toSorted((a, b) => b.lifes - a.lifes)
})


const emits = defineEmits(['update:players-list', 'update:player-name']);
const handleChangeValueLifes = (id, typeFn = 'plus') => {
  const newPlayersList = props.playersList.map((player) => {
    if (id === player.id) {
      return {
        ...player,
        lifes: typeFn === 'plus' ? player.lifes + 1 : player.lifes - 1,
      }
    }
    return {
      ...player,
    }
  })
  emits('update:players-list', newPlayersList);
}

const handleChangeName = (data) => {
  emits('update:player-name', data)
}

</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        align-items: center;
        margin-top: 20px;

        input {
            margin-right: 12px;
            width: 100%;
            height: 24px;
        }

        .button {
          width: 24px;
          height: 24px;
        }

        .life {
          margin: 0 12px;
        }
    }

    table {
      width: 100%;

      td {
        border: 1px solid #2c3e50;
      }
    }
</style>