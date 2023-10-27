<template>
  <div
    class="w-full bg-transparent rounded-lg my-3 lg:mx-3 overflow-hidden shadow-lg bg-slate-800 border"
  >
    <img
      class="w-full"
      :src="props.personaImgUrl"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-md mb-2">{{ props.personaName }}</div>
      <p class="text-gray-300 text-sm">
        {{ props.personaDescription }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <a
        href="#"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        v-for="tag in props.personaTags"
        >#{{ tag }}</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PersonaCardProps } from '../types/PersonaCardProps';
const { props } = defineProps<{ props: PersonaCardProps }>();
</script>
