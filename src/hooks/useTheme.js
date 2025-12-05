import { useState, useEffect, useCallback } from "react";
import { themes } from "../themecolorsStorage";

export const useTheme = () => {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = useCallback(() => {
    try {
      // First check localStorage
      const savedTheme = localStorage.getItem("kashiami-theme");
      if (savedTheme && themes[savedTheme]) {
        return savedTheme;
      }

      // Fallback to system preference
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }

      return "light";
    } catch (error) {
      console.warn(
        "Error accessing localStorage or system preferences:",
        error,
      );
      return "dark"; // Default fallback
    }
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);
  const [systemTheme, setSystemTheme] = useState(() => {
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch {
      return "dark";
    }
  });
  const [isSystemTheme, setIsSystemTheme] = useState(false);

  // Get current palette
  const palette = themes[theme];

  // Toggle between themes
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setIsSystemTheme(false);

    try {
      localStorage.setItem("kashiami-theme", newTheme);
      localStorage.setItem("kashiami-use-system-theme", "false");
    } catch (error) {
      console.warn("Could not save theme preference:", error);
    }
  }, [theme]);

  // Set specific theme
  const setSpecificTheme = useCallback((newTheme) => {
    if (!themes[newTheme]) {
      console.warn(`Theme "${newTheme}" does not exist`);
      return;
    }

    setTheme(newTheme);
    setIsSystemTheme(false);

    try {
      localStorage.setItem("kashiami-theme", newTheme);
      localStorage.setItem("kashiami-use-system-theme", "false");
    } catch (error) {
      console.warn("Could not save theme preference:", error);
    }
  }, []);

  // Use system theme preference
  const useSystemTheme = useCallback(() => {
    setTheme(systemTheme);
    setIsSystemTheme(true);

    try {
      localStorage.setItem("kashiami-theme", systemTheme);
      localStorage.setItem("kashiami-use-system-theme", "true");
    } catch (error) {
      console.warn("Could not save theme preference:", error);
    }
  }, [systemTheme]);

  // Reset to default theme
  const resetTheme = useCallback(() => {
    const defaultTheme = "dark";
    setTheme(defaultTheme);
    setIsSystemTheme(false);

    try {
      localStorage.removeItem("kashiami-theme");
      localStorage.removeItem("kashiami-use-system-theme");
    } catch (error) {
      console.warn("Could not clear theme preference:", error);
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleSystemThemeChange = (e) => {
        const newSystemTheme = e.matches ? "dark" : "light";
        setSystemTheme(newSystemTheme);

        // If user is following system theme, update accordingly
        if (isSystemTheme) {
          setTheme(newSystemTheme);
          try {
            localStorage.setItem("kashiami-theme", newSystemTheme);
          } catch (error) {
            console.warn("Could not save system theme:", error);
          }
        }
      };

      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () =>
          mediaQuery.removeEventListener("change", handleSystemThemeChange);
      }
      // Legacy browsers
      else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleSystemThemeChange);
        return () => mediaQuery.removeListener(handleSystemThemeChange);
      }
    } catch (error) {
      console.warn("System theme detection not supported:", error);
    }
  }, [isSystemTheme]);

  // Check if user prefers system theme on mount
  useEffect(() => {
    try {
      const useSystemPref = localStorage.getItem("kashiami-use-system-theme");
      if (useSystemPref === "true") {
        setIsSystemTheme(true);
        setTheme(systemTheme);
      }
    } catch (error) {
      console.warn("Could not read system theme preference:", error);
    }
  }, [systemTheme]);

  // Set CSS custom properties and data attributes
  useEffect(() => {
    try {
      const root = document.documentElement;

      // Set CSS custom properties
      Object.entries(palette).forEach(([key, value]) => {
        const cssVarName = `--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
        root.style.setProperty(cssVarName, value);
      });

      // Set theme data attribute
      root.setAttribute("data-theme", theme);

      // Set color-scheme for native elements
      root.style.colorScheme = theme;

      // Update meta theme-color for mobile browsers
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');
      if (themeColorMeta) {
        themeColorMeta.setAttribute("content", palette.bg);
      } else {
        const newThemeColorMeta = document.createElement("meta");
        newThemeColorMeta.name = "theme-color";
        newThemeColorMeta.content = palette.bg;
        document.head.appendChild(newThemeColorMeta);
      }
    } catch (error) {
      console.warn("Error applying theme styles:", error);
    }
  }, [theme, palette]);

  // Get theme info
  const getThemeInfo = useCallback(
    () => ({
      current: theme,
      available: Object.keys(themes),
      isSystemTheme,
      systemTheme,
      palette,
    }),
    [theme, isSystemTheme, systemTheme, palette],
  );

  // Check if theme is available
  const isThemeAvailable = useCallback((themeName) => {
    return Boolean(themes[themeName]);
  }, []);

  return {
    theme,
    palette,
    systemTheme,
    isSystemTheme,
    toggleTheme,
    setTheme: setSpecificTheme,
    useSystemTheme,
    resetTheme,
    getThemeInfo,
    isThemeAvailable,
    availableThemes: Object.keys(themes),
  };
};

export default useTheme;
