import { quasar } from '@quasar/vite-plugin'

export default defineNuxtConfig({
  modules: [],
  nitro: {
    // experimental: {
    // Use nitropack v1 behavior
    // legacyExternals: true,
    // },
  },
  build: {
    transpile: ['quasar', '@happy-dom/global-registrator'],
  },
  css: [
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/fontawesome-v6/fontawesome-v6.css',
    '~/assets/styles/quasar.sass',
  ],
  vite: {
    define: {
      // "process.env.DEBUG": false,
    },
    ssr: {
      external: ['happy-dom'],
    },
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar-variables.sass',
      }),
    ],
  },
})
