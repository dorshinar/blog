import { z } from "zod";
import { StaticImageData } from "next/image";

const Cover: z.ZodType<StaticImageData> = z.any();

export const PostSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  date: z.coerce.date(),
  modified: z.coerce.date().optional(),
  description: z.string(),
  published: z.boolean(),
  slug: z.string(),
  cover: Cover,
});

export type PostMeta = z.infer<typeof PostSchema>;
