// src/pages/ArchitectPage.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCENARIOS, COMPONENTS, calculateResult } from '../utils/GameEngine';
import { FaServer, FaDatabase, FaNetworkWired, FaMemory, FaMicrochip, FaGlobe, FaInfoCircle } from 'react-icons/fa';

const ArchitectPage = () => {
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [selectedComponents, setSelectedComponents] = useState([]);
    const [simulationStatus, setSimulationStatus] = useState('IDLE'); // IDLE, RUNNING, RESULT
    const [result, setResult] = useState(null);
    const [logs, setLogs] = useState([]);
    const [showIntro, setShowIntro] = useState(false);

    const scenario = SCENARIOS[currentScenarioIndex];

    const toggleComponent = (id) => {
        if (simulationStatus === 'RUNNING') return;
        setSelectedComponents(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    const runSimulation = () => {
        setSimulationStatus('RUNNING');
        setLogs([]);

        const steps = [
            "Initializing Virtual Environment...",
            "Allocating Resources...",
            "Deploying Architecture...",
            "Running Traffic Simulation...",
            "Analyzing Metrics..."
        ];

        steps.forEach((step, index) => {
            setTimeout(() => {
                setLogs(prev => [...prev, `> ${step}`]);
            }, index * 800);
        });

        setTimeout(() => {
            const res = calculateResult(scenario, selectedComponents);
            setResult(res);
            setSimulationStatus('RESULT');
        }, steps.length * 800 + 500);
    };

    const resetLevel = () => {
        setSelectedComponents([]);
        setSimulationStatus('IDLE');
        setResult(null);
        setLogs([]);
    };

    const nextLevel = () => {
        if (currentScenarioIndex < SCENARIOS.length - 1) {
            setCurrentScenarioIndex(prev => prev + 1);
            resetLevel();
        } else {
            // Game Over / Win logic could go here
            alert("ALL MISSIONS COMPLETE. SYSTEM ARCHITECT CERTIFIED.");
            setCurrentScenarioIndex(0);
            resetLevel();
        }
    };

    const getIcon = (type) => {
        switch (type) {
            case 'Load Balancer': return <FaNetworkWired />;
            case 'Database': return <FaDatabase />;
            case 'Cache': return <FaMemory />;
            case 'CDN': return <FaGlobe />;
            case 'Compute': return <FaServer />;
            default: return <FaMicrochip />;
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 text-ops-green font-mono relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

            {/* Intro Modal */}
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-ops-black border border-ops-green p-8 max-w-2xl w-full shadow-[0_0_50px_rgba(0,255,65,0.2)] relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-ops-green"></div>
                            <h2 className="text-3xl font-bold mb-6 tracking-widest text-white text-center border-b border-gray-800 pb-4">
                                SYSTEM ARCHITECT SIMULATOR
                            </h2>
                            <div className="space-y-4 text-sm text-gray-300 mb-8">
                                <p className="text-lg">
                                    <span className="text-ops-green font-bold">OBJECTIVE:</span> Design a system architecture that meets the client's requirements for <span className="text-white">Capacity</span>, <span className="text-white">Reliability</span>, and <span className="text-white">Latency</span>.
                                </p>
                                <div className="bg-black/50 p-4 border border-gray-800 rounded">
                                    <p className="text-ops-green font-bold mb-2">INSTRUCTIONS:</p>
                                    <ul className="list-disc list-inside space-y-2 pl-2">
                                        <li>Review the <span className="text-white">Mission Briefing</span> on the left.</li>
                                        <li>Select components from the <span className="text-white">Blueprint</span> on the right.</li>
                                        <li>Ensure you stay within <span className="text-white">Budget</span>.</li>
                                        <li>Click <span className="text-ops-green border border-ops-green/30 px-1 text-[10px]">INITIATE_SIMULATION</span> to test your build.</li>
                                    </ul>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowIntro(false)}
                                className="w-full py-4 bg-ops-green text-black font-bold tracking-[0.2em] text-xl hover:bg-green-400 transition-colors uppercase"
                            >
                                Enter Simulation
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-widest text-white">SYSTEM_ARCHITECT</h1>
                        <p className="text-xs text-ops-green mt-1">v2.4.0 // STABLE_BUILD</p>
                    </div>
                    <button
                        onClick={() => setShowIntro(true)}
                        className="flex items-center gap-2 px-4 py-2 border border-ops-green/50 hover:bg-ops-green/10 text-xs tracking-widest transition-colors text-ops-green"
                    >
                        <FaInfoCircle /> MISSION_BRIEF
                    </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Left Panel: Briefing & Console */}
                    <div className="space-y-6">
                        {/* Scenario Card */}
                        <div className="border border-ops-green/30 bg-ops-black/80 p-6 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-ops-green/50"></div>
                            <h2 className="text-2xl font-bold mb-2 tracking-widest">{scenario.title}</h2>
                            <p className="text-gray-400 mb-4">{scenario.description}</p>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between border-b border-gray-800 pb-1">
                                    <span>BUDGET:</span>
                                    <span className="text-white">${scenario.budget}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-800 pb-1">
                                    <span>REQ_CAPACITY:</span>
                                    <span className="text-white">{scenario.requirements.minCapacity} RPS</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-800 pb-1">
                                    <span>MAX_LATENCY:</span>
                                    <span className="text-white">{scenario.requirements.maxLatency}ms</span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xs uppercase tracking-widest text-ops-green/70 mb-2">Constraints:</h3>
                                <ul className="list-disc list-inside text-xs text-gray-500">
                                    {scenario.constraints.map((c, i) => <li key={i}>{c}</li>)}
                                </ul>
                            </div>
                        </div>

                        {/* Simulation Console */}
                        <div className="border border-ops-green/30 bg-black p-4 h-64 overflow-y-auto font-mono text-sm shadow-inner shadow-green-900/20">
                            <div className="text-gray-500 mb-2">{'// SYSTEM_CONSOLE'}</div>
                            {logs.map((log, i) => (
                                <div key={i} className="mb-1 text-ops-green animate-pulse-fast">{log}</div>
                            ))}
                            {simulationStatus === 'RESULT' && result && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={`mt-4 p-4 border ${result.success ? 'border-green-500 bg-green-900/20' : 'border-red-500 bg-red-900/20'}`}
                                >
                                    <h3 className={`text-xl font-bold mb-2 ${result.success ? 'text-green-400' : 'text-red-500'}`}>
                                        {result.message}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                                        <div>COST: ${result.stats.cost}</div>
                                        <div>CAPACITY: {result.stats.capacity}</div>
                                        <div>LATENCY: {result.stats.latency}ms</div>
                                        <div>RELIABILITY: {(result.stats.reliability * 100).toFixed(2)}%</div>
                                    </div>

                                    <div className="mt-4 flex gap-4">
                                        <button onClick={resetLevel} className="px-4 py-2 border border-gray-600 hover:bg-gray-800 text-xs">
                                            RETRY
                                        </button>
                                        {result.success && (
                                            <button onClick={nextLevel} className="px-4 py-2 bg-ops-green text-black font-bold hover:bg-green-400 text-xs">
                                                NEXT_MISSION &gt;&gt;
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Right Panel: Blueprint / Component Grid */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold tracking-widest">BLUEPRINT_COMPONENTS</h3>
                            <div className="text-sm">
                                COST: <span className={`${calculateResult(scenario, selectedComponents).stats.cost > scenario.budget ? 'text-red-500' : 'text-white'}`}>
                                    ${calculateResult(scenario, selectedComponents).stats.cost}
                                </span> / ${scenario.budget}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px] overflow-y-auto pr-2 custom-scrollbar p-2">
                            {COMPONENTS.map(comp => {
                                const isSelected = selectedComponents.includes(comp.id);
                                return (
                                    <motion.div
                                        key={comp.id}
                                        onClick={() => toggleComponent(comp.id)}
                                        className={`p-4 border cursor-pointer relative overflow-hidden group transition-all duration-300 ease-out min-h-[180px] flex flex-col justify-between ${isSelected
                                            ? 'border-ops-green bg-ops-green/10 shadow-[0_0_20px_rgba(0,255,65,0.3)] scale-[1.02]'
                                            : 'border-gray-700 bg-ops-black/50 hover:border-ops-green hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] hover:-translate-y-1'
                                            }`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-ops-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative z-20">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="text-3xl text-ops-green drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">{getIcon(comp.type)}</div>
                                                <div className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded bg-black/50">
                                                    ${comp.cost}
                                                </div>
                                            </div>
                                            <h4 className="font-bold text-base mb-1 text-white group-hover:text-ops-green transition-colors">{comp.name}</h4>
                                            <div className="text-xs text-gray-300 font-semibold tracking-wide mb-3">{comp.type}</div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-500 relative z-20 border-t border-gray-800/50 pt-2 mt-auto">
                                            <div>CAP: {comp.stats.capacity}</div>
                                            <div>LAT: {comp.stats.latency}ms</div>
                                        </div>

                                        {isSelected && (
                                            <>
                                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-r-[24px] border-t-transparent border-r-ops-green z-10"></div>
                                                <div className="absolute inset-0 border border-ops-green/50 animate-pulse z-0"></div>
                                            </>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>

                        <button
                            onClick={runSimulation}
                            disabled={simulationStatus === 'RUNNING' || simulationStatus === 'RESULT'}
                            className={`w-full py-4 text-lg font-bold tracking-widest border transition-all ${simulationStatus === 'RUNNING'
                                ? 'border-gray-600 text-gray-600 cursor-not-allowed'
                                : 'border-ops-green text-ops-green hover:bg-ops-green hover:text-black shadow-[0_0_20px_rgba(0,255,65,0.3)]'
                                }`}
                        >
                            {simulationStatus === 'RUNNING' ? 'SIMULATION_IN_PROGRESS...' : 'INITIATE_SIMULATION'}
                        </button>
                    </div >
                </div>
            </div >
        </div >
    );
};

export default ArchitectPage;
