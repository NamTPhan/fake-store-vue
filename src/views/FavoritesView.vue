<template>
  <div class="min-h-full">
    <nav-bar />

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl py-3 px-4 sm:px-4 lg:px-6">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">
          Favorites
        </h1>
      </div>
    </header>

    <div class="flex flex-col md:flex-row justify-center flex-wrap py-4 px-6">
      <div
        v-for="product in getFavorites"
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
import { computed } from 'vue';

const favoriteStore = useFavoritetore();
const cartStore = useCartStore();

const getFavorites = computed(() => {
  return favoriteStore.getFavorites;
});

const isProductInFavorites = (product: IProduct): boolean => {
  return favoriteStore.getFavorites.some(
    (favorite: IProduct) => favorite.id === product.id
  );
};
</script>

<style scoped></style>
