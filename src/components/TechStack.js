// src/components/TechStack.js
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaAws,
    FaDocker, FaGitAlt, FaDatabase, FaInfinity, FaNetworkWired,
    FaLayerGroup
} from 'react-icons/fa';
import {
    SiRedux, SiTailwindcss, SiFramer, SiExpress, SiDjango,
    SiGraphql, SiGooglecloud, SiKubernetes, SiPostgresql,
    SiMongodb, SiRedis, SiFirebase
} from 'react-icons/si';

// Icon Mapping
const iconMap = {
    "React": <FaReact />,
    "Redux": <SiRedux />,
    "TailwindCSS": <SiTailwindcss />,
    "Framer Motion": <SiFramer />,
    "HTML5": <FaHtml5 />,
    "CSS3": <FaCss3Alt />,
    "Node.js": <FaNodeJs />,
    "Express": <SiExpress />,
    "Python": <FaPython />,
    "Django": <SiDjango />,
    "REST APIs": <FaNetworkWired />,
    "GraphQL": <SiGraphql />,
    "Google Cloud": <SiGooglecloud />,
    "AWS": <FaAws />,
    "Docker": <FaDocker />,
    "Kubernetes": <SiKubernetes />,
    "CI/CD": <FaInfinity />,
    "Git": <FaGitAlt />,
    "PostgreSQL": <SiPostgresql />,
    "MongoDB": <SiMongodb />,
    "Redis": <SiRedis />,
    "Firebase": <SiFirebase />,
    "SQL": <FaDatabase />,
    "NoSQL": <FaLayerGroup />
};

const skills = [
    { category: "FRONTEND", items: ["React", "Redux", "TailwindCSS", "Framer Motion", "HTML5", "CSS3"] },
    { category: "BACKEND", items: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"] },
    { category: "CLOUD & DEVOPS", items: ["Google Cloud", "AWS", "Docker", "Kubernetes", "CI/CD", "Git"] },
    { category: "DATABASE", items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL", "NoSQL"] }
];

const SkillChip = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="group relative flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded hover:border-electric-violet/50 hover:bg-white/10 transition-colors cursor-default"
        >
            <span className="text-gray-400 group-hover:text-white transition-colors text-lg">
                {iconMap[item]}
            </span>
            <span className="text-xs font-semibold text-gray-500 group-hover:text-electric-violet tracking-wider uppercase transition-colors">
                {item}
            </span>
        </motion.div>
    );
};

const TechStack = () => {
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

                <motion.div variants={itemVariants} className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none uppercase">
                        Technologies & Tools.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {skills.map((category) => (
                        <motion.div
                            key={category.category}
                            variants={itemVariants}
                            className="flex flex-col gap-2 border-l border-white/10 pl-4"
                        >
                            <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item, i) => (
                                    <SkillChip key={item} item={item} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </section>
    );
};

export default TechStack;
