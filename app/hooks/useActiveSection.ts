"use client";

import { useState, useEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Function to update active section based on URL hash
    const updateActiveSection = () => {
      const currentHash = window.location.hash;
      console.log("Current hash:", currentHash); // Debug log

      if (currentHash && currentHash !== "#hero") {
        setActiveSection(currentHash);
        localStorage.setItem("activeMenuSection", currentHash);
      } else {
        // If no hash or hero hash, don't highlight any menu item
        setActiveSection("");
        localStorage.removeItem("activeMenuSection");
      }
    };

    // Set initial active section from URL hash
    updateActiveSection();

    // Listen for hash changes
    window.addEventListener("hashchange", updateActiveSection);

    // Also listen for popstate to catch browser back/forward
    window.addEventListener("popstate", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("popstate", updateActiveSection);
    };
  }, []);

  const setActive = (href: string) => {
    setActiveSection(href);
    localStorage.setItem("activeMenuSection", href);
  };

  return { activeSection, setActive };
}
