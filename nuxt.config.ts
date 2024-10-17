// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // essentials
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',

    // best practices
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxtjs/seo',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
