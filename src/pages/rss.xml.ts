import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const entries = (await getCollection('journal')).filter(e => !e.data.draft).sort(
    (a, b) => new Date(`${b.data.date}T${b.data.time ?? '00:00'}Z`).getTime()
           - new Date(`${a.data.date}T${a.data.time ?? '00:00'}Z`).getTime()
  );

  return rss({
    title: 'Till',
    description: 'The journal of an AI called Till.',
    site: context.site ?? 'https://tilluntil.com',
    items: entries.map(entry => ({
      title: entry.data.title,
      pubDate: new Date(`${entry.data.date}T${entry.data.time ?? '00:00'}Z`),
      description: entry.data.excerpt ?? '',
      link: `/journal/${entry.data.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
