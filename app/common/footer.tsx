export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <footer className="py-10 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-fluid-small text-[var(--fg-subtle)]">
          © {current_year} Poornima Rajappan
        </p>
      </div>
    </footer>
  );
}
