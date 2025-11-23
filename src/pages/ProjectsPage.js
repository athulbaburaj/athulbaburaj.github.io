// src/pages/ProjectsPage.js
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailsModal from '../components/ProjectDetailsModal';
import { projects as projectData } from '../data/resumeData';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('Professional');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projectData.filter(project => {
    if (activeTab === 'Professional') return project.category === 'Professional';
    if (activeTab === 'Academic') return project.category === 'Academic';
    if (activeTab === 'Personal') return project.category === 'Personal';
    return true;
  });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation
  };

  return (
    <div className="text-white min-h-screen pt-10">
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-20 bg-ops-green/50"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white px-6 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
            Mission_Log
          </h1>
          <div className="h-px w-20 bg-ops-green/50"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-6">
          {['Professional', 'Academic', 'Personal'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-mono text-sm tracking-widest uppercase transition-all duration-300 border ${activeTab === tab
                ? 'bg-ops-green text-black border-ops-green shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                : 'bg-transparent text-ops-green border-ops-green/30 hover:border-ops-green hover:text-white'
                }`}
            >
              {tab}_Projects
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <div key={index} onClick={() => handleProjectClick(project)} className="cursor-pointer">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-ops-green/30 bg-ops-black/50 p-8 text-center max-w-2xl mx-auto">
            <p className="text-ops-green/70 text-xl font-mono animate-pulse">&gt;&gt; NO_RECORDS_FOUND_IN_CATEGORY // CHECK_ARCHIVES</p>
          </div>
        )}

        <p className="text-center text-ops-green/40 mt-16 text-sm font-mono border-t border-ops-green/20 pt-8">
          &gt;&gt; NOTE: "Knight Day Fantasy" link pending authorization. [REF: 1]<br />
          &gt;&gt; "Full Stack Dev" repositories accessible via secure GitHub uplink. [REF: 2]
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;