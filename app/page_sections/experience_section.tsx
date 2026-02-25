import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { experienceItems } from "../constants/experience_section_constants";

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionTitle title="EXPERIENCE" />
      <div className="space-y-8">
        {experienceItems.map((item, index) => (
          <div key={index} className="border-l-2 border-[#D4AF37] pl-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-lg font-semibold text-gray-900 mb-2">
              {item.company}
            </p>
            <p className="text-base font-semibold text-gray-800 mb-2">{item.duration}</p>
            <div className="text-base text-gray-700 leading-relaxed">
              <ul className="list-inside space-y-2">
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>
                    <span className="text-base text-gray-700">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
