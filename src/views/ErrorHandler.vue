<template>
  <modal
    :is-open="error.statusCode ? true : false"
    :modal-title="error.errorTitle"
  >
    <template #icon>
      <img src="../assets/svg/danger.svg" alt="danger-icon" />
    </template>
    <p>{{ error.errorMessage }}</p>
    <template #footer>
      <button
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        @click="resetErrorStore"
      >
        Close
      </button>
    </template>
  </modal>
</template>

<script setup lang="ts">
import Modal from '@/components/Modal.vue';
import { useErrorStore } from '@/store/errors';
import { computed } from 'vue';

const errorStore = useErrorStore();

const error = computed(() => errorStore.error);

const resetErrorStore = () => {
  errorStore.resetError();
};
</script>
