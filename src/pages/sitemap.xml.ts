import { getCollection } from 'astro:content';

const siteUrl = 'https://redwoodbaypress.com';

export async function GET() {
  const [authors, books] = await Promise.all([
    getCollection('authors'),
    getCollection('books'),
  ]);

  const urls = [
    '/',
    '/free/',
    '/privacy/',
    '/terms/',
    ...authors.flatMap((author) => [
      `/authors/${author.data.slug}/`,
      ...(author.data.freeBook ? [`/free/${author.data.slug}/`] : []),
    ]),
    ...books.map((book) => `/books/${book.id}/`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
