import { PostMeta } from "@/types/Post";
import { getPosts } from "@/utils/get-posts";
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

interface Props {
  slug: string;
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
    <footer className="w-full">
      <ul className="flex items-center gap-4 flex-wrap w-full justify-between">
        {before && (
          <li>
            <Link
              href={before.slug}
              rel="prev"
              className="flex items-center gap-2"
            >
              <MoveLeft /> {before.title}
            </Link>
          </li>
        )}
        {after && (
          <li>
            <Link
              href={after.slug}
              rel="next"
              className="flex items-center gap-2"
            >
              {after.title} <MoveRight />
            </Link>
          </li>
        )}
      </ul>
    </footer>
  );
}
