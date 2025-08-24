<script setup lang="ts">
import { ref } from 'vue'
import { useReservasStore } from '~/stores/reservas'

definePageMeta({
  middleware: 'auth'
})

const reservasStore = useReservasStore()

const pista = ref('')
const hora = ref('')

const crearReserva = () => {
  if (!pista.value || !hora.value) return
  reservasStore.agregarReserva({
    id: Date.now(),
    pista: pista.value,
    hora: hora.value
  })
  navigateTo('/reservas') // redirigir al listado
}
</script>

<template>
  <div>
    <h1>Nueva Reserva</h1>
    <form @submit.prevent="crearReserva">
      <div>
        <label>Pista:</label>
        <input v-model="pista" type="text" />
      </div>
      <div>
        <label>Hora:</label>
        <input v-model="hora" type="time" />
      </div>
      <button type="submit">Crear</button>
    </form>
  </div>
</template>
