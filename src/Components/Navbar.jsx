import menuclose from "./assets/menuclose.png";
import { Link } from "react-router-dom";
import { themes } from "../themecolorsStorage";

function Menu({ open, onClose, palette }) {
  return (
    <nav
      className={`fixed top-0 left-0 w-50 h-full z-50 transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ backgroundColor: palette.navbarBackground }}
    >
      <div className="flex">
        <img
          src={menuclose}
          alt="Close Menu"
          className="ml-auto pt-2 pr-2 cursor-pointer"
          onClick={onClose}
          style={{ filter: `invert(${palette.icon === "#181818" ? 1 : 0})` }}
        />
      </div>
      <ul
        className="font-InriaSerif text-lg pt-2 pl-2 "
        style={{ color: palette.navbarText }}
      >
        <li>
          <a
            href="https://linktr.ee/kashiami"
            target="_blank"
            className="hover:underline"
          >
            Linktree
          </a>
        </li>
        <li>
          <a
            href="mailto:obywatelnumer04230@gmail.com"
            className="hover:underline"
          >
            Direct contact
          </a>
        </li>
        <li>
          <a
            href="https://github.com/phantomvoyager4/phantomvoyager4.github.io"
            target="_blank"
            className="hover:underline"
          >
            Github repo
          </a>
        </li>
        <Link to="/about" className="cursor-pointer hover:underline">
          About me
        </Link>
      </ul>
    </nav>
  );
}

export default Menu;
