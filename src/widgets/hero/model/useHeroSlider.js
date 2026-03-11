import { useState, useEffect } from "react";

export const useHeroSlider = (slides) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000); // Change bg every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return { index };
};
