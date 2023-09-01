import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') as string) ?? null,
    returnUrl: null,
  }),
  actions: {
    async login(email: string, password: string) {
      const user = await axios.post('https://localhost:51148/Account/sign-in', {
        email,
        password,
      });

      this.user = user.data;
      localStorage.setItem('user', JSON.stringify(user.data));
      console.log(user);
      router.push('/chat');
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    },
  },
});