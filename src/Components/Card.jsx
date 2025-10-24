import strzalkaDL from "./assets/strzalkaDL.png";
import strzalkaDP from "./assets/strzalkaDP.png";
import { cardStorage } from "./cardStorage.js";
import { useState } from "react";
import { themes } from "../themecolorsStorage";
import { motion } from "framer-motion";

function Card({ palette }) {
  const [current, setCurrent] = useState(0);
  const data = cardStorage[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? cardStorage.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === cardStorage.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-row items-center gap-[32px]">
        <img
          src={strzalkaDL}
          alt="Previous"
          className="cursor-pointer"
          onClick={handlePrev}
          style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
        />
        <div
          className="w-[650px] h-[650px] border-5 flex items-center flex-col gap-[16px] pt-[16px]"
          style={{ borderColor: palette.cardIcon }}
        >
          <a href={data.logoHref} target="_blank" rel="noopener noreferrer">
            <img
              src={data.logo}
              alt="Logo"
              className="w-[448px] h-[448px] transition-transform duration-200 transform hover:scale-102"
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
                    className="w-[88px] transition-transform duration-200 transform hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
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
