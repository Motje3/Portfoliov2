import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const QRShipmentTrackerPage = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);

  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [trackingStep, setTrackingStep] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "QR Code Scanning",
      description:
        "Instant shipment scanning with smart QR codes. Workers scan once and the system automatically updates shipment status across the entire network.",
      icon: "📱",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Live location updates and delivery status. Customers and managers see exactly where shipments are, from warehouse to doorstep.",
      icon: "📍",
      gradient: "from-green-500 via-emerald-500 to-cyan-500",
    },
    {
      title: "Smart Dashboard",
      description:
        "Comprehensive analytics and shipment management. Track performance, optimize routes, and manage inventory all in one place.",
      icon: "📊",
      gradient: "from-purple-500 via-blue-500 to-indigo-500",
    },
    {
      title: "Mobile Workforce",
      description:
        "Native mobile app for delivery drivers and warehouse staff. Works offline and syncs when connection is restored.",
      icon: "🚚",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
    },
  ];

  const techStack = [
    {
      name: "React Native",
      icon: "📱",
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      description:
        "Cross-platform mobile app for iOS and Android with native performance",
    },
    {
      name: "TypeScript",
      icon: "🔷",
      color: "text-blue-500",
      bgGradient: "from-blue-600/20 to-indigo-500/20",
      description:
        "Type-safe development for better code quality and fewer runtime errors",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      color: "text-teal-400",
      bgGradient: "from-teal-500/20 to-cyan-500/20",
      description:
        "Utility-first CSS framework with NativeWind for consistent styling",
    },
    {
      name: "C# .NET",
      icon: "⚡",
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-indigo-500/20",
      description:
        "Robust backend API for handling shipment data and business logic",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
      description:
        "Enterprise-grade database for reliable shipment and tracking data",
    },
    {
      name: "Neon Database",
      icon: "⚡",
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      description:
        "Serverless PostgreSQL platform for modern cloud applications",
    },
  ];

  const trackingSteps = [
    "Package Received",
    "In Transit",
    "Out for Delivery",
    "Delivered",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTrackingStep((prev) => (prev + 1) % trackingSteps.length);
    }, 2500);
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
      {/* Animated background with logistics theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"
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

        {/* Static glowing tracking patterns */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-500/20 text-xs font-mono select-none"
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 20}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            📦→🚚→🏠
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
        <div className="bg-gray-900/80 backdrop-blur-2xl border border-blue-500/20 rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 gap-4">
            <motion.a
              href="#"
              className="flex items-center space-x-3 group flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-white font-bold text-lg md:text-xl relative z-10">
                  M
                </span>
              </motion.div>
              <span className="hidden lg:block text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                Mohammad<span className="text-blue-400">.</span>
              </span>
            </motion.a>

            <motion.button
              className="relative bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 rounded-xl px-6 py-3 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 group overflow-hidden flex-1 md:flex-initial min-w-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToPortfolio}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
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
                  className="px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 text-blue-400 rounded-full text-xs lg:text-sm font-semibold border border-blue-500/30 backdrop-blur-sm inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    📦
                  </motion.span>
                  <span>Logistics & Tracking</span>
                </motion.span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight"
              >
                Smart
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Tracking
                </motion.span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-4"
              >
                <p>
                  A comprehensive QR-based shipment tracking system that
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {" "}
                    follows every shipment{" "}
                  </motion.span>
                  from warehouse to doorstep with real-time updates and smart
                  analytics.
                </p>

                {/* Animated tracking status display */}
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-3 font-mono text-sm"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 0 rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-blue-400">Status:</span>{" "}
                  <motion.span
                    key={trackingStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-cyan-400 font-bold"
                  >
                    {trackingSteps[trackingStep]}
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  className="relative bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://github.com/Motje3/QR-Scanner-Tracking",
                      "_blank"
                    )
                  }
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <Github size={20} />
                    <span className="text-sm lg:text-base">View My Code</span>
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Mobile App Mockup */}
            <motion.div
              className="relative hidden lg:flex items-center justify-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-96 h-96">
                {/* Mobile App Mockup */}
                <motion.div
                  className="absolute inset-0 bg-gray-900 border-2 border-blue-500/30 rounded-3xl p-6 backdrop-blur-xl shadow-2xl overflow-hidden"
                  animate={{
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 30px rgba(59, 130, 246, 0.3)",
                      "0 0 0 rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-2xl"></div>

                  {/* App Content */}
                  <div className="mt-8 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-bold">Shipment Tracker</h3>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📱</span>
                      </div>
                    </div>

                    {/* QR Scanner Area */}
                    <motion.div
                      className="bg-gray-800/50 border border-blue-500/30 rounded-2xl p-6 text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className="text-6xl mb-4"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        📦
                      </motion.div>
                      <div className="text-white font-bold mb-2">
                        Scan Shipment QR
                      </div>
                      <div className="text-gray-400 text-sm">
                        Point camera at QR code
                      </div>
                    </motion.div>

                    {/* Recent Scans */}
                    <div className="space-y-3">
                      <div className="text-white font-semibold text-sm">
                        Recent Scans
                      </div>
                      {[
                        { id: "PKG001", status: "Delivered", color: "green" },
                        { id: "PKG002", status: "In Transit", color: "blue" },
                        { id: "PKG003", status: "Received", color: "yellow" },
                      ].map((pkg, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center justify-between bg-gray-800/30 rounded-lg p-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-2 h-2 bg-${pkg.color}-400 rounded-full`}
                            ></div>
                            <span className="text-white text-sm">{pkg.id}</span>
                          </div>
                          <span className={`text-${pkg.color}-400 text-xs`}>
                            {pkg.status}
                          </span>
                        </motion.div>
                      ))}
                    </div>
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
            <span className="text-sm">Track more below</span>
            <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-blue-400/60 rounded-full mt-2"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
                Features
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl">
              Everything needed to track shipments efficiently and keep
              customers happy
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
                      ? "bg-blue-500/10 border-blue-500/30"
                      : "bg-white/5 border-white/10 hover:bg-blue-500/5"
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
              className="bg-gray-800/50 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-10"
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
        {/* Background tech elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { icon: "📱", left: "10%", top: "15%" },
            { icon: "🔷", left: "85%", top: "25%" },
            { icon: "🎨", left: "20%", top: "75%" },
            { icon: "⚡", left: "75%", top: "65%" },
            { icon: "🐘", left: "15%", top: "45%" },
            { icon: "⚡", left: "80%", top: "45%" },
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
              className="inline-flex items-center space-x-3 px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 text-cyan-400 rounded-full text-xs lg:text-sm font-semibold border border-cyan-500/30 backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ⚙️
              </motion.span>
              <span>Technology Stack</span>
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
                  "linear-gradient(-45deg, #3b82f6, #06b6d4, #14b8a6, #10b981)",
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
              The technologies and frameworks powering this shipment tracking
              system
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
                <div className="relative p-6 lg:p-8 rounded-3xl border border-blue-500/20 bg-gray-900/50 backdrop-blur-xl transition-all duration-300 overflow-hidden h-full">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-0 md:group-hover:opacity-100 transition-all duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center space-y-4">
                    {/* Tech Icon */}
                    <div className="relative mx-auto w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center text-3xl lg:text-4xl">
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
                      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="pt-2">
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${tech.bgGradient.replace(
                            "/20",
                            ""
                          )}`}
                          initial={{ width: 0 }}
                          animate={{ width: "90%" }}
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
              Tracking{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Workflow
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              See how shipments move through the system from scan to delivery
            </p>
          </motion.div>

          {/* Tracking Flow Demo */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Tracking Steps */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Shipment Journey
                </h3>

                {/* Tracking Steps */}
                {[
                  {
                    step: "Shipment Scanned",
                    description: "QR code scanned at origin warehouse",
                    icon: "📱",
                    color: "blue",
                    time: "09:15 AM",
                  },
                  {
                    step: "In Transit",
                    description: "Shipment loaded onto delivery vehicle",
                    icon: "🚚",
                    color: "yellow",
                    time: "11:30 AM",
                  },
                  {
                    step: "Out for Delivery",
                    description: "Last mile delivery in progress",
                    icon: "📍",
                    color: "orange",
                    time: "02:45 PM",
                  },
                  {
                    step: "Delivered",
                    description: "Shipment successfully delivered to customer",
                    icon: "✅",
                    color: "green",
                    time: "04:20 PM",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-2xl border bg-${step.color}-500/5 border-${step.color}-500/20`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{step.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-white">
                            {step.step}
                          </h4>
                          <span className="text-xs text-gray-400 font-mono">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right: Dashboard Preview */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <span>📊</span>
                  <span>Live Dashboard</span>
                </h3>

                <div className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        1,247
                      </div>
                      <div className="text-xs text-gray-400">
                        Active Shipments
                      </div>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-400">
                        98.5%
                      </div>
                      <div className="text-xs text-gray-400">
                        On-Time Delivery
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-sm font-semibold text-gray-300">
                      Recent Activity
                    </div>
                    {[
                      { id: "TRK001", action: "Delivered", time: "2 min ago" },
                      {
                        id: "TRK002",
                        action: "Out for delivery",
                        time: "15 min ago",
                      },
                      {
                        id: "TRK003",
                        action: "In transit",
                        time: "1 hour ago",
                      },
                    ].map((activity, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">
                            {activity.id}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {activity.action}
                          </span>
                        </div>
                        <span className="text-gray-500 text-xs">
                          {activity.time}
                        </span>
                      </motion.div>
                    ))}
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />

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
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 30px rgba(6, 182, 212, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              View My Code
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              This shipment tracking system showcases modern mobile development
              with React Native and a robust .NET backend. Check out the code to
              see the implementation details!
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
            <motion.button
              className="relative bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group min-w-[200px]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://github.com/Motje3/QR-Scanner-Tracking",
                  "_blank"
                )
              }
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
              <div className="flex items-center justify-center space-x-2 relative z-10">
                <Github size={20} />
                <span>View on GitHub</span>
              </div>
            </motion.button>

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
            className="mt-12 pt-8 border-t border-blue-500/20"
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
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-2xl z-50 flex items-center justify-center hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
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

export default QRShipmentTrackerPage;
