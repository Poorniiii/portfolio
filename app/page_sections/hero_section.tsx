import Section from "../common/section";
import { IYearsOfExperience } from "../interface";

export default function HeroSection({
  years_of_experience,
}: IYearsOfExperience) {
  return (
    <Section id="hero">
      <div className="w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Building high-performance web applications with {years_of_experience}{" "}
          years of expertise
        </h1>
        <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-4xl">
          Software Engineer delivering features end-to-end: data flow design, UI behavior, testing, and production hardening. I care about real-world performance and the craft behind shipping well.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
          <a
            href="#experience"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center text-sm sm:text-base"
          >
            View My Journey
          </a>
          <a
            href="#contact"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-center text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </Section>
  );
}
