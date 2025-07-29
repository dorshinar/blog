import { clsx } from "clsx";
import { HTMLAttributes } from "react";

export function CodeSnippetWrapper(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(
        props.className,
        "relative w-full overflow-auto rounded bg-gray-200",
      )}
    />
  );
}
