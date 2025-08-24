import { defineStore } from 'pinia'

export const useReservasStore = defineStore('reservas', {
  state: () => ({
    lista: [] as { id: number; pista: string; hora: string }[]
  }),
  actions: {
    cargarReservas() {
      const data = localStorage.getItem('reservas')
      if (data) {
        this.lista = JSON.parse(data)
      }
    },
    guardarReservas() {
      localStorage.setItem('reservas', JSON.stringify(this.lista))
    },
    agregarReserva(reserva: { id: number; pista: string; hora: string }) {
      this.lista.push(reserva)
      this.guardarReservas()
    },
    eliminarReserva(id: number) {
      this.lista = this.lista.filter(r => r.id !== id)
      this.guardarReservas()
    },
    editarReserva(id: number, datos: { pista: string; hora: string }) {
      const index = this.lista.findIndex(r => r.id === id)
      if (index !== -1) {
        this.lista[index] = { ...this.lista[index], ...datos }
        this.guardarReservas()
      }
    }
  }
})
