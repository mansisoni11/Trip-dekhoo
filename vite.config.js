import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
     // or '0.0.0.0'
     allowedHosts: [
     "b957-2409-40c1-403f-800a-fd30-e63-bdcf-2df9.ngrok-free.app"]
  },
})
