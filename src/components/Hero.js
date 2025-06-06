// src/components/Hero.js
import React from 'react';
import { personalInfo } from '../data/resumeData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm {personalInfo.name}
        </h1>
        <p className="text-xl md:text-3xl text-cyan-400 mb-8">
          {personalInfo.title}
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Passionate about leveraging cloud technologies and software development to build scalable, efficient solutions and drive innovation.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href={`https://www.${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-transform transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-transform transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub size={32} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-cyan-400 hover:text-cyan-300 transition-transform transform hover:scale-110"
            aria-label="Send Email"
          >
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;