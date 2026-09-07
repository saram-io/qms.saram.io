// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://qms.saram.io',
  integrations: [
    sitemap({
      serialize(item) {
        if (item.url === 'https://qms.saram.io/' || item.url === 'https://qms.saram.io') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (
          item.url.includes('/ai-readiness-tracker') ||
          item.url.includes('/tiers') ||
          item.url.includes('/shortlist')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (
          item.url.includes('/vendors') ||
          item.url.includes('/ai-trends')
        ) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/about')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
  build: {
    format: 'file',
  },
});
