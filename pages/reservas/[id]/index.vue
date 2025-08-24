<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useReservasStore } from '~/stores/reservas'

const route = useRoute()
const reservasStore = useReservasStore()

const reserva = reservasStore.lista.find(
  (r) => r.id === Number(route.params.id)
)
</script>

<template>
  <div v-if="reserva">
    <h1>Detalle de la Reserva</h1>
    <p><strong>Pista:</strong> {{ reserva.pista }}</p>
    <p><strong>Hora:</strong> {{ reserva.hora }}</p>

    <NuxtLink :to="`/reservas/${reserva.id}/editar`">✏ Editar</NuxtLink>
    <NuxtLink to="/reservas">⬅ Volver al listado</NuxtLink>
  </div>

  <div v-else>
    <h1>Reserva no encontrada</h1>
    <NuxtLink to="/reservas">⬅ Volver al listado</NuxtLink>
  </div>
</template>
