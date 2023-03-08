<template>
  <div class="min-h-full">
    <nav-bar />

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl py-3 px-4 sm:px-4 lg:px-6">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">
          Product Store
        </h1>
      </div>
    </header>

    <div class="flex flex-row flex-wrap justify-center mx-5 my-3">
      <select
        id="categories"
        class="md:hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Select a category</option>
        <option
          v-for="category in getProductCategories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>

      <button
        v-for="category in getProductCategories"
        :key="category"
        class="hidden md:block group relative h-12 w-48 mr-2 my-2 overflow-hidden rounded-lg bg-white text-lg shadow"
        @click="getProductsFromCategory(category)"
      >
        <div
          class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"
        ></div>
        <span class="relative text-black group-hover:text-white capitalize">
          {{ category }}</span
        >
      </button>
    </div>

    <div class="flex flex-col md:flex-row justify-center flex-wrap py-4 px-6">
      <div
        v-for="product in getProducts"
        :key="product.id"
        class="flex justify-center mx-2 my-2"
      >
        <ProductCard
          :product-name="product.title"
          :price="product.price"
          :rating="product.rating"
          :thumbnail="product.thumbnail"
          :is-favorite="isProductInFavorites(product)"
          @handle-favorite-change="favoriteStore.addRemoveFavorite(product)"
          @handle-add-to-cart="cartStore.addToCart(product)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import ProductCard from '@/components/ProductCard.vue';
import { IProduct } from '@/interfaces/product';
import { useCartStore } from '@/store/cart';
import { useFavoritetore } from '@/store/favorites';
import { useProductsStore } from '@/store/products';
import { computed, onMounted } from 'vue';

const productStore = useProductsStore();
const favoriteStore = useFavoritetore();
const cartStore = useCartStore();

const getProductCategories = computed(() => {
  return productStore.getProductCategories;
});

const getProducts = computed(() => {
  return productStore.getProducts;
});

onMounted(() => {
  productStore.fetchProductCategories();
  productStore.fetchAllProducts();
});

const getProductsFromCategory = (category: string): void => {
  productStore.fetchProductsFromCategory(category);
};

const isProductInFavorites = (product: IProduct): boolean => {
  return favoriteStore.getFavorites.some(
    (favorite: IProduct) => favorite.id === product.id
  );
};
</script>
