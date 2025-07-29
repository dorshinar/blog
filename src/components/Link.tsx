import { clsx } from "clsx";
import NextLink from "next/link";
import { ComponentPropsWithoutRef } from "react";

export function Link(props: ComponentPropsWithoutRef<typeof NextLink>) {
  return (
    <NextLink
      {...props}
      className={clsx(
        "text-primary-1100 underline focus-visible:outline",
        props.className,
      )}
    />
  );
}
