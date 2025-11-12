import burger from "./assets/burger.svg";
import lightmode from "./assets/lightmode.svg";
import darkmode from "./assets/darkmode.svg";
import { Link } from "react-router-dom";
import { themes } from "../themecolorsStorage";

function Header({ onBurgerClick, onNightmodeClick, palette }) {
  const modeIcon = palette.icon === "#181818" ? darkmode : lightmode;
  const modeAlt = palette.icon === "#181818" ? "Darkmode" : "Lightmode";

  return (
    <header
      className="fixed top-0 left-0 w-full sm:h-[88px] h-[56px] flex items-center justify-between px-4 sm:px-[24px] "
      style={{ backgroundColor: palette.headerBg }}
    >
      <div className="flex items-center flex-shrink-0">
        <img
          src={burger}
          alt="Burger"
          className="w-16 sm:w-18 md:w-22 cursor-pointer hover:scale-101 flex-shrink-0"
          style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
          onClick={onBurgerClick}
        />
      </div>
      <Link to="/" className="flex-1 flex justify-center min-w-0">
        <div
          className="font-InriaSerif text-3xl sm:text-5xl md:text-7xl text-center truncate"
          style={{ color: palette.headerText }}
        >
          Kashiami
        </div>
      </Link>
      <div className="flex items-center flex-shrink-0">
        <img
          src={modeIcon}
          alt={modeAlt}
          className="w-12 sm:w-14 md:w-16 cursor-pointer hover:scale-101 flex-shrink-0"
          style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
          onClick={onNightmodeClick}
        />
      </div>
    </header>
  );
}

export default Header;
