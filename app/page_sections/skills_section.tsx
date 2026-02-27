"use client";

import { useState } from "react";
import SectionTitle from "../common/section_title";
import { skillsGroups } from "../constants/skills_section_constants";
import Section from "../common/section";

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getGroupColor = (index: number) => {
    const colors = [
      {
        bg: "bg-[#D4AF37]/10",
        border: "border-[#D4AF37]",
        accent: "bg-[#665500]",
        text: "text-[#665500]",
      },
      {
        bg: "bg-gray-900/5",
        border: "border-gray-300",
        accent: "bg-gray-700",
        text: "text-gray-700",
      },
      {
        bg: "bg-[#B8941F]/10",
        border: "border-[#B8941F]",
        accent: "bg-[#4A4000]",
        text: "text-[#4A4000]",
      },
      {
        bg: "bg-gray-50",
        border: "border-gray-200",
        accent: "bg-gray-600",
        text: "text-gray-600",
      },
      {
        bg: "bg-[#D4AF37]/8",
        border: "border-[#D4AF37]/50",
        accent: "bg-[#665500]",
        text: "text-[#665500]",
      },
      {
        bg: "bg-gray-900/8",
        border: "border-gray-400",
        accent: "bg-gray-800",
        text: "text-gray-800",
      },
      {
        bg: "bg-[#B8941F]/8",
        border: "border-[#B8941F]/50",
        accent: "bg-[#4A4000]",
        text: "text-[#4A4000]",
      },
    ];
    return colors[index % colors.length];
  };

  return (
    <Section id="skills">
      <SectionTitle title="MY TOOLBOX" />

      {/* Creative Background */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#D4AF37]/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gray-900/5 rounded-full blur-2xl"></div>
        </div>

        {/* Skills Groups - Always Visible */}
        <div className="space-y-12 relative z-10">
          {skillsGroups.map((group, groupIndex) => {
            const colors = getGroupColor(groupIndex);

            return (
              <div key={group.title} className="group">
                {/* Group Header */}
                <div className="flex items-center mb-6">
                  <h3 className={`text-xl font-bold ${colors.text}`}>
                    {group.title}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200 ml-6"></div>
                </div>

                {/* Skills Grid - Always Visible */}
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`
                        relative rounded-xl p-4 transition-all duration-300
                        ${colors.bg} ${colors.border} text-gray-700 border
                        ${
                          hoveredSkill === skill
                            ? "transform scale-110 -translate-y-2 shadow-xl"
                            : "transform hover:scale-105 hover:-translate-y-1 hover:shadow-md"
                        }
                      `}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Content */}
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
