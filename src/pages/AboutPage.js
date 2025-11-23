// src/pages/AboutPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { skills, leadership } from '../data/resumeData';
import NeuralNetwork from '../components/NeuralNetwork';
import { FaBrain, FaFileAlt } from 'react-icons/fa';

const AboutPage = () => {
  const navigate = useNavigate();
  const [trainingMode, setTrainingMode] = useState(false);

  return (
    <div className="min-h-screen py-12 md:py-20 pt-10 relative overflow-hidden">
      {/* Neural Network Background */}
      <NeuralNetwork trainingMode={trainingMode} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-20 bg-ops-green/50"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white px-6 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
            Personnel_File
          </h1>
          <div className="h-px w-20 bg-ops-green/50"></div>
        </div>

        <div className="bg-ops-black/80 border border-ops-green/30 p-8 md:p-10 max-w-4xl mx-auto mb-16 relative overflow-hidden group backdrop-blur-sm">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ops-green"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ops-green"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ops-green"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ops-green"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Stats / ID Card style element */}
            <div className="w-full md:w-64 border border-ops-green/20 bg-ops-green/5 p-4 font-mono text-sm text-ops-green/70">
              <div className="mb-2 border-b border-ops-green/20 pb-1">ID: AB-2025-DEV</div>
              <div className="mb-2 border-b border-ops-green/20 pb-1">CLEARANCE: LEVEL 5</div>
              <div className="mb-2 border-b border-ops-green/20 pb-1">STATUS: ACTIVE</div>
              <div className="mb-2">LOC: BENGALURU</div>
            </div>

            {/* Resume Access Button - Center */}
            <button
              onClick={() => navigate('/resume')}
              className="flex flex-col items-center justify-center px-6 py-4 bg-ops-green text-ops-black font-bold font-mono tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] group min-w-[200px]"
            >
              <FaFileAlt className="text-2xl mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs">ACCESS_FULL</span>
              <span className="text-sm">DOSSIER</span>
            </button>

            {/* Neural Network Controls */}
            <div className="flex flex-col items-end">
              <button
                onClick={() => setTrainingMode(!trainingMode)}
                className={`flex items-center px-6 py-3 border font-mono tracking-widest transition-all duration-300 ${trainingMode
                  ? 'bg-ops-green/20 text-ops-green border-ops-green shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                  : 'bg-transparent text-ops-green/60 border-ops-green/30 hover:bg-ops-green/10 hover:border-ops-green/60 hover:text-ops-green'
                  }`}
              >
                <FaBrain className={`mr-3 ${trainingMode ? 'animate-pulse' : ''}`} />
                {trainingMode ? 'TRAINING_ACTIVE' : 'INIT_TRAINING'}
              </button>
              <span className="text-xs font-mono text-ops-green/40 mt-2">
                {trainingMode ? '>> OPTIMIZING NEURAL PATHWAYS...' : '>> NETWORK IDLE. AWAITING INPUT.'}
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Soft Skills Section */}
          <div className="bg-ops-black/60 border border-ops-green/30 p-8 relative hover:border-ops-green transition-colors backdrop-blur-sm">
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
          <div className="bg-ops-black/60 border border-ops-green/30 p-8 relative hover:border-ops-green transition-colors backdrop-blur-sm">
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