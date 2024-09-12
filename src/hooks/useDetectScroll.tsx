import { useEffect, useState } from "react";

const useDetectScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPosition = window.scrollY;
      setScrollHeight(scrollPosition);
    };

    window.addEventListener("scroll", scrollHandler);
    return (): void => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return { scrollHeight };
};
export default useDetectScroll;
