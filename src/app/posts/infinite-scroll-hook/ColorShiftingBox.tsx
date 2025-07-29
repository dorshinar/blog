"use client";

import { CodeSnippetWrapper } from "@/components/code-snippet-wrapper";
import { clsx } from "clsx";
import { useCallback, useRef, useState } from "react";

interface Props {
  root: boolean;
  threshold: number;
}

export function ColorShiftingBox({ root, threshold }: Props) {
  const observer = useRef<IntersectionObserver>(null);
  const [observedNode, setObservedNode] = useState<HTMLElement>();
  const [rootNode, setRootNode] = useState<HTMLElement>();
  const [isIntersecting, setIsIntersecting] = useState(false);

  const setIntersecting = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      setIsIntersecting(entries[0].isIntersecting);
    },
    [],
  );

  const rootRef = useCallback((node: HTMLDivElement) => {
    setRootNode(node);
  }, []);

  const boxRef = useCallback(
    (node: HTMLDivElement) => {
      if (observedNode || !node) {
        return;
      }

      setObservedNode(node);

      const options: IntersectionObserverInit = {};
      if (root) {
        options.rootMargin = "-100px";
        options.root = rootNode;
      }
      if (threshold) {
        options.threshold = threshold;
      }

      observer.current = new IntersectionObserver(setIntersecting, options);
      observer.current.observe(node);
    },
    [observedNode, root, rootNode, setIntersecting, threshold],
  );

  return (
    <CodeSnippetWrapper>
      {root && (
        <div className="text-gray-1100 absolute inset-[100px] grid h-[calc(100%-200px)] min-h-32 w-[calc(100%-200px)] place-items-center rounded bg-gray-300">
          The box will change color when it enters the gray rectangle!
        </div>
      )}
      <div
        className="relative flex h-80 w-full flex-col items-center overflow-auto p-4"
        ref={rootRef}
      >
        <div className="text-orange-1100 text-5xl">Scroll Me!</div>
        <div className="flex min-h-240 w-fit items-center pb-20">
          {((root && rootNode) || !root) && (
            <div
              className={clsx(
                "h-20 w-20 rounded border transition-colors duration-[3s]",
                isIntersecting ? "bg-orange-1100" : "bg-violet-300",
              )}
              ref={boxRef}
            />
          )}
        </div>
        <div className="text-orange-1100 text-xl">
          You&apos;ve reached the bottom! Scroll up to view the box
        </div>
      </div>
    </CodeSnippetWrapper>
  );
}
