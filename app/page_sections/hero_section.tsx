"use client";

import { useState, useEffect } from "react";
import Section from "../common/section";
import { IYearsOfExperience } from "../interface";

export default function HeroSection({
  years_of_experience,
}: IYearsOfExperience) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Section id="hero">
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Main Content */}
        <div
          className={`
          relative z-10 text-center max-w-5xl mx-auto px-4 transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}
        `}
        >
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#B8941F] text-sm font-semibold animate-pulse">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 animate-ping"></span>
              Available for new opportunities
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`
            text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight
            transition-all duration-1000 ease-out delay-200
            ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}
          `}
          >
            <span className="text-gray-900">Building </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8941F] animate-gradient-x">
              high-performance
            </span>
            <br />
            <span className="text-gray-900">web applications with </span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8941F] to-[#D4AF37]">
                {years_of_experience}
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full"></div>
            </span>
            <br />
            <span className="text-gray-900">years of expertise</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`
            text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto
            transition-all duration-1000 ease-out delay-400
            ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}
          `}
          >
            Software Engineer delivering features end-to-end: data flow design,
            UI behavior, testing, and production hardening. I care about{" "}
            <span className="font-semibold text-[#B8941F]">
              real-world performance
            </span>{" "}
            and the{" "}
            <span className="font-semibold text-[#D4AF37]">
              craft behind shipping well
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div
            className={`
            flex flex-col sm:flex-row gap-6 justify-center items-center
            transition-all duration-1000 ease-out delay-600
            ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}
          `}
          >
            <a
              href="#experience"
              className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/25 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                View My Growth
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></div>
            </a>

            <a
              href="#contact"
              className="group relative overflow-hidden bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-[#D4AF37] hover:text-[#B8941F] hover:shadow-2xl hover:shadow-gray-900/10 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-[#B8941F]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
