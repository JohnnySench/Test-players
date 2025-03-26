<template>
    <h1>Добавить нового игрока</h1>
    <div class="row">
        <input id="name" type="text" v-model.trim="playersName" placeholder="Имя"/>
        <input id="life" type="number" v-model="playersLife" placeholder="Жизней" />
        <button type="button" @click="createPlayer">Создать</button>
    </div>
</template>


<script setup>
import {ref, shallowRef, defineEmits} from "vue";
import {useAlertModal} from '@/shared/hooks/useGlobalModals'

const players = ref([])
const playersName = shallowRef('')
const playersLife = shallowRef('')


const emits = defineEmits(['players-list'])
const createPlayer = async () => {
  if(!playersName.value) {
    await useAlertModal({isVisible: true, text: 'Укажите имя'})
    return;
  }

  if(!playersLife.value) {
    await useAlertModal({isVisible: true, text: 'Укажите количество жизней'})
    return;
  }

  if(playersLife.value <= 0) {
    await useAlertModal({isVisible: true, text: 'Значение не может быть меньше или равно нулю'})
    return;
  }

  players.value.push({
    name: playersName.value,
    lifes: playersLife.value,
    id: Date.now(),
  })

  playersName.value = '';
  playersLife.value = '';

  emits('players-list', players.value);
}
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        margin-top: 20px;

        input {
            margin-right: 12px;
            width: 100%;
            height: 24px;
        }

        button {
            width: 70px;
        }
    }

    #life {
        width: 70px;
    }
</style>
