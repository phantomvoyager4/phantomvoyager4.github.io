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

  const validCurrent =
    current < 0 ? 0 : current >= cardStorage.length ? 0 : current;

  const data = cardStorage[validCurrent] || {};

  const isMobile = useMediaQuery("(max-width: 550px)");
  const isVerySmall = useMediaQuery("(max-width: 400px)");

  const goToCard = useCallback(
    (targetIndex) => {
      if (cardStorage.length === 0 || targetIndex === current) return;

      const validTarget = Math.max(
        0,
        Math.min(targetIndex, cardStorage.length - 1),
      );
      const newDirection = validTarget > current ? 1 : -1;

      setDirection(newDirection);
      setCurrent(validTarget);
    },
    [current],
  );

  const handlePrev = useCallback(() => {
    if (cardStorage.length === 0) return;

    const newIndex = current === 0 ? cardStorage.length - 1 : current - 1;
    setDirection(-1);
    setCurrent(newIndex);
  }, [current]);

  const handleNext = useCallback(() => {
    if (cardStorage.length === 0) return;

    const newIndex = current === cardStorage.length - 1 ? 0 : current + 1;
    setDirection(1);
    setCurrent(newIndex);
  }, [current]);

  const swipeThreshold = 50;
  const handleDragEnd = useCallback(
    (e, { offset }) => {
      if (offset.x < -swipeThreshold) {
        handleNext();
      } else if (offset.x > swipeThreshold) {
        handlePrev();
      }
    },
    [handleNext, handlePrev],
  );

  useEffect(() => {
    const t = setTimeout(() => setDirection(0), 500);
    return () => clearTimeout(t);
  }, [current]);

  const cardVariants = useMemo(
    () => ({
      enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction > 0 ? 25 : -25,
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
      },
      exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction < 0 ? 25 : -25,
      }),
    }),
    [],
  );

  return {
    current,
    direction,
    data,
    handlePrev,
    handleNext,
    goToCard,
    handleDragEnd,
    cardVariants,
    isMobile,
    isVerySmall,
    totalCards: cardStorage.length,
  };
};
