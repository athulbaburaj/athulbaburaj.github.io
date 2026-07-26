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
      <section className="flex flex-col justify-center section-tight relative">
        <div className="w-full flow">
          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-6">
            <div>
              <p className="font-mono t-label tracking-[0.3em] text-muted uppercase mb-2">
                Selected Work
              </p>
              <h2 className="t-h2 font-bold text-primary leading-none">
                FEATURED PROJECTS.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:flex items-center gap-2 t-label font-bold tracking-widest
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
                className="group kv py-5 border-b border-hairline"
                style={{ '--label': '7.5rem' }}
              >
                {/* Label column: thumbnail + index + category. The thumbnail
                    sits in gutter space that was already reserved, so it costs
                    no extra page height. Decorative — the title is adjacent. */}
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  {project.images && project.images[0] && (
                    <img
                      src={project.images[0]}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="w-16 h-16 object-cover border border-hairline flex-shrink-0
                                 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1">
                    <span className="font-mono t-label text-muted">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono t-label tracking-[0.2em] text-muted uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Value column: title + summary */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="t-h3 font-bold text-primary leading-snug">
                      {project.title}
                    </h3>
                    <FaArrowRight
                      className="text-muted t-small mt-1.5 flex-shrink-0
                                 transform -rotate-45 group-hover:rotate-0
                                 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-secondary t-body leading-relaxed mt-2 measure">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile "view all" */}
          <div className="mt-8 md:hidden">
            <Link to="/projects" className="flex items-center t-small font-bold tracking-widest text-muted hover:text-primary transition-colors">
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
