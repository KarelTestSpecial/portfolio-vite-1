import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-vite-1/',
  plugins: [react()],
  define: {
    global: 'window',
  },
})