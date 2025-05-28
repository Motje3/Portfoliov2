import { motion } from "framer-motion";

const ProjectsSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  const projects = [
    {
      id: 1,
      title: "Home Lab",
      description: "A home lab to practice Cybersecurity concepts.",
      image: "path/to/home-lab-image.jpg",
    },
    {
      id: 2,
      title: "Warehouse API",
      description: "A FastAPI-based warehouse order management system.",
      image: "path/to/warehouse-api-image.jpg",
    },
    {
      id: 3,
      title: "Calendar",
      description: "An event calendar with front-end and back-end logic.",
      image: "path/to/calendar-image.jpg",
    },
  ];

  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.projects = el;
      }}
      className="min-h-screen px-4 md:px-16 py-20"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-blue-400">Projects</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card cursor-pointer rounded-2xl h-96 relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="absolute inset-0 bg-black transition-opacity duration-400 opacity-60"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="absolute bottom-4 left-4 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {project.id}
            </div>
            <div className="absolute bottom-5 left-20 right-4 text-white">
              <h4 className="text-2xl font-bold uppercase mb-2">
                {project.title}
              </h4>
              <p className="text-lg mb-4">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
