// src/pages/ProjectsPage.js
import React, { useState } from 'react';
import { projects as projectsData } from '../data/resumeData';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetailsModal from '../components/ProjectDetailsModal';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Professional', 'Academic', 'Personal'];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeTab);



  return (
    <div className="min-h-screen py-12 relative">
      <div className="container mx-auto px-6 max-w-screen-2xl">

        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-hero font-bold text-white tracking-tighter leading-[0.9] mb-2">
              PROJECTS.
            </h1>
            <p className="text-gray-400 text-xs font-mono tracking-widest uppercase">
              Portfolio // {activeTab}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-6 md:mt-0">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-bold tracking-widest uppercase transition-all duration-300 pb-1 border-b-2 ${activeTab === tab
                  ? 'text-white border-electric-violet'
                  : 'text-gray-600 border-transparent hover:text-gray-400'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group cursor-pointer border border-white/5 bg-white/5 hover:border-electric-violet/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Area */}
                <div className="aspect-[16/8] bg-black/50 overflow-hidden relative border-b border-white/5">
                  {project.images && project.images[0] ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-[10px] z-0">
                      IMAGE: {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-electric-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-white group-hover:text-electric-violet transition-colors">
                      {project.title}
                    </h2>
                    <FaArrowRight className="text-gray-500 text-sm transform -rotate-45 group-hover:rotate-0 group-hover:text-electric-violet transition-all duration-300" />
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2 min-h-[2.5em]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech && project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold text-gray-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isOpen={!!selectedProject}
        />
      )}
    </div>
  );
};

export default ProjectsPage;