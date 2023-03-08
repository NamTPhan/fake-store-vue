<template>
  <transition
    enter-from-class="opacity-0"
    enter-active-class="transition duration-300"
    leave-to-class="opacity-0"
    leave-active-class="transition duration-300"
  >
    <div
      v-if="isOpen"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <!--   Modal panel  -->
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div v-if="hasCloseButton" class="flex">
                <button class="ml-auto" @click="handleClose">
                  <img src="../assets/svg/cross.svg" alt="close-modal" />
                </button>
              </div>
              <div class="sm:flex sm:items-start">
                <div
                  v-if="slots.icon"
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10"
                >
                  <slot name="icon" />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    id="modal-title"
                    class="text-base font-semibold leading-6 text-gray-900"
                  >
                    {{ modalTitle }}
                  </h3>
                  <div class="mt-2">
                    <slot />
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, useSlots } from 'vue';

const slots = useSlots();

const props = defineProps({
  modalTitle: String,
  hasCloseButton: { type: Boolean, default: false },
  isOpen: { type: Boolean, default: false },
});

const emit = defineEmits(['handleCloseModal']);

const handleClose = () => {
  emit('handleCloseModal');
};
</script>
