<template>
  <div class="bg-amber-400 my-3 rounded-xl">
    <div class="mx-2 max-w-7xl py-3 px-3">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex w-0 flex-1 items-center">
          <span class="flex rounded-lg p-2">
            <img src="../assets/svg/mega-phone.svg" alt="alert" />
          </span>
          <p class="ml-3 truncate font-medium text-white">
            <span class="md:hidden">{{ mobileMessage }}</span>
            <span class="hidden md:inline">{{ desktopMessage }}</span>
          </p>
        </div>
        <div
          v-if="hasActionButton"
          class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto"
        >
          <a
            href="#"
            class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >Learn more</a
          >
        </div>
        <div
          v-if="hasCloseButton"
          class="order-2 flex-shrink-0 sm:order-3 sm:ml-3"
        >
          <button
            type="button"
            class="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
          >
            <span class="sr-only">Dismiss</span>
            <img src="../assets/svg/cross-white.svg" alt="dismiss" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  mobileMessage: String,
  desktopMessage: String,
  hasCloseButton: {
    type: Boolean,
    default: false,
  },
  hasActionButton: {
    type: Boolean,
    default: false,
  },
});
</script>
