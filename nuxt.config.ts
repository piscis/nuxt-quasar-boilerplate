import { defineNuxtConfig } from 'nuxt3'
// import vue from '@vitejs/plugin-vue'
import { quasar } from '@quasar/vite-plugin'

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/quasar.sass',
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
  ],
  vite: {
    //define: {
    //  __QUASAR_SSR__: true,
    //  __QUASAR_SSR_SERVER__: true
    //},
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar.variables.sass',
      })
    ]
  }
})
