// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/resumeData';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import HeroTerminal from './HeroTerminal';

const Hero = ({ openGame, toggleConsulting }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-4 pb-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ops-black/40 via-transparent to-ops-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-3 py-1 border border-ops-green/30 bg-ops-green/5 text-ops-green font-mono text-sm tracking-widest mb-4">
              STATUS: ONLINE
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
              ATHUL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ops-green to-emerald-600">
                BABURAJ
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Full-Stack Developer & AI Enthusiast building digital experiences that merge
              <span className="text-ops-green font-mono mx-2">&lt;code&gt;</span>
              with creativity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <Link to="/projects" className="btn-ops group">
                View Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>

              <button
                onClick={toggleConsulting}
                className="px-8 py-3 border border-ops-green text-ops-green font-mono tracking-widest hover:bg-ops-green hover:text-ops-black transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-2 h-2 bg-ops-green rounded-full animate-pulse group-hover:bg-ops-black"></span>
                CONSULTING
              </button>

              <Link to="/resume" className="px-8 py-3 border border-gray-700 text-gray-300 font-mono hover:border-ops-green hover:text-ops-green transition-all duration-300 inline-flex items-center gap-2 group">
                <FaFileAlt className="group-hover:scale-110 transition-transform" /> Resume
              </Link>
            </div>

            <div className="flex justify-center lg:justify-start space-x-8 pt-6">
              <a href={`https://www.${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-ops-green/70 hover:text-ops-green transition-all transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]" aria-label="LinkedIn Profile">
                <FaLinkedin size={32} />
              </a>
              <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-ops-green/70 hover:text-ops-green transition-all transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]" aria-label="GitHub Profile">
                <FaGithub size={32} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-ops-green/70 hover:text-ops-green transition-all transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]" aria-label="Send Email">
                <FaEnvelope size={32} />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Terminal */}
          <div className="lg:ml-auto w-full max-w-xl">
            <HeroTerminal openGame={openGame} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;