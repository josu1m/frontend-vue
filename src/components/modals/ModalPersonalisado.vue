<template>
    <Transition name="modal">
      <div v-if="show" class="modal" @click.self="$emit('close')">
        <div class="modal-content">
          <span class="close-button" @click="$emit('close')">&times;</span>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </template>
    
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  defineProps({
    title: { type: String, default: "Modal" },
    show: { type: Boolean, default: false },
  });
  
  defineEmits(["close"]);
  </script>
    
  <style scoped>
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Alinea el modal hacia la parte superior */
    padding-top: 50px; /* Espacio superior entre el modal y la parte superior de la pantalla */
  }
  
  .modal-content {
    position: relative;
    background-color: #fefefe;
    color: black;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px; /* Ancho máximo para evitar que sea demasiado grande */
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .close-button {
    position: absolute;
    top: 1px;
    right: 5px;
    cursor: pointer;
    font-size: 18px;
    padding: 1px 6px;
    border-radius: 50%;
    background-color: #fff;
    color: #333;
    font-size: 25px;
  }
  
  .close-button:hover,
  .close-button:focus {
    color: rgb(204, 22, 22);
    text-decoration: none;
    cursor: pointer;
  }
  
  .modal-content h2 {
    margin-top: 0;
    font-weight: bold;
    color: #333;
  }
  
  .modal-content p {
    margin-bottom: 20px;
  }
  
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.9s;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  
  /* Media queries para adaptar el modal a diferentes tamaños de pantalla */
  @media (max-width: 768px) {
    .modal-content {
      width: 90%;
    }
  }
  
  @media (max-width: 480px) {
    .modal-content {
      width: 98%;
    }
  }
  </style>
  