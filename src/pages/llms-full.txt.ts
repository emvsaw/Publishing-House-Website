import { getCollection } from 'astro:content';

const siteUrl = 'https://redwoodbaypress.com';

export async function GET() {
  const [authors, books] = await Promise.all([
    getCollection('authors'),
    getCollection('books'),
  ]);
  const authorMap = new Map(authors.map((author) => [author.data.slug, author.data]));
  const lines = [
    '# Redwood Bay Press — Full Catalogue',
    '',
    'Redwood Bay Press is a fiction publisher featuring dark mafia romance, historical mystery, and cozy mystery.',
    '',
    '## Authors',
    ...authors.flatMap((author) => [
      `### ${author.data.name}`,
      `URL: ${siteUrl}/authors/${author.data.slug}/`,
      `Genres: ${author.data.genres.join(', ')}`,
      `Bio: ${author.data.bio}`,
      author.data.freeBook ? `Free book: ${author.data.freeBook.title} — ${siteUrl}/free/${author.data.slug}/` : '',
      '',
    ]),
    '## Books',
    ...books.flatMap((book) => {
      const author = authorMap.get(book.data.authorSlug);
      return [
        `### ${book.data.title}`,
        `URL: ${siteUrl}/books/${book.id}/`,
        `Author: ${author?.name ?? book.data.authorSlug}`,
        `Genre: ${book.data.genre}`,
        `Release date: ${book.data.releaseDate}`,
        `Description: ${book.data.blurb}`,
        book.data.buyLinks?.amazon ? `Purchase link: ${book.data.buyLinks.amazon}` : 'Status: Coming soon',
        '',
      ];
    }),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
