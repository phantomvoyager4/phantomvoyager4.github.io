import Header from "../Components/Header";
import Menu from "../Components/Navbar";
import Aboutme from "../Components/Aboutme";
import Copyright from "../Components/Copyright";
import { useState } from "react";

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
      <div className="min-h-screen pt-[88px] sm:pt-[120px] pb-8">
        <Aboutme palette={palette} />
      </div>
      <Copyright palette={palette} />
    </div>
  );
}
