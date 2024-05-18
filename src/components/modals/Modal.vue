<template>
  <transition name="fade">
    <div v-if="isVisible" class="modal-overlay" @click="emit('close')">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="emit('close')">&times;</button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps({
  isVisible: Boolean,
});
const emit = defineEmits(["close"]);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: opacity 0.3s ease-in-out;
}

.modal-content {
  background-color: white;
  padding: 30px;
  color: black;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  max-width: 80%;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

.close-button {
  position: absolute;
  top: 3px;
  right: 3px;
  cursor: pointer;
  font-size: 18px;
  padding: 1px 6px;
  border-radius: 50%;
  background-color: #fff;
  color: #333;
}

.close-button:hover {
  background-color: #f10808;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-1px) scale(0.9);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(50px) scale(0.5);
}
</style>