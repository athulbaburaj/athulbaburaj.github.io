// src/components/SystemStatus.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaServer, FaNetworkWired, FaDatabase, FaGlobeAsia, FaTimes } from 'react-icons/fa';

const SystemStatus = ({ isOpen, onClose }) => {
    // Simulated data for the traffic graph
    const [dataPoints, setDataPoints] = useState(Array(20).fill(50));

    useEffect(() => {
        if (!isOpen) return; // Only update when open
        const interval = setInterval(() => {
            setDataPoints(prev => {
                const newValue = Math.floor(Math.random() * 40) + 30; // Random value between 30 and 70
                return [...prev.slice(1), newValue];
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isOpen]);

    // Generate SVG path for the graph
    const generatePath = () => {
        const points = dataPoints.map((value, index) => {
            const x = (index / (dataPoints.length - 1)) * 100;
            return `${x},${100 - value}`;
        });
        return `M0,100 L${points.join(' L')} L100,100 Z`;
    };

    const linePath = () => {
        const points = dataPoints.map((value, index) => {
            const x = (index / (dataPoints.length - 1)) * 100;
            return `${x},${100 - value}`;
        });
        return `M${points.join(' L')}`;
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-ops-black border border-ops-green/50 p-6 md:p-8 relative overflow-hidden max-w-6xl w-full shadow-[0_0_30px_rgba(0,255,65,0.2)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-ops-green/50 hover:text-ops-green transition-colors"
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Header */}
                        <div className="flex justify-between items-center mb-6 border-b border-ops-green/20 pb-2 pr-8">
                            <h3 className="text-ops-green font-mono text-lg tracking-widest flex items-center">
                                <FaNetworkWired className="mr-2 animate-pulse" />
                                SYSTEM_DIAGNOSTICS // LIVE_FEED
                            </h3>
                            <div className="text-xs font-mono text-ops-green/50 hidden sm:block">
                                UPTIME: 99.99%
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Traffic Graph */}
                            <div className="lg:col-span-2 bg-black/50 border border-ops-green/10 p-4 relative h-48 md:h-64 rounded-sm overflow-hidden">
                                <div className="absolute top-2 left-2 text-xs font-mono text-ops-green/70 z-10">
                                    NETWORK_TRAFFIC_INBOUND (MB/s)
                                </div>

                                {/* Grid Lines */}
                                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
                                    {[...Array(24)].map((_, i) => (
                                        <div key={i} className="border-r border-b border-ops-green"></div>
                                    ))}
                                </div>

                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    {/* Fill Gradient */}
                                    <defs>
                                        <linearGradient id="trafficGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="rgba(0, 255, 65, 0.2)" />
                                            <stop offset="100%" stopColor="rgba(0, 255, 65, 0)" />
                                        </linearGradient>
                                    </defs>
                                    <motion.path
                                        d={generatePath()}
                                        fill="url(#trafficGradient)"
                                        stroke="none"
                                        initial={{ d: "M0,100 L100,100 Z" }}
                                        animate={{ d: generatePath() }}
                                        transition={{ type: "tween", ease: "linear", duration: 1 }}
                                    />
                                    {/* Line */}
                                    <motion.path
                                        d={linePath()}
                                        fill="none"
                                        stroke="#00ff41"
                                        strokeWidth="0.5"
                                        vectorEffect="non-scaling-stroke"
                                        animate={{ d: linePath() }}
                                        transition={{ type: "tween", ease: "linear", duration: 1 }}
                                    />
                                </svg>
                            </div>

                            {/* Status Indicators */}
                            <div className="space-y-4 font-mono text-sm">

                                {/* Region Info */}
                                <div className="flex items-center justify-between p-3 bg-ops-green/5 border border-ops-green/20">
                                    <div className="flex items-center text-ops-green/80">
                                        <FaGlobeAsia className="mr-3" />
                                        <span>SERVER_REGION</span>
                                    </div>
                                    <span className="text-white whitespace-nowrap">ASIA-SOUTH1</span>
                                </div>

                                {/* Database Status */}
                                <div className="flex items-center justify-between p-3 bg-ops-green/5 border border-ops-green/20">
                                    <div className="flex items-center text-ops-green/80">
                                        <FaDatabase className="mr-3" />
                                        <span>DATABASE_SHARD_01</span>
                                    </div>
                                    <span className="text-ops-green font-bold animate-pulse">ONLINE</span>
                                </div>

                                {/* Server Status */}
                                <div className="flex items-center justify-between p-3 bg-ops-green/5 border border-ops-green/20">
                                    <div className="flex items-center text-ops-green/80">
                                        <FaServer className="mr-3" />
                                        <span>LATENCY</span>
                                    </div>
                                    <span className="text-white">24ms</span>
                                </div>

                                {/* Security Status */}
                                <div className="p-3 bg-ops-green/5 border border-ops-green/20">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-ops-green/80">FIREWALL_INTEGRITY</span>
                                        <span className="text-white">100%</span>
                                    </div>
                                    <div className="w-full bg-ops-black h-1.5 mt-2">
                                        <div className="bg-ops-green h-full w-full shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SystemStatus;
