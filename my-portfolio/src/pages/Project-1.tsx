import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantQRProjectPage = () => {
  const navigate = useNavigate();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "QR Code Scanning",
      description:
        "Customers simply scan the QR code on their table to instantly access the digital menu on their smartphone.",
      icon: "📱",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Interactive Menu",
      description:
        "Beautiful, responsive digital menu with categories, images, descriptions, and real-time pricing updates.",
      icon: "🍽️",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Order Management",
      description:
        "Seamless order placement with customization options, special requests, and instant confirmation.",
      icon: "🛒",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Kitchen Dashboard",
      description:
        "Real-time kitchen dashboard displaying incoming orders, preparation status, and completion tracking.",
      icon: "👨‍🍳",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "Node.js", icon: "🟢", color: "text-green-400" },
    { name: "Express", icon: "🚀", color: "text-yellow-400" },
    { name: "MongoDB", icon: "🍃", color: "text-green-500" },
    { name: "Socket.io", icon: "⚡", color: "text-blue-400" },
    { name: "Tailwind CSS", icon: "🎨", color: "text-teal-400" },
  ];

  const projectStats = [
    { label: "Development Time", value: "3 months", icon: "⏱️" },
    { label: "Technologies Used", value: "6+", icon: "🛠️" },
    { label: "Order Processing", value: "Real-time", icon: "⚡" },
    { label: "User Experience", value: "Seamless", icon: "✨" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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

  const handleBackToPortfolio = () => {
    navigate("/"); // Navigate to the main page (root path)
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 w-full px-4 md:px-16 py-4 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.a
            href="#"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              Mohammad<span className="text-blue-400">.</span>
            </span>
          </motion.a>

          <motion.button
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-3 text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBackToPortfolio} // 3. Add onClick handler
          >
            ← Back to Portfolio
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center px-4 md:px-16 pt-20 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), #0f172a",
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
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
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30 backdrop-blur-sm">
                🍽️ Restaurant Technology
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Restaurant
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                QR System
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              A revolutionary dining experience that transforms how customers
              interact with restaurants. Scan, browse, order, and enjoy - all
              through an intuitive digital ecosystem that connects diners
              directly with the kitchen through cutting-edge technology.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>🚀</span>
                  <span>View Live Demo</span>
                </div>
              </motion.button>

              <motion.button
                className="bg-white/5 backdrop-blur-xl border-2 border-blue-500 hover:bg-blue-500 text-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>💻</span>
                  <span>View Code</span>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Demo */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-96 h-96">
              {/* Main Phone Mockup */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-6 border-4 border-white/20 backdrop-blur-xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 h-full flex flex-col items-center justify-center space-y-4">
                  <div className="text-6xl mb-4">📱</div>
                  <div className="text-white font-bold text-xl text-center">
                    QR Menu System
                  </div>
                  <div className="text-gray-400 text-sm text-center">
                    Scan • Browse • Order • Enjoy
                  </div>

                  {/* Floating QR Code */}
                  <motion.div
                    className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-2xl"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    📋
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              {[
                { icon: "🍕", pos: { top: "10%", left: "10%" }, delay: 0 },
                { icon: "🍔", pos: { top: "20%", right: "10%" }, delay: 1 },
                { icon: "🍜", pos: { bottom: "30%", left: "5%" }, delay: 2 },
                { icon: "🥗", pos: { bottom: "10%", right: "15%" }, delay: 3 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-4xl"
                  style={item.pos}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen px-4 md:px-16 py-20 relative overflow-hidden bg-gray-800">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Key{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Features
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover the innovative features that make this QR system a
              game-changer for restaurants
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-white/10 border-white/30 shadow-2xl"
                      : "bg-white/5 border-white/10 hover:bg-white/8"
                  }`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Showcase */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-6">
                <div className="text-8xl">{features[activeFeature].icon}</div>
                <h3 className="text-2xl font-bold text-white">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {features[activeFeature].description}
                </p>

                {/* Feature Demo */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">🎯</div>
                  <div className="text-sm text-gray-400">
                    Feature Demonstration
                  </div>
                  <div className="text-white font-semibold">
                    Interactive Preview Coming Soon
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Stack
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Built with modern technologies for optimal performance and
              scalability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div
                  className={`font-semibold ${tech.color} group-hover:text-white transition-colors duration-300`}
                >
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="px-4 md:px-16 py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-16 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in this{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Project?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Want to learn more about the development process, see the code, or
              discuss similar projects? I'd love to share more details about
              this exciting restaurant technology solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                className="bg-white/5 backdrop-blur-xl border-2 border-purple-500 hover:bg-purple-500 text-purple-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View More Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantQRProjectPage;
