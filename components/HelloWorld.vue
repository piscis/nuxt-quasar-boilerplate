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
        <p class="text-center">@NUXT3 Beta: vue@{{ version }}</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNuxtApp } from "#app";

export default defineComponent({
  name: "HelloWorld",
  setup(props, ctx) {
    const app = useNuxtApp();

    const version = computed(() => {
      return app.vueApp.version;
    });

    return { version };
  },
});
</script>
