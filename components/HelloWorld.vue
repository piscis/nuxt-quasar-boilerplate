import { NuxtApp } from '#app';
<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <img
          alt="Quasar logo"
          src="~/assets/logo.svg"
          style="width: 200px; height: 200px"
        />
      </q-card-section>
      <q-card-section>
        <p class="text-center">@NUXT3 RC13: vue@{{ version }}</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
const app = useNuxtApp();

const version = computed(() => {
  return app.vueApp.version;
});
</script>
