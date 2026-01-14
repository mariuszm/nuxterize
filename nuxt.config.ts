// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // essentials
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@vueuse/nuxt',

    // best practices
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxtjs/seo',

    // personal favs
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/color-mode',

    // swagger api in devtools
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

  // eslint flat config
  eslint: {
    config: {
      standalone: false,
    },
  },

  // disable autoimports
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

  compatibilityDate: '2026-01-13',

  future: {
    compatibilityVersion: 5,
  },
})
