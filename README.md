
# 🏟 Gestor de Reservas Deportivas – Migración Vue2/Nuxt2 → Vue3/Nuxt3

Este proyecto es una **aplicación web para gestionar reservas deportivas**.  
Nació en **Nuxt2 (Vue2 + Vuex)** y lo he migrado a **Nuxt3 (Vue3 + Pinia)** como ejercicio práctico para afianzar buenas prácticas en el desarrollo con frameworks modernos.

El objetivo principal no es solo tener un CRUD funcional, sino **aprender a migrar una base de código legacy hacia tecnologías actuales**, enfrentando problemas reales de compatibilidad, SSR y estructura de proyecto.

---

## 🚀 Tecnologías principales

- ⚡ **Nuxt 3** – framework de Vue 3 con SSR y Vite
- 🎯 **Vue 3 (Composition API + `<script setup>`)**
- 📦 **Pinia** – nueva generación de stores en Vue
- 🔑 **Middleware de autenticación** con `definePageMeta`
- 💾 **LocalStorage** – persistencia en cliente
- 🛡 **TypeScript** – tipado fuerte y mantenible

---

🎯 Funcionalidades implementadas

 Crear reservas

 Listar todas las reservas

 Ver detalle de una reserva

 Editar reservas existentes

 Eliminar reservas

 Persistencia en LocalStorage

 Middleware de autenticación básico

🔄 Proceso de Migración
1. Store: Vuex → Pinia

Vuex con state, mutations y actions → reemplazado por defineStore en Pinia.

Simplificación de código y uso directo de TypeScript.

2. Rutas dinámicas

Nuxt2 usaba _id.vue.

Nuxt3 usa [id]/index.vue para detalle y [id]/editar.vue para edición.

Separación clara de responsabilidades.

3. Reactividad

Antes: data() y methods.

Ahora: ref, computed y funciones con <script setup>.

4. SSR y persistencia

En Nuxt2 podías acceder a localStorage en created().

En Nuxt3, con SSR, debes usar onMounted() para cargar datos solo en cliente.

📸 Flujo de la aplicación

/reservas → listado de reservas

/reservas/nueva → formulario de creación

/reservas/1 → detalle de la reserva con ID 1

/reservas/1/editar → formulario de edición

💡 Aprendizajes clave

Cómo adaptar un proyecto legacy de Vue2/Nuxt2 a Vue3/Nuxt3.

Sustituir Vuex por Pinia con menos boilerplate.

Manejo de SSR y localStorage para evitar errores en servidor.

Buenas prácticas de organización de rutas y stores en Nuxt3.

 Autor

Proyecto desarrollado por Jorge Moscoso – Full Stack Developer 🚀



# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
