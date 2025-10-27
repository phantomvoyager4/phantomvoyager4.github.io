import strzalkaDL from "./assets/strzalkaDL.png";
import strzalkaDP from "./assets/strzalkaDP.png";
import { themes } from "../themecolorsStorage";
import { motion, AnimatePresence } from "framer-motion";
import { useCarousel } from "./useCarousel.jsx";

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
  } = useCarousel();

  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-row items-center sm:gap-[32px] gap-[16px]">
        <img
          src={strzalkaDL}
          alt="Previous"
          className="cursor-pointer max-[550px]:hidden"
          onClick={handlePrev}
          style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
        />

        <motion.div
          className="sm:w-[650px] w-[500px] sm:h-[650px] h-[500px] border-5 relative overflow-hidden flex items-center flex-col sm:gap-[16px] gap-[4px] pt-[16px] max-[550px]:w-[calc(100vw-64px)] max-[550px]:h-[calc(100vw-64px)] max-[550px]:aspect-square"
          style={{ borderColor: palette.cardIcon }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              <motion.div
                className="w-full h-full flex flex-col items-center justify-start gap-[16px] pt-[16px] max-[550px]:gap-[8px] max-[550px]:pt-[8px] max-[335px]:gap-[0px]"
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
                <a
                  href={data.logoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={data.logo}
                    alt="Logo"
                    className="sm:w-[448px] w-[360px] sm:h-[448px] h-[360px] transition-transform duration-200 transform hover:scale-102 max-[550px]:w-[65%] max-[550px]:h-auto max-[550px]:block max-[550px]:mx-auto"
                  />
                </a>
                <div className="flex flex-col items-center gap-[8px] max-[550px]:gap-[4px]">
                  <div
                    className="font-InriaSerif text-2xl max-[550px]:text-lg"
                    style={{ color: palette.cardText }}
                  >
                    {data.streamText}
                  </div>
                  <div className="flex flex-row gap-[12px] max-[550px]:gap-[8px]">
                    {data.links.map((link, idx) => (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={idx}
                      >
                        <img
                          src={link.img}
                          alt="Logo"
                          className="sm:w-[88px] w-[56px] transition-transform duration-200 transform hover:scale-105 max-[550px]:w-[40px]"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <img
          src={strzalkaDP}
          alt="Next"
          className="cursor-pointer max-[550px]:hidden"
          onClick={handleNext}
          style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
        />
      </div>
    </motion.section>
  );
}

export default Card;
