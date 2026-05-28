import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { goldBorderLeftStyle } from "../common/gold_text";
import { aboutSectionContent } from "../constants/about_section_constants";

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionTitle title="About Me" />

      <div className="space-y-8 mb-12">
        {aboutSectionContent.map((paragraph, index) => (
          <p key={index} className="text-fluid-body-lg text-[var(--fg-muted)] text-pretty">
            {paragraph}
          </p>
        ))}
      </div>

      <blockquote style={goldBorderLeftStyle} className="pl-6 py-2">
        <p className="text-fluid-body-lg italic text-[var(--fg)] text-pretty">
          I love the feeling of shipping something that makes someone&apos;s job
          or experience a little better.
        </p>
      </blockquote>
    </Section>
  );
}
