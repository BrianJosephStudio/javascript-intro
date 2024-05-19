import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/apps/javascript-intro/',
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: "../../backend/apps/javascript-intro"
  },
  server: {
    port: 5002,
    // proxy: {
    //   '/apps/javascript-intro': {
    //     target: 'http://localhost:5000',
    //     changeOrigin: true,
    //     secure: false,
    //   }
    // },
  }
})
