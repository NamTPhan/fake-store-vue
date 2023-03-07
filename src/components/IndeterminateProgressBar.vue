<template>
  <div v-if="isLoading" class="indeterminate-progress-bar">
    <div class="indeterminate-progress-bar__progress" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLoaderStore } from '@/store/loader';

const loaderStore = useLoaderStore();

const isLoading = computed(() => {
  return loaderStore.isLoading;
});
</script>

<style lang="scss" scoped>
.indeterminate-progress-bar {
  @apply relative bg-[#d1d5db] h-[0.3rem] overflow-hidden;
}

.indeterminate-progress-bar__progress {
  @apply absolute bg-[#22c55e] bottom-0 top-0 w-1/2;

  /* Move the bar infinitely */
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: indeterminate-progress-bar;
}

@keyframes indeterminate-progress-bar {
  from {
    left: -50%;
  }
  to {
    left: 100%;
  }
}
</style>
