import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import { oml2d } from 'vite-plugin-oh-my-live2d'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    UnoCSS(), 
    AutoImport({
      imports: ['vue'],
      eslintrc: {
        enabled: true
      }
    }),
    oml2d({
      models: [
        {
          path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
          position: [-10, 20]
        },
        {
          path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
          scale: 0.4,
          position: [0, 50],
          stageStyle: {
            height: 300
          }
        }
      ],

      tips: {
        idleTips: {
          wordTheDay: (wordTheDayData) => {
            return wordTheDayData.hitokoto;
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
