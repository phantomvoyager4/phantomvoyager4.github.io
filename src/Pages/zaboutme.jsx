import Header from "../Components/Header";
import Menu from "../Components/Navbar";
import Aboutme from "../Components/Aboutme";
import Warning from "../Components/Warning"
import Copyright from "../Components/Copyright"
import { useState } from "react";

export function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Header onBurgerClick={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex flex-col items-center h-screen pt-[147px]">
      <Aboutme />
      <Warning />
      <Copyright />
      </div>
    </div>
  );
}