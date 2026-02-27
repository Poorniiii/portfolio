"use client";

import { useState, useEffect, useRef } from "react";
import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { aboutSectionContent } from "../constants/about_section_constants";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredQuote, setHoveredQuote] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { text: "Software Engineering", color: "text-[#665500]" },
    { text: "performant web applications", color: "text-[#4A4000]" },
    { text: "creative problem-solving", color: "text-[#665500]" },
    { text: "shipping something", color: "text-[#4A4000]" },
  ];

  const myJourney = [
    {
      title: "Academic Foundation",
      desc: "Electronics & Instrumentation Engineering",
    },
    {
      title: "Career Pivot",
      desc: "Discovered passion in Software Engineering",
    },
    {
      title: "Current Focus",
      desc: "Building performant web applications",
    },
  ];

  return (
    <Section id="about">
      <SectionTitle title="ABOUT ME" />

      <div ref={sectionRef} className="relative">
        {/* Creative Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gray-900/3 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left: Decorative Quote */}
            <div
              className={`
              lg:col-span-1 transition-all duration-1000 ease-out delay-200
              ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}
            `}
            >
              <div className="relative">
                <div className="text-8xl font-serif text-[#D4AF37]/20 leading-none">
                  ❝
                </div>
                <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941F]/5 rounded-2xl p-8 border border-[#D4AF37]/20 relative -mt-6">
                  <p className="text-lg italic text-gray-700 leading-relaxed">
                    I love the feeling of{" "}
                    <span className="font-semibold text-[#D4AF37]">
                      shipping something
                    </span>{" "}
                    that makes someone's job or experience a little{" "}
                    <span className="font-semibold text-[#B8941F]">better</span>
                    .
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8941F]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Main Story */}
            <div className="lg:col-span-2 space-y-8">
              {aboutSectionContent.map((paragraph, index) => (
                <div
                  key={index}
                  className={`
                    transition-all duration-1000 ease-out
                    ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}
                  `}
                  style={{ transitionDelay: `${(index + 1) * 300}ms` }}
                >
                  <div className="relative group">
                    {/* Enhanced Typography */}
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {paragraph.split(" ").map((word, wordIndex) => {
                          const highlight = highlights.find(
                            (h) =>
                              paragraph.includes(h.text) &&
                              h.text.includes(word),
                          );
                          return (
                            <span
                              key={wordIndex}
                              className={
                                highlight
                                  ? `${highlight.color} font-semibold`
                                  : ""
                              }
                            >
                              {word}{" "}
                            </span>
                          );
                        })}
                      </p>

                      {/* Bottom accent */}
                      <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full opacity-60 group-hover:opacity-100 group-hover:w-32 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Journey Timeline */}
          <div
            className={`
            mt-16 transition-all duration-1000 ease-out delay-800
            ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}
          `}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                My Journey
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {myJourney.map((item, index) => (
                <div
                  key={index}
                  className={`
                    relative group cursor-pointer transition-all duration-300
                    ${hoveredQuote === index ? "transform -translate-y-2" : ""}
                  `}
                  onMouseEnter={() => setHoveredQuote(index)}
                  onMouseLeave={() => setHoveredQuote(null)}
                >
                  <div
                    className={`
                    bg-white rounded-2xl p-6 border-2 transition-all duration-300
                    ${
                      hoveredQuote === index
                        ? "border-[#9A7A00] shadow-2xl shadow-[#9A7A00]/20"
                        : "border-gray-200 shadow-lg"
                    }
                  `}
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
