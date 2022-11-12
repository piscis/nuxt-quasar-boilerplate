<template>
    <ClientOnly>
      <q-layout view="lHh Lpr lFf">
        <q-header
          elevated
          class="glossy"
          :key="leftDrawerOpen ? 'open' : 'close'"
        >
          <q-toolbar>
            <q-btn
              flat
              dense
              round
              @click="leftDrawerOpen = !leftDrawerOpen"
              aria-label="Menu"
              icon="menu"
            />
  
            <q-toolbar-title> Quasar App </q-toolbar-title>
            <div>Quasar v{{ $q.version }}</div>
          </q-toolbar>
        </q-header>
  
        <LeftDrawer v-model:open="leftDrawerOpen" />
  
        <q-page-container>
          <q-page>
            <slot />
          </q-page>
        </q-page-container>
      </q-layout>
    </ClientOnly>
  </template>
  
  <script setup lang="ts">
  const leftDrawerOpen = useState("open", () => false);
  </script>
  