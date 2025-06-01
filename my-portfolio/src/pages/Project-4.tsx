import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Github } from "lucide-react";

const CargohubAPIProjectPage = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);

  const [activeFeature, setActiveFeature] = useState(0);
  const [, setHoveredTech] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Shipment Tracking",
      description:
        "Track the status of shipments across the supply chain in real-time, from creation to delivery.",
      icon: "📦",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      particles: ["🚚", "📍", "📈"],
    },
    {
      title: "Inventory Management",
      description:
        "Efficiently handle inventory levels, updates, and transfers across multiple warehouses.",
      icon: "📊",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      particles: ["🏷️", "📦", "🗃️"],
    },
    {
      title: "Order Processing",
      description:
        "Manage customer orders, validate contents, and link them to shipment and inventory seamlessly.",
      icon: "📝",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      particles: ["✅", "📑", "🧾"],
    },
    {
      title: "PDF Report Generator",
      description:
        "Generate clean, structured PDF summaries of orders and shipments on the fly.",
      icon: "🧾",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      particles: ["🖨️", "📄", "📎"],
    },
  ];

  const techStack = [
    {
      name: "Python",
      icon: "🐍",
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-green-500/20",
    },
    {
      name: "Flask",
      icon: "🔥",
      color: "text-red-400",
      bgGradient: "from-red-500/20 to-orange-500/20",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "text-blue-500",
      bgGradient: "from-blue-600/20 to-indigo-500/20",
    },
    {
      name: "PyTest",
      icon: "🧪",
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      name: "WeasyPrint",
      icon: "🧾",
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

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
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"
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
      </div>

      {/* Header - MOBILE FIRST VERSION */}
      <motion.header
        className="fixed top-0 left-0 w-full px-4 md:px-16 py-4 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 gap-4">
            {/* Logo - Always visible */}
            <motion.a
              href="#"
              className="flex items-center space-x-3 group flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-white font-bold text-lg md:text-xl relative z-10">
                  M
                </span>
              </motion.div>
              {/* Only show "Mohammad." on larger screens */}
              <span className="hidden lg:block text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                Mohammad<span className="text-blue-400">.</span>
              </span>
            </motion.a>

            {/* Back Button - Expands on mobile */}
            <motion.button
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 group overflow-hidden flex-1 md:flex-initial min-w-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToPortfolio}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

      {/* Enhanced Hero Section - MOBILE OPTIMIZED */}
      <section className="min-h-screen flex items-center px-4 md:px-16 pt-24 md:pt-32 relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: y1 }}>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <motion.div
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <motion.span
                  className="px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 text-green-400 rounded-full text-xs lg:text-sm font-semibold border border-green-500/30 backdrop-blur-sm inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🍽️
                  </motion.span>
                  <span>Logistics Backend</span>
                </motion.span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight"
              >
                CargoHub
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  API
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                An API designed by me and my school teammates to streamline
                warehouse and shipment management. Built for
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {" "}
                  automation, tracking, and{" "}
                </motion.span>
                making logistics a whole lot easier.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/MauriceBoendermaker/processing-and-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Animated gradient overlay */}
                    <motion.div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Glow effect */}
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Github className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors duration-300 z-10" />
                    <span className="text-sm lg:text-base z-10">
                      Visit GitHub
                    </span>
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Phone Mockup (Hidden on Mobile) */}
            <motion.div
              className="relative hidden lg:flex items-center justify-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-96 h-96">
                {/* Enhanced Phone Mockup */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-6 border-4 border-white/20 backdrop-blur-xl shadow-2xl"
                  animate={{
                    y: [0, -15, 0],
                    rotateX: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    boxShadow:
                      "0 25px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1) inset",
                  }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 h-full flex flex-col items-center justify-center space-y-6 border border-white/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="text-8xl mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      📱
                    </motion.div>

                    <div className="text-center space-y-2">
                      <motion.div
                        className="text-white font-bold text-2xl"
                        animate={{
                          textShadow: [
                            "0 0 10px rgba(59, 130, 246, 0.5)",
                            "0 0 20px rgba(139, 92, 246, 0.7)",
                            "0 0 10px rgba(59, 130, 246, 0.5)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        CargoHub API
                      </motion.div>
                      <motion.div
                        className="text-gray-400 text-sm"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Track • Manage • Automate • Ship
                      </motion.div>
                    </div>

                    {/* Enhanced QR Code */}
                    <motion.div
                      className="w-24 h-24 bg-white rounded-xl flex items-center justify-center text-3xl shadow-lg relative overflow-hidden"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                        animate={{
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <span className="relative z-10">📋</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Floating Elements */}
                {[
                  { icon: "📦", pos: { top: "5%", left: "5%" }, delay: 0 },
                  { icon: "🚚", pos: { top: "15%", right: "5%" }, delay: 1 },
                  { icon: "🧾", pos: { bottom: "25%", left: "0%" }, delay: 2 },
                  { icon: "🖥️", pos: { bottom: "5%", right: "10%" }, delay: 3 },
                  { icon: "🏷️", pos: { top: "40%", left: "-5%" }, delay: 4 },
                  { icon: "⚙️", pos: { top: "60%", right: "0%" }, delay: 5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-5xl cursor-pointer"
                    style={item.pos}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                    whileHover={{
                      scale: 1.5,
                      zIndex: 10,
                      filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile and small tablets */}
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
      </section>

      {/* Features Section - CLEANED */}
      <section className="px-4 md:px-16 py-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Key{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                Features
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl">
              Essential tools that power modern logistics workflows
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
                      ? "bg-white/10 border-white/30"
                      : "bg-white/5 border-white/10 hover:bg-white/8"
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
              className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-8">
                <div className="text-8xl">{features[activeFeature].icon}</div>

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

      {/* Enhanced Tech Stack Section - STABLE VERSION */}
      <section className="px-4 md:px-16 py-20 relative overflow-hidden">
        {/* Floating tech icons background - FIXED VERSION */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { icon: "⚛️", left: "10%", top: "15%" },
            { icon: "▲", left: "85%", top: "25%" },
            { icon: "🎨", left: "20%", top: "75%" },
            { icon: "⚡", left: "75%", top: "65%" },
            { icon: "🐘", left: "15%", top: "45%" },
            { icon: "🔷", left: "80%", top: "45%" },
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
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 1.5,
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
              className="inline-flex items-center space-x-3 px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 text-cyan-400 rounded-full text-xs lg:text-sm font-semibold border border-cyan-500/30 backdrop-blur-sm mb-8"
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
                  "linear-gradient(-45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Powered by Modern Tech
            </motion.h2>

            <motion.p
              className="text-gray-400 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Built with modern web technologies for reliable performance and
              smooth user interactions
            </motion.p>
          </motion.div>

          {/* Tech Stack Cards - STABLE VERSION */}
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
                <div className="relative p-6 lg:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 overflow-hidden h-full">
                  {/* Gradient Overlay - Only on desktop hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-0 md:group-hover:opacity-100 transition-all duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center space-y-4">
                    {/* Tech Icon */}
                    <div className="relative mx-auto w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl lg:text-4xl">
                      <span className="relative z-10">{tech.icon}</span>
                    </div>

                    {/* Tech Name */}
                    <h3
                      className={`text-lg lg:text-xl font-bold ${tech.color} transition-all duration-300`}
                    >
                      {tech.name}
                    </h3>

                    {/* Description - ALWAYS VISIBLE, NO ANIMATIONS */}
                    <div className="space-y-3">
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {index === 0 &&
                          "The backbone of the API – flexible, readable, and loved by devs for a reason."}
                        {index === 1 &&
                          "Micro web framework used to build our RESTful endpoints with minimal overhead."}
                        {index === 2 &&
                          "Reliable and powerful relational database for handling structured logistics data."}
                        {index === 3 &&
                          "Used to test all endpoints and keep bugs from sneaking into production."}
                        {index === 4 &&
                          "Containerized setup for consistent deployment — works everywhere, every time."}
                        {index === 5 &&
                          "Generates clean, printable PDF reports for shipments, orders, and summaries."}
                      </p>
                    </div>

                    {/* Skill Level Indicator - ALWAYS VISIBLE */}
                    <div className="pt-2">
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
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
                        Expert Level
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-4 md:px-16 py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />

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
                  "0 0 30px rgba(139, 92, 246, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Liked what you saw?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Interested in this project or want to discuss a collaboration? I'd
              love to hear from you.
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
            {/* Contact Me Button */}
            <motion.button
              className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group min-w-[200px]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Add your contact logic here
                window.location.href = "mailto:your-email@example.com";
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📧
                </motion.span>
                <span>Get in Touch</span>
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
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">Or connect with me on:</p>

            <div className="flex justify-center space-x-6">
              {/* Social Links */}
              {[
                { name: "LinkedIn", icon: "🔗", href: "#" },
                { name: "GitHub", icon: "🐙", href: "#" },
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
                  <motion.span
                    className="text-2xl group-hover:scale-110 transition-transform duration-300"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {social.icon}
                  </motion.span>
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

export default CargohubAPIProjectPage;
