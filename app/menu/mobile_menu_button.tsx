import { IMobileMenuButtonProps } from "../interface";

export default function MobileMenuButton({
  isMenuOpen,
  setIsMenuOpen,
}: IMobileMenuButtonProps) {
  return (
    <button
      className="md:hidden p-2"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <span
          className={`bg-[var(--fg)] block transition-all duration-300 ease-out h-0.5 w-6 ${
            isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-[var(--fg)] block transition-all duration-300 ease-out h-0.5 w-6 my-0.5 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-[var(--fg)] block transition-all duration-300 ease-out h-0.5 w-6 ${
            isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </div>
    </button>
  );
}
