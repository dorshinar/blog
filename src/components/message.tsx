import { clsx } from "clsx";
import { CSSProperties, JSX, PropsWithChildren } from "react";

type Variant = "neutral" | "info" | "success";

const variants: Record<
  Variant,
  {
    borderColor: string;
    textColor: string;
  }
> = {
  neutral: {
    borderColor: "var(--color-gray-800)",
    textColor: "var(--color-gray-1100)",
  },
  info: {
    borderColor: "var(--color-info-800)",
    textColor: "var(--color-info-1100)",
  },
  success: {
    borderColor: "var(--color-primary-800)",
    textColor: "var(--color-primary-1100)",
  },
};

export function Message({
  children,
  as = "aside",
  variant = "neutral",
}: PropsWithChildren & {
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
}) {
  const Component = as;

  return (
    <Component
      style={
        {
          "--border-color": variants[variant].borderColor,
          "--text-color": variants[variant].textColor,
        } as CSSProperties
      }
      className={clsx(
        "text-gray-1100 border-l-8 border-[var(--border-color)] px-4 py-2 italic",
        `[&_a]:font-medium [&_a]:text-[var(--text-color)] [&_a]:decoration-[var(--text-color)]`,
      )}
    >
      {children}
    </Component>
  );
}
