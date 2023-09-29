import { defineStore } from 'pinia';

export const useNavigationStore = defineStore('navigationStore', {
  state: () => ({
    activeLink: '' as string,
  }),
  actions: {
    setActivePage(page: string) {
      this.activeLink = page;
    },
  },
});
