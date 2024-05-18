<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Nombre:</label>
      <input
        type="text"
        id="name"
        v-model="formData.name"
        class="form-control"
        required
      />
    </div>
    <div class="form-group">
      <label for="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        class="form-control"
        required
      />
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        v-model="formData.password"
        class="form-control"
        required
      />
    </div>
    <div class="form-group">
      <label for="password_confirmation">Confirmar Contraseña:</label>
      <input
        type="password"
        id="password_confirmation"
        v-model="formData.password_confirmation"
        class="form-control"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Registrarse</button>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { formData, registrar } from "../apis/apiUser/register"; // Importar formData y registrar

const errorMessage = ref("");

async function submitForm() {
  if (formData.password !== formData.password_confirmation) {
    errorMessage.value = "Las contraseñas no coinciden";
    return;
  }

  try {
    await registrar(); // Llamar a la función registrar
    // Opcional: Redireccionar a otra página o mostrar un mensaje de éxito
    errorMessage.value = "";
  } catch (error) {
    errorMessage.value =
      "Error al registrar usuario. Por favor, inténtalo de nuevo.";
  }
}
</script>
