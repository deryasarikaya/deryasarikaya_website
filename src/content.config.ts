import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectSchema = z.object({
  lang: z.enum(['de', 'en']),
  slug: z.enum(['ai-start-map', 'kompass', 'moviwebapp']),
  order: z.number().int().positive(),
  title: z.string(),
  tagline: z.string(),
  summary: z.string(),
  status: z.enum(['building', 'live']),
  statusLabel: z.string(),
  repository: z.url(),
  demo: z.url().optional(),
  demoNote: z.string().optional(),
  stack: z.array(z.string()),
  verifiedAt: z.string(),
  visual: z.enum(['workflow', 'pipeline', 'screenshot']),
  alt: z.string(),
});

const projectsDe = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects/de' }),
  schema: projectSchema,
});

const projectsEn = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects/en' }),
  schema: projectSchema,
});

export const collections = { projectsDe, projectsEn };
