import burger from "./assets/burger.svg";
import lightmode from "./assets/lightmode.svg";
import darkmode from "./assets/darkmode.svg";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Header({ onBurgerClick, onNightmodeClick, palette, menuOpen }) {
  const modeIcon = palette.icon === "#181818" ? darkmode : lightmode;
  const modeAlt = palette.icon === "#181818" ? "Darkmode" : "Lightmode";

  const linktreeUrl =
    import.meta.env.VITE_LINKTREE_URL || "https://linktr.ee/kashiami";

  return (
    <header
      className="fixed top-0 left-0 sm:h-[88px] h-[56px] grid grid-cols-3 items-center px-4 sm:px-[24px] z-40"
      style={{
        backgroundColor: palette.headerBg,
        width: "100vw",
        right: 0,
      }}
    >
      {/* Left side - Burger menu */}
      <div className="flex items-center justify-start">
        <motion.div
          className="relative p-2 rounded-lg cursor-pointer flex-shrink-0 transition-all duration-200"
          onClick={onBurgerClick}
          animate={{
            backgroundColor: menuOpen
              ? palette.icon === "#181818"
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(0, 0, 0, 0.1)"
              : "transparent",
            borderColor: menuOpen ? `${palette.cardStroke}40` : "transparent",
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor:
              palette.icon === "#181818"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.15)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          style={{
            border: `1px solid ${menuOpen ? `${palette.cardStroke}40` : "transparent"}`,
          }}
        >
          <motion.img
            src={burger}
            alt="Menu"
            className="w-8 sm:w-10 md:w-12"
            style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
            animate={{
              rotate: menuOpen ? 90 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </div>

      {/* Center - Logo */}
      <Link to="/" className="flex justify-center">
        <motion.div
          className="font-InriaSerif text-3xl sm:text-5xl md:text-7xl text-center whitespace-nowrap"
          style={{ color: palette.headerText }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Kashiami
        </motion.div>
      </Link>

      {/* Right side - Theme Toggle and CTA Button */}
      <div className="flex items-center justify-end space-x-2 sm:space-x-3">
        {/* Theme Toggle */}
        <motion.button
          onClick={onNightmodeClick}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg cursor-pointer flex-shrink-0 transition-colors duration-200"
          style={{
            filter: `invert(${palette.icon === "#181818" ? 1 : 0})`,
            border: `2px solid transparent`,
          }}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <img src={modeIcon} alt={modeAlt} className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>

        {/* CTA Button */}
        <motion.a
          href={linktreeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center px-4 py-2 h-12 rounded-lg font-medium text-sm border-2 transition-colors duration-200"
          style={{
            backgroundColor:
              palette.icon === "#181818" ? "#181818" : palette.icon,
            color: palette.icon === "#181818" ? "#ffffff" : palette.headerBg,
            borderColor: palette.icon === "#181818" ? "#181818" : palette.icon,
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor:
              palette.icon === "#181818" ? "#333333" : `${palette.icon}dd`,
            color: palette.icon === "#181818" ? "#ffffff" : palette.headerBg,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="font-InriaSerif text-[16px]">Listen Now</span>
        </motion.a>

        {/* Mobile CTA - Icon only */}
        <motion.a
          href={linktreeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg border-2"
          style={{
            backgroundColor:
              palette.icon === "#181818" ? "#181818" : palette.icon,
            borderColor: palette.icon === "#181818" ? "#181818" : palette.icon,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <svg
            className="w-4 h-4"
            style={{
              color: palette.icon === "#181818" ? "#ffffff" : palette.headerBg,
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        </motion.a>
      </div>
    </header>
  );
}

export default Header;
