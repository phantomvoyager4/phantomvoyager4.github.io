import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import ErrorBoundary from "./Components/ErrorBoundary";
import { FullPageLoader, MusicLoader } from "./Components/LoadingSpinner";

const Home = lazy(() =>
  import("./Pages/home").then((module) => ({ default: module.Home })),
);
const About = lazy(() =>
  import("./Pages/zaboutme").then((module) => ({ default: module.About })),
);

function AppContent() {
  const { palette, toggleTheme } = useTheme();

  return (
    <div
      className="theme-transition"
      style={{
        backgroundColor: palette.bg,
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Router>
        <Suspense
          fallback={<FullPageLoader text="Loading..." variant="pulse" />}
        >
          <Routes>
            <Route
              path="/"
              element={<Home palette={palette} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/about"
              element={<About palette={palette} toggleTheme={toggleTheme} />}
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
