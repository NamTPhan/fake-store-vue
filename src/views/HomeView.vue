<template>
  <div class="min-h-full">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl py-3 px-4 sm:px-4 lg:px-6">
        <h1 class="text-2xl font-bold tracking-tight text-center">
          Product Store
        </h1>
      </div>
    </header>

    <div class="flex flex-row flex-wrap justify-center mx-5 my-3">
      <select
        id="categories"
        v-model="selectedCategory"
        class="md:hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        @change="
          selectedCategory !== ''
            ? getProductsFromCategory(selectedCategory)
            : productStore.fetchAllProducts()
        "
      >
        <option value="" selected>Select a category</option>
        <option
          v-for="category in getProductCategories"
          :key="category"
          :value="category"
        >
          {{ category.replace('-', ' ') }}
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
          {{ category.replace('-', ' ') }}</span
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
          :product-id="product.id"
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
import ProductCard from '@/components/ProductCard.vue';
import { IProduct } from '@/interfaces/product';
import { useCartStore } from '@/store/cart';
import { useFavoritetore } from '@/store/favorites';
import { useProductsStore } from '@/store/products';
import { computed, onMounted, ref } from 'vue';

const selectedCategory = ref('');

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
