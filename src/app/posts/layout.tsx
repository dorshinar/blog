import { PropsWithChildren } from "react";

export default function PostLayout({ children }: PropsWithChildren) {
  return (
    <article className="flex flex-col gap-6 w-full overflow-hidden px-4 sm:px-8 sm:max-w-3xl">
      {children}
    </article>
  );
}
