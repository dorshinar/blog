import { PostSchema } from "@/types/Post";
import Image from "next/image";

interface Props {
  meta: Record<string, unknown>;
}

export function PostHeader({ meta: metaProp }: Props) {
  const meta = PostSchema.parse(metaProp);

  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="text-primary-1100 text-5xl font-medium">{meta.title}</h1>
        <small className="text-gray-1100 text-base">
          {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
            meta.date,
          )}
        </small>
      </header>
      {meta.cover && (
        <Image
          src={meta.cover}
          alt={meta.coverAlt ?? "cover image"}
          priority
          placeholder="blur"
          className="rounded-lg"
        />
      )}
    </>
  );
}
