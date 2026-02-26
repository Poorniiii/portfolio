import { ISectionProps } from "../interface";

export default function Section({ id, children }: ISectionProps) {
  const isGrayBackground =
    id === "about" || id === "experience" || id === "projects";
  const isPaddingTop = id === "hero";
  return (
    <section
      id={id}
      className={`py-16 px-4 sm:px-6 lg:px-8 ${isGrayBackground && "bg-gray-50"} ${isPaddingTop && "pt-24"}`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
