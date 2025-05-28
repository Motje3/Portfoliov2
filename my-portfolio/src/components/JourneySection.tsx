import { motion } from "framer-motion";

const JourneySection = ({
  sectionsRef,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
}) => {
  return (
    <motion.section
      ref={(el) => {
        if (el) sectionsRef.current.education = el;
      }}
      className="min-h-screen px-4 md:px-16 py-20"
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-blue-400">Journey</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Education</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center text-blue-400 mb-2">
                  <span>2023-Now</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Informatica - Hogeschool Rotterdam
                </h4>
                <p>
                  I am currently studying at Hogeschool Rotterdam where I spent
                  the first two years learning software development.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center text-blue-400 mb-2">
                  <span>2017-2022</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  HAVO - Wolfert Tweetalig
                </h4>
                <p>
                  I went to Wolfert Tweetalig where I have learned my Dutch and
                  took my high school education.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Experience</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center text-blue-400 mb-2">
                  <span>2024-2025</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Fleet Driver - Fleetport
                </h4>
                <p>
                  Developed strong attention to detail, responsibility, and time
                  management while ensuring safe and timely vehicle deliveries
                  to customers.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center text-blue-400 mb-2">
                  <span>2021-2023</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Customer Service & Help Desk - Amazon
                </h4>
                <p>
                  Developed strong communication, empathy, and problem-solving
                  skills by assisting customers with inquiries and
                  troubleshooting issues. I learned empathy by handling customer
                  concerns effectively and providing clear solutions.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center text-blue-400 mb-2">
                  <span>2019-2021</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Winkelmedewerker - Dirk
                </h4>
                <p>
                  Developed strong teamwork and efficient communication skills
                  while contributing to a positive and motivating work
                  environment with colleagues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-400">
            Certifications
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center text-blue-400 mb-2">
                  <span>2025</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  CompTIA Security+ (SY0-701)
                </h4>
                <p>
                  Earned the CompTIA Security+ certification, gaining hands-on
                  experience in cybersecurity principles, risk management, and
                  ethical hacking.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center text-blue-400 mb-2">
                  <span>2025</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Certified Ethical Hacker (CEH) - In Progress
                </h4>
                <p>
                  Currently working towards CEH, focusing on penetration
                  testing, vulnerability assessment, and ethical hacking
                  methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default JourneySection;
