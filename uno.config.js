import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  rules: [
    ['shadow-item', {'box-shadow': '0 0 0 1px rgba(35,38,59,.05), 0 1px 3px 0 rgba(35,38,59,.15)'}],
    ['shadow-item-hover', {'box-shadow': '0 0 0 1px rgba(0, 16, 255, .55), 0 1px 3px 0 rgba(0, 16, 255, .65)'}],
    ['shadow-menu-hover', {'box-shadow': '0 0 0 1px rgba(0, 16, 255, .35), 0 1px 3px 0 rgba(0, 16, 255, .45)'}],
  ]
})
