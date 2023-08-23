import { defineStore } from 'pinia';

export const useCountStore = defineStore('countStore', {
  state: () => ({
    count: 0 as number,
  }),
  actions: {
    incrementCount(increment: number) {
      this.count += increment;
    },
    resetCount() {
      this.count = 0;
    },
  },
});
