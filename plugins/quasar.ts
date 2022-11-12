import * as components from 'quasar'

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.use(components.Quasar, {
    plugins: {},
    components,
  });
});
