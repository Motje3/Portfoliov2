import { motion } from "framer-motion";

const HomeSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.home = el;
      }}
      className="min-h-screen flex items-center px-4 md:px-16 home-bg relative"
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I'm <span className="text-blue-400">Mohammad</span>
        </h1>
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-animate">
            Cybersecurity Enthusiast
          </h3>
        </div>
        <p className="text-lg mb-8 leading-relaxed">
          Welcome! I'm an IT student with a passion for cybersecurity. While I
          specialize in software development, I'm constantly expanding my skills
          in ethical hacking, network security, and secure coding.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="bg-blue-500 hover:bg-blue-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Download CV
          </a>
          <a
            href="mailto:Mohamaadflaha2014@gmail.com"
            className="border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Let's Talk
          </a>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/mohammad-falaha-6703091b8"
            className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/mohammad_mo_o/"
            className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://github.com/Motje3"
            className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
          >
            Github
          </a>
          <a
            href="https://wa.me/+31686336164"
            className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
          >
            Phone
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeSection;
