import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { contactItems } from "../constants/contact_section_constants";

export default function ContactSection() {
  const iconBaseClasses = "w-5 h-5 rounded flex items-center justify-center";

  const ContactItem = ({ item }: { item: (typeof contactItems)[0] }) => {
    const content = (
      <>
        <div className={`${iconBaseClasses}`}>
          <img src={item.icon} alt={item.alt} />
        </div>
        <span className="text-base text-gray-700">{item.text}</span>
      </>
    );

    return item.isLink ? (
      <a
        href={item.href}
        target={item.href?.startsWith("http") ? "_blank" : undefined}
        rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-3 hover:underline hover:text-[#D4AF37]"
      >
        {content}
      </a>
    ) : (
      <div className="flex items-center gap-3">{content}</div>
    );
  };

  return (
    <Section id="contact">
      <SectionTitle title="CONTACT" />
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Let's work together
        </h3>
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <ContactItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
