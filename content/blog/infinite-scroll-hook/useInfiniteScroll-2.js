const { useCallback, useRef, useEffect } = require("react");

function useInfiniteScroll(callbackParam, isActive) {
  const observer = useRef(null);

  const callback = useCallback(
    (entries) => {
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
    (node) => {
      if (!node) {
        return;
      }

      observer.current?.disconnect();

      observer.current = new IntersectionObserver(callback);
      observer.current.observe(node);
    },
    [callback]
  );

  useEffect(() => {
    return observer.current?.disconnect;
  }, []);

  return infiniteScrollRef;
}

export default useInfiniteScroll;
