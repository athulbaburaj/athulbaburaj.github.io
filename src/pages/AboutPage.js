// src/pages/AboutPage.js
import { Link } from 'react-router-dom';
import { skills, leadership, personalInfo } from '../data/resumeData';
import Seo from '../components/Seo';
import { FaArrowRight } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <Seo
        title="About"
        description="How Athul Baburaj approaches solutions engineering: embedding with teams that own a hard problem, from distributed systems migrations to agentic AI, and shipping it to production."
        path="/about"
      />

      <div className="container mx-auto px-6 max-w-screen-2xl">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-hairline">
          <h1 className="text-4xl md:text-5xl font-hero font-bold text-primary leading-[0.9]">
            Beyond <br /> The Code.
          </h1>
        </div>

        <div className="flex flex-col">

          {/* Profile */}
          <div className="grid md:grid-cols-[120px_1fr] gap-x-8 gap-y-2 py-6 border-b border-hairline">
            <h3 className="text-xs font-bold text-muted tracking-widest uppercase">Profile</h3>
            <div>
              <div className="text-xl font-bold text-primary mb-1">{personalInfo.name}</div>
              <div className="text-secondary">{personalInfo.title}</div>
              <div className="text-secondary text-sm mt-1">{personalInfo.company} &bull; {personalInfo.location}</div>
            </div>
          </div>

          {/* Resume link */}
          <div className="grid md:grid-cols-[120px_1fr] gap-x-8 gap-y-2 py-6 border-b border-hairline">
            <h3 className="text-xs font-bold text-muted tracking-widest uppercase">Resume</h3>
            <Link
              to="/resume"
              className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary underline decoration-faint underline-offset-4 hover:text-accent hover:decoration-accent transition-colors duration-300 w-fit"
            >
              Access resume
              <FaArrowRight className="text-xs transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Expertise */}
          <div className="grid md:grid-cols-[120px_1fr] gap-x-8 gap-y-2 py-6 border-b border-hairline">
            <h3 className="text-xs font-bold text-muted tracking-widest uppercase">Expertise</h3>
            <p className="text-secondary text-sm leading-relaxed measure">
              {skills.softSkills.join(' · ')}
            </p>
          </div>

          {/* Leadership */}
          <div className="grid md:grid-cols-[120px_1fr] gap-x-8 gap-y-6 py-6 border-b border-hairline">
            <h3 className="text-xs font-bold text-muted tracking-widest uppercase">Leadership</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {leadership.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-primary text-sm mb-1">{item.role}</h4>
                  <p className="text-xs text-secondary leading-relaxed measure">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
