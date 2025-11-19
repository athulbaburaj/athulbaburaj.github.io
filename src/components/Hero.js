// src/components/Hero.js
import React from 'react';
import { personalInfo } from '../data/resumeData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';

const Hero = () => {
  return (
    // REMOVED min-h-screen and adjusted padding (py-28 md:py-40)
    <section className="relative bg-black text-white flex items-center justify-center py-28 md:py-40 overflow-hidden">
      {/* Animated Background Shapes/Clouds */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute -top-20 -left-20 w-3/5 h-3/5 md:w-2/5 md:h-2/5 bg-indigo-900 rounded-full opacity-50 blur-3xl animate-drift"
        />
        <div 
          className="absolute -bottom-20 -right-10 w-3/5 h-3/5 md:w-2/5 md:h-2/5 bg-purple-900 rounded-full opacity-30 blur-3xl animate-drift"
          style={{ animationDelay: '-18s', animationDirection: 'reverse' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm Athul Baburaj
        </h1>
        <p className="text-xl md:text-3xl font-medium text-indigo-400 mb-6">
          {personalInfo.title}
        </p>
        <div className="inline-flex items-center justify-center bg-gray-900/80 border border-indigo-500/50 text-indigo-300 px-4 py-2 rounded-full text-sm mb-8 shadow-lg shadow-indigo-500/10">
          <GoVerified className="mr-2 text-indigo-400" />
          Google Cloud Certified - Associate Cloud Engineer
        </div>
        {/* Reduced margin bottom on this paragraph from mb-10 to mb-8 */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
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