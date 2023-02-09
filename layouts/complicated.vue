<script setup lang="ts">
const leftDrawerOpen = useState('open', () => false)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      :key="leftDrawerOpen ? 'open' : 'close'"
      elevated
      class="glossy"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
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
</template>
