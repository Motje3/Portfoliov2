import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Code, Shield, Database } from "lucide-react";

const ProjectsSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
    },
    {
      id: 3,
      title: "Event Calendar",
      description:
        "A full-stack event calendar application with responsive design, user authentication, and real-time event synchronization.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Full-Stack",
      icon: Code,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      shadowColor: "shadow-purple-500/20",
    },
  ];

  const handleReadMore = (projectId: number) => {
    if (projectId === 1) {
      console.log("Navigate to project 1");
    } else {
      console.log(`Navigate to project ${projectId}`);
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
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 60, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden h-full group-hover:border-white/40 transition-all duration-500">
                    
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Glowing border effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    
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
                            {project.id.toString().padStart(2, '0')}
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
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 text-xs font-semibold text-white bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-200"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + techIndex * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
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
                          <span>{project.id === 2 ? "Work in Progress" : "Explore"}</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </motion.button>
                        
                        <motion.button
                          className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 group/icon"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5 text-white group-hover/icon:text-gray-300 transition-colors duration-200" />
                        </motion.button>
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
                            opacity: 0 
                          }}
                          animate={{ 
                            y: -20, 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl hover:border-white/40 transition-all duration-500 group"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <p className="text-xl text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
              Ready to build something amazing together?
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group/btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">Let's Connect</span>
                <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;