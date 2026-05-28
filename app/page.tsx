"use client";

import { useState, useEffect } from "react";
import HeroSection from "./page_sections/hero_section";
import AboutSection from "./page_sections/about_section";
import SkillsSection from "./page_sections/skills_section";
import ExperienceSection from "./page_sections/experience_section";
import CaseStudiesSection from "./page_sections/case_study_section";
import ProjectsSection from "./page_sections/project_section";
import ContactSection from "./page_sections/contact_section";
import Footer from "./common/footer";
import DesktopMenu from "./menu/desktop_menu";
import MobileMenu from "./menu/mobile_menu";
import MobileMenuButton from "./menu/mobile_menu_button";
import GoToTopButton from "./common/go_to_top_button";
import Heading from "./menu/heading";
import ThemeToggle from "./common/theme_toggle";

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

  const careerStart = new Date(2021, 2, 20); // March 20, 2021
  const now = new Date();
  let yrs = now.getFullYear() - careerStart.getFullYear();
  let mos = now.getMonth() - careerStart.getMonth();
  if (now.getDate() < careerStart.getDate()) mos -= 1;
  if (mos < 0) {
    yrs -= 1;
    mos += 12;
  }
  const years_of_experience = `${yrs}.${mos}`;

  const menuItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills & Tools", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] w-full">
      <nav className="fixed top-0 w-full bg-[var(--bg)] border-b border-[var(--border)] z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center gap-4">
            <Heading />

            <div className="flex items-center gap-2 md:gap-4">
              <DesktopMenu menuItems={menuItems} />
              <ThemeToggle />
              <MobileMenuButton
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </div>
          </div>

          <MobileMenu
            menuItems={menuItems}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </nav>

      <HeroSection years_of_experience={years_of_experience} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      <GoToTopButton scrollToTop={scrollToTop} showScrollTop={showScrollTop} />
    </div>
  );
}
