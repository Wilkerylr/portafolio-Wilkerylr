import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Nombre del repositorio en GitHub para GitHub Pages
  base: '/portafolio-Wilkerylr/',
  plugins: [react()],
})
