import React from 'react';
import { FaTimes, FaServer, FaCode, FaUserTie } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ConsultingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const services = [
        {
            id: 'backend',
            icon: <FaServer size={32} />,
            title: 'Backend Development',
            desc: 'Building robust APIs and scalable systems. I can help architect and implement your core logic in Python, Node, or Go.',
            price: 'Project Based'
        },
        {
            id: 'fullstack',
            icon: <FaCode size={32} />,
            title: 'Full Stack Support',
            desc: 'Need a hand with React components or connecting the frontend to the DB? I can jump in and help ship features.',
            price: 'Flexible'
        },
        {
            id: 'chat',
            icon: <FaUserTie size={32} />,
            title: 'Peer Discussion',
            desc: 'Always happy to chat about tech, look at your side project, or discuss architecture ideas. No strings attached.',
            price: 'Free'
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
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative w-full max-w-4xl bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >

                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div>
                                <h2 className="text-xl font-hero font-bold text-white tracking-tighter leading-none">
                                    COLLABORATION.
                                </h2>
                                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1">AVAILABLE SERVICES</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-white transition-colors p-2"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-grow overflow-y-auto p-6 md:p-10">

                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                {services.map((service) => (
                                    <div key={service.id} className="bg-white/5 border border-white/5 p-5 hover:border-white/20 transition-all group">
                                        <div className="text-gray-400 mb-4 group-hover:text-electric-violet transition-colors">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed mb-4 min-h-[60px]">
                                            {service.desc}
                                        </p>
                                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border-t border-white/5 pt-3">
                                            {service.price}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Contact / Action - Clean Bar */}
                            <div className="border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/[0.02]">
                                <div className="text-left">
                                    <h4 className="text-lg font-bold text-white mb-1">Ready to start?</h4>
                                    <p className="text-xs text-gray-500">I usually respond within 24 hours.</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href="mailto:athul@example.com?subject=Project%20Inquiry"
                                        className="px-6 py-3 border border-white/10 text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-colors uppercase"
                                    >
                                        Email
                                    </a>
                                    <a
                                        href="https://calendly.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-white text-black text-xs font-bold tracking-widest hover:bg-electric-violet hover:text-white transition-colors uppercase"
                                    >
                                        Book Call
                                    </a>
                                </div>
                            </div>

                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ConsultingModal;
