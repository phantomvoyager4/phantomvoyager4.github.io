import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Songscardstorage } from "./Songscardstorage.js";

function Songsdisplay({ palette }) {
  const current = 0;
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start({ y: 0, opacity: 1 });
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
      <div className="max-w-[1278px] w-full mx-auto flex flex-col px-4">
        <div
          className="font-InriaSerif text-4xl text-center pt-[8px]"
          style={{ color: palette.cardText }}
        >
          My latest songs
        </div>

        <div className="w-full grid grid-cols-1 place-items-center gap-6 px-4 py-6 xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-[104px]">
          {[i1, i2, i3].map((idx) => (
            <motion.a
              key={idx}
              href={Songscardstorage[idx].logoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer relative group"
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={Songscardstorage[idx].logo}
                  alt={Songscardstorage[idx].logoHref}
                  className="w-[280px] rounded-lg transition-all duration-300"
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
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
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Songsdisplay;
