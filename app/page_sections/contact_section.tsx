import Section from "../common/section";
import SectionTitle from "../common/section_title";
import GoldText from "../common/gold_text";
import { contactItems } from "../constants/contact_section_constants";

export default function ContactSection() {
  const ContactItem = ({ item }: { item: (typeof contactItems)[0] }) => {
    const content = (
      <div className="group flex items-center gap-4 border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors duration-200 p-5 bg-[var(--bg)] h-full">
        <div className="flex-shrink-0 w-10 h-10 border border-[var(--border)] flex items-center justify-center">
          <img
            src={item.icon}
            alt={item.alt}
            className="w-5 h-5"
            style={{ filter: "var(--icon-filter)" }}
          />
        </div>
        <span className="flex-1 text-fluid-body font-medium text-[var(--fg)]">
          {item.text}
        </span>
        {item.isLink && (
          <svg
            className="w-4 h-4 text-[var(--fg-subtle)] group-hover:text-[var(--gold)] transition-colors duration-200"
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
        )}
      </div>
    );

    return item.isLink ? (
      <a
        href={item.href}
        target={item.href?.startsWith("http") ? "_blank" : undefined}
        rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block h-full"
      >
        {content}
      </a>
    ) : (
      <div className="block h-full">{content}</div>
    );
  };

  return (
    <Section id="contact">
      <SectionTitle title="Contact" />

      <div className="mb-10">
        <h3 className="text-fluid-h2 font-semibold text-[var(--fg)] mb-3">
          Let&apos;s work <GoldText>together</GoldText>
        </h3>
        <p className="text-fluid-body-lg text-[var(--fg-muted)]">
          Ready to bring your ideas to life? I&apos;m just a click away.
          Let&apos;s connect and create something together.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactItems.map((item, index) => (
          <ContactItem key={index} item={item} />
        ))}
      </div>
    </Section>
  );
}
