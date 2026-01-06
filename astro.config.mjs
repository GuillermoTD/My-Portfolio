import { defineConfig } from 'astro/config';
import path from 'path';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  alias: {
    '@': path.resolve('./src'),
  },
  vite:{
    build:{
      sourcemap:true,
    }
  }
});




