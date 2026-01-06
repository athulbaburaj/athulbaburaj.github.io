// src/pages/ArchitectPage.js
import React, { useState } from 'react';
import { SCENARIOS, COMPONENTS, calculateResult } from '../utils/GameEngine';
import { FaServer, FaDatabase, FaNetworkWired, FaMemory, FaMicrochip, FaGlobe, FaUndo, FaPlay } from 'react-icons/fa';


const ArchitectPage = () => {
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [selectedComponents, setSelectedComponents] = useState([]);
    const [simulationStatus, setSimulationStatus] = useState('IDLE');
    const [result, setResult] = useState(null);
    const [logs, setLogs] = useState([]);

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
            "Initializing environment...",
            "Allocating resources...",
            "Deploying architecture...",
            "Simulating traffic...",
            "Analyzing metrics..."
        ];

        steps.forEach((step, index) => {
            setTimeout(() => {
                setLogs(prev => [...prev, step]);
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
            alert("Simulation Complete. All scenarios passed.");
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

    const currentStats = calculateResult(scenario, selectedComponents).stats;

    return (
        <div className="min-h-screen py-12 relative px-6 max-w-screen-2xl mx-auto flex flex-col">

            {/* Header */}
            <div className="mb-12 border-b border-white/10 pb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl md:text-5xl font-hero font-bold text-white tracking-tighter leading-[0.9] mb-2">
                        SYSTEM <br /> SIMULATION.
                    </h1>
                    <p className="text-gray-400 text-xs font-mono tracking-widest uppercase">
                        Architectural Sandbox // Scenario {currentScenarioIndex + 1}
                    </p>
                </div>
                <div className="text-right hidden md:block">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Objective</div>
                    <div className="text-white font-bold text-lg">{scenario.title}</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 flex-grow">

                {/* Left Panel: Brief & Blueprint */}
                <div className="lg:col-span-4 space-y-6">

                    {/* Mission Brief */}
                    <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Mission Brief</h2>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">{scenario.description}</p>

                        <div className="space-y-2 border-t border-white/10 pt-4 text-xs font-mono">
                            <div className="flex justify-between">
                                <span className="text-gray-500">BUDGET</span>
                                <span className="text-white">${scenario.budget}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">CAPACITY</span>
                                <span className="text-white">{scenario.requirements.minCapacity} RPS</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">MAX LATENCY</span>
                                <span className="text-white">{scenario.requirements.maxLatency}ms</span>
                            </div>
                        </div>
                    </div>

                    {/* Blueprints */}
                    <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm flex-grow">
                        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Available Components</h2>
                        <div className="grid gap-2">
                            {COMPONENTS.map(comp => {
                                const isSelected = selectedComponents.includes(comp.id);
                                return (
                                    <button
                                        key={comp.id}
                                        onClick={() => toggleComponent(comp.id)}
                                        className={`flex items-center justify-between p-3 border transition-all duration-200 text-xs ${isSelected
                                            ? 'border-electric-violet bg-electric-violet/10 text-white'
                                            : 'border-white/10 bg-transparent text-gray-400 hover:border-white/30 hover:text-white'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-base opacity-70">{getIcon(comp.type)}</span>
                                            <span className="font-bold">{comp.name}</span>
                                        </div>
                                        <span className="font-mono opacity-60">${comp.cost}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Right Panel: Simulation & Output */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                    {/* Terminal / Visualizer */}
                    <div className="flex-grow bg-black/40 border border-white/10 p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden font-mono text-sm">

                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-violet to-transparent opacity-20"></div>

                        {/* Logs */}
                        <div className="space-y-2">
                            {logs.length === 0 && simulationStatus === 'IDLE' && (
                                <p className="text-gray-600 italic">&gt;&gt; System ready. Awaiting architecture...</p>
                            )}
                            {logs.map((log, i) => (
                                <p key={i} className="text-electric-violet">&gt;&gt; {log}</p>
                            ))}
                        </div>

                        {/* Result Overlay */}
                        {result && (
                            <div className="mt-8 p-6 bg-white/5 border-l-2 border-electric-violet backdrop-blur-md">
                                <h3 className={`text-xl font-bold mb-2 ${result.success ? 'text-white' : 'text-red-400'}`}>
                                    {result.message}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-[10px] uppercase tracking-widest text-gray-400">
                                    <div>
                                        <div className="mb-1 text-gray-600">Cost</div>
                                        <div className="text-white text-sm">${result.stats.cost}</div>
                                    </div>
                                    <div>
                                        <div className="mb-1 text-gray-600">Capacity</div>
                                        <div className="text-white text-sm">{result.stats.capacity}</div>
                                    </div>
                                    <div>
                                        <div className="mb-1 text-gray-600">Latency</div>
                                        <div className="text-white text-sm">{result.stats.latency}ms</div>
                                    </div>
                                    <div>
                                        <div className="mb-1 text-gray-600">Reliability</div>
                                        <div className="text-white text-sm">{(result.stats.reliability * 100).toFixed(1)}%</div>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-4">
                                    <button onClick={resetLevel} className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:bg-white/10 text-white text-xs font-bold tracking-widest">
                                        <FaUndo /> RETRY
                                    </button>
                                    {result.success && (
                                        <button onClick={nextLevel} className="px-6 py-2 bg-white text-black text-xs font-bold tracking-widest hover:bg-electric-violet hover:text-white transition-colors">
                                            NEXT LEVEL
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Status Footer */}
                        <div className="border-t border-white/10 pt-4 mt-auto flex justify-between items-center text-xs text-gray-500">
                            <div>
                                COST: <span className={currentStats.cost > scenario.budget ? 'text-red-500' : 'text-white'}>${currentStats.cost}</span> / ${scenario.budget}
                            </div>
                            <div className="uppercase tracking-widest flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${simulationStatus === 'IDLE' ? 'bg-gray-500' : 'bg-green-500 animate-pulse'}`}></div>
                                {simulationStatus}
                            </div>
                        </div>

                    </div>

                    {/* Run Button */}
                    <button
                        onClick={runSimulation}
                        disabled={simulationStatus === 'RUNNING' || simulationStatus === 'RESULT'}
                        className={`w-full py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 ${simulationStatus === 'RUNNING' || simulationStatus === 'RESULT'
                            ? 'bg-white/5 text-gray-600 cursor-not-allowed border border-white/5'
                            : 'bg-white text-black hover:bg-electric-violet hover:text-white border border-white'
                            }`}
                    >
                        <FaPlay className="text-xs" />
                        {simulationStatus === 'RUNNING' ? 'PROCESSING...' : 'INITIATE SIMULATION'}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ArchitectPage;
