<template>
  <button @click="showModal = true">Abrir Modal</button>
  <Modal :isVisible="showModal" @close="showModal = false">
    <h2>Contenido del Modal</h2>
    <p>Este es un ejemplo de contenido dentro del modal.mm</p>
  </Modal>
</template>

<script setup>
import Modal from '@/components/modals/Modal.vue';
import { ref } from 'vue';

const showModal = ref(false);
</script>
