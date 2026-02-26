"use client";

import { useState } from "react";
import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { experienceItems } from "../constants/experience_section_constants";

export default function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const isExpanded = (index: number) => expandedCards.includes(index);

  return (
    <Section id="experience">
      <SectionTitle title="EXPERIENCE" />

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#B8941F] to-gray-300"></div>

        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#D4AF37]/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gray-900/5 rounded-full blur-2xl"></div>
        </div>

        <div className="space-y-12 relative z-10">
          {experienceItems.map((item, index) => (
            <div
              key={index}
              className="relative pl-20"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline Node */}
              <div
                className={`
                absolute left-6 top-6 w-4 h-4 rounded-full border-4 
                transition-all duration-500 ease-out z-20
                ${
                  hoveredIndex === index
                    ? "bg-[#D4AF37] border-white shadow-lg shadow-[#D4AF37]/50 scale-125"
                    : "bg-white border-[#D4AF37] shadow-md"
                }
              `}
              >
                {/* Pulsing Ring Effect */}
                <div
                  className={`
                  absolute inset-0 rounded-full border-2 border-[#D4AF37] 
                  transition-all duration-1000 ease-out
                  ${hoveredIndex === index ? "scale-[3] opacity-0" : "scale-100 opacity-0"}
                `}
                ></div>
              </div>

              {/* Experience Card */}
              <div
                className={`
                relative bg-white rounded-2xl shadow-lg border border-gray-200 
                transition-all duration-500 ease-out cursor-pointer overflow-hidden
                ${
                  hoveredIndex === index
                    ? "shadow-2xl shadow-[#D4AF37]/20 transform -translate-y-2"
                    : "hover:shadow-xl"
                }
              `}
              >
                {/* Card Header */}
                <div className="p-8" onClick={() => toggleExpanded(index)}>
                  {/* Date Badge */}
                  <div className="mb-4">
                    <span
                      className={`
                      inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                      transition-all duration-300
                      ${
                        hoveredIndex === index
                          ? "bg-[#D4AF37] text-white"
                          : "bg-[#D4AF37]/10 text-[#B8941F]"
                      }
                    `}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {item.duration}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3
                    className={`
                    text-xl font-bold mb-3 transition-all duration-300
                    ${
                      hoveredIndex === index
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F]"
                        : "text-gray-900"
                    }
                  `}
                  >
                    {item.title}
                  </h3>

                  {/* Company */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`
                      w-2 h-2 rounded-full mr-3 transition-all duration-300
                      ${hoveredIndex === index ? "bg-[#D4AF37]" : "bg-gray-400"}
                    `}
                    ></div>
                    <p className="text-lg font-semibold text-gray-700">
                      {item.company}
                    </p>
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {isExpanded(index)
                        ? "Click to collapse"
                        : "Click to view responsibilities"}
                    </span>
                    <div
                      className={`
                      transition-transform duration-300 ease-in-out text-[#D4AF37]
                      ${isExpanded(index) ? "rotate-180" : "rotate-0"}
                    `}
                    >
                      <svg
                        className="w-6 h-6"
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
                </div>

                {/* Expandable Responsibilities */}
                <div
                  className={`
                  transition-all duration-600 ease-in-out
                  ${isExpanded(index) ? "opacity-100" : "max-h-0 opacity-0"}
                `}
                >
                  <div className="px-8 pb-8">
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                        Key Responsibilities & Impact
                      </h4>

                      <div className="space-y-4">
                        {item.responsibilities.map((responsibility, idx) => (
                          <div
                            key={idx}
                            className={`
                              p-5 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md
                              ${
                                idx % 2 === 0
                                  ? "bg-[#D4AF37]/5 border-[#D4AF37] hover:bg-[#D4AF37]/10"
                                  : "bg-gray-50 border-gray-300 hover:bg-gray-100"
                              }
                            `}
                          >
                            <div className="flex items-start">
                              <p className="text-gray-700 leading-relaxed text-base">
                                {responsibility}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`
                  h-1 w-full transition-all duration-500 ease-out
                  ${
                    hoveredIndex === index
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#B8941F]"
                      : "bg-gray-100"
                  }
                `}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
