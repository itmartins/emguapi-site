import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Apenas isso deve estar aqui
  integrations: [tailwind(), sitemap()],

  adapter: vercel(),
});