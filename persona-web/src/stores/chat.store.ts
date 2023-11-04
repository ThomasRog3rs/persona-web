import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ChatBubbleProps } from '../types/ChatBubbleProps';

//#region data
const chatMessage: ChatBubbleProps = {
  isUser: false,
  message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat alias laudantium rem quibusdam quod labore. Ut officiis ipsam fugiat vero autem veritatis id consequatur!',
};
//#endregion

export const useChatStore = defineStore(
  'chatStore',
  () => {
    const messages = ref<ChatBubbleProps[]>([chatMessage]);

    function getMessages() {
      //Get messages for current bot from the API
      messages.value = [chatMessage];
      for (let i = 0; i < 6; i++) {
        const isUser = i % 2 === 0; // Alternating between true and false
        const messageText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat alias laudantium rem quibusdam quod labore. Ut officiis ipsam fugiat vero autem veritatis id consequatur!`;

        const chatMessage: ChatBubbleProps = {
          isUser,
          message: messageText,
        };

        messages.value.push(chatMessage);
      }
    }

    function addMessage(message: ChatBubbleProps) {
      messages.value.push(message);
    }

    getMessages();
    return { messages, addMessage, getMessages };
  },
  { persist: true }
);
