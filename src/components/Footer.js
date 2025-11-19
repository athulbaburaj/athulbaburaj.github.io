// src/components/Footer.js
import React from 'react';
import { personalInfo } from '../data/resumeData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-ops-black border-t border-ops-green/20 py-8 mt-auto relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href={`https://www.${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-ops-green/60 hover:text-ops-green hover:drop-shadow-[0_0_5px_rgba(0,255,65,0.8)] transition-all transform hover:scale-110"><FaLinkedin size={24} /></a>
          <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-ops-green/60 hover:text-ops-green hover:drop-shadow-[0_0_5px_rgba(0,255,65,0.8)] transition-all transform hover:scale-110"><FaGithub size={24} /></a>
          <a href={`mailto:${personalInfo.email}`} className="text-ops-green/60 hover:text-ops-green hover:drop-shadow-[0_0_5px_rgba(0,255,65,0.8)] transition-all transform hover:scale-110"><FaEnvelope size={24} /></a>
        </div>
        <p className="text-ops-green/40 font-mono text-sm mb-2">
          &copy; {new Date().getFullYear()} {personalInfo.name.toUpperCase()}. ALL_RIGHTS_RESERVED.
        </p>
        <p className="text-ops-green/20 text-xs font-mono">
          {/* // SYSTEM_STATUS: ONLINE // REACT_CORE_ACTIVE */}
          SYSTEM_STATUS: ONLINE // REACT_CORE_ACTIVE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
