<template>
  <form @submit.prevent="loginAndRedirect">
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
    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { formData, login } from "../apis/apiUser/login";

const router = useRouter();
const errorMessage = ref("");

const loginAndRedirect = async () => {
  try {
    const response = await login();

    if (response.success) {
      localStorage.setItem("auth_token", response.token!); // Almacenar el token en localStorage
      router.push({ name: "dashboard" }); // Redirigir al dashboard
    } else {
      errorMessage.value = response.error || "Error desconocido"; // Mostrar mensaje de error
    }
  } catch (error) {
    console.error("Error general en el inicio de sesión:", error);
    errorMessage.value =
      "Error en el inicio de sesión. Por favor, inténtalo de nuevo.";
  }
};
</script>
