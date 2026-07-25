// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Shared link treatment — accent is reserved for active/hover states on
  // real navigation links, nowhere else. `size` lets desktop and mobile
  // reuse one definition instead of duplicating the accent classes.
  const linkClass = (size) => ({ isActive }) =>
    `${size} tracking-wide transition-colors duration-300 ${
      isActive ? 'text-accent' : 'text-secondary hover:text-accent'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ground border-b border-hairline">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">

        {/* Logo / Brand */}
        <NavLink to="/" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
          ATHUL BABURAJ.
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/about" className={linkClass('text-sm font-medium')}>ABOUT</NavLink>
          <NavLink to="/projects" className={linkClass('text-sm font-medium')}>PROJECTS</NavLink>
          <NavLink to="/blog" className={linkClass('text-sm font-medium')}>BLOG</NavLink>
          <NavLink to="/contact" className={linkClass('text-sm font-medium')}>LET'S TALK</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="text-primary hover:text-secondary transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt4 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-ground flex flex-col items-center justify-center space-y-8"
          >
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={linkClass('text-2xl font-bold')}>ABOUT</NavLink>
            <NavLink to="/projects" onClick={() => setIsOpen(false)} className={linkClass('text-2xl font-bold')}>PROJECTS</NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)} className={linkClass('text-2xl font-bold')}>BLOG</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkClass('text-2xl font-bold')}>LET'S TALK</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
