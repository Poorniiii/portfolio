export default function Heading() {
  return (
    <a
      href="#hero"
      className="block cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <span className="text-fluid-small font-semibold tracking-[0.2em] uppercase text-[var(--fg)] hover:text-[var(--gold)] transition-colors duration-200">
        Poornima Rajappan
      </span>
    </a>
  );
}
