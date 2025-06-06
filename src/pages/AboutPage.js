// src/pages/AboutPage.js
import React from 'react';
import { personalInfo, skills, leadership } from '../data/resumeData';
// import profilePic from '../assets/images/your-profile-pic.jpg'; // Optional: Add a profile picture

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12">About Me</h1>

        <div className="bg-gray-800 shadow-xl rounded-lg p-8 md:p-10 max-w-3xl mx-auto mb-12 transform transition-all duration-500 hover:scale-105">
          {/* Optional: Profile Picture */}
          {/* <img src={profilePic} alt={personalInfo.name} className="w-32 h-32 rounded-full mx-auto mb-6 ring-4 ring-cyan-500"/> */}
          <h2 className="text-3xl font-semibold text-center text-white mb-2">{personalInfo.name}</h2>
          <p className="text-xl text-center text-cyan-500 mb-6">{personalInfo.title}</p>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            I am a {personalInfo.title} with a strong foundation in cloud computing, DevOps practices, and software development.
            My experience at American Express involved spearheading service migrations to OpenShift 4.12, developing Python automation tools for CI/CD, and contributing to cloud solution architecture. [cite: 1, 2, 4]
            I thrive in dynamic environments, applying my skills in rapid prototyping and technical communication to deliver impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            {/* Soft Skills Section */}
            <div className="bg-gray-800 shadow-xl rounded-lg p-8 transform transition-all duration-500 hover:shadow-cyan-500/40">
                <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Core Competencies</h2>
                <ul className="space-y-3">
                {skills.softSkills.map((skill) => (
                    <li key={skill} className="text-gray-300 text-lg flex items-center">
                    <span className="bg-cyan-500 w-2 h-2 rounded-full mr-3 shrink-0"></span>
                    {skill} {/* [cite: 1] */}
                    </li>
                ))}
                </ul>
            </div>

            {/* Leadership & Extracurriculars Section */}
            <div className="bg-gray-800 shadow-xl rounded-lg p-8 transform transition-all duration-500 hover:shadow-cyan-500/40">
                <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Leadership & Initiatives</h2>
                <ul className="space-y-4">
                {leadership.map((item) => (
                    <li key={item.role} className="text-gray-300">
                    <h3 className="font-semibold text-lg text-white">{item.role}</h3> {/* [cite: 13, 14, 15] */}
                    <p className="text-sm">{item.description}</p> {/* [cite: 13, 14, 15] */}
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