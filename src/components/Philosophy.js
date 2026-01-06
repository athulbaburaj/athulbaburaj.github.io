// src/components/Philosophy.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaNetworkWired, FaBolt } from 'react-icons/fa';

const Philosophy = () => {
    const pillars = [
        {
            icon: <FaLayerGroup />,
            title: "Holistic Design",
            desc: "Architecture isn't just about code. It's about how data flows, how systems fail, and how components evolve independently."
        },
        {
            icon: <FaNetworkWired />,
            title: "Scalable Systems",
            desc: "Building for today's 100 users and tomorrow's 1 million. I prioritize stateless services, horizontal scaling, and efficient caching strategies."
        },
        {
            icon: <FaBolt />,
            title: "Performance First",
            desc: "Latency is the new downtime. I obsess over database indexing, query optimization, and minimizing client-side overhead."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    };

    return (
        <section className="flex flex-col justify-center py-4 relative" style={{ minHeight: '45vh' }}>
            <motion.div
                className="container mx-auto px-6 max-w-screen-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >

                {/* Header */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none uppercase">
                        Engineering Philosophy.
                    </h2>
                    <p className="text-gray-400 text-xs max-w-lg mt-2 md:mt-0 text-right md:text-left hidden md:block">
                        Beyond code: Resilient, Efficient, Maintainable.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -2 }}
                            className="group p-4 border border-white/10 hover:border-electric-violet/50 bg-white/5 backdrop-blur-sm transition-all duration-300 rounded-sm"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="text-lg text-electric-violet group-hover:scale-110 transition-transform duration-300">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {pillar.title}
                                </h3>
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed font-light">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </section>
    );
};

export default Philosophy;
