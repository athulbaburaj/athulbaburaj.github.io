// src/pages/ResumePage.js
import React from 'react';
import { skills, certifications, experience, education } from '../data/resumeData';
import { FaDownload, FaBriefcase, FaGraduationCap, FaStar, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const resumePdfPath = '/resume/Athul_Baburaj_Resume.pdf';

const ResumePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-12 relative">
      <motion.div
        className="container mx-auto px-6 max-w-screen-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-hero font-bold text-white tracking-tighter leading-[0.9] mb-2">
              Professional <br /> History.
            </h1>
            <p className="text-gray-400 text-xs font-mono tracking-widest uppercase">
              Experience_Log // Credentials
            </p>
          </div>
          <a
            href={resumePdfPath}
            download="Athul_Baburaj_Resume.pdf"
            className="group flex items-center gap-3 px-4 py-2 border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold tracking-wider mt-6 md:mt-0"
          >
            <FaDownload className="text-electric-violet group-hover:text-black transition-colors" />
            DOWNLOAD PDF
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Col: Experience (Variable Width) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <FaBriefcase className="text-electric-violet" /> Experience
            </h3>

            <div className="relative border-l border-white/10 ml-3 space-y-10 pb-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Dot */}
                  <div className="absolute top-1.5 left-[-4px] w-2 h-2 bg-obsidian border border-gray-600 group-hover:border-electric-violet group-hover:bg-electric-violet rounded-full transition-all duration-300"></div>

                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-electric-violet transition-colors">{exp.role}</h4>
                    <span className="font-mono text-[10px] text-gray-400 border border-white/10 px-2 py-0.5 rounded-sm bg-white/5">{exp.period}</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-3 font-medium">{exp.company} • {exp.location}</div>
                  <ul className="space-y-1">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-xs md:text-sm text-gray-500 leading-relaxed flex items-start">
                        <span className="mr-2 text-electric-violet opacity-60">-</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Col: Skills & Education */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-electric-violet" /> Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-5 mb-4 backdrop-blur-sm">
                  <h4 className="text-white font-bold">{edu.institution}</h4>
                  <div className="text-xs text-electric-violet mt-1">{edu.degree}</div>
                  <div className="text-[10px] text-gray-500 mt-2 font-mono flex justify-between uppercase">
                    <span>{edu.period}</span>
                    <span>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certs */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaStar className="text-electric-violet" /> Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-[10px] font-bold text-gray-400 border border-white/10 px-3 py-2 bg-white/5 rounded-sm hover:border-electric-violet/50 transition-colors cursor-default">
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Condensed */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaTools className="text-electric-violet" /> Tech Arsenal
              </h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([key, list]) => (
                  <div key={key}>
                    <div className="text-[10px] text-gray-600 uppercase mb-2 font-bold tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="flex flex-wrap gap-1">
                      {list.slice(0, 8).map(skill => (
                        <span key={skill} className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default ResumePage;