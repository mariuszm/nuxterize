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

    // personal favs
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/color-mode',

    (_options, nuxt) => {
      nuxt.hook('devtools:customTabs', (tabs) => {
        tabs.push({
          name: 'nuxterize',
          title: 'Swagger API',
          icon: '/vscode-icons--file-type-swagger.svg',
          view: {
            type: 'iframe',
            src: '/_nitro/swagger',
          },
        })
      })
    },
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  imports: {
    autoImport: false,
  },

  vite: {
    css: {
      preprocessorOptions: {
        api: 'modern-compiler',
      },
    },
  },

  experimental: {
    typedPages: true,
  },

  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  devtools: { enabled: true },

  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },
})
