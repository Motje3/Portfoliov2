import { motion } from "framer-motion";

const ContactForm = ({
  formData,
  setFormData,
  handleFormSubmit,
  handleInputChange,
}: {
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
  return (
    <motion.form
      onSubmit={handleFormSubmit}
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
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
      </div>

      <div className="mb-8">
        <textarea
          rows={8}
          name="Message"
          placeholder="Your Message"
          required
          value={formData.Message}
          onChange={handleInputChange}
          className="w-full p-4 bg-transparent border-2 border-blue-500 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Send Message
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
