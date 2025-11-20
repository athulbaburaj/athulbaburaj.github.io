// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

const Navbar = ({ toggleConsulting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-6 w-full z-50 transition-all duration-300 mb-1 mt-6 ${scrolled
        ? 'bg-ops-black/90 backdrop-blur-md shadow-lg py-3'
        : 'bg-transparent backdrop-blur-sm py-6'
        }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="group flex items-center space-x-3">
          <div className="h-10 w-10 border border-ops-green/50 flex items-center justify-center relative overflow-hidden bg-ops-black/50 backdrop-blur-sm group-hover:border-ops-green transition-colors">
            <div className="absolute inset-0 bg-ops-green/10 group-hover:bg-ops-green/20 transition-all"></div>
            <span className="font-mono font-bold text-ops-green text-xl tracking-tighter">AB</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-[0.2em] text-ops-green font-bold group-hover:text-white transition-colors">
              ATHUL_BABURAJ
            </span>
            <span className="font-mono text-[10px] text-ops-green/50 tracking-widest">
              SYSTEM_ONLINE
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">

          {/* ABOUT Dropdown */}
          <div className="relative group" onMouseEnter={() => setActiveDropdown('ABOUT')}>
            <button className="flex items-center space-x-1 font-mono text-sm tracking-[0.15em] text-ops-green/60 hover:text-ops-green transition-colors py-2">
              <span>ABOUT</span>
              <HiChevronDown className={`transition-transform duration-300 ${activeDropdown === 'ABOUT' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'ABOUT' && (
              <div className="absolute top-full left-0 w-48 bg-ops-black border border-ops-green/30 shadow-[0_0_15px_rgba(0,255,65,0.1)] backdrop-blur-xl py-2 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                <NavLink
                  to="/about"
                  className={({ isActive }) => `px-4 py-3 text-sm font-mono tracking-widest hover:bg-ops-green/10 hover:text-ops-green transition-colors ${isActive ? 'text-ops-green bg-ops-green/5' : 'text-ops-green/60'}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  PROFILE
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => `px-4 py-3 text-sm font-mono tracking-widest hover:bg-ops-green/10 hover:text-ops-green transition-colors ${isActive ? 'text-ops-green bg-ops-green/5' : 'text-ops-green/60'}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  PROJECTS
                </NavLink>
              </div>
            )}
          </div>

          {/* BLOG Link */}
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `relative px-2 py-1 font-mono text-sm tracking-[0.15em] transition-all duration-300 hover:text-ops-green ${isActive
                ? 'text-ops-green'
                : 'text-ops-green/60'
              }`
            }
          >
            BLOG
          </NavLink>

          {/* MODULES Dropdown */}
          <div className="relative group" onMouseEnter={() => setActiveDropdown('MODULES')}>
            <button className="flex items-center space-x-1 font-mono text-sm tracking-[0.15em] text-ops-green/60 hover:text-ops-green transition-colors py-2">
              <span>MODULES</span>
              <HiChevronDown className={`transition-transform duration-300 ${activeDropdown === 'MODULES' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'MODULES' && (
              <div className="absolute top-full left-0 w-48 bg-ops-black border border-ops-green/30 shadow-[0_0_15px_rgba(0,255,65,0.1)] backdrop-blur-xl py-2 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                <NavLink
                  to="/simulation"
                  className={({ isActive }) => `px-4 py-3 text-sm font-mono tracking-widest hover:bg-ops-green/10 hover:text-ops-green transition-colors ${isActive ? 'text-ops-green bg-ops-green/5' : 'text-ops-green/60'}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  SIMULATION
                </NavLink>
              </div>
            )}
          </div>

          {/* CONNECT Dropdown */}
          <div className="relative group" onMouseEnter={() => setActiveDropdown('CONNECT')}>
            <button className="flex items-center space-x-1 font-mono text-sm tracking-[0.15em] text-ops-green/60 hover:text-ops-green transition-colors py-2">
              <span>CONNECT</span>
              <HiChevronDown className={`transition-transform duration-300 ${activeDropdown === 'CONNECT' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'CONNECT' && (
              <div className="absolute top-full right-0 w-56 bg-ops-black border border-ops-green/30 shadow-[0_0_15px_rgba(0,255,65,0.1)] backdrop-blur-xl py-2 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `px-4 py-3 text-sm font-mono tracking-widest hover:bg-ops-green/10 hover:text-ops-green transition-colors ${isActive ? 'text-ops-green bg-ops-green/5' : 'text-ops-green/60'}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  CONTACT
                </NavLink>
                <button
                  onClick={() => {
                    toggleConsulting();
                    setActiveDropdown(null);
                  }}
                  className="text-left px-4 py-3 text-sm font-mono tracking-widest text-ops-green/60 hover:bg-ops-green/10 hover:text-ops-green transition-colors flex items-center justify-between group/item"
                >
                  <span>CONSULTING</span>
                  <span className="w-1.5 h-1.5 bg-ops-green rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                </button>
              </div>
            )}
          </div>

        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-ops-green hover:text-white transition-colors p-2 border border-ops-green/30 hover:border-ops-green bg-ops-black/50 backdrop-blur-sm"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ops-black/95 backdrop-blur-xl border-b border-ops-green/20 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1 flex flex-col">

            {/* Mobile ABOUT */}
            <div className="border-l-2 border-ops-green/20 pl-4 py-2">
              <div className="text-xs font-mono text-ops-green/40 mb-2 tracking-widest">ABOUT</div>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-ops-green/80 hover:text-ops-green font-mono text-sm">PROFILE</NavLink>
              <NavLink to="/projects" onClick={() => setIsOpen(false)} className="block py-2 text-ops-green/80 hover:text-ops-green font-mono text-sm">PROJECTS</NavLink>
            </div>

            {/* Mobile BLOG */}
            <NavLink
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 font-mono text-sm tracking-widest border-l-2 border-transparent text-ops-green/60 hover:text-ops-green hover:bg-ops-green/5"
            >
              BLOG
            </NavLink>

            {/* Mobile MODULES */}
            <div className="border-l-2 border-ops-green/20 pl-4 py-2">
              <div className="text-xs font-mono text-ops-green/40 mb-2 tracking-widest">MODULES</div>
              <NavLink to="/simulation" onClick={() => setIsOpen(false)} className="block py-2 text-ops-green/80 hover:text-ops-green font-mono text-sm">SIMULATION</NavLink>
            </div>

            {/* Mobile CONNECT */}
            <div className="border-l-2 border-ops-green/20 pl-4 py-2">
              <div className="text-xs font-mono text-ops-green/40 mb-2 tracking-widest">CONNECT</div>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-ops-green/80 hover:text-ops-green font-mono text-sm">CONTACT</NavLink>
              <button
                onClick={() => {
                  setIsOpen(false);
                  toggleConsulting();
                }}
                className="block w-full text-left py-2 text-ops-green/80 hover:text-ops-green font-mono text-sm"
              >
                CONSULTING
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;