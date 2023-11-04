<template>
  <div class="min-w-full lg:grid lg:grid-cols-3">
    <div class="bg-[#1d2840] lg:col-span-1">
      <div class="mx-3 my-3">
        <div class="relative text-gray-200">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6 text-gray-300"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input
            type="search"
            class="block w-full py-2 pl-10 bg-gray-100 text-black rounded outline-none"
            name="search"
            placeholder="Search"
            required
          />
        </div>
      </div>

      <ul class="overflow-auto h-[32rem]">
        <h2 class="my-2 mb-2 ml-2 text-lg text-gray-200">Chats</h2>
        <li>
          <ChatBotLink
            v-for="bot in botStore.availableBots"
            :props="bot"
            :key="bot.id"
          ></ChatBotLink>
        </li>
      </ul>
    </div>
    <div class="hidden lg:col-span-2 lg:block">
      <div class="w-full">
        <div class="relative flex items-center p-3 border-b border-gray-300">
          <img
            class="object-cover w-10 h-10 rounded-full"
            :src="botStore.currentBot?.imageUrl"
            alt="username"
          />
          <span class="block ml-2 font-bold text-gray-200">{{
            botStore.currentBot?.name
          }}</span>
          <span
            class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"
          >
          </span>
        </div>
        <div
          ref="chatContainer"
          class="relative w-full p-6 overflow-y-auto h-[40rem] scroll-bar"
        >
          <ul class="space-y-2">
            <ChatBubble
              v-for="message in chatStore.messages"
              :props="message"
            ></ChatBubble>
          </ul>
        </div>

        <div class="flex items-center justify-between w-full p-3 bg-[#172034]">
          <input
            type="text"
            placeholder="Message"
            class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-lg outline-none text-gray-700"
            name="message"
            v-model="messageContent"
            required
          />

          <button type="submit" @click="postMessage">
            <svg
              class="w-5 h-5 text-gray-200 origin-center transform rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { ChatBubbleProps } from '../types/ChatBubbleProps';
import ChatBubble from '../components/ChatBubble.vue';
import { useNavigationStore } from '../stores/navigation.store';
import { useChatStore } from '../stores/chat.store';
import { useBotStore } from '../stores/bot.store';
import ChatBotLink from '../components/ChatBotLink.vue';

const naviagtionStore = useNavigationStore();
naviagtionStore.setActivePage('/chat');

const chatStore = useChatStore();
const botStore = useBotStore();
const chatContainer = ref();

const messageContent = ref<string>();
const postMessage = () => {
  if (messageContent.value == undefined || messageContent.value === '') return;
  const chatMessage: ChatBubbleProps = {
    isUser: true,
    message: messageContent.value,
  };
  chatStore.addMessage(chatMessage);
  messageContent.value = '';
  scrollChatToBottom();
};

const handlePostMessageHotKey = (e: any) => {
  if (e.keyCode == 13) {
    postMessage();
  }
};

const scrollChatToBottom = () => {
  const container = chatContainer.value;
  if (container != null) {
    setTimeout(() => {
      container.scrollTo(0, container.scrollHeight);
    }, 1);
  }
};

onMounted(async () => {
  botStore.getAvailableBots();
  botStore.setCurrentBot(1);
  document.addEventListener('keydown', handlePostMessageHotKey);
  scrollChatToBottom();
});

onUnmounted(async () => {
  document.removeEventListener('keydown', handlePostMessageHotKey);
});
</script>

<style>
.scroll-bar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.scroll-bar::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.scroll-bar::-webkit-scrollbar-thumb {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, #8b5cf6),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, #7c3aed)
  );
}
</style>
