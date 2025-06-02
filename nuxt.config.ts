// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.client.js', mode: 'client' }
  ]
})
