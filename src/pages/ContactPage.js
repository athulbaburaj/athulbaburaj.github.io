import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Seo from '../components/Seo';

const REAL_EMAIL = 'athulbaburajp23@gmail.com';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-12 flex flex-col justify-center">
      <Seo
        title="Contact"
        description="Get in touch with Athul Baburaj for solutions engineering collaboration, distributed systems architecture, cloud platform migration, or agentic AI systems work."
        path="/contact"
      />
      <div className="container mx-auto px-6 max-w-screen-2xl">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-hero font-bold text-primary leading-[0.9] mb-8">
            LET'S <br /> TALK.
          </h1>
          <p className="text-lg text-secondary font-normal leading-relaxed mb-12 measure">
            Open for high-performance architecture and AI system collaboration.
          </p>

          <div className="flex flex-col">
            <div className="grid md:grid-cols-[100px_1fr] gap-x-6 gap-y-1 py-4 border-t border-hairline">
              <div className="text-xs text-muted uppercase tracking-widest">Email</div>
              <a href={`mailto:${REAL_EMAIL}`} className="text-xl md:text-2xl text-primary hover:text-accent transition-colors break-all w-fit">
                {REAL_EMAIL}
              </a>
            </div>

            <div className="grid md:grid-cols-[100px_1fr] gap-x-6 gap-y-2 py-4 border-t border-hairline">
              <div className="text-xs text-muted uppercase tracking-widest">Elsewhere</div>
              <div className="flex space-x-6">
                <a href="https://github.com/athulbaburaj" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-primary transition-colors"><FaGithub size={24} /></a>
                <a href="https://linkedin.com/in/athul-baburaj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-primary transition-colors"><FaLinkedin size={24} /></a>
                <a href="https://twitter.com/athulbaburaj" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-secondary hover:text-primary transition-colors"><FaTwitter size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
