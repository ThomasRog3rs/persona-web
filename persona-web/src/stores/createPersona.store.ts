import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCreatePersonaStore = defineStore(
  'createPersonaStore',
  () => {
    const isModalOpen = ref<boolean>(false);

    return { isModalOpen };
  },
  { persist: true }
);
