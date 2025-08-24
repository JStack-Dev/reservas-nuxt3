<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <div>
    <header class="header">
      <nav>
        <NuxtLink to="/">Inicio</NuxtLink>
        <NuxtLink to="/reservas">Reservas</NuxtLink>

        <!-- Si está logueado, mostramos su nombre y logout -->
        <template v-if="auth.isAuthenticated">
          <span class="user">Hola, {{ auth.user?.name }}</span>
          <button @click="auth.logout()">Logout</button>
        </template>

        <!-- Si NO está logueado, link a login -->
        <template v-else>
          <NuxtLink to="/login">Login</NuxtLink>
        </template>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.header {
  background: #0070f3;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 15px;
  align-items: center;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  background: #ff4444;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #cc0000;
}

.user {
  font-weight: bold;
}
</style>
