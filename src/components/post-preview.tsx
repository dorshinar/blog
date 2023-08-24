import { PostMeta } from "@/types/Post";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  post: PostMeta;
  cover: StaticImageData;
}

export function PostPreview({ post, cover }: Props) {
  return (
    <Link
      href={`posts/${post.slug}`}
      className={clsx(
        "group rounded-lg overflow-hidden w-full transition-[transform,shadow]",
        "hover:ring-2 focus-within:ring-2 focus:ring-2 ring-offset-zinc-900 ring-emerald-500 ring-offset-8",
        "hover:-translate-y-2 focus-within:-translate-y-2 focus:-translate-y-2"
      )}
    >
      {cover && (
        <span className="aspect-[3] block relative mb-2">
          <Image src={cover} alt="cover image" fill className="object-cover" />
        </span>
      )}
      <h2 className="text-zinc-200 text-2xl font-medium">{post.title}</h2>
      <span className="text-zinc-400 text-sm">
        {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
          post.date
        )}
      </span>
      <p className="text-zinc-400">{post.description}</p>
    </Link>
  );
}
