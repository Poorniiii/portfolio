"use client";

import { useState } from "react";
import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { projectItems } from "../constants/project_section_constants";

export default function ProjectSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="projects">
      <SectionTitle title="PROJECTS" />

      {/* Creative Background Elements */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gray-900/5 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main Card */}
              <div
                className={`
                relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 
                border border-gray-200 transition-all duration-500 ease-out cursor-pointer
                ${
                  hoveredIndex === index
                    ? "transform -translate-y-3 shadow-2xl shadow-[#665500]/20 scale-105"
                    : "shadow-lg hover:shadow-xl"
                }
              `}
              >
                {/* Animated Top Border */}
                <div
                  className={`
                  absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#665500] via-[#4A4000] to-gray-900
                  transition-all duration-700 ease-out
                  ${hoveredIndex === index ? "opacity-100" : "opacity-60"}
                `}
                ></div>

                {/* Card Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Project Title with Creative Typography */}
                  <h3
                    className={`
                    text-xl font-bold mb-4 transition-all duration-300
                    ${
                      hoveredIndex === index
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#665500] to-[#4A4000]"
                        : "text-gray-900"
                    }
                  `}
                  >
                    {item.title}
                  </h3>

                  {/* Brief Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                    {item.brief}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.techs.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`
                            px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300
                            ${
                              hoveredIndex === index
                                ? "bg-[#665500] text-white border-[#665500] animate-pulse"
                                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                            }
                          `}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Link Button */}
                  <div className="relative overflow-hidden">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group/btn relative inline-flex items-center justify-center px-6 py-3 
                        rounded-xl font-semibold text-sm transition-all duration-300 w-full
                        ${
                          hoveredIndex === index
                            ? "bg-gradient-to-r from-[#665500] to-[#4A4000] text-white shadow-lg transform scale-105"
                            : "bg-gray-900 text-white hover:bg-[#665500]"
                        }
                      `}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Project
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            hoveredIndex === index
                              ? "translate-x-1"
                              : "group-hover/btn:translate-x-1"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>

                      {/* Button Background Effect */}
                      <div
                        className={`
                        absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        -skew-x-12 transition-transform duration-700
                        ${hoveredIndex === index ? "translate-x-full" : "-translate-x-full group-hover/btn:translate-x-full"}
                      `}
                      ></div>
                    </a>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div
                  className={`
                  absolute bottom-0 right-0 w-0 h-0 transition-all duration-500 ease-out
                  ${
                    hoveredIndex === index
                      ? "border-l-[60px] border-l-transparent border-b-[60px] border-b-[#D4AF37]/10"
                      : "border-l-[40px] border-l-transparent border-b-[40px] border-b-gray-100"
                  }
                `}
                ></div>
              </div>

              {/* Floating Shadow Effect */}
              <div
                className={`
                absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-gray-900/10 
                transition-all duration-500 ease-out -z-10 blur-xl
                ${
                  hoveredIndex === index
                    ? "opacity-60 transform translate-y-2 scale-110"
                    : "opacity-0 transform translate-y-0 scale-100"
                }
              `}
              ></div>
            </div>
          ))}
        </div>

        {/* Creative Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-gray-400 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <span className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              More projects coming soon
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
