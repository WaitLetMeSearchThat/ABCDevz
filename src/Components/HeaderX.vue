<script setup>
import ThemeSelector from '@/Components/ThemeSelector.vue';
</script>


<template>
  <ThemeSelector />
</template>

<style scoped>
/* Base class for navigation links */
.nav-base {
    /* Using simple Tailwind classes here instead of complex custom @apply directives */
    @apply transition duration-150 font-medium py-2 px-3 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-700;
}
/* Active class for the current route */
.nav-active {
    @apply text-indigo-700 bg-indigo-100 shadow-sm font-semibold;
}
</style>