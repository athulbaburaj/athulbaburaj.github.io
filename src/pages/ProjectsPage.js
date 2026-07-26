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
    <div className="entry py-6 border-b border-hairline">
      {/* Meta line */}
      <div className="entry-meta">
        <p className="font-mono t-label tracking-[0.3em] text-muted uppercase">
          {`${project.year} // ${project.category}`}
        </p>
      </div>

      <div className="entry-body">
        {/* Title */}
        <h2 className="t-h3 font-bold text-primary leading-snug mb-3">
          {project.title}
        </h2>

        {/* Summary */}
        <p className="text-secondary t-lead leading-relaxed mb-6 measure">
          {project.summary}
        </p>

        <div>
          {/* Case study collapses so the whole list is scannable in one screen.
              Content stays in the DOM — it is indexed and Ctrl+F-able, unlike
              the modal this replaced. */}
          {FIELDS.some(({ key }) => typeof project[key] === 'string' && project[key].trim()) && (
            <details className="disclosure mb-6">
              <summary className="font-mono t-label font-bold text-muted uppercase tracking-widest hover:text-primary transition-colors">
                <span className="disclosure-closed">Read case study</span>
                <span className="disclosure-open">Hide case study</span>
              </summary>
              <div className="flex flex-col mt-3">
                {FIELDS.map(({ key, label }) => {
                  const value = project[key];
                  if (typeof value !== 'string' || !value.trim()) return null;
                  return (
                    <div key={key} className="kv py-3 border-t border-hairline first:border-t-0" style={{ '--label': '6rem' }}>
                      <h3 className="font-mono t-label font-bold text-muted uppercase tracking-widest">
                        {label}
                      </h3>
                      <p className="text-secondary t-body leading-relaxed measure">
                        {value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </details>
          )}

          {project.tech && project.tech.length > 0 && (
            <p className="font-mono t-label text-muted tracking-widest mb-4">
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
                  className="t-small font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
                >
                  View source ↗
                </a>
              )}
              {isUsable(liveLink) && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-small font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
                >
                  Live demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {image && (
        <div className="entry-media">
          <img
            src={image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full border border-hairline object-cover"
          />
        </div>
      )}
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
      <div className="w-full flow">

        {/* Header */}
        <div className="mb-4 pb-6 border-b border-hairline">
          <p className="font-mono t-label tracking-[0.3em] text-muted uppercase mb-2">
            Selected Work
          </p>
          <h1 className="t-h1 font-hero text-primary leading-[0.85]">
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
