import { createApp } from 'vue'
import App from './App.vue'
import router from './Router' 

// CRITICAL: This line imports the main CSS file where the 
// Tailwind directives (@tailwind base, @tailwind utilities) 
// are defined. This ensures Tailwind classes are available 
// throughout your application.
import './assets/main.css' 

const app = createApp(App)

// Use the router configuration
app.use(router)

// Mount the application to the '#app' element in index.html
app.mount('#app')