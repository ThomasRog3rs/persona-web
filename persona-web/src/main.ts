import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import Login from './pages/LoginPage.vue';
import LandingPage from './pages/LandingPage.vue';
import NotFound from './pages/NotFound.vue';
import Signup from './pages/SignupPage.vue';
import ChatPage from './pages/ChatPage.vue';

const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/', name: 'Home', component: LandingPage },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/chat', name: 'Chat', component: ChatPage },
  ],
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
