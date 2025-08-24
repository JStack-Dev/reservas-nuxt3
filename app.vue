<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useReservasStore } from '~/stores/reservas'

import { onMounted } from 'vue'

onMounted(() => {
  const auth = useAuthStore()
  auth.restoreSession()

  const reservasStore = useReservasStore()
  reservasStore.cargarReservas()
})

</script>

<template>
  <NuxtPage />
</template>
