import strzalkaDL from "./assets/strzalkaDL.png";
import strzalkaDP from "./assets/strzalkaDP.png";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useCarousel } from "./useCarousel.jsx";
import OptimizedImage from "./OptimizedImage";
import { useState, useEffect } from "react";

function Card({ palette }) {
  const {
    current,
    direction,
    data,
    handlePrev,
    handleNext,
    handleDragEnd,
    cardVariants,
    isMobile,
    totalCards,
    goToCard,
  } = useCarousel();

  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(false);

  // Platform-specific hover colors
  const getPlatformHoverColor = (link, index) => {
    const platformColors = {
      0: "#FF0000", // YouTube
      1: "#FA243C", // Apple Music
      2: "#1DB954", // Spotify
    };
    return platformColors[index] || palette.cardIcon;
  };

  // Control swipe indicator visibility
  useEffect(() => {
    if (isMobile && totalCards > 1) {
      // Show indicator after initial load
      const showTimer = setTimeout(() => {
        setShowSwipeIndicator(true);
      }, 2000);

      // Hide indicator after some time
      const hideTimer = setTimeout(() => {
        setShowSwipeIndicator(false);
      }, 8000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isMobile, totalCards]);

  // Hide indicator when user interacts
  const handleCardInteraction = () => {
    setShowSwipeIndicator(false);
  };

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center items-center"
    >
      <div className="flex flex-row items-center sm:gap-8 gap-4 w-full justify-center">
        {/* Previous Arrow */}
        <motion.button
          className="cursor-pointer max-[550px]:hidden p-3 transition-all duration-300"
          onClick={handlePrev}
          initial={{ opacity: 0.3 }}
          whileHover={{
            scale: 1.1,
            opacity: 0.7
          }}
          whileTap={{ scale: 0.9 }}
          style={{
            filter: `invert(${palette.icon === "#181818" ? 1 : 0})`,
          }}
        >
          <img src={strzalkaDL} alt="Previous" className="w-6 h-6" />
        </motion.button>

        {/* Main Card Container */}
        <motion.div
          className="relative perspective-1000"
          onHoverStart={() => setIsHoveringCard(true)}
          onHoverEnd={() => setIsHoveringCard(false)}
        >
          <motion.div
            className="sm:w-[650px] w-[500px] sm:h-[650px] h-[500px] relative overflow-hidden flex items-center flex-col rounded-3xl shadow-xl backdrop-blur-sm max-[550px]:w-[calc(100vw-64px)] max-[550px]:h-[calc(100vw-64px)] max-[550px]:aspect-square max-[400px]:w-[calc(100vw-32px)] max-[400px]:h-[calc(100vw-32px)]"
            style={{
              background:
                palette.icon === "#181818"
                  ? `linear-gradient(135deg, ${palette.headerBg}80, ${palette.navbarBackground}85)`
                  : `linear-gradient(135deg, ${palette.headerBg}95, ${palette.navbarBackground}95)`,
              border: `2px solid ${palette.cardIcon}30`,
              boxShadow: isHoveringCard
                ? `0 0px 30px -12px ${palette.cardIcon}40, 0 0 0 1px ${palette.cardIcon}20`
                : `0 10px 25px -5px ${palette.bg}40, 0 0 0 1px ${palette.cardIcon}10`,
            }}
            animate={{
              rotateX: isHoveringCard ? 2 : 0,
              rotateY: isHoveringCard ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Background Gradient Overlay */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${palette.cardIcon}${palette.icon === "#181818" ? "15" : "20"} 0%, transparent 70%)`,
                opacity: palette.icon === "#181818" ? 0.15 : 0.2,
              }}
            />

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute inset-0 w-full h-full"
                drag={totalCards > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={
                  totalCards > 1
                    ? (e, info) => {
                        handleDragEnd(e, info);
                        handleCardInteraction();
                      }
                    : undefined
                }
              >
                <motion.div
                  className="w-full h-full flex flex-col items-center justify-center gap-6 p-6 max-[550px]:gap-4 max-[550px]:p-4"
                  animate={isMobile ? { x: [0, -15, 0] } : { x: 0 }}
                  transition={
                    isMobile
                      ? {
                          delay: 1,
                          duration: 0.5,
                          ease: "easeInOut",
                          repeat: 2,
                          repeatDelay: 1,
                        }
                      : { duration: 0 }
                  }
                >
                  {/* Album/Logo Image */}
                  <motion.a
                    href={data?.logoHref || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    onHoverStart={() => setIsHoveringImage(true)}
                    onHoverEnd={() => setIsHoveringImage(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <motion.div
                        transition={{ duration: 0.3 }}
                      >
                        <OptimizedImage
                          src={data?.logo || ""}
                          alt="Album Cover"
                          className="sm:w-[400px] w-[300px] sm:h-[400px] h-[300px] object-cover max-[550px]:w-[250px] max-[550px]:h-[250px] max-[400px]:w-[200px] max-[400px]:h-[200px]"
                          placeholderColor="bg-black-100 dark:bg-black-900"
                        />
                      </motion.div>

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHoveringImage ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            className="w-8 h-8 text-black ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.a>

                  {/* Content Section */}
                  <div className="flex flex-col items-center gap-4 max-[550px]:gap-3">
                    {/* Stream Text */}
                    <motion.h2
                      className="font-InriaSerif text-2xl text-center leading-tight max-[550px]:text-xl max-[400px]:text-lg"
                      style={{ color: palette.cardText }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {data?.streamText || "Stream My Music"}
                    </motion.h2>

                    {/* Platform Links */}
                    <motion.div
                      className="flex flex-row gap-4 max-[550px]:gap-3 max-[400px]:gap-2"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {data?.links?.map((link, idx) => (
                        <motion.a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={idx}
                          className="relative group"
                          onHoverStart={() => setHoveredLink(idx)}
                          onHoverEnd={() => setHoveredLink(null)}
                          whileHover={{ scale: 1.1, y: -4 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Platform Icon Background */}
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredLink === idx ? 0.2 : 0,
                              backgroundColor: getPlatformHoverColor(link, idx),
                            }}
                            transition={{ duration: 0.2 }}
                          />

                          {/* Platform Icon */}
                          <div className="relative p-3 rounded-xl transition-all duration-200">
                            <OptimizedImage
                              src={link.img}
                              alt={`Platform ${idx + 1}`}
                              className="sm:w-16 w-12 h-auto max-[550px]:w-10 max-[400px]:w-8"
                              loading="eager"
                            />
                          </div>

                          {/* Tooltip */}
                          <motion.div
                            className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap pointer-events-none"
                            style={{
                              backgroundColor: palette.navbarBackground,
                              color: palette.navbarText,
                              boxShadow: `0 4px 12px ${palette.bg}40`,
                            }}
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{
                              opacity: hoveredLink === idx ? 1 : 0,
                              y: hoveredLink === idx ? 0 : 10,
                              scale: hoveredLink === idx ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {idx === 0 && "YouTube Music"}
                            {idx === 1 && "Apple Music"}
                            {idx === 2 && "Spotify"}
                            {idx > 2 && `Platform ${idx + 1}`}
                          </motion.div>
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Card indicators for all devices */}
            {totalCards > 1 && (
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[...Array(totalCards)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full cursor-pointer"
                    style={{
                      backgroundColor:
                        current === index
                          ? palette.cardIcon
                          : `${palette.cardIcon}40`,
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => goToCard(index)}
                  />
                ))}
              </motion.div>
            )}

            {/* Swipe Indicator for Mobile */}
            {isMobile && showSwipeIndicator && totalCards > 1 && (
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: `${palette.cardIcon}60` }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: `${palette.cardIcon}60` }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: `${palette.cardIcon}60` }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Next Arrow */}
        <motion.button
          className="cursor-pointer max-[550px]:hidden p-3 transition-all duration-300"
          onClick={handleNext}
          initial={{ opacity: 0.3 }}
          whileHover={{
            scale: 1.1,
            opacity: 0.7
          }}
          whileTap={{ scale: 0.9 }}
          style={{
            filter: `invert(${palette.icon === "#181818" ? 1 : 0})`,
          }}
        >
          <img src={strzalkaDP} alt="Next" className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Card;
