import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(),    AutoImport({
    imports:['vue'],
    eslintrc: {
      enabled: true
    }
  }),],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
