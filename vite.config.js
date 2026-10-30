import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/gransa-pars/',
  plugins: [
    tailwindcss(),
  ],
})
