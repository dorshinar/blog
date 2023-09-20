import { PostSchema } from "@/types/Post";
import { Metadata } from "next";
import { StaticImageData } from "next/image";

interface Params {
  title: string;
  description: string;
  slug: string;
  images: StaticImageData[];
  date?: Date;
}

export function getMetadata(params: Params, post: boolean): Metadata {
  return {
    title: params.title,
    description: params.description,
    authors: [{ name: "Dor Shinar" }],

    openGraph: {
      title: params.title,
      description: params.description,
      url: post ? `/posts/${params.slug}` : ``,
      type: post ? "article" : "website",
      images: params.images.filter(Boolean).map((image) => ({
        url: image.src,
      })),
      authors: ["Dor Shinar"],
      publishedTime: params.date?.toISOString(),
    },

    twitter: {
      card: "summary_large_image",
      creator: "DorShinar",
      title: params.title,
      description: params.description,
      images: params.images.filter(Boolean).map((image) => ({
        url: image.src,
      })),
    },

    verification: {
      google: "Y0r9c_KfP6Wl0eYoavd1q6mHA60nmGZKbRuQ3e43Cb8",
    },
  };
}

export function getPostMetadata(metaParam: Record<string, unknown>) {
  const meta = PostSchema.parse(metaParam);

  return getMetadata({ ...meta, images: [meta.cover] }, true);
}
