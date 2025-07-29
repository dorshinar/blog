import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { CheckIcon } from "lucide-react";
import { ComponentPropsWithRef, useId } from "react";

export function Checkbox(
  props: ComponentPropsWithRef<typeof CheckboxPrimitive.Root>,
) {
  const id = useId();

  return (
    <span className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        {...props}
        id={id}
        className={clsx(
          props.className,
          `data-[state=checked]:bg-primary-500 inline-grid h-6 w-6 place-items-center rounded border border-gray-700 data-[state=checked]:border-none`,
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
