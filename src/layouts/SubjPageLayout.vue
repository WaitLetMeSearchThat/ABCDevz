<script setup>

import Header from '@/Components/Header.vue';

import Footer from '@/Components/Footer.vue';

</script>

<template>
    
 <div class="plain">
        
        <header class="shadow-2xl  h-16"> 
         <Header />
                <slot name="header" />
                
                
    


            
        </header>

        <main class="rev flex overflow-y-auto h-screen  "> 
              
            <slot /> 
            
        </main>
 
 <Footer />
 </div>
</template>

