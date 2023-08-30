<template>
  <DefaultLayout> <router-view /> </DefaultLayout>
  <DashboardLayout><router-view /></DashboardLayout>
  <component :is="layout">
    <router-view />
  </component>
  <header>
    <router-view
      name="navbar"
      v-if="
        $route.name !== 'Login' &&
        $route.name !== 'Signup' &&
        $route.name !== 'Chat'
      "
    >
      <NavBar></NavBar>
    </router-view>
  </header>
  <main class="container mx-auto">
    <router-view></router-view>
  </main>
  <router-view
    name="footer"
    v-if="$route.name !== 'Login' && $route.name !== 'Signup'"
    ><Footer
  /></router-view>
</template>
<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => {
  const layout = route?.meta?.layout;
  console.log(layout);
  if (layout) {
    console.log(`${layout}-Layout`);
    return `${layout}-Layout`;
  }
  return 'div';
});
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
