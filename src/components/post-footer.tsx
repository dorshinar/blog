import { PostMeta } from "@/types/Post";
import { getPosts } from "@/utils/get-posts";
import { MoveLeft, MoveRight } from "lucide-react";
import { Route } from "next";
import NextLink from "next/link";

interface Props {
  slug: Route;
}

export function PostFooter({ slug }: Props) {
  const posts = getPosts();

  let before: PostMeta | undefined;
  let after: PostMeta | undefined;

  posts.forEach((post, index, posts) => {
    if (posts[index + 1]?.slug === slug) {
      after = post;
    }

    if (posts[index - 1]?.slug === slug) {
      before = post;
    }
  });

  return (
    <footer className="flex w-full flex-col gap-4">
      <hr className="border-gray-600" />
      <p>Thank you for reading!</p>
      <p>
        If you have any question or you want to reach out, find me on{" "}
        <a
          href="https://twitter.com/DorShinar"
          target="_blank"
          className="text-primary-1100 underline focus-visible:outline"
        >
          Twitter
        </a>
        !
      </p>
      <span>More posts:</span>
      <ul className="flex w-full flex-wrap items-center justify-between gap-4 py-2">
        {before && (
          <li>
            <NextLink
              href={before.url ?? before.slug}
              rel="prev"
              className="flex items-center gap-2 underline focus-visible:outline"
            >
              <MoveLeft /> {before.title}
            </NextLink>
          </li>
        )}
        {after && (
          <li className="ml-auto">
            <NextLink
              href={after.url ?? after.slug}
              rel="next"
              className="flex items-center gap-2 underline focus-visible:outline"
            >
              {after.title} <MoveRight />
            </NextLink>
          </li>
        )}
      </ul>
    </footer>
  );
}
