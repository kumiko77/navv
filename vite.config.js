import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

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
    // oml2d({
    //   models: [
    //     // {
    //     //   "path": "https://model.oml2d.com/HK416-1-normal/model.json",
    //     //   "position": [0, 60],
    //     //   "scale": 0.08,
    //     //   "stageStyle": {
    //     //     "height": 450
    //     //   }
    //     // }
    //   ],

    //   tips: {
    //     idleTips: {
    //       wordTheDay: (wordTheDayData) => {
    //         return wordTheDayData.hitokoto;
    //       }
    //     }
    //   }
    // })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
