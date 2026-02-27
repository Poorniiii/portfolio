"use client";

import { useState } from "react";
import Section from "../common/section";
import SectionTitle from "../common/section_title";
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
      <SectionTitle title="FEATURED WORK" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {caseStudyItems.map((item, index) => (
          <div
            key={index}
            className={`
              bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
              border border-gray-200 overflow-hidden cursor-pointer transform hover:-translate-y-1
              ${isExpanded(index) ? "ring-2 ring-[#9A7A00] ring-opacity-50" : ""}
            `}
            onClick={() => toggleCard(index)}
          >
            {/* Card Header */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
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

              {/* Preview visible when collapsed */}
              {!isExpanded(index) && (
                <>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.challenge.length > 120
                      ? `${item.challenge.substring(0, 120)}...`
                      : item.challenge}
                  </p>
                  <div className="mt-3">
                    <span className="text-[#665500] text-sm font-medium hover:text-[#4A4000] transition-colors">
                      Click to expand →
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Expandable Content */}
            <div
              className={`
              transition-all duration-500 ease-in-out overflow-hidden
              ${isExpanded(index) ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
            `}
            >
              <div className="px-6 pb-6 pt-0 space-y-4">
                <div className="border-t border-gray-100 pt-4">
                  <div className="space-y-4">
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg p-4">
                      <h4 className="text-md font-semibold text-gray-900 mb-2 flex items-center">
                        CHALLENGE
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="bg-gray-900/5 border border-gray-200 rounded-lg p-4">
                      <h4 className="text-md font-semibold text-gray-900 mb-2 flex items-center">
                        SOLUTION
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.whatIDid}
                      </p>
                    </div>

                    <div className="bg-[#B8941F]/10 border border-[#B8941F]/20 rounded-lg p-4">
                      <h4 className="text-md font-semibold text-gray-900 mb-2 flex items-center">
                        IMPACT
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
