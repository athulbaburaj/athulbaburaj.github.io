// src/components/ProjectCard.js
import React from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group bg-ops-black border border-ops-green/30 p-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:border-ops-green hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Card Decor */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-ops-green/30 group-hover:border-ops-green transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-ops-green/30 group-hover:border-ops-green transition-colors"></div>

      <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-wider group-hover:text-ops-green transition-colors">
        {project.title}
      </h3>

      <p className="text-ops-green/70 mb-6 flex-grow font-mono text-sm leading-relaxed border-l border-ops-green/20 pl-4">
        {project.description}
      </p>

      {project.tech && project.tech.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs font-bold text-ops-green/50 mb-2 uppercase tracking-widest">Stack_Trace:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="bg-ops-green/10 border border-ops-green/30 text-ops-green text-xs px-2 py-1 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {(project.link && project.link !== "#" && project.link !== "YOUR_ITCH_IO_GAME_LINK_HERE") || (project.title.includes("Full Stack Dev")) ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-ops-green hover:text-white font-bold tracking-wider transition-colors mt-auto group/link"
        >
          {project.title.includes("Full Stack Dev") || project.link.includes("github.com") ?
            <FaGithub className="mr-2 group-hover/link:animate-pulse" /> :
            <FaLink className="mr-2 group-hover/link:animate-pulse" />
          }
          <span className="border-b border-transparent group-hover/link:border-ops-green transition-all">
            INITIATE_LINK
          </span>
        </a>
      ) : project.link === "YOUR_ITCH_IO_GAME_LINK_HERE" ? (
        <p className="text-xs text-ops-green/40 mt-auto font-mono">&gt;&gt; LINK_PENDING_AUTHORIZATION</p>
      ) : (
        <p className="text-xs text-ops-green/40 mt-auto font-mono">&gt;&gt; ACCESS_DENIED</p>
      )}
    </div>
  );
};

export default ProjectCard;