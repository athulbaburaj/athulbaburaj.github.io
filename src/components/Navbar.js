// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`sticky top-6 w-full z-50 transition-all duration-300 mb-8 mt-6 ${scrolled
        ? 'bg-ops-black/90 backdrop-blur-md shadow-lg py-3'
        : 'bg-transparent backdrop-blur-sm py-6'
        }`}
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

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `relative px-2 py-1 font-mono text-sm tracking-[0.15em] transition-all duration-300 hover:text-ops-green ${isActive
                  ? 'text-ops-green'
                  : 'text-ops-green/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-ops-green shadow-[0_0_8px_rgba(0,255,65,0.5)]"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
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
        <div className="md:hidden absolute top-full left-0 w-full bg-ops-black/95 backdrop-blur-xl border-b border-ops-green/20">
          <div className="px-4 py-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 font-mono text-sm tracking-widest border-l-2 transition-all ${isActive
                    ? 'border-ops-green text-ops-green bg-ops-green/10'
                    : 'border-transparent text-ops-green/60 hover:text-ops-green hover:bg-ops-green/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;