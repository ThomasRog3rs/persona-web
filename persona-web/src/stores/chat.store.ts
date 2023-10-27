import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ChatBubbleProps } from '../types/ChatBubbleProps';

interface BotInfo {
  name: string;
  imageUrl: string;
  id: number;
}

export const useChatStore = defineStore('chatStore', () => {
  const currentBot = ref<BotInfo>();
  const messages = ref<ChatBubbleProps[]>();
  return { currentBot, messages };
});
