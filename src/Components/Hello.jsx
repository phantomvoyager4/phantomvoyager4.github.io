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
    </motion.section>
  );
}

export default Hello;
