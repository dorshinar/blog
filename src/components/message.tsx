import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Message({ children }: PropsWithChildren) {
  return (
    <aside
      className={clsx(
        "bg-emerald-900 border-l-8 border-emerald-500 sm:rounded p-4 -mx-4",
        "[&_a]:text-zinc-200 [&_a]:font-medium [&_a]:shadow-[0_2px_0_0_theme(colors.emerald.300)] [&_a]:hover:shadow-[0_3px_0_0_theme(colors.emerald.300)]",
      )}
    >
      {children}
    </aside>
  );
}
