import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const AIVulnerabilityScannerPage = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);

  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Simulate scanning animation
  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            setIsScanning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "AI-Powered Detection",
      description:
        "Machine learning algorithms that think like hackers - spots vulnerabilities faster than you can say 'SQL injection'.",
      icon: "🤖",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      particles: ["⚡", "🔍", "🧠"],
    },
    {
      title: "Real-Time Scanning",
      description:
        "Continuous monitoring that never sleeps. Your digital bouncer that checks every visitor and scans every corner.",
      icon: "🔥",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      particles: ["👁️", "🚨", "⚡"],
    },
    {
      title: "Smart Reporting",
      description:
        "Gets technical stuff but explains it like you're 5. No more cryptic error codes - just plain English explanations.",
      icon: "📊",
      gradient: "from-green-500 via-cyan-500 to-blue-500",
      particles: ["📈", "💡", "🎯"],
    },
    {
      title: "Automated Fixes",
      description:
        "Not just finds bugs, but suggests fixes too. Like having a security expert on speed dial 24/7.",
      icon: "🛠️",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      particles: ["🔧", "⚙️", "✨"],
    },
  ];

  const techStack = [
    {
      name: "Python",
      icon: "🐍",
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      description: "Core language for AI models and security scanning logic",
    },
    {
      name: "TensorFlow",
      icon: "🧠",
      color: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20",
      description:
        "Machine learning framework for vulnerability pattern recognition",
    },
    {
      name: "FastAPI",
      icon: "⚡",
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      description:
        "High-performance API framework for real-time scanning endpoints",
    },
    {
      name: "React",
      icon: "⚛️",
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
      description:
        "Frontend dashboard for vulnerability reporting and management",
    },
    {
      name: "Redis",
      icon: "📡",
      color: "text-red-400",
      bgGradient: "from-red-500/20 to-pink-500/20",
      description:
        "High-speed caching for scan results and threat intelligence",
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "text-blue-500",
      bgGradient: "from-blue-600/20 to-cyan-500/20",
      description: "Containerized deployment for scalable security scanning",
    },
  ];

  const vulnerabilityTypes = [
    "SQL Injection",
    "XSS",
    "CSRF",
    "Buffer Overflow",
    "Code Injection",
    "Path Traversal",
    "Authentication Bypass",
    "Privilege Escalation",
  ];

  const [currentVuln, setCurrentVuln] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVuln((prev) => (prev + 1) % vulnerabilityTypes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const handleBackToPortfolio = () => {
    navigate("/");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans overflow-x-hidden">
      {/* Animated background with cyberpunk vibes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Static glowing binary patterns */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500/20 text-xs font-mono select-none"
            style={{
              left: `${10 + (i % 5) * 20}%`,
              top: `${15 + Math.floor(i / 5) * 25}%`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {Math.random() > 0.5 ? "01010101" : "10101010"}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 w-full px-4 md:px-16 py-4 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gray-900/80 backdrop-blur-2xl border border-red-500/20 rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 gap-4">
            <motion.a
              href="#"
              className="flex items-center space-x-3 group flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-white font-bold text-lg md:text-xl relative z-10">
                  M
                </span>
              </motion.div>
              <span className="hidden lg:block text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 transition-all duration-300">
                Mohammad<span className="text-red-400">.</span>
              </span>
            </motion.a>

            <motion.button
              className="relative bg-red-500/10 backdrop-blur-xl border border-red-500/30 rounded-xl px-6 py-3 text-red-400 hover:bg-red-500/20 transition-all duration-300 group overflow-hidden flex-1 md:flex-initial min-w-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToPortfolio}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <motion.span
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ←
                </motion.span>
                <span className="text-sm md:text-base truncate">
                  Back to Portfolio
                </span>
              </span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 md:px-16 pt-24 md:pt-32 relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: y1 }}>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column */}
            <motion.div
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <motion.span
                  className="px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 text-red-400 rounded-full text-xs lg:text-sm font-semibold border border-red-500/30 backdrop-blur-sm inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🛡️
                  </motion.span>
                  <span>Cybersecurity AI</span>
                </motion.span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight"
              >
                AI Bug
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Hunter
                </motion.span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-4"
              >
                <p>
                  An AI-powered vulnerability scanner that hunts bugs like a
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {" "}
                    hacker on caffeine{" "}
                  </motion.span>
                  - finding flaws, explaining them in plain English, and never
                  asking for a break.
                </p>

                {/* Animated vulnerability type display */}
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-3 font-mono text-sm"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(239, 68, 68, 0)",
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                      "0 0 0 rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-red-400">Scanning for:</span>{" "}
                  <motion.span
                    key={currentVuln}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-yellow-400 font-bold"
                  >
                    {vulnerabilityTypes[currentVuln]}
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  className="relative bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  disabled
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                  <div className="flex items-center justify-center space-x-2 relative z-10">
                    <span className="text-sm lg:text-base">
                      Work in Progress
                    </span>
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Scanner Terminal Mockup */}
            <motion.div
              className="relative hidden lg:flex items-center justify-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-96 h-96">
                {/* Terminal Mockup */}
                <motion.div
                  className="absolute inset-0 bg-gray-900 border-2 border-red-500/30 rounded-2xl p-6 backdrop-blur-xl shadow-2xl font-mono text-sm overflow-hidden"
                  animate={{
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 0 0 rgba(239, 68, 68, 0)",
                      "0 0 30px rgba(239, 68, 68, 0.3)",
                      "0 0 0 rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Terminal Header */}
                  <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-red-500/20">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-4">
                      AI-Scanner v2.1.0
                    </span>
                  </div>

                  {/* Terminal Content */}
                  <div className="space-y-2 text-xs">
                    <div className="text-green-400">
                      $ ai-scanner --target https://example.com
                    </div>
                    <div className="text-gray-400">
                      Initializing AI vulnerability scanner...
                    </div>
                    <div className="text-blue-400">Loading ML models... ✓</div>
                    <div className="text-purple-400">
                      Starting reconnaissance phase...
                    </div>

                    {/* Progress Bar */}
                    {isScanning && (
                      <motion.div className="my-3">
                        <div className="text-yellow-400 mb-1">
                          Scan Progress: {scanProgress}%
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${scanProgress}%` }}
                            transition={{ duration: 0.1 }}
                          />
                        </div>
                      </motion.div>
                    )}

                    <div className="text-red-400">
                      ⚠️ SQL Injection detected at /login
                    </div>
                    <div className="text-orange-400">
                      ⚠️ XSS vulnerability in search form
                    </div>
                    <div className="text-yellow-400">
                      ℹ️ Insecure headers found
                    </div>
                    <div className="text-green-400">
                      ✓ HTTPS properly configured
                    </div>

                    <motion.div
                      className="text-red-500 font-bold mt-4"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {isScanning
                        ? "Scanning in progress..."
                        : "3 vulnerabilities found!"}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hidden lg:block"
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
            <span className="text-sm">Scroll to hack more</span>
            <div className="w-6 h-10 border-2 border-red-400/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-red-400/60 rounded-full mt-2"
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
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-16 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Key{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400">
                Features
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl">
              Core features that make this QR system effective for security
              scanning
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-3xl border cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-red-500/10 border-red-500/30"
                      : "bg-white/5 border-white/10 hover:bg-red-500/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02, y: -3 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Display */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-xl border border-red-500/20 rounded-3xl p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-8">
                <motion.div
                  className="text-8xl"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {features[activeFeature].icon}
                </motion.div>

                <h3 className="text-3xl font-bold text-white">
                  {features[activeFeature].title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {features[activeFeature].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 md:px-16 py-20 relative overflow-hidden">
        {/* Background hacker elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { icon: "🐍", left: "10%", top: "15%" },
            { icon: "🧠", left: "85%", top: "25%" },
            { icon: "⚡", left: "20%", top: "75%" },
            { icon: "⚛️", left: "75%", top: "65%" },
            { icon: "📡", left: "15%", top: "45%" },
            { icon: "🐳", left: "80%", top: "45%" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-5"
              style={{
                left: item.left,
                top: item.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.05, 0.1, 0.05],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: i * 2,
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 text-orange-400 rounded-full text-xs lg:text-sm font-semibold border border-orange-500/30 backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ⚙️
              </motion.span>
              <span>Hacker's Toolkit</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background:
                  "linear-gradient(-45deg, #ef4444, #f97316, #eab308, #22c55e)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tech Stack & Tools
            </motion.h2>

            <motion.p
              className="text-gray-400 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              The technologies and frameworks powering this AI vulnerability
              scanner
            </motion.p>
          </motion.div>

          {/* Tech Stack Cards */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Card Background */}
                <div className="relative p-6 lg:p-8 rounded-3xl border border-red-500/20 bg-gray-900/50 backdrop-blur-xl transition-all duration-300 overflow-hidden h-full">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-0 md:group-hover:opacity-100 transition-all duration-300`}
                  />

                  {/* Glitch effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100"
                    animate={
                      hoveredTech === index
                        ? {
                            x: [0, -2, 2, 0],
                            opacity: [0, 0.3, 0],
                          }
                        : {}
                    }
                    transition={{ duration: 0.1, repeat: 3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center space-y-4">
                    {/* Tech Icon */}
                    <div className="relative mx-auto w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 backdrop-blur-sm border border-red-500/20 flex items-center justify-center text-3xl lg:text-4xl">
                      <motion.span
                        className="relative z-10"
                        animate={
                          hoveredTech === index
                            ? { rotate: [0, 15, -15, 0] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {tech.icon}
                      </motion.span>
                    </div>

                    {/* Tech Name */}
                    <h3
                      className={`text-lg lg:text-xl font-bold ${tech.color} transition-all duration-300`}
                    >
                      {tech.name}
                    </h3>

                    {/* Description */}
                    <div className="space-y-3">
                      <div className="h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </div>

                    {/* Threat Level Indicator */}
                    <div className="pt-2">
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${tech.bgGradient.replace(
                            "/20",
                            ""
                          )}`}
                          initial={{ width: 0 }}
                          animate={{ width: "95%" }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Proficient
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-4 md:px-16 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See It In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Action
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Watch the AI scanner tear through a website's defenses like hot
              knife through butter
            </p>
          </motion.div>

          {/* Interactive Demo */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Scan Results */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Latest Scan Results
                </h3>

                {/* Vulnerability Cards */}
                {[
                  {
                    type: "SQL Injection",
                    severity: "Critical",
                    location: "/api/login",
                    color: "red",
                    icon: "💉",
                    description: "User input not properly sanitized",
                  },
                  {
                    type: "XSS Vulnerability",
                    severity: "High",
                    location: "/search?q=",
                    color: "orange",
                    icon: "🔴",
                    description: "Reflected XSS in search parameter",
                  },
                  {
                    type: "Weak Headers",
                    severity: "Medium",
                    location: "Global",
                    color: "yellow",
                    icon: "⚠️",
                    description: "Missing security headers detected",
                  },
                ].map((vuln, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-2xl border bg-${vuln.color}-500/5 border-${vuln.color}-500/20`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`text-3xl`}>{vuln.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-white">
                            {vuln.type}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold bg-${vuln.color}-500/20 text-${vuln.color}-400 border border-${vuln.color}-500/30`}
                          >
                            {vuln.severity}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">
                          {vuln.description}
                        </p>
                        <p className="text-gray-500 text-xs font-mono">
                          {vuln.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right: AI Analysis */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <span>🤖</span>
                  <span>AI Analysis</span>
                </h3>

                <div className="space-y-4 font-mono text-sm">
                  <motion.div
                    className="text-purple-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Analyzing vulnerability patterns...
                  </motion.div>

                  <motion.div
                    className="text-blue-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    Cross-referencing with CVE database...
                  </motion.div>

                  <motion.div
                    className="text-yellow-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Generating remediation suggestions...
                  </motion.div>

                  <motion.div
                    className="text-green-400 font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    ✓ Analysis complete!
                  </motion.div>

                  <motion.div
                    className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                  >
                    <div className="text-green-400 font-bold mb-2">
                      🎯 AI Recommendation:
                    </div>
                    <div className="text-gray-300 text-xs leading-relaxed">
                      Immediate action required on SQL injection. Implement
                      parameterized queries and input validation. XSS can be
                      mitigated with output encoding. Security headers should be
                      configured ASAP.
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-4 md:px-16 py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.3)",
                  "0 0 30px rgba(249, 115, 22, 0.4)",
                  "0 0 20px rgba(239, 68, 68, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Work in Progress
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              This project is currently under development. I'm working on
              building all the features and will have a preview version
              available soon. Stay tuned for updates!
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Back to Projects Button */}
            <motion.button
              className="relative bg-white/5 backdrop-blur-xl border-2 border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 group overflow-hidden min-w-[200px]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToPortfolio}
            >
              <motion.div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center space-x-2 relative z-10">
                <motion.span
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ←
                </motion.span>
                <span>Back to Projects</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Additional Contact Options */}
          <motion.div
            className="mt-12 pt-8 border-t border-red-500/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">Connect with me on:</p>

            <div className="flex justify-center space-x-6">
              {/* Social Links */}
              {[
                {
                  name: "LinkedIn",
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/mohammad-falaha-6703091b8",
                },
                {
                  name: "GitHub",
                  icon: Github,
                  href: "https://github.com/Motje3",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.div
                    className="group-hover:scale-110 transition-transform duration-300"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <social.icon size={24} />
                  </motion.div>
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Closing Message */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              Thank you for taking the time to explore this project!
            </p>
          </motion.div>
        </div>
      </section>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-2xl z-50 flex items-center justify-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIVulnerabilityScannerPage;
