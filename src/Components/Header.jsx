import burger from "./assets/burger.png";
import lightmode from "./assets/lightmode.png";
import darkmode from "./assets/darkmode.png";
import { Link } from "react-router-dom";
import { themes } from "../themecolorsStorage";

function Header({ onBurgerClick, onNightmodeClick, palette }) {
  const modeIcon = palette.icon === "#181818" ? darkmode : lightmode;
  const modeAlt = palette.icon === "#181818" ? "Darkmode" : "Lightmode";
  return (
    <header
      className="fixed top-0 left-0 w-full h-[104px] flex items-center justify-between px-4"
      style={{ backgroundColor: palette.headerBg }}
    >
      <img
        src={burger}
        alt="Burger"
        className="w-24 cursor-pointer hover:scale-101"
        style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
        onClick={onBurgerClick}
      />
      <Link to="/">
        <div
          className="font-InriaSerif text-8xl"
          style={{ color: palette.headerText }}
        >
          Kashiami
        </div>
      </Link>
      <img
        src={modeIcon}
        alt={modeAlt}
        className="w-16 cursor-pointer hover:scale-101"
        style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
        onClick={onNightmodeClick}
      />
    </header>
  );
}

export default Header;
