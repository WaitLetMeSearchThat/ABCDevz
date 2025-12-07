<script setup>
// Imports needed for the structure provided by the user
import Header from '@/Components/Header.vue';
import Footer from '@/Components/Footer.vue';

</script>

<template>
  <!-- 
    Structure based on the provided layout: Header, Main (with router-view), and Footer.
    Using flex-col and min-h-screen ensures the content takes full height and the footer sticks to the bottom.
  -->
  <div class=" flex flex-col ">
    <!-- Global Header -->
    
<div class="shadow-2xl sticky top-0 z-40">
<Header />
</div>


    <!-- Main Content Area: Renders the routed content and uses flex-grow to occupy space -->
    <main class="flex-grow  h-screen min-h-screen "> 
      <!-- 
        The <router-view> component renders the component 
        for the current route path (landingpage.vue, /process, /webdev, etc.).
      -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Global Footer -->
    <Footer />
  </div>
</template>

<style>
/* IMPORTANT: @import MUST come first in the stylesheet. 
  This fixes the [vite:css][postcss] error.
*/
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

/* Base styling for the application */
#app {
  font-family: 'Inter', sans-serif;
}

/* Basic transition for smoother page changes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>