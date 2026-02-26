"use client";

import { IMenuItem } from "../interface";
import { useActiveSection } from "../hooks/useActiveSection";

export default function DesktopMenu({ menuItems }: { menuItems: IMenuItem[] }) {
  const { activeSection, setActive } = useActiveSection();

  return (
    <div className="hidden md:flex space-x-6">
      {menuItems.map((item) => {
        const isActive = activeSection === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActive(item.href)}
            className={`
              relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ease-out
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
  );
}
