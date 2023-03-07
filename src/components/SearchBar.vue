<template>
  <div class="flex w-full">
    <input
      :id="id"
      class="w-full bg-[#F2F2F2] px-3 py-1 rounded-2xl rounded-r-none focus:outline-none"
      :classes="classes"
      type="text"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    />
    <div class="bg-[#F2F2F2] rounded-r-2xl h-full">
      <button
        class="bg-[#0ea5e9] rounded-full h-full p-2"
        @click="handleSearch"
      >
        <img src="../assets/svg/search.svg" alt="search" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: String,
  name: String,
  placeholder: String,
  modelValue: String,
  classes: String,
  searchButtonAction: Function,
});

// For using v-model with custom component
const emit = defineEmits(['update:modelValue', 'handleSearch']);
const updateValue = (event: any) => {
  emit('update:modelValue', event.target.value);
};

const handleSearch = () => {
  emit('handleSearch');
};
</script>
