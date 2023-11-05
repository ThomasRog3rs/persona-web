<template>
  <div v-if="isAuthenticated">
    <header>
      <AuthNavBar></AuthNavBar>
    </header>
    <main class="mx-auto">
      <router-view></router-view>
    </main>
    <CreatePersonaModal></CreatePersonaModal>
  </div>
</template>

<script setup lang="ts">
import AuthNavBar from '../components/AuthNavBar.vue';
import CreatePersonaModal from '../components/CreatePersonaModal.vue';

import { onBeforeMount } from 'vue';

import { useAuthStore } from '../stores/auth.store';
import { useUserStore } from '../stores/user.store';

import router from '../router';

const authStore = useAuthStore();
const userStore = useUserStore();
const isAuthenticated = authStore.user !== null;

onBeforeMount(() => {
  if (!isAuthenticated) {
    router.push('/login');
  } else {
    userStore.getUserDetails();
  }
});
</script>
