import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/city-morgue-site/', // ТАК ПУТИ НЕ СЛОМАЮТСЯ НА GITHUB PAGES
  server: {
    open: true
  }
})