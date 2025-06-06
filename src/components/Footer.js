// src/components/Footer.js
import React from 'react';
import { personalInfo } from '../data/resumeData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={`https://www.${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><FaLinkedin size={24} /></a>
          <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><FaGithub size={24} /></a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors"><FaEnvelope size={24} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="text-sm">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;