// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';

const HomePage = () => {
  return (
    <div className="text-white min-h-screen pt-10 relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none"></div>

      <Hero />
      <TechStack />

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-16 bg-ops-green/50"></div>
            <h2 className="text-3xl font-bold text-center px-4 text-white tracking-widest uppercase drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">
              Mission_Log: Featured
            </h2>
            <div className="h-px w-16 bg-ops-green/50"></div>
          </div>

          <p className="text-center text-ops-green/70 max-w-2xl mx-auto font-mono mb-12">
            &gt;&gt; Accessing classified project files...
            <br />
            &gt;&gt; Displaying recent operations in reinforcement learning and full-stack development.
          </p>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-ops group inline-block">
              Initialize All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;