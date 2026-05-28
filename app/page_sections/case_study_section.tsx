"use client";

import { useState } from "react";
import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { goldBorderLeftStyle } from "../common/gold_text";
import { caseStudyItems } from "../constants/case-study_section_constants";

export default function CaseStudySection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const isExpanded = (index: number) => expandedCards.includes(index);

  return (
    <Section id="case-studies">
      <SectionTitle title="Case Studies" />

      <div className="space-y-4">
        {caseStudyItems.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => toggleCard(index)}
            className={`w-full text-left bg-[var(--bg)] border transition-colors duration-200 ${
              isExpanded(index)
                ? "border-[var(--border-strong)]"
                : "border-[var(--border)] hover:border-[var(--border-strong)]"
            }`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-fluid-h3 font-semibold text-[var(--fg)]">
                  {item.title}
                </h3>
                <svg
                  className={`w-5 h-5 flex-shrink-0 mt-1 text-[var(--fg-subtle)] transition-transform duration-200 ${
                    isExpanded(index) ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {!isExpanded(index) && (
                <p className="text-fluid-small text-[var(--fg-muted)] mt-3">
                  {item.challenge.length > 140
                    ? `${item.challenge.substring(0, 140)}...`
                    : item.challenge}
                </p>
              )}
            </div>

            {isExpanded(index) && (
              <div className="border-t border-[var(--border)]">
                <div
                  style={goldBorderLeftStyle}
                  className="px-6 py-6 mx-6 my-6"
                >
                  <p className="text-fluid-eyebrow font-semibold uppercase text-[var(--gold)] mb-2">
                    Challenge
                  </p>
                  <p className="text-fluid-body text-[var(--fg-muted)]">
                    {item.challenge}
                  </p>
                </div>
                <div
                  style={goldBorderLeftStyle}
                  className="px-6 py-6 mx-6 mb-6"
                >
                  <p className="text-fluid-eyebrow font-semibold uppercase text-[var(--gold)] mb-2">
                    Solution
                  </p>
                  <p className="text-fluid-body text-[var(--fg-muted)]">
                    {item.whatIDid}
                  </p>
                </div>
                <div
                  style={goldBorderLeftStyle}
                  className="px-6 py-6 mx-6 mb-6"
                >
                  <p className="text-fluid-eyebrow font-semibold uppercase text-[var(--gold)] mb-2">
                    Impact
                  </p>
                  <p className="text-fluid-body text-[var(--fg-muted)]">
                    {item.impact}
                  </p>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </Section>
  );
}
