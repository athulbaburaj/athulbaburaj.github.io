// src/pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects as projectData } from '../data/resumeData'; // Renamed to avoid conflict

const ProjectsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-16">My Projects</h1>
        {projectData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-xl">Projects section is currently under development. Check back soon!</p>
        )}
         <p className="text-center text-gray-400 mt-12 text-sm">
            For "Knight Day Fantasy" game, the link will be updated soon. [cite: 1] <br/>
            The "Full Stack Dev" projects section links to my GitHub repositories. [cite: 2]
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;