// src/components/ProjectCard.js
import React from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';

const LinkDisplay = ({ project }) => {
  const { title, link } = project;

  const isUnavailable = !link || link === "#";
  const isComingSoon = link === "YOUR_ITCH_IO_GAME_LINK_HERE";
  const isRepo = title.includes("Full Stack Dev") || (link && link.includes("github.com"));

  if (isComingSoon) {
    return <p className="text-sm text-gray-500 mt-auto">Link to be updated for "{title}"</p>;
  }

  if (isUnavailable) {
    return <p className="text-sm text-gray-500 mt-auto">Link not available</p>;
  }

  const Icon = isRepo ? FaGithub : FaLink;
  const text = "View Project / Repository";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-indigo-500 hover:text-indigo-300 font-medium transition-colors mt-auto group"
    >
      <Icon className="mr-2 group-hover:text-indigo-300 transition-colors" />
      <span className="group-hover:underline">{text}</span>
    </a>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-black rounded-lg shadow-xl p-6 flex flex-col h-full hover:shadow-indigo-500/30 transition-shadow duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-indigo-400 mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-3 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech?.map(t => (
          <span key={t} className="bg-gray-700 text-indigo-300 text-xs px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>
      <LinkDisplay project={project} />
    </div>
  );
};

export default ProjectCard;