export default function Heading() {
  return (
    <div className="relative group">
      <a
        href="#hero"
        className="block cursor-pointer"
        onClick={() => {
          // Scroll to top smoothly
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-[#D4AF37] to-gray-900 bg-clip-text text-transparent hover:from-[#D4AF37] hover:via-gray-900 hover:to-[#D4AF37] transition-all duration-500 tracking-wider">
          POORNIMA RAJAPPAN
        </h1>
      </a>
      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
