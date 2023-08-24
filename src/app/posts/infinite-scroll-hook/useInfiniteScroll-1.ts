import { useCallback } from "react";

interface Params {
  callback(): void;
}

function useInfiniteScroll({ callback: callbackParam }: Params) {
  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries.length === 0) {
        return;
      }

      if (entries[0].isIntersecting) {
        callbackParam();
      }
    },
    [callbackParam]
  );

  const infiniteScrollRef = useCallback(
    (node: HTMLElement) => {
      if (!node) {
        return;
      }

      const intersectionObserver = new IntersectionObserver(callback);
      intersectionObserver.observe(node);
    },
    [callback]
  );

  return infiniteScrollRef;
}

export default useInfiniteScroll;
