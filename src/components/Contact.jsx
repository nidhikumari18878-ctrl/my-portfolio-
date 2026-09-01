import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, 
  FaPhone, FaPaperPlane, FaTwitter, FaInstagram,
  FaYoutube
} from 'react-icons/fa';

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contactMethods = [
    { icon: <FaEnvelope />, label: "Email", value: "nidhikumari18878@gmail.com", link: "mailto:nidhikumari18878@gmail.com", color: "from-purple-400 to-pink-400" },
    { icon: <FaPhone />, label: "Phone", value: "+91 7870971799", link: "tel:7870971799", color: "from-blue-400 to-cyan-400" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Dehri-On-Sone, Bihar", link: "#", color: "from-green-400 to-teal-400" }
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/nidhikumari18878-ctrl", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/nidhi-dubey-022246380", label: "LinkedIn" },
    { icon: <FaTwitter />, link: "#", label: "Twitter" },
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 glow-text"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg mb-8 text-center"
          >
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="bg-[#2a2a2a]/50 backdrop-blur-sm p-4 rounded-xl text-center border border-purple-500/10 hover:border-purple-500/30 transition-all group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="text-3xl text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <div className="text-sm text-gray-400">{method.label}</div>
                <div className="text-white font-medium text-sm truncate">{method.value}</div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-[#2a2a2a] rounded-full flex items-center justify-center text-2xl text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all border border-purple-500/10 hover:border-purple-500/30"
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:nidhikumari18878@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
            >
              <FaPaperPlane /> Send Message
            </motion.a>
          </motion.div>

          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nidhi Kumari. Crafted with ❤️ using React, Tailwind & Framer Motion
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;