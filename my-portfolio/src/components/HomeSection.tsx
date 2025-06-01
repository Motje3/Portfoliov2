import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Typewriter Component
const TypewriterText = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Mohammad";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      if (isTyping && displayText.length < fullText.length) {
        // Typing phase
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 150); // Speed of typing
      } else if (isTyping && displayText.length === fullText.length) {
        // Pause after typing is complete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000); // Stay for 3 seconds
      } else if (!isTyping && displayText.length > 0) {
        // Deleting phase
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100); // Speed of deleting
      } else if (!isTyping && displayText.length === 0) {
        // Reset to start typing again
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500); // Brief pause before restarting
      }
    };

    typeText();
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Cursor blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="relative inline-block">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
        {displayText}
      </span>
      <span
        className={`inline-block w-1 bg-gradient-to-b from-blue-400 to-purple-500 ml-1 transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-20"
        }`}
        style={{
          height: "1em",
          animation: showCursor ? "pulse 1.5s ease-in-out infinite" : "none",
          boxShadow: showCursor ? "0 0 10px rgba(59, 130, 246, 0.5)" : "none",
        }}
      >
        |
      </span>
    </span>
  );
};

const HomeSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // Animate elements when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohammad-falaha-6703091b8",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      hoverColor: "hover:text-blue-400 hover:shadow-blue-400/25",
    },
    {
      name: "GitHub",
      url: "https://github.com/Motje3",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      hoverColor: "hover:text-gray-300 hover:shadow-gray-400/25",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+31686336164",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488" />
        </svg>
      ),
      hoverColor: "hover:text-green-400 hover:shadow-green-400/25",
    },
  ];

  

  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.home = el;
        ref.current = el;
      }}
      className="min-h-screen flex items-center px-4 md:px-16 pt-20 sm:pt-24 relative overflow-hidden"
      id="home"
      style={{
        background:
          "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), #0f172a",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left Column - Main Content */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              <div>Hi, I'm</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                <TypewriterText />
              </div>
            </motion.h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-500">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
                  🛡️ Cybersecurity
                </span>{" "}
                <span className="text-white">Enthusiast</span>
              </h3>
              <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-600 rounded-full"></div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Welcome! I'm an IT student who writes code by day and breaks it
              (ethically) by night. I believe you can't secure what you don't
              understand — so I build it first, then test its limits.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Method 1: Try fetch approach
                fetch('/Mohammad_CV.pdf')
                  .then(response => response.blob())
                  .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Mohammad_Falaha_CV.pdf';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  })
                  .catch(() => {
                    // Fallback: Direct window.open
                    window.open('/Mohammad_CV.pdf', '_blank');
                  });
              }}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <span>📄</span>
                <span>Download CV</span>
                <motion.span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </motion.span>
              </div>
            </motion.button>

            <motion.a
              href="mailto:Mohamaadflaha2014@gmail.com"
              className="group bg-white/5 backdrop-blur-xl border-2 border-blue-500 hover:bg-blue-500 text-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Let's Talk</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex space-x-4 pb-8 sm:pb-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-lg ${social.hoverColor}`}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  rotate: [0, -5, 5, 0],
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <motion.div
                  className="group-hover:scale-110 transition-transform duration-200"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {social.icon}
                </motion.div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Binary Rain Effect */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="relative w-[500px] h-[600px] overflow-hidden">
            {/* Main Container with subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl backdrop-blur-sm border border-white/5">
              
              {/* Binary Rain Streams */}
              {[...Array(12)].map((_, columnIndex) => (
                <div
                  key={columnIndex}
                  className="absolute top-0 overflow-hidden"
                  style={{
                    left: `${8 + columnIndex * 7.5}%`,
                    width: '20px',
                    height: '100%',
                  }}
                >
                  {/* Each column has multiple streams */}
                  {[...Array(3)].map((_, streamIndex) => (
                    <motion.div
                      key={streamIndex}
                      className="absolute font-mono text-sm leading-tight"
                      style={{
                        top: '-100%',
                      }}
                      animate={{
                        y: ['0vh', '130vh'],
                      }}
                      transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 6 + streamIndex * 2,
                      }}
                    >
                      {/* Generate random binary string for each stream */}
                      {[...Array(30)].map((_, charIndex) => {
                        const isHighlighted = Math.random() > 0.85;
                        const char = Math.random() > 0.5 ? '1' : '0';
                        
                        return (
                          <motion.div
                            key={charIndex}
                            className={`${
                              isHighlighted
                                ? 'text-cyan-300 text-shadow-glow'
                                : charIndex < 3
                                ? 'text-green-300/80'
                                : charIndex < 8
                                ? 'text-green-400/60'
                                : 'text-green-500/30'
                            }`}
                            style={{
                              textShadow: isHighlighted 
                                ? '0 0 10px rgba(34, 211, 238, 0.8)' 
                                : charIndex < 3
                                ? '0 0 5px rgba(34, 197, 94, 0.5)'
                                : 'none',
                            }}
                          >
                            {char}
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  ))}
                </div>
              ))}

              {/* Floating Code Fragments */}
              {[
                { text: '#!/bin/bash', x: 15, y: 20, size: 'text-xs' },
                { text: 'nmap -sS', x: 75, y: 35, size: 'text-xs' },
                { text: 'curl -X POST', x: 25, y: 60, size: 'text-xs' },
                { text: 'sudo -u root', x: 70, y: 75, size: 'text-xs' },
                { text: 'nc -lvnp 4444', x: 20, y: 85, size: 'text-xs' },
                { text: 'whoami', x: 80, y: 15, size: 'text-xs' },
              ].map((fragment, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${fragment.size} font-mono text-cyan-400/40 font-medium select-none`}
                  style={{
                    left: `${fragment.x}%`,
                    top: `${fragment.y}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 3,
                  }}
                >
                  {fragment.text}
                </motion.div>
              ))}

              {/* Subtle Pulse Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent rounded-3xl"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Corner Accent Lines */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/40 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/40 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/40 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/40 rounded-br-lg"></div>

              {/* Scanning Line Effect */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                animate={{
                  y: [0, 600, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hidden sm:block"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{
                y: [0, 10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;