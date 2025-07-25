import { clsx } from "clsx";
import { PropsWithChildren } from "react";

export function Message({ children }: PropsWithChildren) {
  return (
    <aside
      className={clsx(
        "-mx-4 border-l-8 border-emerald-500 bg-emerald-900 p-4 sm:rounded",
        "[&_a]:font-medium [&_a]:text-zinc-200 [&_a]:decoration-emerald-300 [&_a]:shadow-[0_2px_0_0_var(--color-emerald-300)] [&_a]:hover:shadow-[0_3px_0_0_var(--color-emerald-300)]",
      )}
    >
      {children}
    </aside>
  );
}
