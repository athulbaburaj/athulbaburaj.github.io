// src/components/Hero.js
import React from 'react';
import { personalInfo } from '../data/resumeData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import HeroTerminal from './HeroTerminal';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ops-black via-transparent to-ops-black"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8 relative inline-block">
              <div className="absolute -inset-1 bg-ops-green/20 blur-sm rounded-full animate-pulse"></div>
              <h1 className="relative text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
                ATHUL_BABURAJ
              </h1>
            </div>

            <p className="text-xl md:text-3xl font-mono text-ops-green mb-8 tracking-widest uppercase">
              {personalInfo.title}
            </p>

            <div className="inline-flex items-center justify-center lg:justify-start bg-ops-black border border-ops-green/50 text-ops-green px-6 py-2 text-sm mb-10 shadow-[0_0_15px_rgba(0,255,65,0.15)] tracking-wider">
              <GoVerified className="mr-2 text-ops-green animate-pulse" />
              <span className="font-mono">STATUS: GOOGLE_CLOUD_CERTIFIED</span>
            </div>

            <p className="text-lg text-ops-green/80 max-w-2xl mx-auto lg:mx-0 mb-12 font-mono leading-relaxed border-l-2 border-ops-green/30 pl-4 text-left md:text-center lg:text-left md:border-l-0 md:pl-0 lg:border-l-2 lg:pl-4">
              Passionate about leveraging cloud technologies and software development to build scalable, efficient solutions and drive innovation.
            </p>

            <div className="flex justify-center lg:justify-start space-x-8">
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
          <div className="flex-1 w-full max-w-lg lg:max-w-xl lg:ml-auto">
            <HeroTerminal />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;