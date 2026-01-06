// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Philosophy from '../components/Philosophy';
import { FaArrowRight } from 'react-icons/fa';
import { projects } from '../data/resumeData';

const HomePage = ({ toggleConsulting }) => {
  const featuredProjects = projects.filter(project => project.featured);

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
    <div className="min-h-screen">

      <Hero toggleConsulting={toggleConsulting} />

      {/* Featured Projects - Compact 45vh */}
      <section className="flex flex-col justify-center py-2 relative" style={{ minHeight: '40vh' }}>
        <motion.div
          className="container mx-auto px-6 max-w-screen-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
              SELECTED WORK.
            </motion.h2>
            <motion.div variants={itemVariants}>
              <Link to="/projects" className="hidden md:flex items-center text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors mt-4 md:mt-0">
                ALL PROJECTS
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link to="/projects" className="group block bg-transparent">
                  {/* Image Container */}
                  <div className="aspect-[16/8] relative overflow-hidden rounded-sm border border-white/10 bg-white/5 mb-4 group-hover:border-electric-violet/50 transition-colors duration-300">
                    {project.images && project.images[0] ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-[10px]">
                        IMAGE: {project.title}
                      </div>
                    )}
                    {/* Hover Tint */}
                    <div className="absolute inset-0 bg-electric-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-electric-violet transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-8 md:hidden">
            <Link to="/projects" className="flex items-center text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors">
              VIEW ALL
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <Philosophy />

      {/* Tech Stack */}
      <TechStack />

    </div>
  );
};

export default HomePage;
