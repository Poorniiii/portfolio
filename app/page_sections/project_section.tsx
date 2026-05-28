"use client";

import { useState } from "react";
import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { goldBgStyle } from "../common/gold_text";
import { projectItems } from "../constants/project_section_constants";

export default function ProjectSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="projects">
      <SectionTitle title="Projects" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectItems.map((item, index) => (
          <div
            key={index}
            className="border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors duration-200 p-6 flex flex-col bg-[var(--bg)]"
          >
            <h3 className="text-fluid-h3 font-semibold text-[var(--fg)] mb-3">
              {item.title}
            </h3>
            <p className="text-fluid-body text-[var(--fg-muted)] mb-6 flex-grow">
              {item.brief}
            </p>

            <div className="mb-6">
              <p className="text-fluid-eyebrow font-semibold uppercase text-[var(--fg-subtle)] mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-fluid-small text-[var(--fg-muted)] border border-[var(--border)] px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={item.code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[var(--fg)] text-[var(--fg)] px-4 py-2 text-fluid-small font-medium hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-200"
              >
                View Code
              </a>
              <a
                href={item.demo_link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  ...goldBgStyle,
                  backgroundImage:
                    hoveredIndex === index
                      ? "var(--gold-gradient-hover)"
                      : "var(--gold-gradient)",
                  transition: "background-image 200ms ease",
                }}
                className="inline-flex items-center justify-center px-4 py-2 text-fluid-small font-medium"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
