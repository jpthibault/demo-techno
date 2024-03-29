import { defineCollection, z } from 'astro:content';

const gamesCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		console: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tag: z.array(z.string()).optional()
	}),
});

export const collections = { jeux:gamesCollection };
