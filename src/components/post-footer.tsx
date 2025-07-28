import { PostMeta } from "@/types/Post";
import { getPosts } from "@/utils/get-posts";
import { MoveLeft, MoveRight } from "lucide-react";
import { Route } from "next";
import NextLink from "next/link";
import { Link } from "@/components/Link";

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
      <hr className="bg-zinc-200" />
      <p>Thank you for reading!</p>
      <p>
        If you have any question or you want to reach out, find me on{" "}
        <Link href="https://twitter.com/DorShinar" target="_blank">
          Twitter
        </Link>
        !
      </p>
      <ul className="flex w-full flex-wrap items-center justify-between gap-4">
        {before && (
          <li>
            <NextLink
              href={before.url ?? before.slug}
              rel="prev"
              className="flex items-center gap-2"
            >
              <MoveLeft /> {before.title}
            </NextLink>
          </li>
        )}
        {after && (
          <li>
            <NextLink
              href={after.url ?? after.slug}
              rel="next"
              className="flex items-center gap-2"
            >
              {after.title} <MoveRight />
            </NextLink>
          </li>
        )}
      </ul>
    </footer>
  );
}
