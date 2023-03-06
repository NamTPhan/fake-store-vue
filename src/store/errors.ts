import { defineStore } from 'pinia';
import { IError } from '@/interfaces/error';

export const useErrorStore = defineStore('errors', {
  state: () => ({
    error: {
      modalType: undefined,
      statusCode: undefined,
      errorTitle: '',
      errorMessage: '',
    } as IError,
  }),
  getters: {
    getError: (state) => state.error,
  },
  actions: {
    setError(error: IError) {
      this.error = error;
    },
    resetError() {
      this.error = {
        modalType: undefined,
        statusCode: undefined,
        errorTitle: '',
        errorMessage: '',
      };
    },
  },
});
