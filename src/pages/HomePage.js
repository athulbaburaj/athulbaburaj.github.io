// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { skills } from '../data/resumeData';

const HomePage = () => {
  const featuredSkills = skills.programming.slice(0,3).concat(skills.cloudDevOps.slice(0,3));

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Hero />

      {/* Skills Highlight Section */}
      <section className="py-16 bg-gray-850">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Key Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {featuredSkills.map(skill => (
              <span key={skill} className="bg-cyan-600 text-white px-4 py-2 rounded-full text-md font-medium shadow-md hover:bg-cyan-500 transition-colors">
                {skill}
              </span>
            ))}
          </div>
           <div className="text-center mt-8">
             <Link to="/resume#skills" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                View All Skills &rarr;
            </Link>
           </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">Featured Projects</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto">
              I've worked on a variety of projects, from reinforcement learning controllers to full-stack applications and retro games. Explore them all in the projects section.
            </p>
            <div className="text-center mt-12">
              <Link to="/projects" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                Explore All Projects
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;