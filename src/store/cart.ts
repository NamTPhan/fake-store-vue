import { IProduct } from '@/interfaces/product';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: (): any => {
    return {
      cart: [],
    };
  },
  getters: {
    getCartItems: (state) => state.cart,
  },
  actions: {
    addToCart(product: IProduct) {
      this.cart.push(product);
    },

    removeFromCart(index: number) {
      this.cart.splice(index, 1);
    },
  },
});
