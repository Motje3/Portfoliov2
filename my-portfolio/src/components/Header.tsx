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
  const menuItems = ["home", "about", "education", "skills", "projects", "contact"];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full px-4 md:px-16 py-4 z-50 transition-all duration-500 ${
        isHeaderSticky 
          ? "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/10" 
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.a 
          href="Me" 
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              Mohammad<span className="text-blue-400">.</span>
            </span>
          </div>
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-6 h-6 flex flex-col items-center justify-center">
            <motion.span
              className={`absolute h-0.5 w-6 bg-white rounded-full transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            />
            <motion.span
              className={`absolute h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <motion.span
              className={`absolute h-0.5 w-6 bg-white rounded-full transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex space-x-2">
            {menuItems.map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-6 py-3 rounded-xl font-medium capitalize transition-all duration-300 ${
                  activeSection === section
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
                {activeSection === section && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <motion.nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-4 right-4 mt-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex-col space-y-3 shadow-2xl`}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            y: isMenuOpen ? 0 : -20,
            scale: isMenuOpen ? 1 : 0.95
          }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((section, index) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-left px-4 py-3 rounded-xl font-medium capitalize transition-all duration-300 ${
                activeSection === section
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-3 ${
                  activeSection === section ? "bg-white" : "bg-blue-400"
                }`} />
                {section}
              </div>
            </motion.button>
          ))}
          
          {/* Mobile Menu Footer */}
          <div className="pt-4 mt-4 border-t border-white/10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-3">Get in touch</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:Mohamaadflaha2014@gmail.com"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  📧
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohammad-falaha-6703091b8"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  💼
                </a>
                <a 
                  href="https://github.com/Motje3"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  🔗
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Header glow effect when sticky */}
      {isHeaderSticky && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-b-3xl pointer-events-none" />
      )}
    </motion.header>
  );
};

export default Header;