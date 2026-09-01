import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaStar } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Bachelor of Technology (CSE)",
      institution: "Nalanda College of Engineering, Chandi",
      year: "2025 - 2029",
      description: "CGPA (1st Semester): 8.90/10",
      score: 89,
      color: "from-purple-400 to-pink-400",
      achievements: ["Academic Excellence", "Project Leader"]
    },
    {
      title: "Higher Secondary School",
      institution: "Jawahar Lal Nehru College, Dehri-On-Sone",
      year: "2022 - 2024",
      description: "Percentage: 87.6%",
      score: 87.6,
      color: "from-blue-400 to-cyan-400",
      achievements: ["Science Stream", "Merit Holder"]
    },
    {
      title: "Secondary School",
      institution: "P.P.C.M Vidyalya, Amjhore (Rohtas)",
      year: "2021 - 2022",
      description: "Percentage: 89.6%",
      score: 89.6,
      color: "from-green-400 to-teal-400",
      achievements: ["Maths: 100/100", "Science: 99/100"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 glow-text"
        >
          Education Journey
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="text-center text-gray-400 mb-12"
        >
          My academic path
        </motion.p>

        <div className="space-y-8 relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 80,
                    damping: 15
                  }
                }
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="glass-card p-6 rounded-2xl relative ml-10 transition-all"
            >
              <div className="absolute -left-10 top-6">
                <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} shadow-lg shadow-purple-500/30 flex items-center justify-center animate-pulse`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <FaGraduationCap className="text-2xl text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-purple-400 font-medium">{exp.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <FaCalendarAlt />
                <span>{exp.year}</span>
              </div>

              <p className="text-gray-300 mb-3">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {exp.achievements.map((achievement, idx) => (
                  <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300">
                    <FaStar className="text-yellow-500 text-[8px]" />
                    {achievement}
                  </span>
                ))}
              </div>

              <div className="relative w-full h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${exp.score}%` }}
                  transition={{ duration: 2, delay: 0.5, type: "spring", stiffness: 30 }}
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${exp.color} rounded-full`}
                  style={{ boxShadow: `0 0 20px rgba(120,80,255,0.3)` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Progress</span>
                <span>{exp.score}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;