// src/pages/ResumePage.js
import React from 'react';
import { personalInfo, skills, certifications, experience, education } from '../data/resumeData';
import { FaDownload, FaBriefcase, FaGraduationCap, FaStar, FaTools } from 'react-icons/fa';

// Path to your resume PDF in the public folder
const resumePdfPath = '/resume/Athul_Baburaj_Resume.pdf'; // [cite: 6] (User agreed to this, they need to place the file)

const ResumePage = () => {
  const skillCategories = [
    { title: "Programming", items: skills.programming, icon: <FaTools className="mr-2 text-indigo-400" /> }, // From resume [cite: 1]
    { title: "Cloud & DevOps", items: skills.cloudDevOps, icon: <FaTools className="mr-2 text-indigo-400" /> }, // From resume [cite: 1]
    { title: "Databases", items: skills.databases, icon: <FaTools className="mr-2 text-indigo-400" /> }, // From resume [cite: 1]
    { title: "Machine Learning", items: skills.machineLearning, icon: <FaTools className="mr-2 text-indigo-400" /> }, // From resume [cite: 1]
    { title: "Tools & Frameworks", items: skills.toolsFrameworks, icon: <FaTools className="mr-2 text-indigo-400" /> } // From resume [cite: 1]
  ];

  return (
    <div className="bg-black text-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-4 md:mb-0">My Resume</h1>
          <a
            href={resumePdfPath}
            download="Athul_Baburaj_Resume.pdf" // [cite: 6]
            className="bg-indigo-600 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center"
          >
            <FaDownload className="mr-2" /> Download PDF
          </a>
        </div>

        {/* Professional Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-8 flex items-center"><FaBriefcase className="mr-3 text-cyan-500" />Professional Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-8 p-6 bg-black border border-gray-800 rounded-lg shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3> {/* [cite: 1, 5] */}
              <p className="text-lg text-cyan-500 mb-1">{exp.company} | {exp.location}</p> {/* [cite: 1] */}
              <p className="text-sm text-gray-400 mb-3">{exp.period}</p> {/* [cite: 1, 5] */}
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li> // [cite: 1, 2, 3, 4, 5, 6, 7]
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-8 flex items-center"><FaGraduationCap className="mr-3 text-cyan-500" />Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6 p-6 bg-black border border-gray-800 rounded-lg shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300">
              <h3 className="text-xl font-bold text-white">{edu.institution}</h3> {/* [cite: 8] */}
              <p className="text-lg text-cyan-500">{edu.degree} ({edu.period})</p> {/* [cite: 8] */}
              <p className="text-gray-300">Grade: {edu.grade}</p> {/* [cite: 8] */}
              {edu.notes && <p className="text-sm text-gray-400 mt-1">{edu.notes}</p>} {/* [cite: 9] */}
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map(category => (
                 <div key={category.title} className="p-6 bg-black border border-gray-800 rounded-lg shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">{category.icon}{category.title}</h3>
                    <ul className="space-y-1">
                        {category.items.map(skill => <li key={skill} className="text-gray-300">{skill}</li>)}
                    </ul>
                 </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-3xl font-semibold text-indigo-400 mb-8 flex items-center"><FaStar className="mr-3 text-cyan-500" />Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 bg-black border border-gray-800 rounded-lg shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300">
                <p className="text-lg font-medium text-white">{cert}</p> {/* [cite: 1] */}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;