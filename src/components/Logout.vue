<template>
  <button @click="logoutUser">Cerrar Sesión</button>
</template>
  
  <script setup>
import { useRouter } from "vue-router";
import { logout } from "../apis/apiUser/logout";

const router = useRouter();

const logoutUser = async () => {
  const token = localStorage.getItem("auth_token");
  if (!token) {
    console.error("No hay token de autenticación.");
    return;
  }

  try {
    await logout(token);
    localStorage.removeItem("auth_token");
    router.push({ name: "home" });
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
  }
};
</script>
  