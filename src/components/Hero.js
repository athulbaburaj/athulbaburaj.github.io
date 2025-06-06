// src/components/Hero.js
import React from 'react';
import { personalInfo } from '../data/resumeData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go'; // A nice icon for certification

const Hero = () => {
  return (
    <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
      {/* Animated Background Shapes/Clouds */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-900 rounded-full opacity-30 blur-2xl animate-move-cloud-1" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-900 rounded-full opacity-20 blur-3xl animate-move-cloud-2" />
        <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-indigo-800 rounded-full opacity-20 blur-2xl animate-move-cloud-2 animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm {personalInfo.name}
        </h1>
        <p className="text-xl md:text-3xl font-medium text-indigo-400 mb-6">
          {personalInfo.title}
        </p>

        {/* GCP CERTIFICATION BADGE */}
        <div className="inline-flex items-center justify-center bg-gray-900/80 border border-indigo-500/50 text-indigo-300 px-4 py-2 rounded-full text-sm mb-10 shadow-lg shadow-indigo-500/10">
          <GoVerified className="mr-2 text-indigo-400" />
          Google Cloud Certified - Associate Cloud Engineer
        </div>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Passionate about leveraging cloud technologies and software development to build scalable, efficient solutions and drive innovation.
        </p>
        <div className="flex justify-center space-x-6">
          <a href={`https://www.${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors transform hover:scale-110" aria-label="LinkedIn Profile">
            <FaLinkedin size={32} />
          </a>
          <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors transform hover:scale-110" aria-label="GitHub Profile">
            <FaGithub size={32} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-indigo-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Send Email">
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;