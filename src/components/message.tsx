import { clsx } from "clsx";
import { CSSProperties, JSX, PropsWithChildren } from "react";

export function Message({
  children,
  as = "aside",
  variant = "info",
}: PropsWithChildren & {
  as?: keyof JSX.IntrinsicElements;
  variant?: "info" | "success";
}) {
  const Component = as;

  return (
    <Component
      style={
        {
          "--border-color":
            variant === "info"
              ? "var(--color-info-800)"
              : "var(--color-primary-800)",
          "--text-color":
            variant === "info"
              ? "var(--color-info-1100)"
              : "var(--color-primary-1100)",
        } as CSSProperties
      }
      className={clsx(
        "text-gray-1100 border-l-8 border-[var(--border-color)] px-4 py-2",
        `[&_a]:font-medium [&_a]:text-[var(--text-color)] [&_a]:decoration-[var(--text-color)]`,
      )}
    >
      {children}
    </Component>
  );
}
