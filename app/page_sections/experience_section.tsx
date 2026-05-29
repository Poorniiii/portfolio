"use client";

import { useState } from "react";
import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { experienceItems } from "../constants/experience_section_constants";

export default function ExperienceSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const isExpanded = (index: number) => expandedCards.includes(index);

  return (
    <Section id="experience">
      <SectionTitle title="Experience" />

      <div className="relative pl-8">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)]"></div>

        <div className="space-y-10">
          {experienceItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-8 top-2 w-2 h-2 rounded-full bg-[var(--gold)] -translate-x-[3px]"></div>

              <button
                type="button"
                onClick={() => toggleExpanded(index)}
                className="w-full text-left border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors duration-200 bg-[var(--bg)]"
              >
                <div className="p-6">
                  <p className="text-fluid-eyebrow font-semibold uppercase text-[var(--gold)] mb-3">
                    {item.duration}
                  </p>
                  <h3 className="text-fluid-h3 font-semibold text-[var(--fg)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-fluid-small text-[var(--fg-muted)] mb-4">
                    {item.company}
                  </p>
                  <div className="flex items-center justify-between text-fluid-small text-[var(--fg-subtle)]">
                    <span>
                      {isExpanded(index) ? "Collapse" : "View responsibilities"}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
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
                </div>

                {isExpanded(index) && (
                  <div className="px-6 pb-6 border-t border-[var(--border)] pt-6">
                    <ul className="space-y-3 list-none">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="text-fluid-body text-[var(--fg-muted)] flex gap-3"
                        >
                          <span
                            className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[var(--gold)]"
                            aria-hidden
                          ></span>
                          <span className="flex-1">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
