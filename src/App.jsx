import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/home";
import { About } from "./Pages/zaboutme";
import { useState } from "react";
import { themes } from "./themecolorsStorage";

function App() {
  const [theme, setTheme] = useState("dark");
  const palette = themes[theme];

  return (
    <div style={{ backgroundColor: palette.bg, minHeight: "100vh" }}>
    <Router>
      <Routes>
        <Route path="/" element={<Home palette={palette} toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}/>} />
        <Route path="/about" element={<About palette={palette} toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;