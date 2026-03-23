import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string().optional(), // HH:MM UTC
    slug: z.string(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { journal };
