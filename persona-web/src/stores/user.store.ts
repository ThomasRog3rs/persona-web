import { defineStore } from 'pinia';

interface userInfo {
  name: string;
  email: string;
  jwt: string;
  userId: number; //make this a GUID?
}

export const useUserAuthStore = defineStore('userAuthStore', {
  state: () => ({
    loggedIn: false as boolean,
    jwt: null, //read from localstorage
  }),
  actions: {},
});
