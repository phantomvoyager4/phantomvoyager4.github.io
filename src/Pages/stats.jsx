import Header from "../Components/Header";
import Menu from "../Components/Navbar";
import Breadcrumbs from "../Components/Breadcrumbs";
import Copyright from "../Components/Copyright";
import { useState } from "react";
import Statsdesc from "../Components/statsdesc";
import { StatsPageSEO } from "../Components/SEO";

export function Stats({ palette, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <StatsPageSEO />
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
      <main className="stats-page min-h-screen pt-[88px] sm:pt-[120px] pb-8">
        <Breadcrumbs palette={palette} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Statsdesc palette={palette} />
        </div>
      </main>
      <Copyright palette={palette} />
    </div>
  );
}
