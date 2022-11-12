import { quasar } from "@quasar/vite-plugin";

export default defineNuxtConfig({
  build: {
    transpile: ["quasar"],
  },
  //ssr: false,
  css: [
    "@quasar/extras/roboto-font/roboto-font.css",
    "@quasar/extras/material-icons/material-icons.css",
    "@quasar/extras/fontawesome-v6/fontawesome-v6.css",
    "~/assets/quasar.sass",
  ],
  vite: {
    define: {
      // "process.env.DEBUG": false,
    },
    plugins: [
      quasar({
        sassVariables: "assets/quasar-variables.sass",
      }),
    ],
  },
});
