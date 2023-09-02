import { defineStore } from 'pinia';

interface UserDetails {
  createdAt: string;
  email: string;
  permissions: string[];
  role: string;
  state: string;
  userId: string;
}

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userDetails:
      (JSON.parse(localStorage.getItem('user') as string)
        ?.userDetails as UserDetails) ?? null,
  }),
  actions: {
    getUserDetails() {
      this.userDetails =
        (JSON.parse(localStorage.getItem('user') as string)
          ?.userDetails as UserDetails) ?? null;
      console.log(this.userDetails);
    },
  },
});
