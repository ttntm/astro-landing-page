import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const baseURL = process.env.NODE_ENV === 'production' ? 'https://awesomestro.ttntm.me/' : 'http://localhost:4321/';

// https://astro.build/config
export default defineConfig({
  site: baseURL,
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});