<template>
  <header>
    <AuthNavBar></AuthNavBar>
  </header>
  <main class="mx-auto">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import AuthNavBar from '../components/AuthNavBar.vue';
import Footer from '../components/Footer.vue';
</script>
