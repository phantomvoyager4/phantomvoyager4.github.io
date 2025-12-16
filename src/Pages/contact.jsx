import ContactForm from "../Components/ContactForm";
import { useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Navbar";
import Copyright from "../Components/Copyright";
import Breadcrumbs from "../Components/Breadcrumbs";

export function Contact({ palette, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
    return(
      <div className="overflow-x-hidden">
      <Breadcrumbs palette={palette} />
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
        <div className="pt-20">
        <ContactForm palette={palette} />   
        </div>
        <Copyright palette={palette} />
      </div>
  );
}