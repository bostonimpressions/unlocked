export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  nitro: {
    preset: 'netlify'
  },

  content: {
    database: false // disables DB mode entirely
  }
})
