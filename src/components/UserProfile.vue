<template>
  <div v-if="user">
    <h1>Perfil de Usuario</h1>
    <div v-if="!isEditing">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Nombre:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <button @click="startEditing">Editar</button>
    </div>
    <div v-else>
      <label>
        Nombre:
        <input v-model="editUser.name" />
      </label>
      <label>
        Email:
        <input v-model="editUser.email" />
      </label>
      <button @click="updateUser">Guardar</button>
      <button @click="cancelEditing">Cancelar</button>
    </div>
  </div>
  <div v-else-if="isLoading">
    <p>Cargando...</p>
  </div>
  <div v-else-if="error">
    <p>Error al cargar el perfil: {{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  fetchUserProfile,
  updateUserProfile,
  type UserProfileData,
} from "../apis/apiUser/userProfile"; // Asegúrate de ajustar la ruta

// Variables reactivas
const user = ref<UserProfileData | null>(null);
const editUser = ref<UserProfileData>({ id: 0, name: "", email: "" });
const isLoading = ref(true);
const error = ref("");
const isEditing = ref(false);

// Función que se ejecuta cuando el componente se monta
onMounted(async () => {
  try {
    user.value = await fetchUserProfile();
    if (!user.value) {
      throw new Error("No se pudo cargar el perfil del usuario.");
    }
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = String(err);
    }
  } finally {
    isLoading.value = false;
  }
});

// Funciones para manejar la edición del perfil
const startEditing = () => {
  if (user.value) {
    editUser.value = { ...user.value }; // Clona el usuario actual
    isEditing.value = true;
  }
};

const cancelEditing = () => {
  isEditing.value = false;
  editUser.value = { id: 0, name: "", email: "" };
};

const updateUser = async () => {
  if (editUser.value) {
    try {
      const updatedUser = await updateUserProfile(editUser.value);
      if (!updatedUser) {
        throw new Error("No se pudo actualizar el perfil del usuario.");
      }

      // Actualizar los datos del usuario en la interfaz
      user.value = updatedUser;
      isEditing.value = true; // Cambiar el estado a false para mostrar la visualización del perfil
      error.value = ""; // Limpiar el mensaje de error si lo hubiera
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = String(err);
      }
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 8px;
}
</style>
