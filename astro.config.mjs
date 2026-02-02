import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

export default defineConfig({
  // Apenas isso deve estar aqui
  integrations: [tailwind()],

  adapter: vercel(),
});