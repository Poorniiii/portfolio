import { CSSProperties } from "react";

const goldTextStyle: CSSProperties = {
  backgroundImage: "var(--gold-gradient)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
  // Tiny right padding so the last glyph isn't clipped by background-clip: text
  paddingRight: "0.08em",
};

export default function GoldText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={className} style={goldTextStyle}>
      {children}
    </span>
  );
}

export const goldRuleStyle: CSSProperties = {
  backgroundImage: "var(--gold-gradient)",
};

export const goldBgStyle: CSSProperties = {
  backgroundImage: "var(--gold-gradient)",
  color: "var(--gold-fg)",
};

export const goldBorderLeftStyle: CSSProperties = {
  borderLeft: "2px solid transparent",
  borderImage: "var(--gold-gradient) 1",
  borderImageSlice: 1,
};
