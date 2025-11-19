// src/pages/AboutPage.js
import React from 'react';
import { skills, leadership } from '../data/resumeData';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 md:py-20 pt-10 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-20 bg-ops-green/50"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white px-6 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            Personnel_File
          </h1>
          <div className="h-px w-20 bg-ops-green/50"></div>
        </div>

        <div className="bg-ops-black/80 border border-ops-green/30 p-8 md:p-10 max-w-4xl mx-auto mb-16 relative overflow-hidden group">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ops-green"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ops-green"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ops-green"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ops-green"></div>

          {/* Stats / ID Card style element */}
          <div className="w-full md:w-64 border border-ops-green/20 bg-ops-green/5 p-4 font-mono text-sm text-ops-green/70">
            <div className="mb-2 border-b border-ops-green/20 pb-1">ID: AB-2025-DEV</div>
            <div className="mb-2 border-b border-ops-green/20 pb-1">CLEARANCE: LEVEL 5</div>
            <div className="mb-2 border-b border-ops-green/20 pb-1">STATUS: ACTIVE</div>
            <div className="mb-2">LOC: BENGALURU</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Soft Skills Section */}
          <div className="bg-ops-black/60 border border-ops-green/30 p-8 relative hover:border-ops-green transition-colors">
            <h2 className="text-2xl font-bold text-white mb-6 font-mono uppercase tracking-widest border-b border-ops-green/30 pb-2">
              Core_Competencies
            </h2>
            <ul className="space-y-3">
              {skills.softSkills.map((skill, idx) => (
                <li key={skill} className="text-ops-green/80 text-lg flex items-center font-mono">
                  <span className="text-ops-green mr-3 opacity-50">[{idx < 9 ? `0${idx + 1}` : idx + 1}]</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership & Extracurriculars Section */}
          <div className="bg-ops-black/60 border border-ops-green/30 p-8 relative hover:border-ops-green transition-colors">
            <h2 className="text-2xl font-bold text-white mb-6 font-mono uppercase tracking-widest border-b border-ops-green/30 pb-2">
              Leadership_Log
            </h2>
            <ul className="space-y-6">
              {leadership.map((item, idx) => (
                <li key={item.role} className="text-gray-300">
                  <h3 className="font-bold text-lg text-white font-mono mb-1 flex items-center">
                    <span className="w-2 h-2 bg-ops-green mr-2 rounded-full animate-pulse"></span>
                    {item.role}
                  </h3>
                  <p className="text-sm text-ops-green/60 font-mono pl-4 border-l border-ops-green/20">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;