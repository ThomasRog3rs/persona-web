import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import Login from './pages/LoginPage.vue';

const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: App },
    { path: '/login', name: 'Login', component: Login },
  ],
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
