import Header from "../Components/Header";
import Copyright from "../Components/Copyright";
import Hello from "../Components/Hello";
import Card from "../Components/Card";
import Menu from "../Components/Navbar";
import Playlist from "../Components/Playlist";
import Songsdisplay from "../Components/Songsdisplay";
import { HomePageSEO } from "../Components/SEO";
import { useState } from "react";

export function Home({ palette, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <HomePageSEO url="https://kashiami.com/" />
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
      <main className="home-page min-h-screen pt-[88px] sm:pt-[120px] pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col items-center h-full">
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
        </div>
      </main>
      <Copyright palette={palette} />
    </div>
  );
}
