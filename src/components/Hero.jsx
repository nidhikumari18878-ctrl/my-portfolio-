import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    // Create floating particles with different sizes
    const container = document.querySelector('.hero-container');
    if (!container) return;

    const particleTypes = ['particle-1', 'particle-2', 'particle-3'];
    const particles = [];

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      particle.className = `particle ${type}`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
      particle.style.animationDelay = (Math.random() * 15) + 's';
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 py-16 hero-gradient relative overflow-hidden hero-container"
    >
      {/* Glowing Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      <div className="glow-orb glow-orb-4"></div>

      {/* Mouse-follow gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, rgba(120,80,255,0.1) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* 3D Avatar with mouse follow */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          className="mb-8 inline-block relative"
          style={{
            transform: `rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg)`
          }}
        >
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-1 mx-auto animate-spin-slow">
              <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                <FaCode className="text-6xl text-purple-400" />
              </div>
            </div>
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping"></div>
            <div className="absolute inset-[-10px] rounded-full border border-purple-500/10 animate-pulse"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
          className="text-5xl md:text-7xl font-bold mb-4 glow-text"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient">
            Nidhi Kumari
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-4 h-10"
        >
          <TypeAnimation
            sequence={[
              '💻 Computer Science Student',
              2000,
              '🚀 Full Stack Developer',
              2000,
              '🎯 DSA Enthusiast',
              2000,
              '🌟 Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {['🚀 C++', '🐍 Python', '☕ Java', '💻 React', '🛢️ MongoDB', '⚡ Node.js'].map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-4 py-2 bg-purple-500/10 rounded-full text-sm text-purple-300 border border-purple-500/20 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6 text-4xl"
        >
          {[
            { icon: <FaGithub />, link: "https://github.com/nidhikumari18878-ctrl", color: "hover:text-purple-400" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/nidhi-dubey-022246380", color: "hover:text-blue-400" },
            { icon: <FaEnvelope />, link: "mailto:nidhikumari18878@gmail.com", color: "hover:text-red-400" },
          ].map((item, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.8 }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} transition-all duration-300`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
          >
            🚀 View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500/10 transition-all"
          >
            📫 Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;