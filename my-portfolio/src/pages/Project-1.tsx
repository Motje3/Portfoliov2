import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantQRProjectPage = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const features = [
    {
      title: "QR Code Scanning",
      description:
        "Customers simply scan the QR code on their table to instantly access the digital menu on their smartphone.",
      icon: "📱",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      particles: ["✨", "📲", "🔗"],
    },
    {
      title: "Interactive Menu",
      description:
        "Beautiful, responsive digital menu with categories, images, descriptions, and real-time pricing updates.",
      icon: "🍽️",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      particles: ["🍕", "📋", "💫"],
    },
    {
      title: "Order Management",
      description:
        "Seamless order placement with customization options, special requests, and instant confirmation.",
      icon: "🛒",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      particles: ["🎯", "⚡", "🚀"],
    },
    {
      title: "Kitchen Dashboard",
      description:
        "Real-time kitchen dashboard displaying incoming orders, preparation status, and completion tracking.",
      icon: "👨‍🍳",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      particles: ["🔥", "⏱️", "📊"],
    },
  ];

  const techStack = [
    {
      name: "React",
      icon: "⚛️",
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      name: "Next.js 14",
      icon: "▲",
      color: "text-white",
      bgGradient: "from-gray-500/20 to-slate-500/20",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      color: "text-teal-400",
      bgGradient: "from-teal-500/20 to-cyan-500/20",
    },
    {
      name: "Fastify",
      icon: "⚡",
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "text-blue-500",
      bgGradient: "from-blue-600/20 to-indigo-500/20",
    },
    {
      name: "Prisma",
      icon: "🔷",
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-indigo-500/20",
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

      {/* Header with glassmorphism */}
      <motion.header
        className="fixed top-0 left-0 w-full px-4 md:px-16 py-4 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
            <motion.a
              href="#"
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-white font-bold text-xl relative z-10">
                  M
                </span>
              </motion.div>
              <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                Mohammad<span className="text-blue-400">.</span>
              </span>
            </motion.a>

            <motion.button
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 group overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToPortfolio}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center space-x-2">
                <motion.span
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ←
                </motion.span>
                <span>Back to Portfolio</span>
              </span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center px-4 md:px-16 pt-32 relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: y1 }}>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.span
                className="px-6 py-3 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30 backdrop-blur-sm inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🍽️
                </motion.span>
                <span>Restaurant Technology</span>
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold leading-tight"
            >
              Restaurant
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
                QR System
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              A digital menu solution that makes ordering easier for customers
              and restaurants.
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                {" "}
                Scan, browse, order, and enjoy.{" "}
              </motion.span>
              all through an intuitive digital ecosystem.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <div className="flex items-center justify-center space-x-2 relative z-10">
                  <motion.span
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                  <span>Visit our website</span>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Column */}
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
                      QR Menu System
                    </motion.div>
                    <motion.div
                      className="text-gray-400 text-sm"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Scan • Browse • Order • Enjoy
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
                { icon: "🍕", pos: { top: "5%", left: "5%" }, delay: 0 },
                { icon: "🍔", pos: { top: "15%", right: "5%" }, delay: 1 },
                { icon: "🍜", pos: { bottom: "25%", left: "0%" }, delay: 2 },
                { icon: "🥗", pos: { bottom: "5%", right: "10%" }, delay: 3 },
                { icon: "🍰", pos: { top: "40%", left: "-5%" }, delay: 4 },
                { icon: "🥤", pos: { top: "60%", right: "0%" }, delay: 5 },
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
              Core features that make this QR system effective for restaurants
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

      {/* Enhanced Tech Stack Section - SIMPLIFIED VERSION */}
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
            { icon: "⚛️", left: "45%", top: "20%" },
            { icon: "▲", left: "55%", top: "80%" },
            { icon: "🎨", left: "90%", top: "75%" },
            { icon: "⚡", left: "5%", top: "85%" },
            { icon: "🐘", left: "40%", top: "60%" },
            { icon: "🔷", left: "65%", top: "35%" },
            { icon: "⚛️", left: "25%", top: "30%" },
            { icon: "▲", left: "70%", top: "15%" },
            { icon: "🎨", left: "35%", top: "85%" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl opacity-5"
              style={{
                left: item.left,
                top: item.top,
              }}
              animate={{
                y: [0, -50, 0],
                rotate: [0, 360],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
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
              className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30 backdrop-blur-sm mb-8"
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
              className="text-6xl md:text-7xl font-bold mb-6"
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
              className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Built with modern web technologies for reliable performance and
              smooth user interactions
            </motion.p>
          </motion.div>

          {/* Tech Stack Cards - ONLY THIS SECTION REMAINS */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                whileHover={{ scale: 1.05, y: -10 }}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Card Background */}
                <motion.div
                  className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 overflow-hidden h-full"
                  whileHover={{
                    borderColor: "rgba(255,255,255,0.3)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />

                  {/* Glowing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(45deg, ${tech.color
                        .replace("text-", "")
                        .replace("-400", "")}, transparent, ${tech.color
                        .replace("text-", "")
                        .replace("-400", "")})`,
                      padding: "2px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "exclude",
                    }}
                  />

                  {/* Floating Particles */}
                  <AnimatePresence>
                    {hoveredTech === index && (
                      <>
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/60 rounded-full"
                            initial={{
                              opacity: 0,
                              x: 150,
                              y: 150,
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              x: Math.random() * 300 - 150,
                              y: Math.random() * 300 - 150,
                              scale: [0, 1, 0],
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 2,
                              delay: i * 0.1,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <div className="relative z-10 text-center space-y-6">
                    {/* Tech Icon */}
                    <motion.div
                      className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-4xl"
                      animate={
                        hoveredTech === index
                          ? {
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }
                          : {}
                      }
                      transition={{ duration: 0.8 }}
                      whileHover={{
                        boxShadow: "0 0 30px rgba(255,255,255,0.2)",
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `conic-gradient(from 0deg, ${tech.color
                            .replace("text-", "")
                            .replace("-400", "")}, transparent, ${tech.color
                            .replace("text-", "")
                            .replace("-400", "")})`,
                        }}
                      />
                      <span className="relative z-10">{tech.icon}</span>
                    </motion.div>

                    {/* Tech Name */}
                    <motion.h3
                      className={`text-2xl font-bold ${tech.color} group-hover:text-white transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech.name}
                    </motion.h3>

                    {/* Description */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {index === 0 &&
                          "Building dynamic and interactive user interfaces with component-based architecture"}
                        {index === 1 &&
                          "Full-stack React framework with App Router, server components, and edge runtime"}
                        {index === 2 &&
                          "Utility-first CSS framework for rapid UI development and responsive design"}
                        {index === 3 &&
                          "Fast and lightweight web framework built for high-performance Node.js applications"}
                        {index === 4 &&
                          "Powerful open-source relational database with advanced features and reliability"}
                        {index === 5 &&
                          "Next-generation ORM for type-safe database access and seamless migrations"}
                      </p>
                    </motion.div>

                    {/* Skill Level Indicator */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${tech.bgGradient.replace(
                            "/20",
                            ""
                          )}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          transition={{ duration: 1, delay: 0.7 }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Expert Level
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
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
              Thanks for taking the time to explore this project! 🙏
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantQRProjectPage;
