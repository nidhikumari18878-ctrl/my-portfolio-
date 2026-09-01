import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaCode, FaAward, FaBrain, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaUserGraduate />, label: "Current CGPA", value: "8.90", suffix: "/10" },
    { icon: <FaCode />, label: "Projects", value: "5", suffix: "+" },
    { icon: <FaAward />, label: "Certifications", value: "3", suffix: "+" },
    { icon: <FaBrain />, label: "DSA Problems", value: "200", suffix: "+" },
    { icon: <FaRocket />, label: "Technologies", value: "15", suffix: "+" },
    { icon: <FaHeart />, label: "Coffee Cups", value: "∞", suffix: "" }
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
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
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 glow-text"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-purple-400 font-medium mb-6"
          >
            Student | Developer | Problem Solver
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 text-gray-300 text-lg leading-relaxed"
            >
              <p>
                I am a passionate Computer Science student at <span className="text-purple-400">Nalanda College of Engineering</span>, Chandi, with a deep interest in building innovative and impactful solutions.
              </p>
              <p>
                My journey in tech is driven by curiosity and a desire to solve real-world problems through code. I love learning new technologies and applying them to create meaningful projects.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 bg-purple-500/10 rounded-full text-sm text-purple-300 border border-purple-500/20">🚀 Full Stack</span>
                <span className="px-3 py-1 bg-pink-500/10 rounded-full text-sm text-pink-300 border border-pink-500/20">💡 Problem Solver</span>
                <span className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-300 border border-blue-500/20">📚 Lifelong Learner</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-[#2a2a2a]/50 backdrop-blur-sm p-4 rounded-xl text-center border border-purple-500/10 hover:border-purple-500/30 transition-all"
                >
                  <div className="text-3xl text-purple-400 mb-2">{stat.icon}</div>
                  <div className="flex items-center justify-center gap-0.5">
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-purple-400">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;