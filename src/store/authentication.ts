import { defineStore } from 'pinia';

export const useAuthenticationStore = defineStore('authentication', {
  state: (): any => {
    return {
      token: null,
      user: null,
    };
  },
  getters: {
    getToken: (state) => state.token,
  },
  actions: {},
  persist: true,
});
