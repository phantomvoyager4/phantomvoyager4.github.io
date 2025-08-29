import Header from "./Components/Header";
import Copyright from "./Components/Copyright";
import Hello from "./Components/Hello";
import Card from "./Components/Card";
import Warning from "./Warning";
import Menu from "./Components/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Header onBurgerClick={() => setMenuOpen(true)} />
      <div className="flex flex-col items-center h-screen pt-[147px]">
        <Hello />
        <div className="mt-8">
          <Card />
        </div>
      </div>
      <Copyright />
      <Warning />
    </>
  );
}

export default App;