import { Message } from "@/components/message";
import { PostFooter } from "@/components/post-footer";

import { PostHeader } from "@/components/post-header";

import clsx from "clsx";
import { LinkIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => (
      <pre
        {...props}
        className={clsx(props.className, "w-full overflow-hidden sm:rounded")}
      />
    ),
    a: (props) => (
      <a
        {...props}
        className={clsx(
          props.className,
          "text-emerald-500 shadow-[0_2px_0_0_theme(colors.emerald.500)] hover:shadow-[0_3px_0_0_theme(colors.emerald.500)] transition-shadow",
        )}
      >
        {props.children}
      </a>
    ),
    h2: (props) => (
      <h2
        {...props}
        className={clsx(
          props.className,
          "text-lg font-bold group flex gap-2 items-center",
        )}
      >
        {props.children}
        <a
          href={`#${props.id}`}
          aria-hidden
          className="sr-only group-hover:not-sr-only group-focus-within:no-sr-only"
        >
          <LinkIcon size={18} />
        </a>
      </h2>
    ),
    h3: (props) => (
      <h3
        {...props}
        className={clsx(
          props.className,
          "text-base font-medium group flex gap-2 items-center",
        )}
      >
        {props.children}
        <a
          href={`#${props.id}`}
          aria-hidden
          className="sr-only group-hover:not-sr-only group-focus-within:no-sr-only"
        >
          <LinkIcon size={18} />
        </a>
      </h3>
    ),
    blockquote: (props) => (
      <blockquote
        {...props}
        className={clsx(
          props.className,
          "bg-sky-900 border-l-8 border-sky-500 sm:rounded p-4 -mx-4",
          "[&_a]:text-zinc-200 [&_a]:font-medium [&_a]:shadow-[0_2px_0_0_theme(colors.sky.300)] [&_a]:hover:shadow-[0_3px_0_0_theme(colors.sky.300)]",
        )}
      />
    ),
    ol: (props) => (
      <ol
        {...props}
        className={clsx(
          props.className,
          "list-decimal px-4 flex flex-col gap-2",
        )}
      />
    ),
    ul: (props) => (
      <ul
        {...props}
        className={clsx(props.className, "list-disc px-4 flex flex-col gap-2")}
      />
    ),
    Message,
    PostHeader,
    PostFooter,
  };
}
