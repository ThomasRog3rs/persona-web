import { RouteRecordRaw } from 'vue-router';

import DefaultLayout from '../layouts/DefaultLayout.vue';
import DashboardLayout from '../layouts/DashboardLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/LandingPage.vue'),
    meta: {
      layout: DefaultLayout,
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
      layout: DashboardLayout,
    },
  },
  {
    path: '/communities',
    name: 'Chat',
    component: () => import('../views/NotFound.vue'),
  },
];

export default routes;
