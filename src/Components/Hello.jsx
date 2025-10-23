import { themes } from "../themecolorsStorage";
import { motion } from "framer-motion";

function Hello({ palette }) {
  return (
    <motion.section initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
    <div className="font-InriaSerif text-4xl" style={{ color: palette.copyrightText }}>Hello! I am kashiami, 21yo jumpstyle producent from Poland</div>
    </motion.section>
  );
}

export default Hello;