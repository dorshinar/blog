import clsx from "clsx";
import NextLink from "next/link";
import { ComponentProps, ComponentPropsWithoutRef } from "react";

export function Link(props: ComponentPropsWithoutRef<typeof NextLink>) {
  return (
    <NextLink
      {...props}
      className={clsx(
        "text-emerald-500 shadow-[0_2px_0_0_theme(colors.emerald.500)] hover:shadow-[0_3px_0_0_theme(colors.emerald.500)] focus-visible:shadow-[0_3px_0_0_theme(colors.emerald.500)] transition-shadow",
        "[blockquote_&]:text-zinc-200 [blockquote_&]:font-medium [blockquote_&]:shadow-[0_2px_0_0_theme(colors.sky.300)] [blockquote_&]:hover:shadow-[0_3px_0_0_theme(colors.sky.300)] [blockquote_&]:focus-within:shadow-[0_3px_0_0_theme(colors.sky.300)]",
        props.className
      )}
    />
  );
}
