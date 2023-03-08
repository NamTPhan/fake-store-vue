import { IProduct } from '@/interfaces/product';
import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';

export const useCartStore = defineStore('cart', {
  state: (): any => ({
    cart: [],
  }),
  getters: {
    getCartItems: (state) => state.cart,
  },
  actions: {
    addToCart(product: IProduct) {
      this.cart.push(product);
      toast('Added to shopping cart', {
        type: 'success',
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
        transition: 'slide',
      });
    },

    removeFromCart(index: number) {
      this.cart.splice(index, 1);
      toast('Removed from shopping cart', {
        type: 'success',
        autoClose: 2000,
        position: toast.POSITION.TOP_RIGHT,
        transition: 'slide',
      });
    },
  },
  persist: true,
});
