import { PostMeta } from "@/types/Post";
import Image from "next/image";
import { PropsWithChildren } from "react";

interface Props {
  meta: PostMeta;
}

export function Post({ children, meta }: PropsWithChildren<Props>) {
  return (
    <article className="flex flex-col gap-6 w-full overflow-hidden px-4 sm:px-8 sm:max-w-3xl">
      {children}
    </article>
  );
}
