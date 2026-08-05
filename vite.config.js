import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    entries: ['index.html', 'src/**/*.{js,ts,jsx,tsx}']
  },
  server: {
    watch: {
      ignored: ['**/android/**']
    }
  }
})
