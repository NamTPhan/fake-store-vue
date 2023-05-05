import { IProduct } from '@/interfaces/product';
import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';

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
        toast('Removed from favorites!', {
          type: 'success',
          autoClose: 1000,
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
          transition: 'slide',
        });
      } else {
        this.favorites.push(product);
        toast('Successfully added to favorites!', {
          type: 'success',
          autoClose: 1000,
          position: toast.POSITION.TOP_RIGHT,
          theme: 'colored',
          transition: 'slide',
        });
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
