// src/pages/ResumePage.js
import { skills, certifications, experience, education } from '../data/resumeData';
import Seo from '../components/Seo';
import { FaDownload, FaBriefcase, FaGraduationCap, FaStar, FaTools } from 'react-icons/fa';

const resumePdfPath = '/resume/Athul_Baburaj_Resume.pdf';

const ResumePage = () => {

  return (
    <div className="relative">
      <Seo
        title="Resume"
        description="Athul Baburaj's professional history: cloud platform migration, distributed systems, and solutions engineering at American Express, plus credentials, certifications, and a downloadable PDF."
        path="/resume"
      />
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-hairline pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-hero font-bold text-primary leading-[0.9] mb-2">
              Professional <br /> History.
            </h1>
            <p className="text-muted text-xs font-mono tracking-widest uppercase">
              Experience // Credentials
            </p>
          </div>
          <a
            href={resumePdfPath}
            download="Athul_Baburaj_Resume.pdf"
            className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary underline decoration-faint underline-offset-4 hover:text-secondary transition-colors duration-300 mt-6 md:mt-0"
          >
            <FaDownload className="text-xs" />
            DOWNLOAD PDF
          </a>
        </div>

        {/* Stacked, not a 3-column grid: inside a ~900px column the sidebar
            would be ~30 characters wide in monospace, which does not work. */}
        <div className="flex flex-col gap-12">

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
              <FaBriefcase className="text-muted" /> Experience
            </h3>

            <div className="flex flex-col">
              {experience.map((exp, index) => (
                <div key={index} className="py-6 border-t border-hairline first:border-t-0 first:pt-0">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2 gap-1">
                    <h4 className="text-xl font-bold text-primary">{exp.role}</h4>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <div className="text-sm text-secondary mb-3">{exp.company} &bull; {exp.location}</div>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-xs md:text-sm text-muted leading-relaxed flex items-start measure">
                        <span className="mr-2 text-faint">-</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Skills & Education */}
          <div className="flex flex-col">
            {/* Education */}
            <div className="py-6 border-t border-hairline first:border-t-0 first:pt-0">
              <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-muted" /> Education
              </h3>
              <div className="flex flex-col gap-5">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-primary font-bold">{edu.institution}</h4>
                    <div className="text-xs text-secondary mt-1">{edu.degree}</div>
                    <div className="text-[10px] text-muted mt-2 font-mono flex justify-between uppercase">
                      <span>{edu.period}</span>
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certs */}
            <div className="py-6 border-t border-hairline">
              <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaStar className="text-muted" /> Certifications
              </h3>
              <div className="flex flex-col gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-xs text-secondary">
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Condensed */}
            <div className="py-6 border-t border-hairline">
              <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaTools className="text-muted" /> Tech Arsenal
              </h3>
              <div className="flex flex-col gap-3">
                {Object.entries(skills).map(([key, list]) => (
                  <div key={key} className="grid grid-cols-[100px_1fr] gap-x-4">
                    <div className="text-[10px] text-muted uppercase tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="text-xs text-secondary leading-relaxed">
                      {list.slice(0, 8).join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumePage;
