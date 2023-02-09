import { NuxtApp } from '#app';
<script setup lang="ts">
const app = useNuxtApp()
const route = useRoute()

const click = () => {
  const url = route.path === '/' ? '/complicated' : '/'
  navigateTo(url)
}

const version = computed(() => {
  return app.vueApp.version
})
</script>

<template>
  <div class="flex flex-center">
    <q-card>
      <q-card-section>
        <img
          alt="Quasar logo"
          src="~/assets/logo.svg"
          style="width: 200px; height: 200px"
        >
      </q-card-section>
      <q-card-section>
        <p class="text-center">
          @NUXT3.x: vue@{{ version }}
        </p>
        <div class="flex flex-center">
          <q-btn @click="click">
            HELLO
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
