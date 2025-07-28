import { clsx } from "clsx";
import { PropsWithChildren } from "react";

export function Message({ children }: PropsWithChildren) {
  return (
    <aside
      className={clsx(
        "border-l-8 border-emerald-500 px-4 py-2 text-zinc-400",
        "[&_a]:font-medium [&_a]:text-zinc-200 [&_a]:decoration-emerald-300 [&_a]:shadow-[0_2px_0_0_var(--color-emerald-300)] [&_a]:hover:shadow-[0_3px_0_0_var(--color-emerald-300)]",
      )}
    >
      {children}
    </aside>
  );
}
