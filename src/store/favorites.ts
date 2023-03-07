import { IProduct } from '@/interfaces/product';
import { defineStore } from 'pinia';

export const useFavoritetore = defineStore('favorites', {
  state: (): any => ({
    favorites: [],
  }),
  getters: {
    getFavorites: (state) => state.favorites,
  },
  actions: {
    addRemoveFavorite(product: IProduct) {
      if (this.isProductInFavorites(product)) {
        this.favorites = this.favorites.filter(
          (favorite: IProduct) => favorite.id !== product.id
        );
      } else {
        this.favorites.push(product);
      }
    },

    isProductInFavorites(product: IProduct): boolean {
      return this.favorites.some(
        (favorite: IProduct) => favorite.id === product.id
      );
    },
  },
  persist: true,
});
