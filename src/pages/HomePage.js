// src/pages/HomePage.js
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Seo from '../components/Seo';
import { FaArrowRight } from 'react-icons/fa';
import { projects } from '../data/resumeData';

const HomePage = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div>

      <Seo
        title="Home"
        description="Athul Baburaj is a Cloud Solutions Engineer at American Express, embedding with teams to ship distributed systems, cloud platform migrations, and agentic AI systems to production."
        path="/"
      />

      <Hero />

      {/* Featured Projects */}
      <section className="flex flex-col justify-center pt-6 pb-8 relative">
        <div className="w-full">
          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase mb-2">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-none">
                FEATURED PROJECTS.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-widest
                         text-muted hover:text-primary transition-colors duration-300 mt-4 md:mt-0"
            >
              ALL PROJECTS
              <FaArrowRight />
            </Link>
          </div>
          <div className="h-px bg-hairline w-full mb-2" />

          {/* Rows */}
          <div className="flex flex-col">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.title}
                to="/projects"
                className="group grid md:grid-cols-[120px_1fr] gap-x-8 gap-y-2 py-5 border-b border-hairline"
              >
                {/* Label column: index + category */}
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <span className="font-mono text-[10px] text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Value column: title + summary */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-primary leading-snug">
                      {project.title}
                    </h3>
                    <FaArrowRight
                      className="text-muted text-xs mt-1.5 flex-shrink-0
                                 transform -rotate-45 group-hover:rotate-0
                                 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-secondary text-sm leading-relaxed mt-2 measure">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile "view all" */}
          <div className="mt-8 md:hidden">
            <Link to="/projects" className="flex items-center text-xs font-bold tracking-widest text-muted hover:text-primary transition-colors">
              VIEW ALL
              <FaArrowRight className="ml-2" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
