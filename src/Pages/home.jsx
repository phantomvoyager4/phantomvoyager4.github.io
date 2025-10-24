import Header from "../Components/Header";
import Copyright from "../Components/Copyright";
import Hello from "../Components/Hello";
import Card from "../Components/Card";
import Menu from "../Components/Navbar";
import Playlist from "../Components/Playlist";
import Songsdisplay from "../Components/Songsdisplay";
import { useState } from "react";
import { themes } from "../themecolorsStorage";

export function Home({ palette, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed z-60">
        <Menu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          palette={palette}
        />
      </div>
      <div className="fixed z-50">
        <Header
          onBurgerClick={() => setMenuOpen(true)}
          onNightmodeClick={toggleTheme}
          palette={palette}
        />
      </div>
      <div className="flex flex-col items-center h-full pt-[146px]">
        <div className="flex flex-col gap-[96px] pb-[64px]">
          <div className="flex flex-col items-center">
            <Hello palette={palette} />
            <div className="mt-8">
              <Card palette={palette} />
            </div>
          </div>
          <div className="flex flex-col">
            <Songsdisplay palette={palette} />
            <Playlist palette={palette} />
          </div>
        </div>
      </div>
      <Copyright palette={palette} />
    </>
  );
}
