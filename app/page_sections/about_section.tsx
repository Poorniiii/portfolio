import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { aboutSectionContent } from "../constants/about_section_constants";

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionTitle title="ABOUT ME" />
      <div className="prose prose-lg max-w-none">
        {aboutSectionContent.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
