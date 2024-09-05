import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'react') // Direciona para a pasta 'react'
    }
  },
  build: {
    outDir: 'dist', // Define onde o build será gerado
  },
})
