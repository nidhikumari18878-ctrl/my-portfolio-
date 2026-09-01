import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "💻 Programming Languages",
      skills: ["C", "C++", "Python", "Java", "SQL"],
      color: "from-purple-400 to-blue-400"
    },
    {
      title: "🎨 Frontend",
      skills: ["HTML5", "CSS", "Tailwind CSS", "JavaScript", "React"],
      color: "from-pink-400 to-orange-400"
    },
    {
      title: "⚙️ Backend & DB",
      skills: ["Node.js", "Express.js", "MongoDB"],
      color: "from-green-400 to-teal-400"
    },
    {
      title: "🛠️ Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "DSA", "OOP", "OS"],
      color: "from-yellow-400 to-red-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateY: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 glow-text"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover-glow relative overflow-hidden group"
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="skill-badge px-4 py-2 bg-[#2a2a2a] rounded-full text-sm font-medium text-gray-300 border border-purple-500/30 hover:border-purple-500 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;