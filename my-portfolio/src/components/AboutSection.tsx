import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const AboutSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [activeCard, setActiveCard] = useState(0);

  const aboutCards = [
    {
      title: "The Cybersecurity Enthusiast",
      icon: "🛡️",
      description: "My passion for cybersecurity ignited during my studies at Hogeschool Rotterdam. What started as curiosity about how systems work evolved into a deep fascination with protecting them from threats.",
      highlights: ["Ethical Hacking", "Network Security", "Threat Analysis", "Risk Assessment"],
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "The Problem Solver",
      icon: "🧩",
      description: "From debugging code to troubleshooting customer issues at Amazon, I thrive on solving complex problems. Every challenge is an opportunity to learn and grow.",
      highlights: ["Critical Thinking", "Analytical Skills", "Creative Solutions", "Persistence"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "The Continuous Learner",
      icon: "📚",
      description: "Technology evolves rapidly, especially in cybersecurity. I'm committed to staying ahead through certifications, hands-on practice, and building real-world projects.",
      highlights: ["CompTIA Security+", "CEH in Progress", "Home Lab", "Self-Motivated"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "The Team Player",
      icon: "🤝",
      description: "My experience in various roles taught me the value of collaboration. Whether at Amazon's help desk or Dirk's retail environment, teamwork has been key to my success.",
      highlights: ["Communication", "Empathy", "Leadership", "Collaboration"],
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const personalStats = [
    { label: "Current Focus", value: "Cybersecurity", icon: "🎯" },
    { label: "Learning Style", value: "Hands-on", icon: "⚡" },
    { label: "Work Ethic", value: "Dedicated", icon: "💪" },
    { label: "Mindset", value: "Growth-oriented", icon: "🚀" }
  ];

  const interests = [
    { name: "Penetration Testing", icon: "🔍", color: "text-red-400" },
    { name: "Network Security", icon: "🌐", color: "text-blue-400" },
    { name: "Vulnerability Research", icon: "🔬", color: "text-green-400" },
    { name: "Incident Response", icon: "🚨", color: "text-orange-400" },
    { name: "Security Architecture", icon: "🏗️", color: "text-purple-400" },
    { name: "Threat Intelligence", icon: "🧠", color: "text-cyan-400" }
  ];

  // Auto-rotate cards
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % aboutCards.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, aboutCards.length]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.about = el;
        ref.current = el;
      }}
      className="min-h-screen px-4 md:px-16 py-20 relative overflow-hidden bg-gray-800"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        background: 'radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), #1f2937',
      }}
    >
      {/* Floating background elements */}
      <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/6 to-emerald-500/6 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-500 to-green-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover the passion, dedication, and vision that drives my journey in cybersecurity
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Story Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Story Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    IT Student & Cybersecurity Enthusiast
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm Mohammad, an Informatica student at Hogeschool Rotterdam with an unwavering passion for cybersecurity. 
                While my academic foundation is in software development, my heart belongs to the world of ethical hacking 
                and digital defense. My ultimate goal is to become a professional ethical hacker, helping organizations 
                fortify their defenses against ever-evolving cyber threats.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                What sets me apart is my hands-on approach to learning. I don't just study cybersecurity concepts—I live them. 
                Through my home lab, real-world projects, and continuous skill development, I'm building the expertise needed 
                to make a meaningful impact in the cybersecurity landscape.
              </p>

              {/* Achievement highlights */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🎓</div>
                  <div className="text-sm text-gray-400">Current Studies</div>
                  <div className="font-semibold text-white">Informatica</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="text-sm text-gray-400">Certification</div>
                  <div className="font-semibold text-white">Security+</div>
                </div>
              </div>
            </motion.div>

            {/* Personal Stats */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Personal Attributes
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {personalStats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                    <div className="font-semibold text-white text-sm">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Rotating Story Cards */}
            <div className="relative h-96">
              {aboutCards.map((card, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-700 cursor-pointer ${
                    activeCard === index 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-30 scale-95 z-0'
                  }`}
                  onClick={() => setActiveCard(index)}
                  whileHover={{ scale: activeCard === index ? 1.02 : 0.98 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{card.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{card.title}</h4>
                      <div className={`h-1 w-16 bg-gradient-to-r ${card.gradient} rounded-full mt-2`}></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="space-y-2">
                    {card.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 bg-gradient-to-r ${card.gradient} rounded-full mr-3`}></div>
                        <span className="text-gray-400">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Card Navigation */}
            <div className="flex justify-center space-x-3">
              {aboutCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === index 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Interests Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">💡</span>
                Areas of Interest
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      {interest.icon}
                    </span>
                    <span className={`text-sm font-medium ${interest.color} group-hover:text-white transition-colors duration-300`}>
                      {interest.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto hover:bg-white/8 hover:border-white/20 transition-all duration-500">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Collaborate?</span>
            </h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a cybersecurity enthusiast, a problem-solving developer, or someone passionate about digital security, I'd love to connect and explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105">
                Let's Connect
              </button>
              <button className="border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                View My Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;