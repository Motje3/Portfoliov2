import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const SkillsSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({});

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C#", level: 90, color: "from-purple-500 to-violet-600" },
        { name: "Python", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
        { name: "SQL", level: 75, color: "from-green-500 to-emerald-600" },
      ]
    },
    {
      title: "Cybersecurity Tools",
      icon: "🛡️",
      skills: [
        { name: "Kali Linux", level: 85, color: "from-red-500 to-pink-600" },
        { name: "Wireshark", level: 80, color: "from-blue-600 to-indigo-700" },
        { name: "Nmap", level: 90, color: "from-gray-600 to-gray-800" },
        { name: "Metasploit", level: 75, color: "from-red-600 to-rose-700" },
        { name: "Burp Suite", level: 70, color: "from-orange-500 to-red-600" },
      ]
    },
    {
      title: "Frameworks & Technologies",
      icon: "⚡",
      skills: [
        { name: "React", level: 85, color: "from-cyan-400 to-blue-500" },
        { name: "FastAPI", level: 80, color: "from-green-400 to-teal-600" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
      ]
    },
    {
      title: "Professional Skills",
      icon: "🎯",
      skills: [
        { name: "Problem Solving", level: 95, color: "from-purple-500 to-pink-500" },
        { name: "Team Collaboration", level: 90, color: "from-green-500 to-blue-500" },
        { name: "Project Management", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "Communication", level: 85, color: "from-indigo-500 to-purple-600" },
      ]
    }
  ];

  // Animate skill bars when section comes into view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newValues: {[key: string]: number} = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            newValues[skill.name] = skill.level;
          });
        });
        setAnimatedValues(newValues);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
        if (el) sectionsRef.current.skills = el;
        ref.current = el;
      }}
      className="min-h-screen px-4 md:px-16 py-20 relative overflow-hidden bg-gray-900"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        background: 'radial-gradient(circle at 75% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), #111827',
      }}
    >
      {/* Floating background elements */}
      <div className="absolute top-32 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-pulse delay-700"></div>

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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group"
            >
              {/* Category Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/8 hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {/* Skill Name and Percentage */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="relative h-3 bg-white/5 rounded-full border border-white/10 overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                        
                        {/* Progress Bar */}
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                          initial={{ width: 0 }}
                          animate={{ 
                            width: isInView ? `${animatedValues[skill.name] || 0}%` : 0 
                          }}
                          transition={{ 
                            duration: 1.5, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-pulse"></div>
                          
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                        </motion.div>
                      </div>

                      {/* Skill level indicator dots */}
                      <div className="flex justify-between mt-2 px-1">
                        {[20, 40, 60, 80].map((threshold) => (
                          <div
                            key={threshold}
                            className={`w-1 h-1 rounded-full transition-all duration-500 ${
                              (animatedValues[skill.name] || 0) >= threshold 
                                ? 'bg-blue-400 shadow-sm shadow-blue-400' 
                                : 'bg-white/20'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Card Footer Stats */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      {category.skills.length} Skills
                    </span>
                    <span className="text-blue-400 font-semibold">
                      Avg: {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </span>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Programming Languages", value: "4", icon: "💻" },
            { label: "Security Tools", value: "10+", icon: "🔐" },
            { label: "Years Experience", value: "Error 404 :)", icon: "📅" },
            { label: "Projects Completed", value: "6", icon: "🚀" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;