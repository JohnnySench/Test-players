<script setup>
import {defineProps, defineEmits} from 'vue'
defineProps( {
  isVisible: {
    type: Boolean,
    required: true
  },
  text: String,
})
const emits = defineEmits(['update:isVisible'])
const closeModal = () => {
  emits('destroy', false);
};

</script>

<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">×</button>
      <span>{{text}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 500px;
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
}
</style>