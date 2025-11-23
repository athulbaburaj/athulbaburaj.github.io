// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group bg-ops-black border border-ops-green/30 p-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:border-ops-green hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
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

      <div className="mt-auto pt-4 border-t border-ops-green/10 flex items-center justify-between text-xs font-mono text-ops-green/60 group-hover:text-ops-green transition-colors">
        <span>&gt;&gt; CLICK_TO_VIEW_INTEL</span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">[OPEN_FILE]</span>
      </div>
    </div>
  );
};

export default ProjectCard;