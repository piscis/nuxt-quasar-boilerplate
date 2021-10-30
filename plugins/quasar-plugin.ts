import { defineNuxtPlugin } from '#app'
import { Quasar } from 'quasar';

export default defineNuxtPlugin(nuxtApp => {

  const quasarUserOptions = {
    plugins: {},
  };

  nuxtApp.vueApp.use(Quasar, quasarUserOptions)
  
})
