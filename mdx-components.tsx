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
        className={clsx(
          props.className,
          `w-full overflow-hidden border border-gray-700 sm:rounded dark:border-none`,
        )}
      />
    ),
    a: (props) => (
      <a
        {...props}
        className={clsx(
          props.className,
          `text-primary-1100 outline-primary-800 underline`,
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
          className="sr-only group-focus-within:not-sr-only group-hover:not-sr-only"
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
          className="sr-only group-focus-within:not-sr-only group-hover:not-sr-only"
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
          className="sr-only group-focus-within:not-sr-only group-hover:not-sr-only"
        >
          <LinkIcon size={18} />
        </a>
      </h3>
    ),
    blockquote: (props) => (
      <Message as="blockquote" {...props} variant="info" />
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
