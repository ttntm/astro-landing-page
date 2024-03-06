import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

const baseURL = process.env.NODE_ENV === 'production'
  ? '/astro-landing-page/'
  : '/'

const siteURL = process.env.NODE_ENV === 'production'
  ? 'https://ttntm.github.io/astro-landing-page/'
  : 'http://localhost:4321/'

// https://astro.build/config
export default defineConfig({
  site: siteURL,
  base: baseURL,
  outDir: './docs',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
})