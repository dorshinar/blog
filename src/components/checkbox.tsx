import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import { ComponentPropsWithRef, useId } from "react";

interface Props extends ComponentPropsWithRef<typeof CheckboxPrimitive.Root> {}

export function Checkbox(props: Props) {
  const id = useId();

  return (
    <span className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        {...props}
        id={id}
        className={clsx(
          props.className,
          "h-6 w-6 border border-zinc-600 rounded inline-grid place-items-center data-[state=checked]:bg-emerald-700 data-[state=checked]:border-none"
        )}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon size="1rem" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label htmlFor={id}>{props["aria-label"]}</label>
    </span>
  );
}
