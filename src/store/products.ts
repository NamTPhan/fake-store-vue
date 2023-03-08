import { defineStore } from 'pinia';
import axios from 'axios';
import { IProduct } from '@/interfaces/product';

interface State {
  categories: string[];
  products: IProduct[];
  productInfo: IProduct | undefined;
}

export const useProductsStore = defineStore('products', {
  state: (): State => ({
    categories: [],
    products: [],
    productInfo: undefined,
  }),
  getters: {
    getProductCategories: (state) => state.categories,
    getProducts: (state) => state.products,
    getProductInfo: (state) => state.productInfo,
  },
  actions: {
    async fetchProductCategories() {
      axios
        .get<any>('https://dummyjson.com/products/categories')
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));
    },

    async fetchProductsFromCategory(category: string) {
      axios
        .get<any>(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.products = res.data.products))
        .catch((err) => console.log(err));
    },

    async fetchSingleProduct(productId: number) {
      axios
        .get<any>(`https://dummyjson.com/products/${productId}`)
        .then((res) => (this.productInfo = res.data))
        .catch((err) => console.log(err));
    },

    async fetchAllProducts() {
      axios
        .get<any>('https://dummyjson.com/products')
        .then((res) => (this.products = res.data.products))
        .catch((err) => console.log(err));
    },

    async searchProducts(searchQuery: string) {
      axios
        .get<any>(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => (this.products = res.data.products))
        .catch((err) => console.log(err));
    },
  },
  persist: true,
});
