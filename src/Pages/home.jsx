import Header from "../Components/Header";
import Copyright from "../Components/Copyright";
import Hello from "../Components/Hello";
import Card from "../Components/Card";
import Warning from "../Components/Warning";
import Menu from "../Components/Navbar";
import { useState } from "react";
import { themes } from "../themecolorsStorage";

export function Home({palette, toggleTheme}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} palette={palette} />
      <Header onBurgerClick={() => setMenuOpen(true)} onNightmodeClick={toggleTheme} palette={palette} />
      <div className="flex flex-col items-center h-screen pt-[147px]">
        <Hello palette={palette} />
        <div className="mt-8">
          <Card palette={palette} />
        </div>
      </div>
      <Copyright palette={palette} />
      <Warning />
    </>
  );
}
