import { useState, useEffect, useCallback, useMemo } from "react";
import { cardStorage } from "./cardStorage.js";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

export const useCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const data = cardStorage[current];

  const isMobile = useMediaQuery("(max-width: 550px)");

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? cardStorage.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === cardStorage.length - 1 ? 0 : prev + 1));
  }, []);

  const swipeThreshold = 50;
  const handleDragEnd = useCallback((e, { offset, velocity }) => {
      if (offset.x < -swipeThreshold) {
        handleNext();
      } else if (offset.x > swipeThreshold) {
        handlePrev();
      }
    }, [handleNext, handlePrev]);

  useEffect(() => {
    const t = setTimeout(() => setDirection(0), 500);
    return () => clearTimeout(t);
  }, [current]);

  const cardVariants = useMemo(() => ({
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }), []);

  return {
    current,
    direction,
    data,
    handlePrev,
    handleNext,
    handleDragEnd,
    cardVariants,
    isMobile,
  };
};