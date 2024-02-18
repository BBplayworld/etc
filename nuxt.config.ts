// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/nucleo-icons.css',
    '@/assets/css/nucleo-svg.css',
    '@/assets/css/soft-ui-dashboard.css'
  ],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { src: 'https://kit.fontawesome.com/42d5adcbca.js' }
      ],
      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700',
        }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  }
})
