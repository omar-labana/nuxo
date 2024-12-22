// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  future: {
    compatibilityVersion: 4,
  },
});
