import { goldRuleStyle } from "./gold_text";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-12">
      <div className="h-0.5 w-12 mb-4" style={goldRuleStyle}></div>
      <h2 className="text-fluid-body-lg font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
        {title}
      </h2>
    </div>
  );
}
