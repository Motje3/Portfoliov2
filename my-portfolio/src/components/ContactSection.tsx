import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = ({
  sectionsRef,
  formData,
  setFormData,
  handleFormSubmit,
  handleInputChange,
}: {
  sectionsRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
  formData: {
    Name: string;
    Email: string;
    Phone: string;
    Subject: string;
    Message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "Mohamaadflaha2014@gmail.com",
      description: "Send me an email anytime",
      link: "mailto:Mohamaadflaha2014@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+31 686336164",
      description: "Call or text me directly",
      link: "tel:+31686336164",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Mohammad Falaha",
      description: "Connect professionally",
      link: "https://www.linkedin.com/in/mohammad-falaha-6703091b8",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "Motje3",
      description: "Check out my code",
      link: "https://github.com/Motje3",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const projectTypes = [
    { id: "web", label: "Web Development", icon: "🌐" },
    { id: "security", label: "Cybersecurity", icon: "🛡️" },
    { id: "consultation", label: "Consultation", icon: "💡" },
    { id: "collaboration", label: "Collaboration", icon: "🤝" },
    { id: "other", label: "Other", icon: "✨" }
  ];

  const [selectedProjectType, setSelectedProjectType] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await handleFormSubmit(e);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Add this style tag to override autofill styles */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px transparent inset !important;
          -webkit-text-fill-color: rgb(229, 231, 235) !important;
          background-color: transparent !important;
          background-image: none !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }
        
        input:-webkit-autofill::selection {
          -webkit-text-fill-color: rgb(229, 231, 235) !important;
        }
      `}</style>

      <motion.section
        ref={(el) => {
          if (el) sectionsRef.current.contact = el;
          ref.current = el;
        }}
        className="min-h-screen px-4 md:px-16 py-20 relative overflow-hidden bg-gray-800"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), #1f2937',
        }}
      >
        {/* Floating background elements */}
        <div className="absolute top-20 left-16 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-gradient-to-r from-green-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl animate-pulse delay-500"></div>

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
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-green-400">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Building cool stuff or breaking bad code? I'm in — let's chat.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">💬</span>
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input
                        type="text"
                        name="Name"
                        placeholder="Your Name"
                        required
                        value={formData.Name}
                        onChange={handleInputChange}
                        autoComplete="name"
                        className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm autofill:bg-transparent autofill:text-gray-200"
                        style={{
                          WebkitBoxShadow: '0 0 0 1000px transparent inset',
                          WebkitTextFillColor: 'rgb(229, 231, 235)',
                        }}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        name="Email"
                        placeholder="Your Email"
                        required
                        value={formData.Email}
                        onChange={handleInputChange}
                        autoComplete="email"
                        className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        style={{
                          WebkitBoxShadow: '0 0 0 1000px transparent inset',
                          WebkitTextFillColor: 'rgb(229, 231, 235)',
                        }}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative group">
                    <input
                      type="tel"
                      name="Phone"
                      placeholder="Your Phone Number (Optional)"
                      value={formData.Phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
                      className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      style={{
                        WebkitBoxShadow: '0 0 0 1000px transparent inset',
                        WebkitTextFillColor: 'rgb(229, 231, 235)',
                      }}
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      What type of project? (Optional)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedProjectType(type.id === selectedProjectType ? "" : type.id)}
                          className={`flex items-center justify-center p-3 rounded-xl border transition-all duration-300 ${
                            selectedProjectType === type.id
                              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500 text-white'
                              : 'bg-white/5 border-white/20 text-gray-400 hover:bg-white/10 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span className="mr-2">{type.icon}</span>
                          <span className="text-xs font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="Subject"
                      placeholder="Subject"
                      value={formData.Subject}
                      onChange={handleInputChange}
                      autoComplete="off"
                      className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      style={{
                        WebkitBoxShadow: '0 0 0 1000px transparent inset',
                        WebkitTextFillColor: 'rgb(229, 231, 235)',
                      }}
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <textarea
                      rows={6}
                      name="Message"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      required
                      value={formData.Message}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm resize-none"
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                        : submitStatus === 'error'
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    } text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <span>✅</span>
                        <span>Message Sent!</span>
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <span>❌</span>
                        <span>Failed to Send</span>
                      </>
                    ) : (
                      <>
                        <span>🚀</span>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center"
                    >
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center"
                    >
                      Oops! Something went wrong. Please try again or contact me directly.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Methods */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">🚀</span>
                  Let's Connect
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 block"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {method.title}
                          </h4>
                          <div className={`h-0.5 w-12 bg-gradient-to-r ${method.gradient} rounded-full mt-1`}></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-1">
                        {method.description}
                      </p>
                      <p className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        {method.value}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactSection;