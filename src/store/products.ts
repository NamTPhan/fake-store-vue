import { defineStore } from 'pinia';
import axios from 'axios';
import { IProduct } from '@/interfaces/product';
import { useErrorStore } from './errors';

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
      const errorStore = useErrorStore();
      axios
        .get<string[]>('https://dummyjson.com/products/categories')
        .then((res) => (this.categories = res.data))
        .catch((err) => {
          errorStore.setError({
            statusCode: err.status,
            errorTitle: 'Oops... Something went wrong...',
            errorMessage: err.data.message,
          });
        });
    },

    async fetchProductsFromCategory(category: string) {
      const errorStore = useErrorStore();
      axios
        .get<any>(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.products = res.data.products))
        .catch((err) => {
          errorStore.setError({
            statusCode: err.status,
            errorTitle: 'Oops... Something went wrong...',
            errorMessage: err.data.message,
          });
        });
    },

    async fetchSingleProduct(productId: number) {
      const errorStore = useErrorStore();
      axios
        .get<any>(`https://dummyjson.com/products/${productId}`)
        .then((res) => (this.productInfo = res.data))
        .catch((err) => {
          errorStore.setError({
            statusCode: err.status,
            errorTitle: 'Oops... Something went wrong...',
            errorMessage: err.data.message,
          });
        });
    },

    async fetchAllProducts() {
      const errorStore = useErrorStore();
      axios
        .get<any>('https://dummyjson.com/products')
        .then((res) => (this.products = res.data.products))
        .catch((err) => {
          errorStore.setError({
            statusCode: err.status,
            errorTitle: 'Oops... Something went wrong...',
            errorMessage: err.data.message,
          });
        });
    },

    async searchProducts(searchQuery: string | undefined) {
      const errorStore = useErrorStore();
      axios
        .get<any>(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => (this.products = res.data.products))
        .catch((err) => {
          errorStore.setError({
            statusCode: err.status,
            errorTitle: 'Oops... Something went wrong...',
            errorMessage: err.data.message,
          });
        });
    },
  },
  persist: true,
});
