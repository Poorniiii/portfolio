import { IMenuItem } from "../interface";

export default function DesktopMenu({ menuItems }: { menuItems: IMenuItem[] }) {
  return (
    <div className="hidden md:flex space-x-8">
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-600 hover:text-[#D4AF37]"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
