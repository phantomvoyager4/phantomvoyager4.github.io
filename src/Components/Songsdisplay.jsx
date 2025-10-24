import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { themes } from "../themecolorsStorage";
import { Songscardstorage } from "./Songscardstorage.js";

function Songsdisplay({ palette }) {
  const [current, setCurrent] = useState(0);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  const len = Songscardstorage.length;
  const i1 = current;
  const i2 = (current + 1) % len;
  const i3 = (current + 2) % len;

  return (
    <motion.section
      ref={ref}
      initial={{ y: -20, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      <div className="w-[1278px] h-[400px] flex flex-col">
        <div
          className="font-InriaSerif text-4xl text-center pt-[8px]"
          style={{ color: palette.cardText }}
        >
          My latest songs
        </div>
        <div className="w-[1278px] h-[400px] flex flex-row gap-[104px] justify-center items-center">
          {[i1, i2, i3].map((idx) => (
            <a
              key={idx}
              href={Songscardstorage[idx].logoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                className="w-[280px] h-[280px] transition-transform duration-200 transform hover:scale-103"
                src={Songscardstorage[idx].logo}
                alt={Songscardstorage[idx].logoHref}
              />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Songsdisplay;
