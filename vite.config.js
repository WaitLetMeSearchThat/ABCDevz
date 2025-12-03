// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

// GitHub Pages deployment configuration for repository 'ABCDevz'
export default defineConfig({
  plugins: [vue()],
  base: '/ABCDevz/', // <-- Repository name as base path
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})