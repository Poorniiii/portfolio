"use client";

import { useState } from "react";
import SectionTitle from "../common/section_title";
import { skillsGroups } from "../constants/skills_section_constants";
import Section from "../common/section";

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = skillsGroups[activeIndex];

  return (
    <Section id="skills">
      <SectionTitle title="Skills & Tools" />

      <div className="relative border-b border-[var(--border)] mb-8 -mx-6 md:mx-0">
        <div className="overflow-x-auto no-scrollbar px-6 md:px-0">
          <div className="flex gap-6 min-w-max">
            {skillsGroups.map((group, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`
                    text-fluid-small font-medium pb-3 border-b-2 -mb-px whitespace-nowrap transition-colors duration-200
                    ${
                      isActive
                        ? "text-[var(--gold)] border-[var(--gold)]"
                        : "text-[var(--fg-muted)] border-transparent hover:text-[var(--fg)]"
                    }
                  `}
                >
                  {group.title}
                </button>
              );
            })}
          </div>
        </div>
        {/* Soft right-edge fade so users sense there's more to scroll on narrow viewports */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 md:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to left, var(--bg) 0%, transparent 100%)",
          }}
        ></div>
      </div>

      <div className="flex flex-wrap gap-2">
        {activeGroup.skills.map((skill) => (
          <span
            key={skill}
            className="text-fluid-small text-[var(--fg-muted)] border border-[var(--border)] px-3 py-1.5 hover:border-[var(--border-strong)] hover:text-[var(--fg)] transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
