// src/components/ProjectArchive.js
const ProjectArchive = ({ projects = [] }) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section className="mt-16 pt-10 border-t border-hairline">
            {/* Header */}
            <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary leading-none uppercase">
                        Archive.
                    </h2>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase hidden md:block">
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
                        className="grid md:grid-cols-[120px_1fr_auto] gap-1.5 md:gap-6 items-baseline py-4 border-b border-hairline"
                    >
                        <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                            {project.year}
                        </span>
                        <span className="text-sm text-secondary">
                            {project.title}
                        </span>
                        <span className="text-[10px] text-muted tracking-wider md:text-right">
                            {project.tech && project.tech.join(' · ')}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectArchive;
