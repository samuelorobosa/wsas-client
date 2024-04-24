import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setIsMobile(window.innerWidth <= 499);
  }

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setIsMobile(window.innerWidth <= 499);

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return { size, isMobile };
}