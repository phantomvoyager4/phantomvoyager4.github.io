import { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  placeholderColor = "bg-gray-200 dark:bg-gray-700",
  showPlaceholder = true,
  loading = "lazy",
  fadeInDuration = 0.3,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(loading === "eager");
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === "eager") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const shouldShowImage = isInView && src;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Loading state */}
      {showPlaceholder && !isLoaded && !hasError && shouldShowImage && (
        <div
          className={`absolute inset-0 ${placeholderColor} animate-pulse flex items-center justify-center`}
        >
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Empty placeholder when no src */}
      {!src && (
        <div
          className={`absolute inset-0 ${placeholderColor} flex items-center justify-center`}
        >
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div
          className={`absolute inset-0 ${placeholderColor} flex items-center justify-center`}
        >
          <div className="text-center p-4">
            <svg
              className="w-8 h-8 text-red-400 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xs text-gray-500">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      {shouldShowImage && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: fadeInDuration }}
          {...props}
        />
      )}
    </div>
  );
};

// Higher-order component for common image patterns
export const ArtistImage = ({ src, alt, ...props }) => (
  <OptimizedImage
    src={src}
    alt={alt}
    className="rounded-lg shadow-md"
    placeholderColor="bg-purple-100 dark:bg-purple-900"
    {...props}
  />
);

export const AlbumCover = ({ src, alt, ...props }) => (
  <OptimizedImage
    src={src}
    alt={alt}
    className="aspect-square rounded-md"
    placeholderColor="bg-music-100 dark:bg-music-900"
    {...props}
  />
);

export default OptimizedImage;
