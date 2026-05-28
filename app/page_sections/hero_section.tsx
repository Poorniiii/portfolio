"use client";

import { useState } from "react";
import Section from "../common/section";
import GoldText, { goldRuleStyle, goldBgStyle } from "../common/gold_text";
import { IYearsOfExperience } from "../interface";

export default function HeroSection({
  years_of_experience,
}: IYearsOfExperience) {
  const [primaryHover, setPrimaryHover] = useState(false);

  return (
    <Section id="hero">
      <div>
        <div className="h-0.5 w-12 mb-6" style={goldRuleStyle}></div>
        <p className="text-fluid-eyebrow font-semibold uppercase text-[var(--gold)] mb-8">
          Software Engineer
        </p>

        <h1
          className="text-fluid-hero font-semibold text-[var(--fg)] mb-8 hyphens-none"
          style={{ wordBreak: "normal", overflowWrap: "normal" }}
        >
          Building high-performance web applications with{" "}
          <span className="relative inline-block">
            <GoldText>{years_of_experience}</GoldText>
            <span
              className="absolute -bottom-1 left-0 right-0 h-0.5"
              style={goldRuleStyle}
            ></span>
          </span>{" "}
          years of expertise.
        </h1>

        <p className="text-fluid-body-lg text-[var(--fg-muted)] mb-12">
          Software Engineer delivering features end-to-end: data flow design,
          UI behavior, testing, and production hardening. I care about{" "}
          <span className="text-[var(--fg)] font-medium">
            real-world performance
          </span>{" "}
          and the{" "}
          <span className="text-[var(--fg)] font-medium">
            craft behind shipping well
          </span>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#experience"
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              ...goldBgStyle,
              backgroundImage: primaryHover
                ? "var(--gold-gradient-hover)"
                : "var(--gold-gradient)",
              transition: "background-image 200ms ease",
            }}
            className="inline-flex items-center justify-center px-6 py-3 text-fluid-small font-medium"
          >
            View My Growth
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-[var(--fg)] text-[var(--fg)] px-6 py-3 text-fluid-small font-medium hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </Section>
  );
}
