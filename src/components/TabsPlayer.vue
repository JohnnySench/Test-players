<script setup>
import {computed} from "vue";

const tabs = computed(() => {
  return [
    {label: 'Create Player', id: 0},
    {label: 'Edit Player', id: 1},
  ]
})
</script>

<template>
<ul class="tabs">
  <li class="tabs__item" v-for="({label, id}) in tabs" :key="`tab-id-${id}`" @click="$emit('update:current-tab', id)">
    <span>{{label}}</span>
  </li>
</ul>
</template>

<style scoped lang="scss">
.tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  &__item {
    padding: 20px 10px;
    text-decoration: none;
    list-style: none;
    background-color: antiquewhite;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>