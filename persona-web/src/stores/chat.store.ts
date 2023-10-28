import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ChatBubbleProps } from '../types/ChatBubbleProps';
import { BotInfo } from '../types/BotInterface';

//#region data

const chatMessage: ChatBubbleProps = {
  isUser: false,
  message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat alias laudantium rem quibusdam quod labore. Ut officiis ipsam fugiat vero autem veritatis id consequatur!',
};

const currentBot: BotInfo = {
  name: 'bob',
  imageUrl: '',
  id: 1,
};
//#endregion

export const useChatStore = defineStore(
  'chatStore',
  () => {
    const messages = ref<ChatBubbleProps[]>([chatMessage]);
    const currentBot = ref<BotInfo>();

    function addMessage(message: ChatBubbleProps) {
      messages.value.push(message);
    }

    function setCurrentBot(bot: BotInfo) {
      currentBot.value = bot;
    }

    for (let i = 0; i < 6; i++) {
      const isUser = i % 2 === 0; // Alternating between true and false
      const messageText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat alias laudantium rem quibusdam quod labore. Ut officiis ipsam fugiat vero autem veritatis id consequatur!`;

      const chatMessage: ChatBubbleProps = {
        isUser,
        message: messageText,
      };

      addMessage(chatMessage);
    }
    return { currentBot, messages, addMessage, setCurrentBot };
  },
  { persist: true }
);
