import React from 'react';
import { FaSatelliteDish, FaLock, FaArrowRight } from 'react-icons/fa';

const ConsultingSection = ({ onOpen }) => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex items-center justify-center mb-12">
                    <div className="h-px w-16 bg-ops-green/50"></div>
                    <h2 className="text-3xl font-bold text-center px-4 text-white tracking-widest uppercase drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">
                        Secure_Channel
                    </h2>
                    <div className="h-px w-16 bg-ops-green/50"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-ops-black/80 border border-ops-green/30 p-8 md:p-12 rounded-sm relative group overflow-hidden">

                        {/* Background Tech Elements */}
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <FaSatelliteDish size={100} className="text-ops-green transform rotate-[-15deg]" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-ops-green/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

                            {/* Text Content */}
                            <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4 text-ops-green">
                                    <FaLock className="animate-pulse" />
                                    <span className="font-mono text-sm tracking-widest">PRIORITY_UPLINK // ENCRYPTED</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Architectural <span className="text-ops-green">Consulting</span>
                                </h3>
                                <p className="text-gray-400 max-w-lg leading-relaxed">
                                    Need expert advice on system design, scalability, or cloud architecture?
                                    Establish a secure link for a dedicated consulting session.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={onOpen}
                                className="group relative px-8 py-4 bg-ops-green/10 border border-ops-green text-ops-green font-mono font-bold tracking-wider hover:bg-ops-green hover:text-ops-black transition-all duration-300 flex items-center gap-3"
                            >
                                <span>ESTABLISH_UPLINK</span>
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-ops-green"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-ops-green"></div>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ConsultingSection;
