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
      toast('Successfully added to cart!', {
        type: 'success',
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
        transition: 'slide',
      });
    },

    removeFromCart(index: number) {
      this.cart.splice(index, 1);
      toast('Removed from cart!', {
        type: 'success',
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
        transition: 'slide',
      });
    },
  },
  persist: true,
});
