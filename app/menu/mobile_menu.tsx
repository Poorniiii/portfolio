"use client";

import { IMobileMenuProps } from "../interface";
import { useActiveSection } from "../hooks/useActiveSection";

export default function MobileMenu({
  menuItems,
  isMenuOpen,
  setIsMenuOpen,
}: IMobileMenuProps) {
  const { activeSection, setActive } = useActiveSection();

  const handleClick = (href: string) => {
    setActive(href);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`md:hidden overflow-hidden ${isMenuOpen ? "max-h-96" : "max-h-0"} transition-[max-height] duration-200`}
    >
      <div className="pt-4 pb-2">
        {menuItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`
                block px-4 py-3 text-fluid-small font-medium border-l-2 transition-colors duration-200
                ${
                  isActive
                    ? "text-[var(--gold)] border-[var(--gold)]"
                    : "text-[var(--fg-muted)] border-transparent hover:text-[var(--fg)]"
                }
              `}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
