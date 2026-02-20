import { IMobileMenuProps } from "../interface";

export default function MobileMenu({
  menuItems,
  isMenuOpen,
  setIsMenuOpen,
}: IMobileMenuProps) {
  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
    >
      <div className="pt-4 pb-2 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
