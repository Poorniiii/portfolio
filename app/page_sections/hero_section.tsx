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

        <p className="text-fluid-body-lg text-[var(--fg-muted)] mb-12 text-pretty">
          Specializing in React, TypeScript, and UI performance. 5+ years at{" "}
          <span className="text-[var(--fg)] font-medium">Thomson Reuters</span>{" "}
          and <span className="text-[var(--fg)] font-medium">Cognizant</span>.
          Known for measurable wins on load time, test coverage, and deployment
          reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/Poornima_R_Resume.pdf"
            download
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              ...goldBgStyle,
              backgroundImage: primaryHover
                ? "var(--gold-gradient-hover)"
                : "var(--gold-gradient)",
              transition: "background-image 200ms ease",
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-fluid-small font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            Download Resume
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
