import { PropsWithChildren } from "react";

export default function PostLayout({ children }: PropsWithChildren) {
  return (
    <article className="flex w-full flex-col gap-6 overflow-hidden px-4 sm:max-w-3xl sm:px-8">
      {children}
    </article>
  );
}
