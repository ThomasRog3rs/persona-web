import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from './router';
import { registerLayouts } from './layouts/register';

import './style.css';
import App from './App.vue';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);

registerLayouts(app);
app.mount('#app');
