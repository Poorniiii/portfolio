"use client";

import { useState, useEffect } from "react";
import HeroSection from "./page_sections/hero_section";
import AboutSection from "./page_sections/about_section";
import SkillsSection from "./page_sections/skills_section";
import ExperienceSection from "./page_sections/experience_section";
import ContactSection from "./page_sections/contact_section";
import Footer from "./common/footer";
import DesktopMenu from "./menu/desktop_menu";
import MobileMenu from "./menu/mobile_menu";
import MobileMenuButton from "./menu/mobile_menu_button";
import GoToTopButton from "./common/go_to_top_button";
import Heading from "./menu/heading";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const years_of_experience = new Date().getFullYear() - 2021;

  const menuItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills & Tools", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Heading />

            {/* Desktop Menu */}
            <DesktopMenu menuItems={menuItems} />

            {/* Mobile Menu Button */}
            <MobileMenuButton
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            menuItems={menuItems}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection years_of_experience={years_of_experience} />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Go to Top Button */}
      <GoToTopButton scrollToTop={scrollToTop} showScrollTop={showScrollTop} />
    </div>
  );
}
