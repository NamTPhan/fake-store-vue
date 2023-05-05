<template>
  <div
    class="rating-stars"
    :style="{ '--rating': rating }"
    :aria-label="`Rating of this product is ${rating} out of 5.`"
  />
  <span class="bg-blue-100 text-sm font-semibold px-2.5 py-0.5 rounded ml-3">
    {{ rating }}
  </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  rating: { type: Number, default: 0 },
});
</script>

<style lang="scss" scoped>
.rating-stars {
  --percent: calc(var(--rating) / 5 * 100%);

  @apply inline-block text-[25px] leading-[0.8];
  font-family: Times; // make sure ★ appears correctly

  &::before {
    content: '★★★★★';
    background: linear-gradient(
      90deg,
      #fde047 var(--percent),
      #e5e7eb var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
