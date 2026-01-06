// src/pages/ContactPage.js
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-12 flex flex-col justify-center">
      <motion.div
        className="container mx-auto px-6 max-w-screen-xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-16 md:gap-32">
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-hero font-bold text-white tracking-tighter leading-[0.9] mb-8">
              LET'S <br /> TALK.
            </h1>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-12 max-w-sm">
              Open for high-performance architecture and AI system collaboration.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:athulbaburaj@example.com" className="text-xl text-electric-violet hover:text-white transition-colors font-mono">
                  athulbaburaj@example.com
                </a>
              </div>

              <div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Network Uplink</div>
                <div className="flex space-x-6">
                  <a href="https://github.com/athulbaburaj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={24} /></a>
                  <a href="https://linkedin.com/in/athulbaburaj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={24} /></a>
                  <a href="https://twitter.com/athulbaburaj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={24} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm">
            <form className="space-y-8">
              <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-electric-violet transition-colors">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm outline-none focus:border-electric-violet transition-colors" placeholder="Name" />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-electric-violet transition-colors">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm outline-none focus:border-electric-violet transition-colors" placeholder="Email Address" />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-electric-violet transition-colors">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm outline-none focus:border-electric-violet transition-colors resize-none" placeholder="How can we collaborate?"></textarea>
              </div>

              <button className="w-full py-4 bg-white text-black font-bold tracking-widest hover:bg-electric-violet hover:text-white transition-all duration-300 text-xs">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;