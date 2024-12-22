// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxt/eslint',
    'nuxt-lodash',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],
  css: ['~/assets/css/main.css'],
  lodash: {
    prefix: '_',
    upperAfterPrefix: false,
  },
  i18n: {
    locales: [
      {
        code: 'ar',
        dir: 'rtl',
        files: ['copy.yml'],
      },
    ],
    defaultLocale: 'ar',
    strategy: 'no_prefix',
  },
});
