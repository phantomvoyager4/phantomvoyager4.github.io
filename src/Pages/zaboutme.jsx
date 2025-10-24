import Header from "../Components/Header";
import Menu from "../Components/Navbar";
import Aboutme from "../Components/Aboutme";
import Warning from "../Components/Warning";
import Copyright from "../Components/Copyright";
import { useState } from "react";
import { themes } from "../themecolorsStorage";

export function About({ palette, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Header
        onBurgerClick={() => setMenuOpen(true)}
        onNightmodeClick={toggleTheme}
        palette={palette}
      />
      <Menu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        palette={palette}
      />
      <div className="flex h-screen pt-[64px]">
        <div className="m-auto">
          <Aboutme palette={palette} />
        </div>
      </div>
      <Warning />
      <Copyright palette={palette} />
    </div>
  );
}
