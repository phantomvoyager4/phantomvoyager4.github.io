import { createContext, useContext, useState, useEffect } from "react";
import { themes } from "../themecolorsStorage";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'dark'
    try {
      const savedTheme = localStorage.getItem("kashiami-theme");
      // Explicitly check for valid theme values, default to 'dark'
      return savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : "dark";
    } catch {
      return "dark";
    }
  });

  const palette = themes[theme];

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    try {
      localStorage.setItem("kashiami-theme", newTheme);
    } catch {
      console.warn("Could not save theme to localStorage");
    }
  };

  // Initialize theme on first load
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("kashiami-theme");
      if (!savedTheme) {
        // Set dark as default if no theme is saved
        localStorage.setItem("kashiami-theme", "dark");
        setTheme("dark");
      }
    } catch {
      console.warn("Could not access localStorage");
    }
  }, []);

  // Set CSS custom properties for theme
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(palette).forEach(([key, value]) => {
      root.style.setProperty(
        `--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
        value,
      );
    });

    // Set data attribute for theme-based styling
    root.setAttribute("data-theme", theme);
  }, [palette, theme]);

  const value = {
    theme,
    palette,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
