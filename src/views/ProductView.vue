<template>
  <div class="bg-white">
    <div class="pt-6">
      <!-- Image gallery -->
      <div
        class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-x-8 lg:px-8"
      >
        <div class="hidden overflow-hidden rounded-lg lg:block">
          <img
            :src="productInfo?.images?.[0]"
            alt="product-image-1"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="overflow-hidden rounded-lg">
            <img
              :src="productInfo?.images?.[1]"
              alt="product-image-2"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img
              :src="productInfo?.images?.[2]"
              alt="product-image-3"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div class="sm:overflow-hidden sm:rounded-lg col-span-2">
          <img
            :src="productInfo?.images?.[3]"
            alt="product-image-4"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl capitalize">
            {{ productInfo?.title }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="text-2xl font-bold tracking-tight mb-1">
            Product information
          </h2>
          <p class="text-2xl tracking-tight">€&nbsp;{{ productInfo?.price }}</p>

          <!-- Rating -->
          <div class="mt-4">
            <h3 class="sr-only">Rating</h3>
            <div class="flex items-center">
              <RatingStars :rating="productInfo?.rating" />
            </div>
          </div>

          <div class="mt-5">
            <div>
              <h3 class="text-l font-medium">
                Stock: {{ productInfo?.stock }}
              </h3>
              <h3 class="text-l font-medium">
                Discount: {{ productInfo?.discountPercentage }}&nbsp;%
              </h3>
            </div>

            <button
              class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 py-3 px-8 text-base font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              @click="cartStore.addToCart(productInfo)"
            >
              Add to Cart
            </button>

            <banner
              mobile-message="Free shipping over €&nbsp;100"
              desktop-message="Free shipping on orders over €&nbsp;100"
            />
          </div>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">
                {{ productInfo?.description }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-xl font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-2">
              <p class="text-md text-gray-600">
                Brand:&nbsp;{{ productInfo?.brand }}
              </p>
              <p class="text-md capitalize text-gray-600">
                Category:&nbsp;{{ productInfo?.category }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/store/products';
import { useCartStore } from '@/store/cart';
import { computed } from 'vue';
import RatingStars from '@/components/RatingStars.vue';

const route = useRoute();
const productStore = useProductsStore();
const cartStore = useCartStore();

const productInfo = computed(() => {
  return productStore.getProductInfo;
});

productStore.fetchSingleProduct(Number(route.params.id));
</script>
