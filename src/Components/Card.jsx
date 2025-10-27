import strzalkaDL from "./assets/strzalkaDL.png";
import strzalkaDP from "./assets/strzalkaDP.png";
import { cardStorage } from "./cardStorage.js";
import { useState } from "react";
import { themes } from "../themecolorsStorage";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function Card({ palette }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
  const data = cardStorage[current];

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? cardStorage.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === cardStorage.length - 1 ? 0 : prev + 1));
  };

  // reset direction after change to avoid stale value (optional)
  useEffect(() => {
    const t = setTimeout(() => setDirection(0), 500);
    return () => clearTimeout(t);
  }, [current]);

  const cardVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

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
          className="cursor-pointer"
          onClick={handlePrev}
          style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
        />
        <div
          className="sm:w-[650px] w-[500px] sm:h-[650px] h-[500px] border-5 relative overflow-hidden flex items-center flex-col sm:gap-[16px] gap-[4px] pt-[16px]"
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
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-start gap-[16px] pt-[16px]"
            >
              <a href={data.logoHref} target="_blank" rel="noopener noreferrer">
                <img
                  src={data.logo}
                  alt="Logo"
                  className="sm:w-[448px] w-[360px] sm:h-[448px] h-[360px] transition-transform duration-200 transform hover:scale-102"
                />
              </a>
              <div className="flex flex-col items-center gap-[8px]">
                <div
                  className="font-InriaSerif text-2xl"
                  style={{ color: palette.cardText }}
                >
                  {data.streamText}
                </div>
                <div className="flex flex-row gap-[12px]">
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
                        className="sm:w-[88px] w-[56px] transition-transform duration-200 transform hover:scale-105"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <img
          src={strzalkaDP}
          alt="Next"
          className="cursor-pointer"
          onClick={handleNext}
          style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
        />
      </div>
    </motion.section>
  );
}

export default Card;
