<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
  name: String,
  lifes: Number,
  id: Number
})


const emits = defineEmits(['click:plus-life', 'click:minus-life'])
const plusLife = () => {
  emits('click:plus-life', props.id)
}

const minusLife = () => {
  emits('click:minus-life', props.id)
}
</script>

<template>
  <div class="user-info">
    <div class="user-info__name">
      <input
          id="name"
          :value="name"
          @change="(e) => $emit('update:player-name', {value: e.target.value, id})"
      >
    </div>

    <div class="user-info__lifes">
      <a class="button" href="#" @click.prevent="minusLife">-</a>
      <span class="lifeCount">{{lifes}}</span>
      <a class="button" href="#" @click.prevent="plusLife">+</a>
    </div>

  </div>

</template>

<style scoped lang="scss">
.user-info {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
}
</style>