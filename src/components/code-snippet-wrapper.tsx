import clsx from "clsx";
import { HTMLAttributes } from "react";

export function CodeSnippetWrapper(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(
        props.className,
        "w-full bg-zinc-200 rounded overflow-auto relative"
      )}
    />
  );
}
