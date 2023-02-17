<script lang="ts" setup>
const $q = useQuasar()
const route = useRoute()

const darkActive = computed(() => {
  if (route.query.dark === '1' || $q.dark.isActive) {
    return ['body--dark']
  }
  else {
    return ['body--light']
  }
})
if (route.query.dark === '1') {
  $q.dark.set(true)
}
else {
  $q.dark.set(false)
}

useHead({ bodyAttrs: { class: darkActive } })
</script>

<template>
  <NuxtLayout :key="darkActive.join('')">
    <NuxtPage />
  </NuxtLayout>
</template>
