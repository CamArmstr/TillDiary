// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://tilluntil.com',
  output: 'server',
  adapter: vercel(),
});
