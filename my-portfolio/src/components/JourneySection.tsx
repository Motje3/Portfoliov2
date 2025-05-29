import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const JourneySection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState("education");

  const journeyData = {
    education: {
      title: "Education",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      items: [
        {
          period: "2023 - Present",
          title: "Informatica",
          institution: "Hogeschool Rotterdam",
          description:
            "Currently pursuing my degree in Computer Science with a focus on software development and cybersecurity. Specialized coursework in network security, ethical hacking, and secure coding practices.",
          highlights: [
            "Software Development",
            "Cybersecurity Focus",
            "Network Security",
            "Ethical Hacking",
          ],
          status: "ongoing",
          gpa: "8.2/10",
        },
        {
          period: "2017 - 2022",
          title: "HAVO Diploma",
          institution: "Wolfert Tweetalig",
          description:
            "This is where I started my first years in the Netherlands and focused on improving my Dutch and English through daily lessons and presentations. I also relearned subjects like math and science, which I had studied before, helping me adapt to the Dutch education system.",
          highlights: [
            "Improved Dutch & English",
            "Adapted to Dutch School System",
            "Relearned Math & Science",
            "Presentation & Writing Practice",
          ],
          status: "completed",
        },
      ],
    },
    experience: {
      title: "Experience",
      icon: "💼",
      color: "from-purple-500 to-pink-500",
      items: [
        {
          period: "2024 - 2025",
          title: "Fleet Driver",
          institution: "Fleetport",
          description:
            "Responsible for safe and timely vehicle deliveries to customers. Developed exceptional attention to detail, time management skills, and customer service excellence.",
          highlights: [
            "Time Management",
            "Customer Service",
            "Attention to Detail",
            "Responsibility",
          ],
          status: "current",
          achievement: "100% On-Time Delivery",
        },
        {
          period: "2021 - 2023",
          title: "Customer Service & Help Desk",
          institution: "Amazon",
          description:
            "Provided technical support and customer assistance, resolving complex issues and troubleshooting problems. Enhanced communication and problem-solving abilities.",
          highlights: [
            "Technical Support",
            "Problem Solving",
            "Communication",
            "Empathy",
          ],
          status: "completed",
          achievement: "95% Customer Satisfaction",
        },
        {
          period: "2019 - 2021",
          title: "Winkelmedewerker",
          institution: "Dirk",
          description:
            "Worked in retail environment developing teamwork skills and efficient communication. Contributed to positive work atmosphere and team collaboration.",
          highlights: [
            "Teamwork",
            "Communication",
            "Customer Relations",
            "Work Ethic",
          ],
          status: "completed",
          achievement: "Employee of the Month",
        },
      ],
    },
    certifications: {
      title: "Certifications",
      icon: "🏆",
      color: "from-green-500 to-emerald-500",
      items: [
        {
          period: "2025",
          title: "CompTIA Security+ (SY0-701)",
          institution: "CompTIA",
          description:
            "Completed full preparation for this industry-recognized cybersecurity certification. Covers security principles, risk management, incident response, and ethical hacking fundamentals. Awaiting exam date.",
          highlights: [
            "Risk Management",
            "Incident Response",
            "Network Security",
            "Ethical Hacking",
          ],
          status: "Waiting Exam",
        },
        {
          period: "2025 - In Progress",
          title: "Certified Ethical Hacker (CEH)",
          institution: "EC-Council",
          description:
            "Advanced certification focusing on penetration testing methodologies, vulnerability assessment, and ethical hacking techniques.",
          highlights: [
            "Penetration Testing",
            "Vulnerability Assessment",
            "Security Analysis",
            "Ethical Hacking",
          ],
          status: "in-progress",
        },
        {
          period: "2025 - In Progress",
          title: "Google Cybersecurity Certificate",
          institution: "Google / Coursera",
          description:
            "Professional-level certificate focused on hands-on cybersecurity skills including threat detection, network security, incident response, and security information and event management (SIEM). Currently enrolled and progressing through the course modules.",
          highlights: [
            "Threat Detection",
            "Network Security",
            "SIEM Tools",
            "Incident Response",
          ],
          status: "in-progress",
          progress: "60%",
        },
      ],
    },
  };

  const tabs = [
    { id: "education", label: "Education", icon: "🎓" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "certifications", label: "Certifications", icon: "🏆" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing":
        return "from-blue-500 to-cyan-500";
      case "current":
        return "from-green-500 to-emerald-500";
      case "in-progress":
        return "from-yellow-500 to-orange-500";
      case "certified":
        return "from-purple-500 to-violet-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "ongoing":
        return "In Progress";
      case "current":
        return "Current";
      case "in-progress":
        return "In Progress";
      case "certified":
        return "Certified";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.education = el;
        ref.current = el;
      }}
      className="min-h-screen px-4 md:px-16 py-20 relative overflow-hidden"
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        background:
          "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.08) 0%, transparent 50%), #111827",
      }}
    >
      {/* Floating background elements */}
      <div className="absolute top-20 left-16 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-80 h-80 bg-gradient-to-r from-green-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/6 to-yellow-500/6 rounded-full blur-3xl animate-pulse delay-500"></div>

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
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-green-400">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my educational background, professional experience, and
            achievements that shaped my cybersecurity expertise
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex items-center justify-center mb-4">
              <div className="text-6xl mr-4">
                {journeyData[activeTab as keyof typeof journeyData].icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {journeyData[activeTab as keyof typeof journeyData].title}
                </h3>
                <div
                  className={`h-1 w-24 bg-gradient-to-r ${
                    journeyData[activeTab as keyof typeof journeyData].color
                  } rounded-full`}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {journeyData[activeTab as keyof typeof journeyData].items.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 shadow-lg z-10"></div>

                    {/* Content card */}
                    <div
                      className={`ml-20 md:ml-0 ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      } md:w-5/12`}
                    >
                      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                        {/* Period badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-4 py-2 text-sm font-bold text-blue-300 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                            {item.period}
                          </span>
                          <span
                            className={`px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(
                              (item as any).status
                            )} rounded-full`}
                          >
                            {getStatusText((item as any).status)}
                          </span>
                        </div>

                        {/* Title and Institution */}
                        <div className="mb-6">
                          <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-blue-400 font-semibold text-lg">
                            {item.institution}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                            What I Learned
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {item.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs text-gray-300 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              label: "Years of Education in the Netherlands",
              value: "7+",
              icon: "📚",
              color: "from-blue-500 to-cyan-500",
            },
            {
              label: "Years of Work Experience – Not IT-Specific",
              value: "4+",
              icon: "💼",
              color: "from-purple-500 to-pink-500",
            },
            {
              label: "Certifications",
              value: "2+",
              icon: "🏆",
              color: "from-green-500 to-emerald-500",
            },
            {
              label: "Skills Acquired",
              value: "25+",
              icon: "⚡",
              color: "from-yellow-500 to-orange-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
              whileHover={{ y: -5 }}
            >
              <div
                className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <div
                className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default JourneySection;
