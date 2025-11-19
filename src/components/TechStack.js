// src/components/TechStack.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "FRONTEND", items: ["React", "Redux", "TailwindCSS", "Framer Motion", "HTML5", "CSS3"] },
    { category: "BACKEND", items: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"] },
    { category: "CLOUD & DEVOPS", items: ["Google Cloud", "AWS", "Docker", "Kubernetes", "CI/CD", "Git"] },
    { category: "DATABASE", items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL", "NoSQL"] }
];

const TechStack = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex items-center justify-center mb-16">
                    <div className="h-px w-16 bg-ops-green/50"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center px-4 text-white tracking-widest uppercase drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">
                        SYSTEM_MODULES // INSTALLED_PACKAGES
                    </h2>
                    <div className="h-px w-16 bg-ops-green/50"></div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-ops-black/50 border border-ops-green/20 p-6 relative group hover:border-ops-green/50 transition-colors duration-300"
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ops-green/50"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-ops-green/50"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-ops-green/50"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ops-green/50"></div>

                            <h3 className="text-ops-green font-mono text-lg mb-4 border-b border-ops-green/20 pb-2 tracking-wider">
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-mono text-white/80 bg-ops-green/10 px-2 py-1 border border-ops-green/20 hover:bg-ops-green/20 hover:text-white transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechStack;
