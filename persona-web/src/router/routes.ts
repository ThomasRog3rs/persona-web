import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/LandingPage.vue'),
    meta: {
      layout: 'Default',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/SignupPage.vue'),
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/ChatPage.vue'),
    meta: {
      layout: 'Dashboard',
    },
  },
];

export default routes;
