// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = ({ toggleConsulting }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Link classes for consistency
  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-electric-violet'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">

        {/* Logo / Brand */}
        <NavLink to="/" className="text-xl font-bold tracking-tighter text-white hover:text-electric-violet transition-colors">
          ATHUL BABURAJ.
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/about" className={linkClass}>ABOUT</NavLink>
          <NavLink to="/projects" className={linkClass}>PROJECTS</NavLink>
          <NavLink to="/simulation" className={linkClass}>SIMULATION</NavLink>
          <NavLink to="/blog" className={linkClass}>BLOG</NavLink>
          <button
            onClick={toggleConsulting}
            className="text-sm font-medium tracking-wide text-electric-violet hover:text-white transition-colors"
          >
            SERVICES
          </button>
          <NavLink to="/contact" className="px-5 py-2 bg-white text-obsidian text-sm font-bold hover:bg-electric-violet hover:text-white transition-all">
            LET'S TALK
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-electric-violet transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt4 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in-95 duration-200">
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-white">ABOUT</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-white">PROJECTS</NavLink>
          <NavLink to="/simulation" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-white">SIMULATION</NavLink>
          <NavLink to="/blog" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-white">BLOG</NavLink>
          <button
            onClick={() => { setIsOpen(false); toggleConsulting(); }}
            className="text-2xl font-bold text-electric-violet"
          >
            SERVICES
          </button>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="px-8 py-3 bg-white text-obsidian text-xl font-bold">
            LET'S TALK
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;