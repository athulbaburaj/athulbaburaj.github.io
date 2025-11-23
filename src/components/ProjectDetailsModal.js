// src/components/ProjectDetailsModal.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaImage } from 'react-icons/fa';

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6" style={{ margin: 0 }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-ops-black/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-5xl max-h-[85vh] bg-ops-black border border-ops-green/50 shadow-[0_0_50px_rgba(0,229,255,0.15)] flex flex-col overflow-hidden rounded-sm"
                    >
                        {/* Header / Top Bar */}
                        <div className="flex items-center justify-between p-4 border-b border-ops-green/30 bg-ops-green/5">
                            <div className="flex items-center space-x-4">
                                <div className="text-xs font-mono text-ops-green/60">
                                    MISSION_ID: {project.date || 'UNKNOWN'} {'//'} CLASS: {project.classification || 'RESTRICTED'}
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-ops-green hover:text-white transition-colors p-2 hover:bg-ops-green/20 rounded-sm group"
                            >
                                <FaTimes size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-10">
                            <div className="grid lg:grid-cols-3 gap-10">

                                {/* Left Column: Details */}
                                <div className="lg:col-span-2 space-y-8">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                                            {project.title}
                                        </h2>
                                        <div className="flex items-center space-x-3 mb-6">
                                            <span className={`px-2 py-0.5 text-xs font-mono border ${project.status?.includes('COMPLETED') ? 'border-ops-green text-ops-green' : 'border-yellow-500 text-yellow-500'
                                                }`}>
                                                {project.status || 'STATUS_UNKNOWN'}
                                            </span>
                                            <span className="text-ops-green/50 text-sm font-mono">
                                                {'//'} {project.category}
                                            </span>
                                        </div>

                                        <div className="prose prose-invert max-w-none">
                                            <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-ops-green/30 pl-4">
                                                {project.description}
                                            </p>

                                            {project.details && (
                                                <div className="mt-6 text-gray-400 text-sm md:text-base font-mono whitespace-pre-line bg-ops-black/50 p-4 border border-white/5">
                                                    {project.details}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h3 className="text-sm font-mono text-ops-green/70 mb-3 uppercase tracking-widest border-b border-ops-green/20 pb-1 inline-block">
                                            Technical_Specifications
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-ops-green/10 border border-ops-green/20 text-ops-green text-xs font-mono hover:bg-ops-green/20 transition-colors cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-4 pt-4">
                                        {project.link && project.link !== '#' && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-ops flex items-center gap-2 group"
                                            >
                                                {project.link.includes('github') ? <FaGithub /> : <FaExternalLinkAlt />}
                                                <span>Access Source</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Right Column: Visual Intel */}
                                <div className="space-y-6">
                                    <h3 className="text-sm font-mono text-ops-green/70 mb-3 uppercase tracking-widest border-b border-ops-green/20 pb-1">
                                        Visual_Intel
                                    </h3>

                                    {project.images && project.images.length > 0 ? (
                                        <div className="space-y-4">
                                            {project.images.map((img, idx) => (
                                                <div key={idx} className="relative group overflow-hidden border border-ops-green/20 bg-ops-black">
                                                    <div className="absolute top-0 left-0 bg-ops-green/80 text-black text-[10px] font-mono px-1 z-10">
                                                        IMG_0{idx + 1}
                                                    </div>
                                                    <img
                                                        src={img}
                                                        alt={`${project.title} screenshot ${idx + 1}`}
                                                        className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                                    />
                                                    {/* Scanline overlay for images */}
                                                    <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none"></div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="border border-dashed border-ops-green/30 p-8 text-center flex flex-col items-center justify-center text-ops-green/40 h-64">
                                            <FaImage size={32} className="mb-2 opacity-50" />
                                            <span className="text-xs font-mono">NO_VISUAL_DATA_AVAILABLE</span>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-2 border-t border-ops-green/20 bg-ops-black text-[10px] font-mono text-ops-green/30 text-center uppercase tracking-widest">
                            Confidential // For Authorized Eyes Only // {new Date().getFullYear()}
                        </div>

                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ops-green"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-ops-green"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-ops-green"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ops-green"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ProjectDetailsModal;
