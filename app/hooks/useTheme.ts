"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const THEME_EVENT = "theme-change";

function subscribe(callback: () => void) {
  // "storage" fires on OTHER tabs when localStorage changes — keeps tabs in sync.
  window.addEventListener("storage", callback);
  // Same-tab updates: localStorage doesn't fire "storage" on the tab that wrote it,
  // so setTheme dispatches this custom event to notify the current tab.
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

function getSnapshot(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}

// SSR can't read DOM / localStorage — fall back to the same default the
// pre-hydration script in layout.tsx uses.
function getServerSnapshot(): Theme {
  return "dark";
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = (next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage may be disabled (private mode) — ignore
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, setTheme, toggle };
}
