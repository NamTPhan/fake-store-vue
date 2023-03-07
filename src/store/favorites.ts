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
    addRemoveFavorite(product: never) {
      const indexOfProductInFavorites = this.favorites.indexOf(product);

      if (indexOfProductInFavorites === -1) {
        this.favorites.push(product);
      } else {
        this.favorites.splice(indexOfProductInFavorites, 1);
      }
    },
  },
});
