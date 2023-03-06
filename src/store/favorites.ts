import { defineStore } from 'pinia';

export const useFavoritetore = defineStore('favorites', {
  state: (): any => {
    return {
      favorites: [],
    };
  },
  getters: {
    getFavorites: (state) => state.favorites,
  },
  actions: {
    addFavorite(product: never) {
      this.favorites.push(product);
    },

    removeFavorite(id: number) {
      const indexOfProductInCart = this.favorites.indexOf(id);
      this.favorites.splice(indexOfProductInCart, 1);
    },
  },
});
