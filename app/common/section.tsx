import { ISectionProps } from "../interface";

export default function Section({ id, children }: ISectionProps) {
  const isHero = id === "hero";
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 lg:px-8 ${isHero ? "pt-28 pb-12" : "py-12"}`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
