// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Hello({ palette }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden relative"
    >
      <div
        className="font-InriaSerif text-4xl text-center max-xs:hidden"
        style={{ color: palette.copyrightText }}
      >
        Hello! I am kashiami, 21 years old jumpstyle producent from Poland
      </div>
      <div
        className="font-InriaSerif text-4xl text-center hidden max-xs:block max-xs:text-3xl"
        style={{ color: palette.copyrightText }}
      >
        Welcome to my site!
      </div>

      {/* Mobile scroll hint */}
      {isMobile && (
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, 5, 0],
          }}
          transition={{
            delay: 3,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <motion.div
            className="w-1 h-6 rounded-full mb-1"
            style={{ backgroundColor: `${palette.cardIcon}50` }}
            animate={{
              height: [24, 12, 24],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-1 h-6 rounded-full"
            style={{ backgroundColor: `${palette.cardIcon}30` }}
            animate={{
              height: [24, 16, 24],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.2,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </motion.section>
  );
}

export default Hello;
