import { PostMeta } from "@/types/Post";
import { PropsWithChildren } from "react";

interface Props {
  meta: PostMeta;
}

export function Post({ children }: PropsWithChildren<Props>) {
  return (
    <article className="flex w-full flex-col gap-6 overflow-hidden px-4 sm:max-w-3xl sm:px-8">
      {children}
    </article>
  );
}
