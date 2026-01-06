// src/components/SectionNavigation.js
import React, { useEffect, useState } from 'react';

const sections = [
    { id: 'hero', label: 'Start' },
    { id: 'work', label: 'Selected Work' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'tech', label: 'Technologies' }
];

const SectionNavigation = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-6 hidden md:flex">
            {sections.map((section) => (
                <div key={section.id} className="relative group flex items-center justify-end">
                    {/* Tooltip Label */}
                    <span
                        className={`absolute right-8 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeSection === section.id
                            ? 'opacity-100 translate-x-0 text-white'
                            : 'opacity-0 translate-x-2 text-gray-500 group-hover:opacity-100 group-hover:translate-x-0'
                            }`}
                    >
                        {section.label}
                    </span>

                    {/* Dot */}
                    <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === section.id
                            ? 'bg-electric-violet scale-125 shadow-[0_0_10px_rgba(139,92,246,0.8)]'
                            : 'bg-white/20 hover:bg-white/50'
                            }`}
                        aria-label={`Scroll to ${section.label}`}
                    />
                </div>
            ))}

            {/* Connection Line (Optional aesthetic) */}
            <div className="absolute top-0 bottom-0 right-1.5 w-px bg-white/5 -z-10 rounded-full" />
        </div>
    );
};

export default SectionNavigation;
