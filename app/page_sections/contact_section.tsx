import Section from "../common/section";
import SectionTitle from "../common/section_title";
import { contactItems } from "../constants/contact_section_constants";

export default function ContactSection() {
  const ContactItem = ({
    item,
    index,
  }: {
    item: (typeof contactItems)[0];
    index: number;
  }) => {
    const content = (
      <div className="group relative overflow-hidden bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#665500] hover:shadow-2xl hover:shadow-[#665500]/10 transition-all duration-500 hover:-translate-y-2">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#B8941F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating background elements */}
        <div className="absolute -top-2 -right-2 w-16 h-16 bg-[#D4AF37]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-[#B8941F]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>

        <div className="relative z-10 flex items-center gap-4">
          {/* Icon container with enhanced styling */}
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:from-[#665500] group-hover:to-[#4A4000] transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
            <img
              src={item.icon}
              alt={item.alt}
              className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>

          {/* Text content */}
          <div className="flex-1">
            <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
              {item.text}
            </span>
            {item.isLink && (
              <div className="text-sm text-gray-500 group-hover:text-[#665500] transition-colors duration-300">
                <span>Click to connect</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </div>
            )}
          </div>
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-[#665500] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      </div>
    );

    return item.isLink ? (
      <a
        href={item.href}
        target={item.href?.startsWith("http") ? "_blank" : undefined}
        rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {content}
      </a>
    ) : (
      <div className="block" style={{ animationDelay: `${index * 100}ms` }}>
        {content}
      </div>
    );
  };

  return (
    <Section id="contact">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[#B8941F]/5 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <SectionTitle title="AROUND THE WEB" />

          {/* Enhanced heading section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's work{" "}
              <span className="bg-gradient-to-r from-[#665500] to-[#B8941F] bg-clip-text text-transparent">
                together
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm just a click away. Let's
              connect and create something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#665500] to-[#4A4000] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Contact items grid */}
          <div className="grid gap-6 md:gap-8 max-w-2xl mx-auto">
            {contactItems.map((item, index) => (
              <div key={index}>
                <ContactItem item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
