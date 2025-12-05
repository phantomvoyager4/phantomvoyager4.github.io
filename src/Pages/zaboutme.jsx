import Header from "../Components/Header";
import Menu from "../Components/Navbar";
import Aboutme from "../Components/Aboutme";
import Copyright from "../Components/Copyright";
import { useState } from "react";

export function About({ palette, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Header
        onBurgerClick={() => setMenuOpen(true)}
        onNightmodeClick={toggleTheme}
        palette={palette}
        menuOpen={menuOpen}
      />
      <Menu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        palette={palette}
      />
      <main className="about-page min-h-screen pt-[88px] sm:pt-[120px] pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Aboutme palette={palette} />
        </div>
      </main>
      <Copyright palette={palette} />
    </div>
  );
}
