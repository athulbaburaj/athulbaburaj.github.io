// src/pages/ResumePage.js
import React from 'react';
import { skills, certifications, experience, education } from '../data/resumeData';
import { FaDownload, FaBriefcase, FaGraduationCap, FaStar, FaTools } from 'react-icons/fa';

// Path to your resume PDF in the public folder
const resumePdfPath = '/resume/Athul_Baburaj_Resume.pdf';

const ResumePage = () => {
  const skillCategories = [
    { title: "Programming", items: skills.programming, icon: <FaTools className="mr-2 text-ops-green" /> },
    { title: "Cloud & DevOps", items: skills.cloudDevOps, icon: <FaTools className="mr-2 text-ops-green" /> },
    { title: "Databases", items: skills.databases, icon: <FaTools className="mr-2 text-ops-green" /> },
    { title: "Machine Learning", items: skills.machineLearning, icon: <FaTools className="mr-2 text-ops-green" /> },
    { title: "Tools & Frameworks", items: skills.toolsFrameworks, icon: <FaTools className="mr-2 text-ops-green" /> }
  ];

  return (
    <div className="text-gray-300 min-h-screen py-10 md:py-16 pt-10 relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              Resume
            </h1>
            <p className="text-ops-green font-mono text-sm tracking-widest uppercase">Professional Experience & Skills</p>
          </div>

          <a
            href={resumePdfPath}
            download="Athul_Baburaj_Resume.pdf"
            className="mt-6 md:mt-0 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-ops-green text-white font-medium py-2 px-5 rounded-sm transition-all duration-300 flex items-center group"
          >
            <FaDownload className="mr-3 text-ops-green group-hover:translate-y-0.5 transition-transform" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Professional Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center tracking-wide">
            <FaBriefcase className="mr-4 text-ops-green" />
            Experience
          </h2>
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l border-white/10 hover:border-ops-green/50 transition-colors duration-300">
                {/* Timeline Dot */}
                <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-ops-black border border-ops-green rounded-full"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-base text-gray-400 mt-0.5">{exp.company} <span className="text-gray-600 mx-2">|</span> {exp.location}</p>
                  </div>
                  <span className="mt-2 md:mt-0 font-mono text-xs text-ops-green bg-ops-green/5 px-2 py-1 rounded-sm border border-ops-green/20">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed max-w-4xl">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-ops-green mr-3 mt-1.5 text-[10px]">●</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center tracking-wide">
              <FaGraduationCap className="mr-4 text-ops-green" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="tech-card p-5">
                  <h3 className="text-lg font-bold text-white mb-1">{edu.institution}</h3>
                  <p className="text-gray-400 mb-1 text-sm">{edu.degree}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 font-mono mt-3 pt-3 border-t border-white/5">
                    <span>{edu.period}</span>
                    <span className="text-ops-green">{edu.grade}</span>
                  </div>
                  {edu.notes && <p className="text-xs text-gray-500 mt-2 leading-relaxed">{edu.notes}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center tracking-wide">
              <FaStar className="mr-4 text-ops-green" />
              Certifications
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-white/5 border border-white/5 rounded-sm hover:border-ops-green/30 transition-colors">
                  <div className="w-1.5 h-1.5 bg-ops-green mr-3 rounded-full"></div>
                  <p className="text-gray-200 font-medium text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-wide">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map(category => (
              <div key={category.title} className="tech-card p-5">
                <h3 className="text-base font-bold text-white mb-3 flex items-center border-b border-white/5 pb-2">
                  {category.icon}
                  <span className="ml-2">{category.title}</span>
                </h3>
                <ul className="space-y-1.5">
                  {category.items.map(skill => (
                    <li key={skill} className="text-gray-400 text-xs flex items-center">
                      <span className="w-1 h-1 bg-gray-600 mr-2 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;