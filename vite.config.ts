import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/css': path.resolve(__dirname, "./src/public/css"),
      '@/images': path.resolve(__dirname, "./src/public/images")
    }
  },
  plugins: [react()],
  base: "/Portfolio"
})
