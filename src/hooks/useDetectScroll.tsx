import { useCallback, useEffect, useState } from "react";

const useDetectScroll = () => {
  const [$scrollHeight, setScrollHeight] = useState(0);

  const throttle = useCallback((callback: () => void, delay: number) => {
    let lastCall = 0;
    return () => {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback();
      }
    };
  }, []);

  const debounce = useCallback((callback: () => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback();
      }, delay);
    };
  }, []);

  useEffect(() => {
    const scrollHandler = throttle(() => {
      const scrollPosition = window.scrollY;
      if (scrollPosition !== $scrollHeight) setScrollHeight(scrollPosition);
    }, 100);

    const debouncedScrollHandler = debounce(scrollHandler, 10);

    window.addEventListener("scroll", debouncedScrollHandler);
    return (): void => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [$scrollHeight, throttle]);

  return { $scrollHeight };
};
export default useDetectScroll;
