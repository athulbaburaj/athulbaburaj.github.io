import React from 'react';
import { FaTimes, FaServer, FaCode, FaUserTie, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ConsultingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const services = [
        {
            id: 'sys_design',
            icon: <FaServer size={32} />,
            title: 'System Design Review',
            desc: 'Deep dive into your architecture. Scalability analysis, bottleneck identification, and cloud infrastructure optimization.',
            price: 'Contract / Project'
        },
        {
            id: 'code_audit',
            icon: <FaCode size={32} />,
            title: 'Codebase Audit',
            desc: 'Comprehensive review of your code quality, security vulnerabilities, and performance patterns. React, Node, Python.',
            price: 'Hourly / Fixed'
        },
        {
            id: 'mentorship',
            icon: <FaUserTie size={32} />,
            title: 'Career Mentorship',
            desc: '1-on-1 guidance for aspiring Full-Stack Developers and Architects. Resume review, interview prep, and career pathing.',
            price: 'Pro Bono (Limited)'
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-5xl bg-ops-black border border-ops-green/30 shadow-[0_0_50px_rgba(0,255,65,0.1)] rounded-sm overflow-hidden flex flex-col max-h-[90vh]"
                    >

                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-ops-green/20 bg-ops-green/5">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-ops-green rounded-full animate-pulse"></div>
                                <h2 className="text-xl font-mono font-bold text-white tracking-widest">
                                    SECURE_UPLINK // CONSULTING_SERVICES
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-ops-green/70 hover:text-ops-green transition-colors p-2"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-grow overflow-y-auto p-6 md:p-10">

                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-white mb-4">Choose Your Protocol</h3>
                                <p className="text-gray-400 max-w-2xl mx-auto">
                                    Select a service module to initiate a collaboration. All communications are encrypted and confidential.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {services.map((service) => (
                                    <div key={service.id} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-ops-green/50 transition-colors group">
                                        <div className="text-ops-green mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                        <p className="text-gray-400 text-sm mb-4 leading-relaxed min-h-[80px]">
                                            {service.desc}
                                        </p>
                                        <div className="inline-block px-3 py-1 bg-ops-green/10 text-ops-green text-xs font-mono rounded-full border border-ops-green/20">
                                            {service.price}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Form / Action */}
                            <div className="bg-ops-green/5 border border-ops-green/20 p-8 rounded-sm text-center">
                                <h4 className="text-2xl font-bold text-white mb-6">Ready to Deploy?</h4>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                    <a
                                        href="mailto:athul@example.com?subject=Consulting%20Inquiry"
                                        className="px-8 py-3 bg-transparent border border-ops-green text-ops-green font-mono hover:bg-ops-green hover:text-ops-black transition-all duration-300 flex items-center gap-2"
                                    >
                                        <FaEnvelope /> Email Inquiry
                                    </a>
                                    <a
                                        href="https://calendly.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-ops-green text-ops-black font-mono font-bold hover:bg-emerald-500 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <FaCalendarAlt /> Book Session
                                    </a>
                                </div>
                                <p className="mt-4 text-xs text-gray-500 font-mono">
                                    *Response time typically under 24 hours for priority signals.
                                </p>
                            </div>

                        </div>

                        {/* Footer Scanline */}
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-ops-green/50 to-transparent opacity-50"></div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ConsultingModal;
