<template>
  <div class="home">
    <div class="min-h-full">
      <nav-bar />

      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-4 lg:px-6">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900">Store</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="h-96 rounded-lg border-4 border-dashed border-gray-200">
              {{ getProductCategories }}
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import { computed, onMounted } from "vue";
import { useProductsStore } from "../store/index";

const store = useProductsStore();

const getProductCategories = computed(() => {
  return store.getProductCategories;
});

onMounted(() => {
  store.fetchProductCategories();
});
</script>
NavBar
