// src/pages/ContactPage.js
import React from 'react';
import { personalInfo } from '../data/resumeData';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  // Basic form handling (consider a service like Formspree for static sites if you want to receive emails from a form)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(">> TRANSMISSION RECEIVED. STAND BY FOR RESPONSE.");
    // Here you would typically handle form submission, e.g., send data to a backend or email service.
  };

  return (
    <div className="text-white min-h-screen py-12 md:py-20 pt-10 relative overflow-hidden">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ops-black via-transparent to-ops-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-20 bg-ops-green/50"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white px-6 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            Establish_Comms
          </h1>
          <div className="h-px w-20 bg-ops-green/50"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Information Side */}
          <div className="bg-ops-black/60 border border-ops-green/30 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2">
              <div className="w-2 h-2 bg-ops-green rounded-full animate-ping"></div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 font-mono uppercase tracking-widest border-b border-ops-green/30 pb-2">
              Comms_Channels
            </h2>
            <p className="text-ops-green/70 mb-8 font-mono text-sm">
              &gt;&gt; Open to secure channels for project discussions and mission briefings.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center text-lg text-ops-green/80 hover:text-ops-green transition-colors group/item">
                <div className="w-10 h-10 border border-ops-green/30 flex items-center justify-center mr-4 group-hover/item:bg-ops-green/10 transition-colors">
                  <FaEnvelope size={18} />
                </div>
                <span className="font-mono">{personalInfo.email}</span>
              </a>

              <a href={`https://www.${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-ops-green/80 hover:text-ops-green transition-colors group/item">
                <div className="w-10 h-10 border border-ops-green/30 flex items-center justify-center mr-4 group-hover/item:bg-ops-green/10 transition-colors">
                  <FaLinkedin size={18} />
                </div>
                <span className="font-mono">LINKEDIN_UPLINK</span>
              </a>

              <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-ops-green/80 hover:text-ops-green transition-colors group/item">
                <div className="w-10 h-10 border border-ops-green/30 flex items-center justify-center mr-4 group-hover/item:bg-ops-green/10 transition-colors">
                  <FaGithub size={18} />
                </div>
                <span className="font-mono">GITHUB_REPO</span>
              </a>

              <div className="flex items-center text-lg text-ops-green/80">
                <div className="w-10 h-10 border border-ops-green/30 flex items-center justify-center mr-4">
                  <FaMapMarkerAlt size={18} />
                </div>
                <span className="font-mono">LOC: BENGALURU, INDIA</span>
              </div>
            </div>
          </div>

          {/* Contact Form Side (Demo) */}
          <div className="bg-ops-black/60 border border-ops-green/30 p-8 relative">
            <h2 className="text-2xl font-bold text-white mb-6 font-mono uppercase tracking-widest border-b border-ops-green/30 pb-2">
              Send_Transmission
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-ops-green mb-2 uppercase tracking-wider">Identity</label>
                <input type="text" name="name" id="name" required className="w-full bg-ops-black border border-ops-green/30 text-ops-green p-3 focus:outline-none focus:border-ops-green focus:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all font-mono placeholder-ops-green/30" placeholder="ENTER_NAME" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-ops-green mb-2 uppercase tracking-wider">Contact_Freq</label>
                <input type="email" name="email" id="email" required className="w-full bg-ops-black border border-ops-green/30 text-ops-green p-3 focus:outline-none focus:border-ops-green focus:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all font-mono placeholder-ops-green/30" placeholder="ENTER_EMAIL" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-ops-green mb-2 uppercase tracking-wider">Payload</label>
                <textarea name="message" id="message" rows="4" required className="w-full bg-ops-black border border-ops-green/30 text-ops-green p-3 focus:outline-none focus:border-ops-green focus:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all font-mono placeholder-ops-green/30" placeholder="ENTER_MESSAGE_CONTENT..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full btn-ops group">
                  Initiate_Transmission
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;