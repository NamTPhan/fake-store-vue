import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      categories: [],
    };
  },
  getters: {
    getProductCategories(state) {
      return state.categories;
    },
  },
  actions: {
    async fetchProductCategories() {
      try {
        axios
          .get<any>("https://dummyjson.com/products/categories")
          .then(res => (this.categories = res.data));
      } catch (err) {
        console.log(err);
      }
    },
  },
});
