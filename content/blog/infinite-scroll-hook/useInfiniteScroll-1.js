const { useCallback } = require("react");

function useInfiniteScroll(callbackParam) {
  const callback = useCallback(
    (entries) => {
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
    (node) => {
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
