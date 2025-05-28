import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Correctly imported

const ProjectsSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const navigate = useNavigate(); // <--- CORRECT: Hook called at the top level of the component

  const projects = [
    {
      id: 1,
      title: "Home Lab",
      description:
        "A comprehensive home lab environment designed for practicing cybersecurity concepts, penetration testing, and network security analysis.",
      tech: ["VMware", "Kali Linux", "pfSense", "Windows Server"],
      category: "Infrastructure",
    },
    {
      id: 2,
      title: "Warehouse API",
      description:
        "A robust FastAPI-based warehouse order management system with real-time inventory tracking and automated order processing.",
      tech: ["FastAPI", "Python", "PostgreSQL", "Docker"],
      category: "Backend",
    },
    {
      id: 3,
      title: "Event Calendar",
      description:
        "A full-stack event calendar application with responsive design, user authentication, and real-time event synchronization.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Full-Stack",
    },
  ];

  const handleReadMore = (projectId: number) => {
    if (projectId === 1) {
      // Now 'navigate' is available from the component's scope
      navigate("/project-1");
    } else {
      console.log(
        `Maps to project ${projectId} details (route /project-1 is for ID 1, specific route for this ID not configured)`
      );
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
          "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
      }}
    >
      {/* Background blur elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Projects
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore my latest work in cybersecurity and software development
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10 flex flex-col">
                {" "}
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                {/* Project number with glow effect */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                    <span className="text-xl font-bold text-white">
                      {project.id}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="space-y-4 mb-8 flex-grow">
                  {" "}
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs text-gray-300 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Read More Button */}
                <button
                  onClick={() => handleReadMore(project.id)}
                  className="w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white font-semibold py-3 px-6 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/20 group-hover:transform group-hover:translate-y-0"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>Read More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;