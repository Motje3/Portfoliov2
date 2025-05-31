import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SkillsSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [currentCategory, setCurrentCategory] = useState(0);
  const [animatedValues, setAnimatedValues] = useState<{
    [key: string]: number;
  }>({});

  // Skill level mappings
  const getSkillLevel = (percentage: number) => {
    if (percentage >= 90) return { label: "Expert", color: "from-emerald-400 to-green-500", icon: "🔥" };
    if (percentage >= 80) return { label: "Pro", color: "from-blue-400 to-cyan-500", icon: "⭐" };
    if (percentage >= 70) return { label: "Good", color: "from-purple-400 to-violet-500", icon: "💪" };
    if (percentage >= 60) return { label: "Learning", color: "from-yellow-400 to-orange-500", icon: "📚" };
    return { label: "Beginner", color: "from-gray-400 to-gray-500", icon: "🌱" };
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      description: "Languages I use to make computers do cool stuff",
      skills: [
        { name: "C#", level: 90 },
        { name: "Python", level: 70 },
        { name: "JavaScript", level: 70 },
        { name: "AI Language", level: 85 },
      ],
    },
    {
      title: "Cybersecurity Tools",
      icon: "🛡️",
      description: "My arsenal for exploring the digital frontier",
      skills: [
        { name: "Kali Linux", level: 70 },
        { name: "Wireshark", level: 60 },
        { name: "Nmap", level: 60 },
        { name: "Metasploit", level: 60 },
        { name: "Burp Suite", level: 60 },
      ],
    },
    {
      title: "Frameworks & Technologies",
      icon: "⚡",
      description: "The tools that make magic happen",
      skills: [
        { name: "React", level: 85 },
        { name: "OpenAPI / Swagger", level: 75 },
        { name: "SIEM tools (Wazuh)", level: 65 },
        { name: "Git", level: 90 },
      ],
    },
    {
      title: "Professional Skills",
      icon: "🎯",
      description: "The soft skills that aren't so soft",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Fast Learner", level: 85 },
        { name: "Communication", level: 85 },
      ],
    },
  ];

  // Animate skill bars when section comes into view or category changes
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newValues: { [key: string]: number } = {};
        skillCategories[currentCategory].skills.forEach((skill) => {
          newValues[skill.name] = skill.level;
        });
        setAnimatedValues(newValues);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isInView, currentCategory]);

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % skillCategories.length);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  const currentSkillCategory = skillCategories[currentCategory];

  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.skills = el;
        ref.current = el;
      }}
      className="min-h-screen px-4 md:px-16 py-20 relative overflow-hidden"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        background:
          "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.2) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      {/* Floating background elements */}
      <div className="absolute top-32 right-20 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Navigate through my arsenal of tech skills and tools
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setCurrentCategory(index)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                  currentCategory === index
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden md:inline font-medium">{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Skills Display */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevCategory}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-400" />
          </button>

          <button
            onClick={nextCategory}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-400" />
          </button>

          {/* Skills Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 animate-bounce">
                  {currentSkillCategory.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentSkillCategory.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {currentSkillCategory.description}
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {currentSkillCategory.skills.map((skill, index) => {
                  const skillLevel = getSkillLevel(skill.level);
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:scale-105">
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>

                        {/* Visual Progress Indicator */}
                        <div className="relative">
                          {/* Progress Dots */}
                          <div className="flex space-x-2 mb-3">
                            {[1, 2, 3, 4, 5].map((dot) => (
                              <motion.div
                                key={dot}
                                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                                  dot <= Math.ceil(skill.level / 20)
                                    ? `bg-gradient-to-r ${skillLevel.color} shadow-lg`
                                    : 'bg-white/20'
                                }`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.05 + dot * 0.05 }}
                                whileHover={{ scale: 1.2 }}
                              />
                            ))}
                          </div>

                          {/* Progress Bar */}
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skillLevel.color} rounded-full relative`}
                              initial={{ width: 0 }}
                              animate={{ width: `${animatedValues[skill.name] || 0}%` }}
                              transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                            </motion.div>
                          </div>
                        </div>

                        {/* Skill Description */}
                        <div className="text-xs text-gray-500 mt-2 text-right">
                          {skill.name === "C#" ? "Built stuff that works — and scales" :
                           skill.name === "Python" ? "Fluent, but still occasionally argues with errors" :
                           skill.name === "JavaScript" ? "Fluent, but still occasionally argues with errors" :
                           skill.name === "AI Language" ? "I know how to talk to AI (it mostly listens)" :
                           skill.name === "Kali Linux" ? "My trusty digital companion" :
                           skill.name === "Wireshark" ? "Network packets tell interesting stories" :
                           skill.name === "Nmap" ? "Knock knock, who's there?" :
                           skill.name === "Metasploit" ? "With great power comes great responsibility" :
                           skill.name === "Burp Suite" ? "Web apps have secrets, I find them" :
                           skill.name === "React" ? "Couldn't deal with HTML and CSS anymore" :
                           skill.name === "OpenAPI / Swagger" ? "APIs that actually make sense" :
                           skill.name === "SIEM tools (Wazuh)" ? "Logs don't lie" :
                           skill.name === "Git" ? "The tool that lets me confidently break things…" :
                           skill.name === "Problem Solving" ? "Breaking problems into smaller, Googleable pieces" :
                           skill.name === "Team Collaboration" ? "Survives group projects (and even enjoys them)" :
                           skill.name === "Fast Learner" ? "Always curious how things work and the more I learn, the easier it gets" :
                           skill.name === "Communication" ? "Actively listening made communication a lot easier" :
                           skill.level >= 90 ? "Master level expertise" :
                           skill.level >= 80 ? "Professional proficiency" :
                           skill.level >= 70 ? "Solid understanding" :
                           skill.level >= 60 ? "Actively learning" :
                           "Getting started"}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {skillCategories.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentCategory === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Languages", value: "3 + 1", icon: "💻", desc: "Talking to AI doesn't really count" },
            { label: "Security Tools", value: "4+", icon: "🔐", desc: "And counting..." },
            { label: "Experience", value: "Error 404 :)", icon: "📅", desc: "Experience not found" },
            { label: "Projects", value: "6", icon: "🚀", desc: "That actually work" },
          ].map((stat, ) => (
            <motion.div
              key={stat.label}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
              whileHover={{ y: -3 }}
              title={stat.desc}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;