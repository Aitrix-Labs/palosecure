import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/palosecure/',
  plugins: [react()],
  server: { port: 5176, strictPort: true },
})
