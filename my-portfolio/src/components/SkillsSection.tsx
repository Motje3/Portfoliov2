import { motion } from "framer-motion";

const SkillsSection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.skills = el;
      }}
      className="min-h-screen px-4 md:px-16 py-20 bg-gray-800"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-blue-400">Skills</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Coding Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-blue-400">
            Coding Skills
          </h3>
          <div className="bg-gray-900 p-6 rounded-lg border-2 border-blue-500">
            <div className="space-y-6">
              {[
                { skill: "C#", percentage: 90 },
                { skill: "Python", percentage: 70 },
                { skill: "JavaScript", percentage: 70 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.skill}</span>
                    <span className="text-blue-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 border border-blue-500">
                    <div
                      className="bg-blue-500 h-full rounded-full skill-bar transition-all duration-2000"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-blue-400">
            Professional Skills
          </h3>
          <div className="bg-gray-900 p-6 rounded-lg border-2 border-blue-500">
            <div className="space-y-6">
              {[
                { skill: "Programming & Software Development", percentage: 80 },
                { skill: "Cybersecurity & IT Skills", percentage: 70 },
                { skill: "Soft Skills & Teamwork", percentage: 90 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.skill}</span>
                    <span className="text-blue-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 border border-blue-500">
                    <div
                      className="bg-blue-500 h-full rounded-full skill-bar transition-all duration-2000"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
