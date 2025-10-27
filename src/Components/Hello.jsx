import { themes } from "../themecolorsStorage";
import { motion } from "framer-motion";

function Hello({ palette }) {
  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      <div
        className="font-InriaSerif text-4xl text-center max-xs:hidden"
        style={{ color: palette.copyrightText }}
      >
      Hello! I am kashiami, 21yo jumpstyle producent from Poland
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
