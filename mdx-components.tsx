import { Message } from "@/components/message";
import { PostFooter } from "@/components/post-footer";

import { PostHeader } from "@/components/post-header";

import { clsx } from "clsx";
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
          "text-emerald-500 underline underline-offset-4 shadow-[0_2px_0_0_var(--color-emerald-500)] transition-shadow hover:shadow-[0_3px_0_0_var(--color-emerald-500)]",
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
          "group flex items-center gap-2 text-4xl font-bold",
        )}
      >
        {props.children}
        <a
          href={`#${props.id}`}
          aria-hidden
          className="group-focus-within:no-sr-only sr-only group-hover:not-sr-only"
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
          "group flex items-center gap-2 text-2xl font-semibold",
        )}
      >
        {props.children}
        <a
          href={`#${props.id}`}
          aria-hidden
          className="group-focus-within:no-sr-only sr-only group-hover:not-sr-only"
        >
          <LinkIcon size={18} />
        </a>
      </h3>
    ),
    h4: (props) => (
      <h3
        {...props}
        className={clsx(
          props.className,
          "group flex items-center gap-2 text-xl font-semibold",
        )}
      >
        {props.children}
        <a
          href={`#${props.id}`}
          aria-hidden
          className="group-focus-within:no-sr-only sr-only group-hover:not-sr-only"
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
          "border-l-8 border-sky-500 px-4 py-2 font-medium text-zinc-400",
          "[&_a]:font-medium [&_a]:text-zinc-200 [&_a]:shadow-[0_2px_0_0_var(--color-sky-300)] [&_a]:hover:shadow-[0_3px_0_0_var(--color-sky-300)]",
        )}
      />
    ),
    ol: (props) => (
      <ol
        {...props}
        className={clsx(
          props.className,
          "flex list-decimal flex-col gap-2 px-4",
        )}
      />
    ),
    ul: (props) => (
      <ul
        {...props}
        className={clsx(props.className, "flex list-disc flex-col gap-2 px-4")}
      />
    ),
    Message,
    PostHeader,
    PostFooter,
  };
}
