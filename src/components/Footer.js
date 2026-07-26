// src/components/Footer.js
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Sits inside App.js's content column, so it carries no width or padding of its own.
const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-hairline">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        <p className="t-body text-muted">
          &copy; {new Date().getFullYear()} Athul Baburaj
        </p>

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
