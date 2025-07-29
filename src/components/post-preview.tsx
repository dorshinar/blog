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
        "outline-primary-800 p-2 focus-within:outline-2 hover:outline-2 focus:outline-2 focus-visible:outline-2",
        "hover:-translate-y-2",
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
      <h2 className="text-gray-1200 text-2xl font-medium">{post.title}</h2>
      <span className="text-gray-1100 text-sm">
        {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
          post.date,
        )}
      </span>
      <p className="text-gray-1100">{post.description}</p>
    </Link>
  );
}
