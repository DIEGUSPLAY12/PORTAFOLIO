import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base debe coincidir con el nombre del repo en GitHub Pages:
// https://DIEGUSPLAY12.github.io/PORTAFOLIO/
export default defineConfig({
  base: '/PORTAFOLIO/',
  plugins: [react()],
})
