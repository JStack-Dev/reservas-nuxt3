<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useReservasStore } from '~/stores/reservas'

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const router = useRouter()
const reservasStore = useReservasStore()

const id = Number(route.params.id)

// asegurarse de cargar reservas al entrar
onMounted(() => {
  reservasStore.cargarReservas()
})

const reserva = computed(() =>
  reservasStore.lista.find(r => r.id === id)
)

const pista = ref('')
const hora = ref('')

// sincronizar cuando haya datos
onMounted(() => {
  if (reserva.value) {
    pista.value = reserva.value.pista
    hora.value = reserva.value.hora
  }
})

const actualizarReserva = () => {
  if (!reserva.value) return
  reservasStore.editarReserva(id, { pista: pista.value, hora: hora.value })
  router.push('/reservas')
}
</script>

<template>
  <div v-if="reserva">
    <h1>Editar Reserva</h1>
    <form @submit.prevent="actualizarReserva">
      <div>
        <label>Pista:</label>
        <input v-model="pista" type="text" />
      </div>
      <div>
        <label>Hora:</label>
        <input v-model="hora" type="time" />
      </div>
      <button type="submit">Guardar cambios</button>
    </form>
  </div>

  <div v-else>
    <h1>Reserva no encontrada</h1>
    <NuxtLink to="/reservas">⬅ Volver al listado</NuxtLink>
  </div>
</template>
