// src/components/Footer.js
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-ground border-t border-hairline">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center">

        <div className="mb-6 md:mb-0">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Athul Baburaj. All rights reserved.
          </p>
          <p className="text-xs text-faint mt-2">
            Designed with Typography-First Principles.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/athulbaburaj" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-primary transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/athul-baburaj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-primary transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/athulbaburaj" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted hover:text-primary transition-colors">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
