import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const AboutSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState("attributes");

  const tabs = [
    { id: "attributes", label: "Personal Attributes", icon: "📊" },
    { id: "languages", label: "Languages", icon: "🌍" },
    { id: "skills", label: "Technical Skills", icon: "💻" },
    { id: "hobbies", label: "Hobbies & Interests", icon: "🎯" },
  ];

  const tabData = {
    attributes: {
      title: "Personal Attributes",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      items: [
        {
          title: "Core Trait",
          value: "Curious",
          icon: "🧠",
          description:
            "Always asking why — then digging until I find the answer (or break something).",
        },
        {
          title: "Outlook",
          value: "Optimistic",
          icon: "🌞",
          description:
            "Even when things break or life don't go my way. I believe there's always a fix — or at least a workaround.",
        },
        {
          title: "Drive",
          value: "Competitive",
          icon: "⚔️",
          description:
            "Whether it’s sports, CTFs, or debugging — I’m in it to win it.",
        },
      ],
    },
    languages: {
      title: "Languages",
      icon: "🌍",
      color: "from-green-500 to-emerald-500",
      items: [
        {
          title: "Dutch",
          value: "Fluent",
          icon: "🇳🇱",
          description: "Working for amazon's customer service helped alot",
        },
        {
          title: "English",
          value: "Fluent",
          icon: "🇺🇸",
          description: "Blame Netflix, YouTube, and way too many books",
        },
        {
          title: "Arabic",
          value: "Native",
          icon: "🇸🇦",
          description: "Spoken at home, yelled across family gatherings",
        },
        {
          title: "Turkish",
          value: "Basic",
          icon: "ᵀᴿ",
          description:
            "Learned from living in Turkey and watching Turkish dramas",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      icon: "💻",
      color: "from-orange-500 to-red-500",
      items: [
        {
          title: "C# Development",
          value: "Advanced",
          icon: "⚡",
          description:
            "Building solid APIs, handling requests, and structuring logic? C# is the way.",
        },
        {
          title: "Python",
          value: "Intermediate",
          icon: "🐍",
          description:
            "Flexible, powerful, and occasionally makes me feel smarter than I am.",
        },
        {
          title: "JavaScript",
          value: "Intermediate",
          icon: "🌐",
          description:
            "Built some cool stuff with React and Node.js — and only mildly fought with async bugs.",
        },
        {
          title: "Cybersecurity Tools",
          value: "Learning",
          icon: "🛡️",
          description:
            "Kali Linux, Wireshark, Nmap… basically the hacker’s starter pack.",
        },
      ],
    },
    hobbies: {
      title: "Hobbies & Interests",
      icon: "🎯",
      color: "from-purple-500 to-violet-500",
      items: [
        {
          title: "Reading",
          value: "Personal Growth",
          icon: "📚",
          description:
            "Love self-improvement books, favorite is 'Atomic Habits' by James Clear",
        },
        {
          title: "Chess",
          value: "Strategic",
          icon: "♟️",
          description:
            "Love the strategic thinking and mental challenges that chess provides",
        },
        {
          title: "Camping & Hiking",
          value: "Nature",
          icon: "🏕️",
          description:
            "Enjoy outdoor adventures and disconnecting from technology",
        },
        {
          title: "BJJ Training",
          value: "Physical",
          icon: "🥋",
          description:
            "Brazilian Jiu-Jitsu for fitness, discipline, and mental toughness",
        },
        {
          title: "Hack The Box & CTFs",
          value: "Cyber",
          icon: "🚩",
          description:
            "Capture The Flag competitions and cybersecurity challenges",
        },
      ],
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="about"
      ref={(el) => {
        if (el) sectionsRef.current.about = el;
        ref.current = el;
      }}
      className="min-h-screen px-4 md:px-16 py-20 relative overflow-hidden bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        background:
          "radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), #1f2937",
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
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-500 to-green-400">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            More than just lines of code — this is where curiosity, caffeine,
            and cybersecurity collide.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Fixed Story Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Story Card - Always Visible */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    Who Am I?
                  </h3>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                I’m Mohammad — Informatica student at Hogeschool Rotterdam by
                day, cybersecurity enthusiast by... also day (and sometimes
                night). I chose to start with software development because,
                well… you gotta know how things work before you break them
                (ethically, of course). My real obsession lives in firewalls,
                vulnerabilities, and ethical hacking — basically, breaking stuff
                legally.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                I’m passionate about cybersecurity, especially the offensive
                side: penetration testing, ethical hacking, and helping
                organizations stay one step ahead of cyber threats.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                I’m an optimistic realist (yes, that’s a thing) who believes
                there’s always a way forward — even if it means Googling for 2
                hours before writing one line of code. I like learning by doing,
                building real-world projects, and challenging myself with
                complex problems — preferably the kind that involve digital
                defense, not math.
              </p>

              <p className="text-gray-300 leading-relaxed font-semibold italic mb-6">
                “You can’t change the wind’s direction, but you can adjust your
                sails.”
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Tabbed Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Tab Navigation */}
            <motion.div
              className="flex flex-wrap justify-center"
              variants={itemVariants}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Tab Header */}
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-4">
                  {tabData[activeTab as keyof typeof tabData].icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {tabData[activeTab as keyof typeof tabData].title}
                  </h4>
                  <div
                    className={`h-1 w-20 bg-gradient-to-r ${
                      tabData[activeTab as keyof typeof tabData].color
                    } rounded-full`}
                  ></div>
                </div>
              </div>

              {/* Tab Items */}
              <div className="space-y-4">
                {tabData[activeTab as keyof typeof tabData].items.map(
                  (item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                              {item.title}
                            </h5>
                            <span
                              className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${
                                tabData[activeTab as keyof typeof tabData].color
                              } text-white rounded-full`}
                            >
                              {item.value}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
