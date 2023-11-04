import { defineStore } from 'pinia';
import { ref } from 'vue';
import { BotInfo } from '../types/BotInterface';

export const useBotStore = defineStore(
  'botStore',
  () => {
    const availableBots = ref<BotInfo[]>();
    const currentBot = ref<BotInfo>();

    function setCurrentBot(botId: number) {
      const selectedBot: BotInfo | undefined = availableBots.value?.find(
        (x) => x.id === botId
      );
      if (selectedBot || selectedBot != undefined) {
        currentBot.value = selectedBot;
      } else {
        console.error(`bot with ID [${botId}] could not be found`);
      }
    }

    function getAvailableBots() {
      //Make API call
      availableBots.value = [
        {
          name: 'Jane Doe',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
          id: 1,
        },
        {
          name: 'John Doe',
          imageUrl:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
          id: 2,
        },
        {
          name: 'Dave',
          imageUrl:
            'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
          id: 3,
        },
      ];
    }

    return { currentBot, availableBots, getAvailableBots, setCurrentBot };
  },
  { persist: true }
);
