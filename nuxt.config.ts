// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', 'radix-vue/nuxt', '@nuxt/fonts', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  fonts: {
    families: [
      {
        name: 'Inter', provider: 'google', subsets: ['latin'], global: true
      }
    ]
  },
  app: {
    head: {
      title: 'Nuxt + AO',
      meta: [
        { name: 'description', content: 'Generated with Nuxt AO Starter Kit.' }
      ]
    }
  }
})