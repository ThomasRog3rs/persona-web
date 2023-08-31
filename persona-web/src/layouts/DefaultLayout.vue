<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main class="container mx-auto">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
</script>
