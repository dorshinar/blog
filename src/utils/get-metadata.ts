import { PostSchema } from "@/types/Post";
import { Metadata } from "next";
import { StaticImageData } from "next/image";

interface Params {
  title: string;
  description: string;
  slug: string;
  images: StaticImageData[];
}

export function getMetadata(params: Params): Metadata {
  return {
    title: params.title,
    description: params.description,

    openGraph: {
      title: params.title,
      description: params.description,
      url: `/${params.slug}`,
      type: "website",
      images: params.images.filter(Boolean).map((image) => ({
        url: image.src,
        ...image,
      })),
    },

    twitter: {
      card: "summary_large_image",
      creator: "@DorShinar",
      title: params.title,
      description: params.description,
      images: params.images.filter(Boolean).map((image) => ({
        url: image.src,
        ...image,
      })),
    },

    verification: {
      google: "Y0r9c_KfP6Wl0eYoavd1q6mHA60nmGZKbRuQ3e43Cb8",
    },
  };
}

export function getPostMetadata(metaParam: any) {
  const meta = PostSchema.parse(metaParam);

  return getMetadata({ ...meta, images: [meta.cover] });
}
