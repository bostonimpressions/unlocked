// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
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
    // explicit sqlite config so types check and Content uses sqlite DB
    database: {
      type: 'sqlite',
      filename: './contents.sqlite'
    }
  }
})
