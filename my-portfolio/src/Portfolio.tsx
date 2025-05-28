import React, { useState, useEffect, useRef } from "react";
import {
  FiArrowUp,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import JourneySection from "./components/JourneySection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

// Import the new glassmorphism contact section
import ContactSection from "./components/ContactSection";

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
      throw error; // Re-throw to let ContactSection handle the error state
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
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.offsetTop - headerOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
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

      <ContactSection
        sectionsRef={sectionsRef}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />

      {/* Glassmorphism Footer */}
      <footer 
        className="relative overflow-hidden border-t border-white/10 px-4 md:px-16 py-16"
        style={{
          background: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), #1f2937',
        }}
      >
        {/* Background blur elements */}
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* About */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Mohammad Falaha
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1"></div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                IT Student & Cybersecurity Enthusiast passionate about ethical
                hacking, penetration testing, and securing digital systems.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🔗</div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Quick Links
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full mt-1"></div>
                </div>
              </div>
              <div className="space-y-3">
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
                    className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    <div className="flex items-center">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-3"></div>
                      {link}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">📞</div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Get In Touch
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-1"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <FiMail size={16} className="mr-3 text-blue-400" />
                  <span className="text-sm">Mohamaadflaha2014@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <FiPhone size={16} className="mr-3 text-green-400" />
                  <span className="text-sm">+31 686336164</span>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-gray-400 mb-3">Follow me on:</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/mohammad-falaha-6703091b8"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <FiLinkedin size={16} />
                    </a>
                    <a
                      href="https://www.instagram.com/mohammad_mo_o/"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <FiInstagram size={16} />
                    </a>
                    <a
                      href="https://github.com/Motje3"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <FiGithub size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-white/10 pt-8 bg-white/5 backdrop-blur-xl rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
                <span className="mr-2">©</span>
                2025 Mohammad Falaha. All rights reserved.
                <span className="ml-2">🔒</span>
              </p>
              
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-110 z-40 backdrop-blur-xl border border-white/20"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp size={24} />
        </motion.button>
      </footer>
    </div>
  );
};

export default Portfolio;