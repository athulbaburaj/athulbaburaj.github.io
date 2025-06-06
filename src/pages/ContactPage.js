// src/pages/ContactPage.js
import React from 'react';
import { personalInfo } from '../data/resumeData';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  // Basic form handling (consider a service like Formspree for static sites if you want to receive emails from a form)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! (This is a demo - form submission not implemented). Please use the links below to get in touch.");
    // Here you would typically handle form submission, e.g., send data to a backend or email service.
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-emerald-400 mb-12">Get In Touch</h1>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Information Side */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-emerald-500/30 transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center text-lg text-gray-300 hover:text-emerald-400 transition-colors">
                <FaEnvelope className="mr-3 text-emerald-500" size={20}/> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center text-lg text-gray-300 hover:text-emerald-400 transition-colors">
                <FaPhone className="mr-3 text-emerald-500" size={20}/> {personalInfo.phone}
              </a>
              <a href={`https://www.${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-gray-300 hover:text-emerald-400 transition-colors">
                <FaLinkedin className="mr-3 text-emerald-500" size={20}/> LinkedIn Profile
              </a>
               <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-gray-300 hover:text-emerald-400 transition-colors">
                <FaGithub className="mr-3 text-emerald-500" size={20}/> GitHub Profile
              </a>
              <div className="flex items-center text-lg text-gray-300">
                <FaMapMarkerAlt className="mr-3 text-emerald-500" size={20}/> Bengaluru, India {/* From resume [cite: 1] */}
              </div>
            </div>
          </div>

          {/* Contact Form Side (Demo) */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-emerald-500/30 transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input type="text" name="name" id="name" required className="w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea name="message" id="message" rows="4" required className="w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  Send Message
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