<template>
  <div class="home">
    <div class="min-h-full">
      <nav-bar />

      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-3 px-4 sm:px-4 lg:px-6">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900">
            Product Store
          </h1>
        </div>
      </header>

      <div class="flex flex-row flex-wrap mx-5 my-3">
        <button
          v-for="category in getProductCategories"
          :key="category"
          class="group relative h-12 w-48 mr-2 my-2 overflow-hidden rounded-lg bg-white text-lg shadow"
        >
          <div
            class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"
          ></div>
          <span class="relative text-black group-hover:text-white capitalize">
            {{ category }}</span
          >
        </button>
      </div>

      <div>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue';
import Banner from '@/components/Banner.vue';
import { computed, onMounted } from 'vue';
import { useProductsStore } from '../store/index';

const store = useProductsStore();

const getProductCategories = computed(() => {
  return store.getProductCategories;
});

onMounted(() => {
  store.fetchProductCategories();
});
</script>
