<template>
  <nav-bar />
  <router-view />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
