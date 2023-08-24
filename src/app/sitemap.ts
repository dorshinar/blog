import { getPosts } from "@/utils/get-posts";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dorshinar.me",
      lastModified: getPosts()[0].modified ?? getPosts()[0].date,
    },
    ...getPosts().map((post) => {
      return {
        url: new URL(post.slug, "https://dorshinar.me").toString(),
        lastModified: post.modified ?? post.date,
      };
    }),
  ];
}
