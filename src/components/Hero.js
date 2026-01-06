// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = ({ toggleConsulting }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <motion.section
      className="flex flex-col justify-center relative z-10"
      style={{ minHeight: '40vh' }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

      {/* Massive Typography - Scaled Down for Dashboard Feel */}
      <motion.div className="mb-4">
        <motion.h1 variants={itemVariants} className="font-hero text-4xl md:text-5xl text-ghost-white tracking-tighter leading-[0.9]">
          ARCHITECTING
        </motion.h1>
        <motion.h1 variants={itemVariants} className="font-hero text-4xl md:text-5xl text-ghost-white tracking-tighter leading-[0.9]">
          AT SCALE<span className="text-electric-violet">.</span>
        </motion.h1>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between gap-12"
      >
        <motion.div variants={itemVariants} className="max-w-xl">
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            I craft scalable digital infrastructure and high-performance applications.
            Merging <span className="text-white font-medium">computer science</span> with <span className="text-white font-medium">architectural precision</span>.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col space-y-4 min-w-[200px]">
          <Link to="/projects" className="group flex items-center justify-between text-lg text-white border-b border-white/20 pb-2 hover:border-electric-violet hover:text-electric-violet transition-all duration-300">
            <span>View Work</span>
            <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </Link>
          <button onClick={toggleConsulting} className="group flex items-center justify-between text-lg text-gray-400 border-b border-white/10 pb-2 hover:border-electric-violet hover:text-white transition-all duration-300">
            <span>Services</span>
            <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>

    </motion.section >
  );
};

export default Hero;
