// src/pages/ProjectsPage.js
import React, { useState } from 'react';
import ProjectGraph from '../components/ProjectGraph';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailsModal from '../components/ProjectDetailsModal';
import { projects as projectData } from '../data/resumeData';
import { FaProjectDiagram, FaThLarge, FaInfoCircle } from 'react-icons/fa';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('Professional');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // Default to 'grid'
  const [showInfo, setShowInfo] = useState(false);

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
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-20 bg-ops-green/50"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white px-6 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
            PROJECTS
          </h1>
          <div className="h-px w-20 bg-ops-green/50"></div>
        </div>

        {/* Controls Row: Tabs + View Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 max-w-5xl mx-auto relative z-10">
          {/* Tabs */}
          <div className="flex space-x-4 overflow-x-auto pb-2 md:pb-0">
            {['Professional', 'Academic', 'Personal'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-mono text-xs md:text-sm tracking-widest uppercase transition-all duration-300 border ${activeTab === tab
                  ? 'bg-ops-green text-black border-ops-green shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                  : 'bg-transparent text-ops-green border-ops-green/30 hover:border-ops-green hover:text-white'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-4">
            {/* Info Tooltip */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
                className="text-ops-green/50 hover:text-ops-green transition-colors"
              >
                <FaInfoCircle size={16} />
              </button>

              {showInfo && (
                <div className="absolute top-1/2 right-full mr-3 -translate-y-1/2 w-64 bg-ops-black border border-ops-green/30 p-3 rounded-sm shadow-[0_0_20px_rgba(0,229,255,0.1)] text-xs font-mono z-50 backdrop-blur-md">
                  <div className="mb-2">
                    <span className="text-ops-green font-bold block mb-1">SECTOR MAP <FaProjectDiagram className="inline ml-1" /></span>
                    <span className="text-gray-400">Interactive visualization. Click nodes to explore.</span>
                  </div>
                  <div>
                    <span className="text-ops-green font-bold block mb-1">GRID VIEW <FaThLarge className="inline ml-1" /></span>
                    <span className="text-gray-400">Standard card layout for quick browsing.</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 bg-ops-black/50 border border-ops-green/30 p-1 rounded-sm">
              <button
                onClick={() => setViewMode('graph')}
                className={`p-2 transition-all duration-300 ${viewMode === 'graph' ? 'text-ops-green bg-ops-green/10 shadow-[0_0_10px_rgba(0,229,255,0.2)]' : 'text-ops-green/40 hover:text-ops-green'}`}
                title="Sector Map View"
              >
                <FaProjectDiagram size={18} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-all duration-300 ${viewMode === 'grid' ? 'text-ops-green bg-ops-green/10 shadow-[0_0_10px_rgba(0,229,255,0.2)]' : 'text-ops-green/40 hover:text-ops-green'}`}
                title="Archive Grid View"
              >
                <FaThLarge size={18} />
              </button>
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="w-full min-h-[60vh]">
            {viewMode === 'graph' ? (
              <ProjectGraph
                projects={filteredProjects}
                activeTab={activeTab}
                onProjectSelect={handleProjectClick}
              />
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
                {filteredProjects.map((project, index) => (
                  <div key={index} onClick={() => handleProjectClick(project)} className="cursor-pointer">
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            )}
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