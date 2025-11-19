// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-sm text-white shadow-lg shadow-indigo-500/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="hover:opacity-80 transition-opacity">
          <img src={logo} alt="AB Logo" className="h-10 w-auto" />
        </NavLink>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors hover:text-indigo-300 ${isActive ? 'text-indigo-400' : 'text-gray-300'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {/* The animated underline */}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-indigo-500 transition-all duration-300 ease-in-out ${isActive ? 'w-full' : 'w-0'}`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-gray-800 hover:text-indigo-400"
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