import { PropsWithChildren } from "react";

export function Message({ children }: PropsWithChildren) {
  return (
    <aside className="bg-sky-900 border-l-8 border-sky-500 sm:rounded p-4 -mx-4">
      {children}
    </aside>
  );
}
