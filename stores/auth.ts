import { defineStore } from 'pinia'
import { navigateTo } from '#app'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { name: string }
  }),
  getters: {
    isAuthenticated: (state) => !!state.user
  },
  actions: {
    login(name: string) {
      this.user = { name }
      localStorage.setItem('auth_user', JSON.stringify(this.user))
      navigateTo('/reservas')   // 👈 redirige al listado tras login
    },
    logout() {
      this.user = null
      localStorage.removeItem('auth_user')
      navigateTo('/login')      // 👈 redirige al login tras logout
    },
    restoreSession() {
      const data = localStorage.getItem('auth_user')
      if (data) {
        this.user = JSON.parse(data)
      }
    }
  }
})
