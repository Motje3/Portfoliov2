import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Calendar,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [selectedProject, setSelectedProject] = useState("c1");
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const projectRef = useRef<HTMLElement | null>(null);

  // Scroll effects and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderSticky(scrollY > 100);

      // Find active section
      const sections = Object.keys(sectionsRef.current);
      for (let section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const top = element.offsetTop - 150;
          const height = element.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxFRX9Oz3oD9OXD6HhUK7Phl4XEfFUsWPm88LieOn0yiSyb5VVnXHnSnElODNIfXDo0/exec",
        {
          method: "POST",
          body: new FormData(e.target as HTMLFormElement),
        }
      );

      setFormMessage("Message sent successfully");
      setFormData({ Name: "", Email: "", Phone: "", Subject: "", Message: "" });
      setTimeout(() => setFormMessage(""), 4000);
    } catch (error) {
      setFormMessage("Error sending message");
      setTimeout(() => setFormMessage(""), 4000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: "c1",
      number: "1",
      title: "Home Lab",
      description: "A home lab to practice Cybersecurity concepts.",
      image: "linear-gradient(45deg, #0066ff, #00acf0)",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: "c2",
      number: "2",
      title: "Warehouse API",
      description: "A FastAPI-based warehouse order management system.",
      image: "linear-gradient(45deg, #00acf0, #0066ff)",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: "c3",
      number: "3",
      title: "Calendar",
      description: "An event calendar with front-end and back-end logic.",
      image: "linear-gradient(45deg, #0066ff, #00acf0)",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: "c4",
      number: "4",
      title: "In-progress :)",
      description: "...",
      image: "linear-gradient(45deg, #00acf0, #0066ff)",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  

  return (
    <div className="bg-gray-900 text-gray-200 font-sans">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        * {
          font-family: "Poppins", sans-serif;
        }

        .text-animate {
          background: linear-gradient(to right, #00acf0, #00acf0);
          background-size: 0% 100%;
          background-repeat: no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-stroke: 1px #00acf0;
          color: transparent;
          animation: textFill 3s ease-in-out infinite;
        }

        @keyframes textFill {
          0%,
          100% {
            background-size: 0% 100%;
          }
          50% {
            background-size: 100% 100%;
          }
        }

        .home-bg {
          background: linear-gradient(
            rgba(8, 27, 41, 0.8),
            rgba(8, 27, 41, 0.8)
          );
          position: relative;
        }

        .skill-bar {
          animation: fillBar 2s ease-in-out;
        }

        @keyframes fillBar {
          from {
            width: 0%;
          }
        }

        .project-card {
          transition: all 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
        }

        .project-card.selected {
          width: 600px !important;
        }

        @media (max-width: 768px) {
          .project-card.selected {
            width: 100% !important;
            height: 300px !important;
          }
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full px-4 md:px-16 py-4 z-50 transition-all duration-300 ${
          isHeaderSticky ? "bg-gray-900/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-semibold text-gray-200">
            Mohammad.
          </a>

          <button
            className="md:hidden text-3xl text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex absolute md:relative top-full md:top-0 left-0 md:left-auto w-full md:w-auto bg-blue-500 md:bg-transparent flex-col md:flex-row p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}
          >
            {[
              "home",
              "about",
              "education",
              "skills",
              "projects",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-lg font-medium capitalize transition-colors ${
                  activeSection === section
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section
        ref={(el) => {
          sectionsRef.current.home = el;
        }}
        className="min-h-screen flex items-center px-4 md:px-16 home-bg relative"
        id="home"
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
            specialize in software development, I'm constantly expanding my
            skills in ethical hacking, network security, and secure coding.
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
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/mohammad_mo_o/"
              className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/Motje3"
              className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://wa.me/+31686336164"
              className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => {
          sectionsRef.current.about = el;
        }}
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-20 bg-gray-800"
        id="about"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="w-64 h-64 rounded-full border-4 border-blue-500 mb-8 overflow-hidden relative">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-6xl font-bold text-white">
            M
          </div>
          <div className="absolute inset-0 border-4 border-transparent border-l-blue-400 border-r-blue-400 rounded-full animate-spin"></div>
        </div>

        <div className="max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-6">
            IT Student &{" "}
            <span className="text-blue-400">Cybersecurity Enthusiast!</span>
          </h3>
          <p className="text-lg mb-8 leading-relaxed">
            I'm an Informatica student at Hogeschool Rotterdam, specializing in
            software development, but my true passion lies in cybersecurity and
            penetration testing. My goal is to become a professional ethical
            hacker, helping organizations secure their systems and defend
            against cyber threats. My favourite quote goes like
            <strong>
              {" "}
              "We cannot direct the wind, but we can adjust the sails."
            </strong>
            meaning: It's not about what happens to you in life, it's about how
            you react to it. Every challenge is an opportunity to grow stronger
            and become a better version of myself :)
          </p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="bg-blue-500 hover:bg-blue-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Read More
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={(el) => {
          sectionsRef.current.education = el;
        }}
        className="min-h-screen px-4 md:px-16 py-20"
        id="education"
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
                    <Calendar size={16} className="mr-2" />
                    <span>2023-Now</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Informatica - Hogeschool Rotterdam
                  </h4>
                  <p>
                    I am currently studying at Hogeschool Rotterdam where I
                    spent the first two years learning software development
                    course in the African Leadership Extra where I specialized
                    in Back-end Development.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center text-blue-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>2017-2022</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    HAVO - Wolfert Tweetalig
                  </h4>
                  <p>
                    I went to Wolfert Tweetalig where I have learned my Dutch
                    and took my high school education.
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
                    <Calendar size={16} className="mr-2" />
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
                    <Calendar size={16} className="mr-2" />
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

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Experience
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center text-blue-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>2024-2025</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Fleet driver - Fleetport
                  </h4>
                  <p>
                    Developed strong attention to detail, responsibility, and
                    time management while ensuring safe and timely vehicle
                    deliveries to customers.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center text-blue-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>2021-2023</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Customer Service & Help Desk - Amazon
                  </h4>
                  <p>
                    Developed strong communication, empathy and problem-solving
                    skills by assisting customers with inquiries and
                    troubleshooting issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={(el) => {
          sectionsRef.current.skills = el;
        }}
        className="min-h-screen px-4 md:px-16 py-20 bg-gray-800"
        id="skills"
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
                  {
                    skill: "Programming & Software Development",
                    percentage: 80,
                  },
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
      </section>

      {/* Projects Section */}
      <motion.section
        ref={projectRef}
        className="min-h-screen px-4 md:px-16 py-20"
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card cursor-pointer rounded-2xl h-96 relative overflow-hidden shadow-2xl ${
                selectedProject === project.id
                  ? "selected w-full md:w-96"
                  : "w-48"
              }`}
              style={{ background: project.image }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-400 ${
                  selectedProject === project.id ? "opacity-0" : "opacity-60"
                }`}
              ></div>

              <div className="absolute bottom-4 left-4 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                {project.number}
              </div>

              <div
                className={`absolute bottom-5 left-20 right-4 text-white transition-all duration-500 ${
                  selectedProject === project.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <h4 className="text-2xl font-bold uppercase mb-2">
                  {project.title}
                </h4>
                <p className="text-lg mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center px-4 py-2 bg-white/10 border border-blue-400/40 rounded-lg text-white hover:bg-blue-500/20 transition-colors backdrop-blur-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <section
        ref={(el) => {
          sectionsRef.current.contact = el;
        }}
        className="min-h-screen px-4 md:px-16 py-20 bg-gray-800"
        id="contact"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Contact <span className="text-blue-400">Me</span>
        </h2>

        <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <input
                type="text"
                name="Name"
                placeholder="Full Name"
                required
                value={formData.Name}
                onChange={handleInputChange}
                className="w-full p-4 bg-transparent border-2 border-blue-500 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
                value={formData.Email}
                onChange={handleInputChange}
                className="w-full p-4 bg-transparent border-2 border-blue-500 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <input
                type="tel"
                name="Phone"
                placeholder="Phone N°(+31 686335159)"
                required
                value={formData.Phone}
                onChange={handleInputChange}
                className="w-full p-4 bg-transparent border-2 border-blue-500 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="Subject"
                placeholder="Email Subject"
                required
                value={formData.Subject}
                onChange={handleInputChange}
                className="w-full p-4 bg-transparent border-2 border-blue-500 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="mb-8">
            <textarea
              rows={8}
              name="Message"
              placeholder="Your Message"
              required
              value={formData.Message}
              onChange={handleInputChange}
              className="w-full p-4 bg-transparent border-2 border-blue-500 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Submit
            </button>
          </div>

          {formMessage && (
            <div className="text-center mt-4 text-green-400 font-semibold">
              {formMessage}
            </div>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 px-4 md:px-16 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Mohammad Falaha
              </h3>
              <p className="text-gray-400 leading-relaxed">
                IT Student & Cybersecurity Enthusiast passionate about ethical
                hacking, penetration testing, and securing digital systems.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Quick Links
              </h3>
              <div className="space-y-2">
                {[
                  "Home",
                  "About",
                  "Education",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-3 text-blue-400" />
                  <span>Mohamaadflaha2014@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-3 text-blue-400" />
                  <span>+31 686336164</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/mohammad-falaha-6703091b8"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/mohammad_mo_o/"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://github.com/Motje3"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Mohammad Falaha. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-40"
        >
          <FiArrowUp size={20} />{" "}
        </button>
      </footer>
    </div>
  );
};

export default Portfolio;
