import { defineNuxtConfig } from 'nuxt3'
import { quasar } from '@quasar/vite-plugin'

const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/quasar.sass',
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
  ],
  serverMiddleware: [{ path: '/blub', handler: '~/server/test.ts' }],
  vite: {
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar.variables.sass',
      })
    ]
  }
})
