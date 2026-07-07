import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/authors' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    bio: z.string(),
    photo: z.string(),
    genres: z.array(z.string()),
    socialLinks: z.object({
      instagram: z.string().optional(),
      tiktok: z.string().optional(),
      facebook: z.string().optional(),
      website: z.string().optional(),
      goodreads: z.string().optional(),
      amazon: z.string().optional(),
    }).optional(),
    newsletterFormId: z.string().optional(),
    newsletterFormAction: z.string().optional(),
    newsletterEmbedId: z.string().optional(),
    freeBook: z.object({
      title: z.string(),
      cover: z.string(),
      blurb: z.string(),
      link: z.string(),
    }).optional(),
    theme: z.string().optional(),
    comingSoon: z.object({
      title: z.string(),
      cover: z.string(),
      blurb: z.string(),
      preorderLink: z.string().optional(),
    }).optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/books' }),
  schema: z.object({
    title: z.string(),
    authorSlug: z.string(),
    genre: z.string(),
    cover: z.string(),
    blurb: z.string(),
    releaseDate: z.string(),
    buyLinks: z.object({
      amazon: z.string().optional(),
      barnesAndNoble: z.string().optional(),
      kobo: z.string().optional(),
      apple: z.string().optional(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { authors, books };
