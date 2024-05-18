<template>
    <button @click="openModal">Abrir Modal</button>
    <Modal :show="showModal" @close="closeModal">
      <template #header>
        <h2>Título 11</h2>
      </template>
      <p>Este es el contenido del modal.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, totam maiores! Eos, velit ea! Suscipit quisquam fugit sapiente nostrum voluptate repellat dolorem ratione itaque quidem accusamus. Ipsa ratione quam consequatur.</p>
      <button @click="closeModal">Cerrar</button>
    </Modal>
  </template>
  
  <script setup>
  import Modal from "@/components/modals/ModalPersonalisado.vue";
  import { ref } from "vue";
  
  const showModal = ref(false);
  
  const openModal = () => {
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  </script>
  