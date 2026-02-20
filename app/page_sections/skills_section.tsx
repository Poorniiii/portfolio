import { useState } from "react";
import SectionTitle from "../common/section_title";
import { skillsGroups } from "../constants/skills_section_constants";
import Section from "../common/section";

export default function SkillsSection() {
  const [openAccordions, setOpenAccordions] = useState<{
    [key: string]: boolean;
  }>({
    // All accordions open by default
    ...skillsGroups.reduce(
      (acc, group) => ({ ...acc, [group.title]: true }),
      {},
    ),
  });

  const toggleAccordion = (title: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Section id="skills">
      <SectionTitle title="SKILLS AND TOOLS" />
      <div className="space-y-8">
        {skillsGroups.map((group) => (
          <div
            key={group.title}
            className="border-l-2 border-[#D4AF37] rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(group.title)}
              className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between focus:outline-none focus:bg-gray-100"
            >
              <h3 className="text-base text-lg font-semibold text-gray-800">
                {group.title}
              </h3>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openAccordions[group.title] ? "rotate-180" : ""
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
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openAccordions[group.title]
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-50 px-2 py-1 rounded text-center hover:bg-gray-100 transition-colors min-w-0"
                    >
                      <span className="text-base text-gray-700 break-words">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
