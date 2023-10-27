<template>
  <li
    class="flex"
    :class="{ 'justify-end': props.isUser, 'justify-start': !props.isUser }"
  >
    <div
      class="relative max-w-xl px-4 py-2 t rounded-lg shadow"
      :class="{
        'text-gray-700 bg-gray-100': props.isUser,
        'text-gray-100 bg-primary-light': !props.isUser,
      }"
    >
      <span class="block">{{ props.message }} </span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ChatBubbleProps } from '../types/ChatBubbleProps.ts';

const { props } = defineProps<{ props: ChatBubbleProps }>();
</script>
