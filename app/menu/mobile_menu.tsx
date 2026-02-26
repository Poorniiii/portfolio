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
      className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
    >
      <div className="pt-4 pb-2 space-y-2">
        {menuItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`
                block px-4 py-3 rounded-lg transition-all duration-200 font-medium
                ${
                  isActive
                    ? "text-white bg-[#D4AF37] shadow-md"
                    : "text-gray-600 hover:text-[#D4AF37] hover:bg-gray-50"
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
