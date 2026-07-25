// src/pages/ProjectsPage.js
import { projects as projectsData } from '../data/resumeData';
import ProjectArchive from '../components/ProjectArchive';
import Seo from '../components/Seo';

// `link` is the single-URL field used across resumeData; githubLink/liveLink
// take precedence so a project can carry both once the data grows.
const isUsable = (url) => Boolean(url) && url !== '#';

const FIELDS = [
  { key: 'problem', label: 'Problem' },
  { key: 'role', label: 'Role' },
  { key: 'approach', label: 'Approach' },
  { key: 'outcome', label: 'Outcome' },
];

const ProjectEntry = ({ project }) => {
  const repoLink = project.githubLink || project.link;
  const liveLink = project.liveLink;
  const hasActions = isUsable(repoLink) || isUsable(liveLink);
  const image = project.images && project.images[0];

  return (
    <div className="py-6 border-b border-hairline">
      {/* Meta line */}
      <p className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase mb-2">
        {`${project.year} // ${project.category}`}
      </p>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-primary leading-snug mb-3">
        {project.title}
      </h2>

      {/* Summary */}
      <p className="text-secondary text-base leading-relaxed mb-6 measure">
        {project.summary}
      </p>

      {image && (
        <div className="mb-6 max-w-xs">
          <img
            src={image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
          />
        </div>
      )}

      <div>
        {FIELDS.some(({ key }) => typeof project[key] === 'string' && project[key].trim()) && (
          <div className="flex flex-col mb-6">
            {FIELDS.map(({ key, label }) => {
              const value = project[key];
              if (typeof value !== 'string' || !value.trim()) return null;
              return (
                <div key={key} className="grid md:grid-cols-[100px_1fr] gap-x-6 gap-y-1 py-3 border-t border-hairline first:border-t-0">
                  <h3 className="font-mono text-[10px] font-bold text-muted uppercase tracking-widest">
                    {label}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed measure">
                    {value}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {project.tech && project.tech.length > 0 && (
          <p className="font-mono text-[10px] text-muted tracking-widest mb-4">
            {project.tech.join(' · ')}
          </p>
        )}

        {hasActions && (
          <div className="flex gap-6">
            {isUsable(repoLink) && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
              >
                View source ↗
              </a>
            )}
            {isUsable(liveLink) && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
              >
                Live demo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const filteredProjects = projectsData.filter(project => !project.archived);
  const archivedProjects = projectsData.filter(project => project.archived);

  return (
    <div className="relative">
      <Seo
        title="Projects"
        description="A portfolio of professional, academic, and personal projects from Athul Baburaj, spanning distributed systems, cloud infrastructure, and applied AI."
        path="/projects"
      />
      <div className="w-full">

        {/* Header */}
        <div className="mb-4 pb-6 border-b border-hairline">
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase mb-2">
            Selected Work
          </p>
          <h1 className="text-5xl md:text-6xl font-hero text-primary leading-[0.85]">
            PROJECTS.
          </h1>
        </div>

        {/* Case studies */}
        <div className="flex flex-col">
          {filteredProjects.map((project) => (
            <ProjectEntry key={project.title} project={project} />
          ))}
        </div>

        <ProjectArchive projects={archivedProjects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
