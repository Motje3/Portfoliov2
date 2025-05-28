import React from "react";
import { motion } from "framer-motion";

const Header = ({
  isHeaderSticky,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}: {
  isHeaderSticky: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <motion.header
      className={`fixed top-0 left-0 w-full px-4 md:px-16 py-4 z-50 transition-all duration-300 ${
        isHeaderSticky ? "bg-gray-900/95 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold text-gray-200">
          Mohammad.
        </a>

        <button
          className="md:hidden text-3xl text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "X" : "Menu"}
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full md:top-0 left-0 md:left-auto w-full md:w-auto bg-blue-500 md:bg-transparent flex-col md:flex-row p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}
        >
          {["home", "about", "education", "skills", "projects", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-lg font-medium capitalize transition-colors ${
                  activeSection === section
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
              >
                {section}
              </button>
            )
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
