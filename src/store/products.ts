import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      categories: [],
      products: [],
      productInfo: null,
    };
  },
  getters: {
    getProductCategories(state) {
      return state.categories;
    },
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    async fetchProductCategories() {
      try {
        axios
          .get<any>('https://dummyjson.com/products/categories')
          .then((res) => (this.categories = res.data));
      } catch (err) {
        console.log(err);
      }
    },

    async fetchProductsFromCategory(category: string) {
      try {
        axios
          .get<any>(`https://dummyjson.com/products/category/${category}`)
          .then((res) => (this.products = res.data.products));
      } catch (err) {
        console.log(err);
      }
    },

    async fetchSingleProduct(productId: string | number) {
      try {
        axios
          .get<any>(`https://dummyjson.com/products/${productId}`)
          .then((res) => (this.productInfo = res.data));
      } catch (err) {
        console.log(err);
      }
    },

    async fetchAllProducts() {
      try {
        axios
          .get<any>('https://dummyjson.com/products')
          .then((res) => (this.products = res.data.products));
      } catch (err) {
        console.log(err);
      }
    },

    async searchProducts(searchQuery: string) {
      try {
        axios
          .get<any>(`https://dummyjson.com/products/search?q=${searchQuery}`)
          .then((res) => (this.products = res.data.products));
      } catch (err) {
        console.log(err);
      }
    },
  },
});
