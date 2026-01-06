// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-obsidian border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center">

        <div className="mb-6 md:mb-0">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Athul Baburaj. All rights reserved.
          </p>
          <p className="text-xs text-gray-700 mt-2">
            Designed with Typography-First Principles.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/athulbaburaj" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/athulbaburaj" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
