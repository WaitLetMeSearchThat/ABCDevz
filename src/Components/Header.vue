<script setup>
import ThemeSelector from '@/Components/ThemeSelector.vue';
// Note: In a real project, '@/Components/ThemeSelector.vue' should be the correct path
// relative to your Header component. I'm keeping the path you provided.
</script>


<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
   
    <nav class="flex items-center space-x-4 sm:space-x-6 text-base h-full">
      
      <router-link 
        to="/" 
        class="nav-base"
        active-class="nav-active"
      >
   
      </router-link>
      

    </nav>
        <ThemeSelector />
  </div>
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