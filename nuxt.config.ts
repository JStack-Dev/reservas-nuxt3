// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-24',
  devtools: { enabled: true }
})

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt'
  ],
  css: ["~/assets/main.css"]
})
