<template>
  <div class="card-container">
    <div class="flex self-center">
      <img
        class="rounded-t-lg h-[150px] cursor-pointer"
        :src="thumbnail"
        :alt="productName"
        @click="router.push({ name: 'ProductInfo', params: { id: productId } })"
      />
    </div>
    <div class="flex self-center">
      <a href="#">
        <h3 class="text-gray-900 font-semibold text-lg tracking-tight">
          {{ productName }}
        </h3>
      </a>
    </div>
    <div class="flex mt-2.5 mb-5">
      <RatingStars :rating="rating" />
    </div>
    <div class="flex justify-between">
      <span class="text-xl font-bold text-gray-900">€&nbsp;{{ price }},-</span>
    </div>
    <div class="flex justify-end mt-auto">
      <button
        class="bg-white hover:text-white rounded-full p-2 text-center"
        @click="favoriteChange"
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
        class="bg-white hover:text-white hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
        @click="addToCart"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import RatingStars from './RatingStars.vue';

const router = useRouter();

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

const emit = defineEmits(['handleFavoriteChange', 'handleAddToCart']);

const favoriteChange = () => {
  emit('handleFavoriteChange');
};

const addToCart = () => {
  emit('handleAddToCart');
};
</script>

<style lang="scss" scoped>
.card-container {
  @apply flex flex-col bg-white p-4 w-[300px] h-[350px] shadow-md rounded-lg border border-gray-200;
}
</style>
