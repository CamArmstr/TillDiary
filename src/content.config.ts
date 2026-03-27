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
    draft: z.boolean().optional(), // true = pending Cameron's approval, excluded from live site
    veto: z.boolean().optional(), // true = Cameron vetoed, permanently excluded
    veto_reason: z.string().optional(),
  }),
});

const reflections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reflections' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { journal, reflections };
