import { useCallback, useRef } from "react";

interface Params {
  callback(): void;
  isActive: boolean;
}

function useInfiniteScroll({ callback: callbackParam, isActive }: Params) {
  const observer = useRef<IntersectionObserver>();

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries.length === 0) {
        return;
      }

      if (entries[0].isIntersecting && isActive) {
        callbackParam();
      }
    },
    [callbackParam, isActive]
  );

  const infiniteScrollRef = useCallback(
    (node: HTMLElement) => {
      if (!node) {
        return;
      }

      observer.current?.disconnect();

      observer.current = new IntersectionObserver(callback);
      observer.current.observe(node);
    },
    [callback]
  );

  /**
   * Disconnecting on unmount causes issues with hot-reloading the article.
   * In real use it should be un-commented.
   */
  // useEffect(() => {
  // return () => observer.current?.disconnect();
  // }, []);

  return infiniteScrollRef;
}

export default useInfiniteScroll;
