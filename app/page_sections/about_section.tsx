import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { aboutSectionContent } from "../constants/about_section_constants";
import { IYearsOfExperience } from "../interface";

export default function AboutSection({
  years_of_experience,
}: IYearsOfExperience) {
  return (
    <Section id="about">
      <SectionTitle title="ABOUT ME" />
      <div className="prose prose-lg max-w-none">
        {aboutSectionContent.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph.replace(
              "{years_of_experience}",
              years_of_experience.toString(),
            )}
          </p>
        ))}
      </div>
    </Section>
  );
}
