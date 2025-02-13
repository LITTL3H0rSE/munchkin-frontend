// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    // "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "nuxt-svgo",
    "@nuxt/eslint",
    // "nuxt-viewport",
  ],
  ssr: false,
  imports: { dirs: ["core", "types", "composables", "stores"] },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
