<template>
  <div class="card-container">
    <div class="flex self-center">
      <a href="#">
        <img
          class="rounded-t-lg h-[150px]"
          :src="thumbnail"
          alt="product image"
        />
      </a>
    </div>
    <div class="flex self-center">
      <a href="#">
        <h3 class="text-gray-900 font-semibold text-lg tracking-tight">
          {{ productName }}
        </h3>
      </a>
    </div>
    <div class="flex mt-2.5 mb-5">
      <img src="../assets/svg/star.svg" alt="rating" />
      <img src="../assets/svg/star.svg" alt="rating" />
      <img src="../assets/svg/star.svg" alt="rating" />
      <img src="../assets/svg/star.svg" alt="rating" />
      <img src="../assets/svg/star.svg" alt="rating" />
      <span
        class="bg-blue-100 text-sm font-semibold px-2.5 py-0.5 rounded ml-3"
      >
        {{ rating }}
      </span>
    </div>
    <div class="flex justify-between">
      <span class="text-xl font-bold text-gray-900"> € {{ price }},-</span>
    </div>
    <div class="flex justify-end mt-auto">
      <button
        href="#"
        class="bg-white hover:text-white rounded-full p-2 text-center"
      >
        <img
          v-if="isFavorite"
          src="../assets/svg/heart-filled-red.svg"
          alt="favorite"
        />
        <img
          v-else
          src="../assets/svg/heart-outline-grey.svg"
          alt="heart-outline"
        />
      </button>
      <button
        href="#"
        class="bg-white hover:text-white hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  productId: Number,
  productImage: String,
  productName: String,
  rating: Number,
  description: String,
  stock: Number,
  brand: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  thumbnail: String,
  isFavorite: { type: Boolean, default: false },
});
</script>

<style lang="scss" scoped>
.card-container {
  @apply flex flex-col bg-white p-4 w-[300px] h-[350px] shadow-md rounded-lg border border-gray-200;
}
</style>
