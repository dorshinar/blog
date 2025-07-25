import { clsx } from "clsx";
import NextLink from "next/link";
import { ComponentPropsWithoutRef } from "react";

export function Link(props: ComponentPropsWithoutRef<typeof NextLink>) {
  return (
    <NextLink
      {...props}
      className={clsx(
        "text-emerald-500 underline underline-offset-4 shadow-[0_2px_0_0_var(--color-emerald-500)] transition-shadow hover:shadow-[0_3px_0_0_var(--color-emerald-500)] focus-visible:shadow-[0_3px_0_0_var(--color-emerald-500)]",
        "in-[blockquote]:font-medium in-[blockquote]:text-zinc-200 in-[blockquote]:shadow-[0_2px_0_0_var(--color-sky-300)] in-[blockquote]:focus-within:shadow-[0_3px_0_0_var(--color-sky-300)] in-[blockquote]:hover:shadow-[0_3px_0_0_var(--color-sky-300)]",
        props.className,
      )}
    />
  );
}
