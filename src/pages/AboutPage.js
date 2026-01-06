// src/pages/AboutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { skills, leadership } from '../data/resumeData';
import NeuralNetwork from '../components/NeuralNetwork';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden flex flex-col">
      <NeuralNetwork />

      <motion.div
        className="container mx-auto px-6 relative z-10 max-w-screen-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-hero font-bold text-white tracking-tighter uppercase leading-[0.9]">
            Beyond <br /> The Code.
          </h1>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. Profile Card */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
            <h3 className="text-xs font-bold text-gray-500 mb-4 tracking-widest uppercase">Profile</h3>
            <div className="text-2xl font-bold text-white mb-1">Athul Baburaj</div>
            <div className="text-electric-violet font-medium">Solutions Architect</div>
            <div className="text-gray-400 text-sm mt-1">American Express • Bengaluru</div>
          </motion.div>

          {/* 2. Resume Action */}
          <motion.button
            variants={itemVariants}
            onClick={() => navigate('/resume')}
            className="group flex flex-col justify-between p-6 border border-white/20 bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-left"
          >
            <div className="flex justify-between w-full">
              <span className="tracking-widest font-bold text-sm">ACCESS RESUME</span>
              <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform text-lg" />
            </div>
            <div className="text-xs opacity-60 mt-4 group-hover:opacity-100">
              View full professional history and credentials.
            </div>
          </motion.button>

          {/* 3. Core Competencies */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm lg:row-span-2">
            <h3 className="text-xs font-bold text-gray-500 mb-4 tracking-widest uppercase">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.softSkills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 4. Leadership (Spans 2 cols on md) */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm md:col-span-2 lg:col-span-2">
            <h3 className="text-xs font-bold text-gray-500 mb-4 tracking-widest uppercase">Leadership</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-white text-sm mb-1">{item.role}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-electric-violet/30 pl-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;