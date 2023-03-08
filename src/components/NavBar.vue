<template>
  <nav class="bg-gray-600">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="../assets/logo.png" alt="Your Company" />
          </div>
          <span
            class="text-white ml-2 cursor-pointer"
            @click="router.push({ name: 'Home' })"
            >Fake Store</span
          >
        </div>
        <div class="hidden sm:block">
          <search-bar placeholder="Search in store" />
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <a
              href="#"
              class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Login</a
            >

            <button
              id="user-menu-button"
              type="button"
              class="flex max-w-xs items-center mx-2 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>

            <button type="button" @click="router.push({ name: 'Favorites' })">
              <span class="sr-only">View Favorites</span>
              <img src="../assets/svg/heart-filled-red.svg" alt="favorite" />
            </button>

            <!-- Profile dropdown -->
            <div class="relative mx-1">
              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div
                class="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  id="user-menu-item-0"
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  >Your Profile</a
                >
                <a
                  id="user-menu-item-2"
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  >Sign out</a
                >
              </div>
            </div>

            <button type="button" @click="toggleCartSideBar">
              <span class="sr-only">Cart</span>
              <img src="../assets/svg/cart.svg" alt="cart" />
            </button>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- <img src="../assets/svg/outline-bars-3.svg" alt="menu" /> -->
            <img src="../assets/svg/cross-white.svg" alt="close-menu" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state.TODO remove hidden -->
    <div id="mobile-menu" class="block md:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        <a
          href="#"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
          >Favorites</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Lorem ipsum</a
        >
      </div>
      <div class="border-t border-gray-700 pt-4 pb-3">
        <div class="space-y-1 px-2">
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Your Profile</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
  <indeterminate-progress-bar />
  <transition
    enter-from-class="opacity-0"
    enter-active-class="transition duration-300"
    leave-to-class="opacity-0"
    leave-active-class="transition duration-300"
  >
    <shopping-cart-side-bar
      v-if="isCartSideBarOpen"
      @close-side-bar="toggleCartSideBar"
  /></transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IndeterminateProgressBar from './IndeterminateProgressBar.vue';
import ShoppingCartSideBar from './ShoppingCartSideBar.vue';
import SearchBar from './SearchBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isCartSideBarOpen = ref(false);

const toggleCartSideBar = () => {
  isCartSideBarOpen.value = !isCartSideBarOpen.value;
};
</script>

<style scoped lang="scss"></style>
