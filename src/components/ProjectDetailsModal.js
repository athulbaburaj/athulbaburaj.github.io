// src/components/ProjectDetailsModal.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "tween", duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-obsidian border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header / Top Bar */}
                        <div className="flex items-center justify-end p-6 absolute top-0 right-0 z-50">
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-white transition-colors p-2"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-grow overflow-y-auto custom-scrollbar p-8 md:p-16">
                            <div className="grid lg:grid-cols-2 gap-16">

                                {/* Left Column: Visuals */}
                                <div className="space-y-8">
                                    {project.images && project.images.length > 0 ? (
                                        project.images.map((img, idx) => (
                                            <div key={idx} className="w-full bg-subtle-gray overflow-hidden">
                                                <img
                                                    src={img}
                                                    alt={`${project.title} screenshot ${idx + 1}`}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="w-full aspect-video bg-subtle-gray flex items-center justify-center text-gray-700 font-mono text-xs">
                                            [NO_IMAGE_AVAILABLE]
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Details */}
                                <div className="space-y-12">
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                                            {project.title}
                                        </h2>

                                        <div className="flex flex-wrap gap-4 mb-8">
                                            {project.tech && project.tech.map((tech, i) => (
                                                <span key={i} className="text-xs font-bold text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                                            {project.description}
                                        </p>

                                        {project.details && (
                                            <div className="text-gray-400 text-sm leading-relaxed space-y-4 border-l border-white/10 pl-6">
                                                {project.details.split('\n').map((para, i) => (
                                                    <p key={i}>{para}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-6 pt-6 border-t border-white/10">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-white hover:text-electric-violet transition-colors font-bold uppercase tracking-widest text-sm"
                                            >
                                                <FaGithub size={18} />
                                                <span>View Source</span>
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-white hover:text-electric-violet transition-colors font-bold uppercase tracking-widest text-sm"
                                            >
                                                <FaExternalLinkAlt size={16} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ProjectDetailsModal;
