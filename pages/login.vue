<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const name = ref('')

const handleLogin = () => {
  if (name.value.trim() === '') {
    alert('Introduce un nombre válido')
    return
  }

  // guardamos el usuario en el store
  auth.login(name.value)

  // redirigimos a reservas
  router.push('/reservas')
}
</script>

<template>
  <div class="login">
    <h1>Iniciar Sesión</h1>

    <form @submit.prevent="handleLogin">
      <label for="name">Nombre</label>
      <input id="name" v-model="name" type="text" placeholder="Tu nombre" />

      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 4px;
}

button {
  padding: 10px;
  border: none;
  background: #0070f3;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background: #0059c1;
}
</style>
