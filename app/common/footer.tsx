export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-[#D4AF37]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600">
          © {current_year} Poornima Rajappan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
