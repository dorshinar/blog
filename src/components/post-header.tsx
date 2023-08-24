import { PostSchema } from "@/types/Post";
import Image from "next/image";

interface Props {
  meta: any;
}

export function PostHeader({ meta: metaProp }: Props) {
  const meta = PostSchema.parse(metaProp);

  return (
    <>
      <header className="flex flex-col">
        <h1 className="text-2xl text-emerald-500 font-medium">{meta.title}</h1>
        <small className="text-zinc-400 text-sm">
          {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
            meta.date
          )}
        </small>
      </header>
      {meta.cover && <Image src={meta.cover} alt="cover image" />}
    </>
  );
}
