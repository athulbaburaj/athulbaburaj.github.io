// src/components/ProjectArchive.js
const ProjectArchive = ({ projects = [] }) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section className="section-tight border-t border-hairline">
            {/* Header */}
            <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline">
                    <h2 className="t-h2 font-bold text-primary leading-none uppercase">
                        Archive.
                    </h2>
                    <span className="font-mono t-label tracking-[0.25em] text-muted uppercase hidden md:block">
                        Earlier // Inactive
                    </span>
                </div>
                <div className="h-px bg-hairline w-full mt-3" />
            </div>

            {/* Rows */}
            <div className="flex flex-col">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="kv py-4 border-b border-hairline"
                        style={{ '--label': '5rem' }}
                    >
                        <span className="font-mono t-label text-muted uppercase tracking-widest">
                            {project.year}
                        </span>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <span className="t-body text-secondary">
                                {project.title}
                            </span>
                            <span className="font-mono t-label text-muted tracking-wider">
                                {project.tech && project.tech.join(' · ')}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectArchive;
