import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Github,
  ArrowRight,
  Code,
  Shield,
  Database,
  Plus,
  Minus,
  Sparkles,
  Globe,
} from "lucide-react";

const ProjectsSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const navigate = useNavigate(); // Add navigation hook back
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Smart QR Restaurant Ordering System",
      description:
        "Co-developing and launching TableTech (tabletech.nl), an innovative full-stack platform transforming the dining experience. Customers scan a table QR code for instant digital menu access, seamless online ordering, and integrated payment, with orders instantly processed by the kitchen for our upcoming commercial release.",
      tech: ["React", "Tailwind", "Fastify", "Next.js", "PostgreSQL", "Prisma"],
      category: "Full-Stack",
      icon: Code,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      shadowColor: "shadow-emerald-500/20",
      featured: true,
      websiteLink: "https://tabletech.nl/",
      route: "/project-1",
    },
    {
      id: 2,
      title: "AI-Enhanced Automated Vulnerability Scanner",
      description:
        "Building an AI-powered bug hunter that scans your website like a hacker on caffeine — finds flaws, explains them in plain English, and never asks for a break.",
      tech: ["Python", "Nmap", "Nikto", "sqlmap", "OpenAPI"],
      category: "Cyber Security",
      icon: Shield,
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      shadowColor: "shadow-red-500/20",
      featured: true,
      route: "/project-2",
    },
    {
      id: 3,
      title: "Shipment Tracking System",
      description:
        "Developed a smart shipment tracking system for businesses. Field workers use a mobile app to scan packages and update statuses in real time, while managers monitor everything from a sleek admin dashboard — including live stats, delivery routes, and issue reports. Say goodbye to guesswork and hello to full control over your logistics.",
      tech: ["React Native", "C#", "PostgreSQL", "Tailwind"],
      category: "Mobile + Backend",
      icon: Code,
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      shadowColor: "shadow-blue-500/20",
      featured: true,
      githubLink: "https://github.com/Motje3/QR-Scanner-Tracking",
      route: "/project-3",
    },
    {
      id: 4,
      title: "Warehouse-API",
      description:
        "Python-based API built and tested a logistics API for CargoHub — complete with PDF generation, deployment scripts, and enough test coverage to make bugs sweat. Designed to keep warehouse operations smooth and devs stress-free.",
      tech: ["Python", "Flask"],
      category: "Backend",
      icon: Database,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      shadowColor: "shadow-orange-500/20",
      featured: false,
      githubLink: "https://github.com/MauriceBoendermaker/processing-and-tools",
      route: "/project-4",
    },
    {
      id: 5,
      title: "OfficeCalendar",
      description:
        "A full-stack web app built for managing office attendance and scheduling. Developed with React on the frontend and .NET on the backend, it helps teams coordinate who's in, who's out, and when — no more guessing games.",
      tech: ["React", ".NET", "C#", "SQL Server"],
      category: "Full-Stack",
      icon: Code,
      gradient: "from-green-500 via-teal-500 to-blue-500",
      shadowColor: "shadow-green-500/20",
      featured: false,
      githubLink: "https://github.com/yassyass2/OfficeCalendar-team6",
      route: "/project-5",
    },
    {
      id: 6,
      title: "Phishing Email Detection System",
      description:
        "Building a bot to read your emails so you don't get tricked by a prince asking for money. It sniffs out phishing attempts using NLP and machine learning, flags sketchy links, and saves you from becoming the next headline in a breach report.",
      tech: ["Python", "Scikit-learn", "NLTK", "Flask", "SMTP", "Docker"],
      category: "AI/ML Security",
      icon: Shield,
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      shadowColor: "shadow-purple-500/20",
      featured: false,
      route: "/project-6",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  const handleReadMore = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (project?.route) {
      navigate(project.route);
    } else {
      console.log("No route defined.");
    }
  };

  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.projects = el;
      }}
      className="min-h-screen px-4 md:px-16 py-20 relative overflow-hidden"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        background:
          "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), #0f172a",
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-8 bg-cyan-400/30 animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Header with enhanced typography */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              Projects
            </span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Where code meets creativity and security becomes an art form
          </p>

          {/* Project Counter */}
          <motion.div
            className="mt-6 inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">
              Showing{" "}
              {showAllProjects ? projects.length : featuredProjects.length} of{" "}
              {projects.length} projects
            </span>
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Featured Projects - Always visible */}
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  className="group relative"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden h-full group-hover:border-white/40 transition-all duration-500">
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Glowing border effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    />

                    <div className="relative p-8 h-full flex flex-col">
                      {/* Header with icon and category */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg ${project.shadowColor} group-hover:shadow-xl transition-all duration-300`}
                            whileHover={{ rotate: 12, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </motion.div>
                          <span className="text-4xl font-black text-white/20 group-hover:text-white/30 transition-colors duration-300">
                            {project.id.toString().padStart(2, "0")}
                          </span>
                        </div>

                        <motion.span
                          className={`px-4 py-2 text-sm font-bold bg-gradient-to-r ${project.gradient} text-white rounded-full shadow-lg`}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {project.category}
                        </motion.span>
                      </div>

                      {/* Project Title */}
                      <div className="mb-4">
                        <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Tech Stack with enhanced styling */}
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={`${project.id}-${tech}-${techIndex}`}
                              className="px-3 py-1 text-xs font-semibold text-white bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced CTA buttons */}
                      <div className="flex space-x-3">
                        <motion.button
                          onClick={() => handleReadMore(project.id)}
                          className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-xl ${project.shadowColor} text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>
                            {project.id === 2
                              ? "Work in Progress"
                              : project.id === 6
                              ? "Details Coming Soon"
                              : "Explore"}
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </motion.button>

                        {project.websiteLink ? (
                          <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} website`}
                          >
                            <motion.button
                              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 group/icon"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Globe className="w-5 h-5 text-white group-hover/icon:text-gray-300 transition-colors duration-200" />
                            </motion.button>
                          </a>
                        ) : project.githubLink ? (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                          >
                            <motion.button
                              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 group/icon"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github className="w-5 h-5 text-white group-hover/icon:text-gray-300 transition-colors duration-200" />
                            </motion.button>
                          </a>
                        ) : null}
                      </div>
                    </div>

                    {/* Animated corner accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Floating particles effect */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/60 rounded-full"
                          initial={{
                            x: Math.random() * 300,
                            y: Math.random() * 400,
                            opacity: 0,
                          }}
                          animate={{
                            y: -20,
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Additional Projects - Expandable */}
            <AnimatePresence>
              {showAllProjects &&
                additionalProjects.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <motion.div
                      key={project.id}
                      className="group relative"
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -50, scale: 0.9 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      {/* Main Card */}
                      <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden h-full group-hover:border-white/40 transition-all duration-500">
                        {/* Animated background gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        />

                        {/* Glowing border effect */}
                        <div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                        />

                        <div className="relative p-8 h-full flex flex-col">
                          {/* Header with icon and category */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center space-x-4">
                              <motion.div
                                className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg ${project.shadowColor} group-hover:shadow-xl transition-all duration-300`}
                                whileHover={{ rotate: 12, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <IconComponent className="w-8 h-8 text-white" />
                              </motion.div>
                              <span className="text-4xl font-black text-white/20 group-hover:text-white/30 transition-colors duration-300">
                                {project.id.toString().padStart(2, "0")}
                              </span>
                            </div>

                            <motion.span
                              className={`px-4 py-2 text-sm font-bold bg-gradient-to-r ${project.gradient} text-white rounded-full shadow-lg`}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              {project.category}
                            </motion.span>
                          </div>

                          {/* Project Title */}
                          <div className="mb-4">
                            <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                              {project.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                            {project.description}
                          </p>

                          {/* Tech Stack with enhanced styling */}
                          <div className="mb-8">
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <span
                                  key={`${project.id}-${tech}-${techIndex}`}
                                  className="px-3 py-1 text-xs font-semibold text-white bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Enhanced CTA buttons */}
                          <div className="flex space-x-3">
                            <motion.button
                              onClick={() => handleReadMore(project.id)}
                              className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-xl ${project.shadowColor} text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span>
                                {project.id === 2
                                  ? "Work in Progress"
                                  : project.id === 6
                                  ? "Details Coming Soon"
                                  : "Explore"}
                              </span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                            </motion.button>

                            {project.websiteLink ? (
                              <a
                                href={project.websiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} website`}
                              >
                                <motion.button
                                  className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 group/icon"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Globe className="w-5 h-5 text-white group-hover/icon:text-gray-300 transition-colors duration-200" />
                                </motion.button>
                              </a>
                            ) : project.githubLink ? (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} GitHub repository`}
                              >
                                <motion.button
                                  className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 group/icon"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Github className="w-5 h-5 text-white group-hover/icon:text-gray-300 transition-colors duration-200" />
                                </motion.button>
                              </a>
                            ) : null}
                          </div>
                        </div>

                        {/* Animated corner accents */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Floating particles effect */}
                      {hoveredProject === project.id && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white/60 rounded-full"
                              initial={{
                                x: Math.random() * 300,
                                y: Math.random() * 400,
                                opacity: 0,
                              }}
                              animate={{
                                y: -20,
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </div>
        </div>

        {/* Show More/Less Toggle Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 hover:border-white/40 rounded-2xl p-6 transition-all duration-500 hover:scale-105"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {showAllProjects ? (
                  <Minus className="w-6 h-6 text-white" />
                ) : (
                  <Plus className="w-6 h-6 text-white" />
                )}
              </motion.div>

              <div className="text-left">
                <p className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {showAllProjects
                    ? "Show Less"
                    : `Discover ${additionalProjects.length} More Projects`}
                </p>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {showAllProjects
                    ? "Back to featured projects"
                    : "Explore my complete portfolio"}
                </p>
              </div>

              <motion.div
                className="text-2xl"
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                🚀
              </motion.div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
