// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/soft-ui-dashboard.css',
    '@/assets/css/nucleo-icons.css',
    '@/assets/css/nucleo-svg.css',
    '@/assets/css/etc.css'
  ],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  nitro: {
    plugins: ['plugins/cssRendering.ts']
  },  
  i18n: {
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts',
    locales: [
      'ko',
      'en'
    ],
    defaultLocale: 'ko'
  },
  imports: {
    dirs: ['./stores']
  },
})
