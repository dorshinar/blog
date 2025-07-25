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
        <h1 className="text-5xl font-medium text-emerald-500">{meta.title}</h1>
        <small className="text-base text-zinc-400">
          {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
            meta.date,
          )}
        </small>
      </header>
      {meta.cover && (
        <Image
          src={meta.cover}
          alt="cover image"
          priority
          placeholder="blur"
          className="rounded-lg"
        />
      )}
    </>
  );
}
