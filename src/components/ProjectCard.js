// src/components/ProjectCard.js
import React from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col h-full hover:shadow-indigo-500/30 transition-shadow duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-indigo-400 mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-3 flex-grow">{project.description}</p>
      {project.tech && project.tech.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="bg-gray-700 text-indigo-300 text-xs px-2 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      )}
      {(project.link && project.link !== "#" && project.link !== "YOUR_ITCH_IO_GAME_LINK_HERE") || (project.title.includes("Full Stack Dev")) ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-500 hover:text-indigo-300 font-medium transition-colors mt-auto"
        >
          {project.title.includes("Full Stack Dev") || project.link.includes("github.com") ? <FaGithub className="mr-2"/> : <FaLink className="mr-2" />}
          View Project / Repository
        </a>
      ) : project.link === "YOUR_ITCH_IO_GAME_LINK_HERE" ? (
         <p className="text-sm text-gray-500 mt-auto">Link to be updated for "{project.title}"</p>
      ) : (
        <p className="text-sm text-gray-500 mt-auto">Link not available</p>
      )}
    </div>
  );
};

export default ProjectCard;