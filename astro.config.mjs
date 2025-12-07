// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://shahramgholampoor.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  adapter: cloudflare(),
  integrations: [sitemap()]
});