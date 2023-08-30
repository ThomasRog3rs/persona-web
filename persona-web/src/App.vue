<template>
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
