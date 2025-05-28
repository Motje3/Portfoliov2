import { motion } from "framer-motion";

const AboutSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.about = el;
      }}
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-20 bg-gray-800"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        About <span className="text-blue-400">Me</span>
      </h2>
      <div className="max-w-4xl text-center">
        <h3 className="text-2xl font-bold mb-6">
          IT Student &{" "}
          <span className="text-blue-400">Cybersecurity Enthusiast!</span>
        </h3>
        <p className="text-lg mb-8 leading-relaxed">
          I'm an Informatica student at Hogeschool Rotterdam, specializing in
          software development, but my true passion lies in cybersecurity and
          penetration testing. My goal is to become a professional ethical
          hacker, helping organizations secure their systems and defend against
          cyber threats.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
