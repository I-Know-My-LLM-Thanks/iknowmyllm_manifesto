// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Support GitHub Pages deployment with base URL
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'I Know My Own LLM - Manifesto for Trustworthy AI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A community-driven manifesto promoting transparency, evidence-based claims, and accountability in AI platforms. Join us in building a trustworthy AI ecosystem.' },
        { name: 'keywords', content: 'AI ethics manifesto, trustworthy AI principles, AI fraud prevention, responsible AI, AI transparency, AI accountability' },
        { name: 'author', content: 'I Know My LLM' },
        { property: 'og:title', content: 'Manifesto for Trustworthy AI Platforms' },
        { property: 'og:description', content: 'Join the movement for transparent, accountable, and ethical AI platforms. Evidence over promises. Transparency over hype.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  css: ['@/assets/css/main.css'],

  ssr: true,
})
