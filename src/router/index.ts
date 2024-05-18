// router.ts (o el nombre de tu archivo de rutas)
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';
import LoginView from '../views/LoginView.vue';

// Importación dinámica para AboutView (corrección)
const AboutView = () => import('../views/AboutView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView // Carga AboutView de forma dinámica
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true } // Protege la ruta del dashboard (opcional)
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
});

// Navigation guard para proteger rutas (opcional)
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('auth_token'); // Reemplaza con tu lógica de autenticación

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' }); // Redirige al login si no está autenticado
  } else {
    next(); // Continúa la navegación
  }
});

export default router;
