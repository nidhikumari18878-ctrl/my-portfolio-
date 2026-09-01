import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "NextHire AI",
      description: "AI-powered placement tracker with real-time job fetching, ATS resume analysis, skill extraction, and application tracking.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Gemini AI", "JSearch API", "Tailwind CSS"],
      github: "https://github.com/nidhikumari18878-ctrl/project-1",
      live: "https://project-1-i8ts.onrender.com",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500",
      stats: { stars: 12, forks: 5 }
    },
    {
      title: "Portfolio Website",
      description: "Modern animated portfolio built with React, Tailwind CSS, and Framer Motion with 3D effects and glass-morphism design.",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/nidhikumari18878-ctrl/portfolio",
      live: "#",
      icon: "💼",
      gradient: "from-blue-500 to-cyan-500",
      stats: { stars: 8, forks: 3 }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
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
          Featured Projects
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="text-center text-gray-400 mb-12"
        >
          Some of my recent work
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 60,
                    damping: 20
                  }
                }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="project-card-3d glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <div className="text-8xl opacity-50">{project.icon}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 glow-text">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-[#2a2a2a] rounded-full text-xs font-medium text-purple-300 border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-[#2a2a2a] rounded-lg text-sm hover:bg-purple-600/20 transition-colors"
                    >
                      <FaGithub /> Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <FaExternalLinkAlt /> Live
                    </motion.a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" /> {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCode /> {project.stats.forks}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;