import { defineNuxtPlugin } from 'nuxt3'
import { Quasar } from "quasar";

import "~/assets/styles/quasar.scss";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// To be used on app.use(Quasar, { ... })
const quasarUserOptions = {
  config: {},
  plugins: {},
};

/*
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Quasar, quasarUserOptions)
})
*/