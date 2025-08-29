import Header from "../Components/Header";
import Menu from "../Components/Navbar";
import { useState } from "react";

export function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Header onBurgerClick={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}