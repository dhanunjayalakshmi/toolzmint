"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "toolzmint-theme";
const THEME_ORDER = ["system", "light", "dark"];

const getSystemTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return "system";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  return THEME_ORDER.includes(storedTheme) ? storedTheme : "system";
};

const applyTheme = (themePreference) => {
  const resolvedTheme =
    themePreference === "system" ? getSystemTheme() : themePreference;

  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;
};

const ThemeToggle = () => {
  const [themePreference, setThemePreference] = useState("system");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setTimeout(() => {
      setThemePreference(storedTheme);
    }, 0);
  }, []);

  useEffect(() => {
    applyTheme(themePreference);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (themePreference === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themePreference]);

  const handleCycleTheme = () => {
    const currentIndex = THEME_ORDER.indexOf(themePreference);
    const nextTheme = THEME_ORDER[(currentIndex + 1) % THEME_ORDER.length];
    setThemePreference(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  };

  const label =
    themePreference === "system"
      ? "System"
      : themePreference === "light"
        ? "Light"
        : "Dark";

  const Icon =
    themePreference === "system"
      ? Monitor
      : themePreference === "light"
        ? Sun
        : Moon;

  return (
    <button
      type="button"
      onClick={handleCycleTheme}
      className="cursor-pointer rounded-full px-3 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
      aria-label="Cycle theme"
      title="Cycle theme"
    >
      <span className="inline-flex items-center gap-2" suppressHydrationWarning>
        <Icon className="size-4" />
        <span>{label}</span>
      </span>
    </button>
  );
};

export default ThemeToggle;
