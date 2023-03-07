import { defineStore } from 'pinia';

export const useLoaderStore = defineStore('loader', {
  state: () => ({
    isLoading: false,
  }),
  getters: {
    getLoadingState: (state) => state.isLoading,
  },
  actions: {
    showLoader() {
      this.isLoading = true;
    },
    hideLoader() {
      this.isLoading = false;
    },
  },
});
