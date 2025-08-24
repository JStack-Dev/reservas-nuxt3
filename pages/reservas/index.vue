<script setup lang="ts">
import { useReservasStore } from '~/stores/reservas'

definePageMeta({
  middleware: 'auth'
})

const reservasStore = useReservasStore()
</script>

<template>
  <div>
    <h1>Reservas</h1>
    <NuxtLink to="/reservas/nueva">➕ Nueva reserva</NuxtLink>

    <ul>
      <li v-for="r in reservasStore.lista" :key="r.id">
        <NuxtLink :to="`/reservas/${r.id}`">
          Pista: {{ r.pista }} - Hora: {{ r.hora }}
        </NuxtLink>

        <!-- Editar -->
        <NuxtLink :to="`/reservas/${r.id}/editar`">✏ Editar</NuxtLink>

        <!-- Eliminar -->
        <button @click="reservasStore.eliminarReserva(r.id)">🗑 Eliminar</button>
      </li>
    </ul>
  </div>
</template>
