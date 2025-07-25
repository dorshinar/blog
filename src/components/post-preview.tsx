import { PostMeta } from "@/types/Post";
import { clsx } from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  post: PostMeta;
  cover: StaticImageData;
  priority: boolean;
}

export function PostPreview({ post, cover, priority }: Props) {
  return (
    <Link
      href={post.url ?? `posts/${post.slug}`}
      className={clsx(
        "group w-full overflow-hidden rounded-2xl transition",
        "p-2 ring-emerald-500 ring-offset-zinc-900 focus-within:ring-2 hover:ring-2 focus:ring-2",
        "focus-within:-translate-y-2 hover:-translate-y-2 focus:-translate-y-2",
      )}
    >
      {cover && (
        <span className="relative mb-2 block aspect-[3] overflow-hidden rounded-lg">
          <Image
            src={cover}
            alt="cover image"
            fill
            className="object-cover"
            placeholder="blur"
            priority={priority}
          />
        </span>
      )}
      <h2 className="text-2xl font-medium text-zinc-200">{post.title}</h2>
      <span className="text-sm text-zinc-400">
        {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
          post.date,
        )}
      </span>
      <p className="text-zinc-400">{post.description}</p>
    </Link>
  );
}
