import React, { useState, useEffect, useRef } from "react";
import {
  FiArrowUp,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import ContactForm from "./components/ContactForm";
import AboutSection from "./components/AboutSection";
import JourneySection from "./components/JourneySection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  // Scroll effects and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderSticky(scrollY > 100);

      // Find active section
      const sections = Object.keys(sectionsRef.current);
      for (let section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const top = element.offsetTop - 150;
          const height = element.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxFRX9Oz3oD9OXD6HhUK7Phl4XEfFUsWPm88LieOn0yiSyb5VVnXHnSnElODNIfXDo0/exec",
        {
          method: "POST",
          body: new FormData(e.target as HTMLFormElement),
        }
      );

      setFormData({ Name: "", Email: "", Phone: "", Subject: "", Message: "" });
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-200 font-sans">
      <Header
        isHeaderSticky={isHeaderSticky}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <HomeSection sectionsRef={sectionsRef} />

      <AboutSection sectionsRef={sectionsRef} />

      <JourneySection sectionsRef={sectionsRef} />

      <SkillsSection sectionsRef={sectionsRef} />

      <ProjectsSection sectionsRef={sectionsRef} />

      {/* Contact Section */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current.contact = el;
        }}
        className="min-h-screen px-4 md:px-16 py-20 bg-gray-800"
        id="contact"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Contact <span className="text-blue-400">Me</span>
        </h2>

        <ContactForm
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 px-4 md:px-16 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Mohammad Falaha
              </h3>
              <p className="text-gray-400 leading-relaxed">
                IT Student & Cybersecurity Enthusiast passionate about ethical
                hacking, penetration testing, and securing digital systems.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Quick Links
              </h3>
              <div className="space-y-2">
                {[
                  "Home",
                  "About",
                  "Education",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <FiMail size={16} className="mr-3 text-blue-400" />
                  <span>Mohamaadflaha2014@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FiPhone size={16} className="mr-3 text-blue-400" />
                  <span>+31 686336164</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/mohammad-falaha-6703091b8"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/mohammad_mo_o/"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FiInstagram size={20} />
                  </a>
                  <a
                    href="https://github.com/Motje3"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Mohammad Falaha. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-40"
        >
          <FiArrowUp size={20} />
        </button>
      </footer>
    </div>
  );
};

export default Portfolio;
