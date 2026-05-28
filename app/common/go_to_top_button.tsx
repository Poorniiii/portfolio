import { IGoToTopButtonProps } from "../interface";

export default function GoToTopButton({
  scrollToTop,
  showScrollTop,
}: IGoToTopButtonProps) {
  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer fixed bottom-8 right-8 border border-[var(--border)] bg-[var(--bg)] text-[var(--fg-muted)] p-2.5 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors duration-200 z-40 ${
        showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Go to top"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
