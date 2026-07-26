// src/pages/ResumePage.js
import { skills, certifications, experience, education, leadership } from '../data/resumeData';
import Seo from '../components/Seo';
import { FaDownload, FaBriefcase, FaGraduationCap, FaStar, FaTools, FaUsers } from 'react-icons/fa';

const resumePdfPath = '/resume/Athul_Baburaj_Resume.pdf';

const ResumePage = () => {

  return (
    <div className="relative">
      <Seo
        title="Resume"
        description="Athul Baburaj's professional history: cloud platform migration, distributed systems, and solutions engineering at American Express, plus credentials, certifications, and a downloadable PDF."
        path="/resume"
      />
      <div className="w-full flow">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 border-b border-hairline pb-6">
          <div>
            <h1 className="t-h1 font-hero font-bold text-primary leading-[0.9] mb-2">
              Professional <br /> History.
            </h1>
            <p className="text-muted t-small font-mono tracking-widest uppercase">
              Experience // Credentials
            </p>
          </div>
          <a
            href={resumePdfPath}
            download="Athul_Baburaj_Resume.pdf"
            className="group flex items-center gap-2 t-body font-bold tracking-widest uppercase text-primary underline decoration-faint underline-offset-4 hover:text-secondary transition-colors duration-300 mt-6 md:mt-0"
          >
            <FaDownload className="t-small" />
            DOWNLOAD PDF
          </a>
        </div>

        {/* Stacked, not a 3-column grid: inside a ~900px column the sidebar
            would be ~30 characters wide in monospace, which does not work. */}
        <div className="flex flex-col gap-8">

          {/* Experience */}
          <div>
            <h3 className="t-small font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
              <FaBriefcase className="text-muted" /> Experience
            </h3>

            <div className="flex flex-col">
              {experience.map((exp, index) => (
                <div key={index} className="py-6 border-t border-hairline first:border-t-0 first:pt-0">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2 gap-1">
                    <h4 className="t-h3 font-bold text-primary">{exp.role}</h4>
                    <span className="font-mono t-label text-muted uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <div className="t-body text-secondary mb-3">{exp.company} &bull; {exp.location}</div>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="t-body text-muted leading-relaxed flex items-start measure">
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
              <h3 className="t-small font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-muted" /> Education
              </h3>
              <div className="autogrid">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-primary font-bold">{edu.institution}</h4>
                    <div className="t-small text-secondary mt-1">{edu.degree}</div>
                    <div className="t-label text-muted mt-2 font-mono flex justify-between uppercase">
                      <span>{edu.period}</span>
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certs */}
            <div className="py-6 border-t border-hairline">
              <h3 className="t-small font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaStar className="text-muted" /> Certifications
              </h3>
              <div className="autogrid">
                {certifications.map((cert, index) => (
                  <div key={index} className="t-small text-secondary">
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership — merged here when /about was removed */}
            <div className="py-6 border-t border-hairline">
              <h3 className="t-small font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaUsers className="text-muted" /> Leadership
              </h3>
              <div className="flex flex-col gap-4">
                {leadership.map((item, index) => (
                  <div key={index} className="kv" style={{ '--label': '14rem' }}>
                    <div className="t-small font-bold text-primary">{item.role}</div>
                    <div className="t-small text-muted leading-relaxed measure">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Condensed */}
            <div className="py-6 border-t border-hairline">
              <h3 className="t-small font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaTools className="text-muted" /> Tech Arsenal
              </h3>
              <div className="flex flex-col gap-3">
                {Object.entries(skills).map(([key, list]) => (
                  <div key={key} className="kv" style={{ '--label': '8rem' }}>
                    <div className="t-label text-muted uppercase tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="t-small text-secondary leading-relaxed">
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
