import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: (): any => {
    return {
      cart: [],
    };
  },
  getters: {
    getCartItems(state) {
      return state.cart;
    },
  },
  actions: {
    addToCart(product: never) {
      this.cart.push(product);
    },

    removeFromCart(id: number) {
      const indexOfProductInCart = this.cart.indexOf(id);
      this.cart.splice(indexOfProductInCart, 1);
    },
  },
});
