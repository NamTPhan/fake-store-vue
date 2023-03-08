<template>
  <div
    class="relative z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
        >
          <div class="pointer-events-auto w-screen max-w-md">
            <div
              class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
            >
              <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2
                    class="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                  <div class="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      @click="handleCloseSideBar"
                    >
                      <span class="sr-only">Close panel</span>
                      <img src="../assets/svg/cross.svg" alt="close-sidebar" />
                    </button>
                  </div>
                </div>

                <div class="mt-8">
                  <div class="flow-root">
                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                      <li
                        v-for="(product, index) in productsInCart"
                        :key="product.id"
                        class="flex py-6"
                      >
                        <div
                          class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                        >
                          <img
                            :src="product.thumbnail"
                            :alt="product.title"
                            class="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div class="ml-4 flex flex-1 flex-col">
                          <div>
                            <div
                              class="flex justify-between text-base font-medium text-gray-900"
                            >
                              <h3>
                                <a href="#">{{ product.title }}</a>
                              </h3>
                              <p class="ml-4">€&nbsp;{{ product.price }},-</p>
                            </div>
                            <p
                              class="mt-1 text-sm text-left capitalize text-gray-500"
                            >
                              Category: {{ product.category }}
                            </p>
                          </div>
                          <div
                            class="flex flex-1 items-end justify-between text-sm"
                          >
                            <p class="text-gray-500">Qty 1</p>

                            <div class="flex">
                              <button
                                type="button"
                                class="font-medium text-red-500 hover:text-indigo-500"
                                @click="cartStore.removeFromCart(index)"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div
                  class="flex justify-between text-base font-medium text-gray-900"
                >
                  <p>Subtotal</p>
                  <p>€&nbsp;{{ cartTotal }}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div class="mt-6">
                  <a
                    href="#"
                    class="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-500"
                    >Checkout</a
                  >
                </div>
                <div
                  class="mt-6 flex justify-center text-center text-sm text-gray-500"
                >
                  <p>
                    or
                    <button
                      type="button"
                      class="font-medium text-sky-500 hover:text-indigo-500"
                      @click="handleCloseSideBar"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from '@/interfaces/product';
import { defineEmits, computed } from 'vue';
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const emit = defineEmits(['closeSideBar']);

const productsInCart = computed(() => {
  return cartStore.getCartItems;
});

const cartTotal = computed(() => {
  const initialValue = 0;
  const sumPrices = cartStore.getCartItems.reduce(
    (total: number, amount: IProduct) => (total += amount['price']),
    initialValue
  );

  return sumPrices;
});

const handleCloseSideBar = () => {
  emit('closeSideBar');
};
</script>

<style scoped></style>
