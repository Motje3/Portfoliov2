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
      setShowCursor(prev => !prev);
    }, 530); // Cursor blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="relative">
      {displayText}
      <span 
        className={`inline-block w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 ml-1 transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-20'
        }`}
        style={{ 
          animation: showCursor ? 'pulse 1.5s ease-in-out infinite' : 'none',
          boxShadow: showCursor ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/mohammad-falaha-6703091b8",
      icon: "💼",
      gradient: "from-blue-600 to-blue-800"
    },
    { 
      name: "GitHub", 
      url: "https://github.com/Motje3",
      icon: "💻",
      gradient: "from-gray-700 to-gray-900"
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/mohammad_mo_o/",
      icon: "📸",
      gradient: "from-pink-600 to-purple-700"
    },
    { 
      name: "WhatsApp", 
      url: "https://wa.me/+31686336164",
      icon: "💬",
      gradient: "from-green-600 to-emerald-700"
    }
  ];

  const skills = [
    { name: "Cybersecurity", icon: "🛡️" },
    { name: "Ethical Hacking", icon: "🔍" },
    { name: "Network Security", icon: "🌐" },
    { name: "Penetration Testing", icon: "⚡" },
  ];

  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.home = el;
        ref.current = el;
      }}
      className="min-h-screen flex items-center px-4 md:px-16 relative overflow-hidden"
      id="home"
      style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), #0f172a',
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
            ease: "easeInOut"
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
            delay: 2
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
            ease: "linear"
          }}
        />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-screen px-4 md:px-16">
        
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
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
              }}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                <TypewriterText />
              </span>
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
              Welcome! I'm an IT student with an unwavering passion for cybersecurity. 
              While I specialize in software development, I'm constantly expanding my expertise in 
              <span className="text-blue-400 font-semibold"> ethical hacking</span>, 
              <span className="text-green-400 font-semibold"> network security</span>, and 
              <span className="text-purple-400 font-semibold"> secure coding</span>.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <span>📄</span>
                <span>Download CV</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  →
                </motion.span>
              </div>
            </motion.a>

            <motion.a
              href="mailto:Mohamaadflaha2014@gmail.com"
              className="group bg-white/5 backdrop-blur-xl border-2 border-blue-500 hover:bg-blue-500 text-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <span>💬</span>
                <span>Let's Talk</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/25 backdrop-blur-xl border border-white/10`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Cybersecurity Visual */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="relative w-96 h-96">
            
            {/* Main Shield */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 flex items-center justify-center"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-8xl">🛡️</div>
            </motion.div>

            {/* Floating Code Elements */}
            {[
              { text: "SSH", pos: { top: "10%", left: "20%" }, delay: 0 },
              { text: "SSL", pos: { top: "20%", right: "15%" }, delay: 0.5 },
              { text: "VPN", pos: { bottom: "30%", left: "10%" }, delay: 1 },
              { text: "AES", pos: { bottom: "15%", right: "20%" }, delay: 1.5 },
              { text: "RSA", pos: { top: "50%", left: "5%" }, delay: 2 },
              { text: "TLS", pos: { top: "40%", right: "5%" }, delay: 2.5 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2 text-sm font-mono text-green-400"
                style={item.pos}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay
                }}
              >
                {item.text}
              </motion.div>
            ))}

            {/* Binary Rain Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-green-400/30 text-xs font-mono"
                  style={{
                    left: `${10 + i * 8}%`,
                    top: '-10%'
                  }}
                  animate={{
                    y: ['0vh', '50vh'],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 4
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </motion.div>
              ))}
            </div>

            {/* Pulse Rings */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-purple-400/20 rounded-full"
              animate={{
                scale: [1.1, 1.4, 1.1],
                opacity: [0.2, 0.05, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Network Nodes */}
            {[
              { x: 20, y: 20 }, { x: 80, y: 30 }, { x: 15, y: 70 }, { x: 85, y: 80 }
            ].map((node, index) => (
              <motion.div
                key={index}
                className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.path
                d="M 80 120 Q 200 160 320 120 Q 200 200 80 280"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, -20],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </svg>

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
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
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;