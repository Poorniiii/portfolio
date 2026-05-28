"use client";

import { IMenuItem } from "../interface";
import { useActiveSection } from "../hooks/useActiveSection";

export default function DesktopMenu({ menuItems }: { menuItems: IMenuItem[] }) {
  const { activeSection, setActive } = useActiveSection();

  return (
    <div className="hidden md:flex items-center gap-7">
      {menuItems.map((item) => {
        const isActive = activeSection === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActive(item.href)}
            className={`
              text-fluid-small font-medium pb-1 border-b-2 transition-colors duration-200
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
  );
}
