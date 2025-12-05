import { useEffect } from "react";

export const useScrollLock = (isLocked) => {
  useEffect(() => {
    const body = document.body;

    if (isLocked) {
      // Store original overflow style
      const originalOverflow = body.style.overflow;

      // Lock scroll
      body.style.overflow = "hidden";

      // Cleanup function
      return () => {
        body.style.overflow = originalOverflow;
      };
    }
  }, [isLocked]);
};

export default useScrollLock;
