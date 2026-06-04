import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const DARK_CLASS = "dark";

function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined")
    return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): "dark" | "light" | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light")
      return stored;
  }
  catch {}
  return null;
}

function applyTheme(theme: "dark" | "light") {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add(DARK_CLASS);
  }
  else {
    root.classList.remove(DARK_CLASS);
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return getStoredTheme() ?? getSystemTheme();
  });

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    }
    catch {}
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
