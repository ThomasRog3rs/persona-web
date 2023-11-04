<template>
  <a
    class="flex items-center px-3 py-2 text-sm transition hover:bg-primary-light duration-150 ease-in-out cursor-pointer focus:outline-none"
    :class="{ 'bg-primary': botStore.currentBot?.id === props.id }"
    @click="updateCurrentBot(props.id)"
  >
    <img
      class="object-cover w-10 h-10 rounded-full"
      :src="props.imageUrl"
      alt="username"
    />
    <div class="w-full pb-2">
      <div class="flex justify-between">
        <span class="block ml-2 font-semibold text-gray-200"
          >{{ props.name }}
        </span>
        <span class="block ml-2 text-sm text-gray-200">25 minutes</span>
      </div>
      <span class="block ml-2 text-sm text-gray-200"
        >Indeed, it is true, my inquisitive subject...</span
      >
    </div>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useBotStore } from '../stores/bot.store';
import { useChatStore } from '../stores/chat.store';
import { BotInfo } from '../types/BotInterface';

const botStore = useBotStore();
const chatStore = useChatStore();
const { props } = defineProps<{ props: BotInfo }>();

const updateCurrentBot = (botId: number) => {
  botStore.setCurrentBot(botId);
  chatStore.getMessages();
};
</script>
