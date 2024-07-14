import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://wonderful-quokka-49a3f1.netlify.app",
  integrations: [preact()]
});