import { PostMeta } from "@/types/Post";
import flakyPipeline from "./flaky-pipeline.webp";

export const meta: PostMeta = {
  title: "The Perils of a Flaky Pipeline",
  description:
    "A flaky testing pipeline can be a major blocker for developer productivity. This post goes over the process we went through at AI21 Labs to improve our pipeline.",
  date: new Date("2023-07-31"),
  slug: "the-perils-of-a-flaky-pipeline",
  cover: flakyPipeline,
  url: "https://medium.com/blog-ai21-engineering/the-perils-of-a-flaky-pipeline-8e899329357d",
  published: true,
};
