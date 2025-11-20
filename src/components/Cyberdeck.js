// src/components/Cyberdeck.js
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaShieldAlt, FaBug } from 'react-icons/fa';

const Cyberdeck = ({ isOpen, onClose }) => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    // Game State Refs (for performance in loop)
    const gameState = useRef({
        packets: [],
        particles: [],
        lastPacketTime: 0,
        packetInterval: 1000,
        score: 0,
        health: 100,
        isActive: false
    });

    const startGame = () => {
        setGameStarted(true);
        setGameOver(false);
        setScore(0);
        gameState.current = {
            packets: [],
            particles: [],
            lastPacketTime: 0,
            packetInterval: 1000,
            score: 0,
            health: 100,
            isActive: true
        };
    };

    useEffect(() => {
        if (!isOpen) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Resize canvas
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        // Game Loop
        const loop = (timestamp) => {
            if (!gameState.current.isActive) {
                if (gameState.current.health <= 0 && !gameOver) {
                    setGameOver(true);
                    setGameStarted(false);
                }
                // Still draw if game over to show last state or static
                if (!gameStarted && !gameOver) {
                    // Attract mode or idle
                }
                if (gameOver) {
                    // Game over screen handled by React UI overlay
                }
                if (!gameStarted && !gameOver) {
                    animationFrameId = requestAnimationFrame(loop);
                    return;
                }
            }

            // Clear
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Trails
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Spawn Packets
            if (timestamp - gameState.current.lastPacketTime > gameState.current.packetInterval) {
                gameState.current.packets.push({
                    x: Math.random() * canvas.width,
                    y: -20,
                    speed: Math.random() * 2 + 2 + (gameState.current.score / 500), // Speed up over time
                    size: Math.random() * 10 + 10,
                    type: Math.random() > 0.8 ? 'virus' : 'packet' // 20% chance of virus
                });
                gameState.current.lastPacketTime = timestamp;
                // Decrease interval
                gameState.current.packetInterval = Math.max(200, 1000 - (gameState.current.score / 2));
            }

            // Update & Draw Packets
            for (let i = gameState.current.packets.length - 1; i >= 0; i--) {
                const p = gameState.current.packets[i];
                p.y += p.speed;

                // Draw
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.type === 'virus' ? '#ff0000' : '#00ff41';
                ctx.fillStyle = p.type === 'virus' ? '#ff0000' : '#00ff41';
                ctx.font = `${p.size}px monospace`;
                ctx.fillText(p.type === 'virus' ? '☠' : '101', p.x, p.y);
                ctx.shadowBlur = 0;

                // Hit bottom (Server)
                if (p.y > canvas.height) {
                    gameState.current.health -= 10;
                    gameState.current.packets.splice(i, 1);

                    // Screen shake effect (visual only)
                    canvas.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
                    setTimeout(() => canvas.style.transform = 'none', 50);

                    if (gameState.current.health <= 0) {
                        gameState.current.isActive = false;
                        setGameOver(true);
                    }
                }
            }

            // Update & Draw Particles (Explosions)
            for (let i = gameState.current.particles.length - 1; i >= 0; i--) {
                const p = gameState.current.particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.05;

                if (p.life <= 0) {
                    gameState.current.particles.splice(i, 1);
                } else {
                    ctx.fillStyle = `rgba(0, 255, 65, ${p.life})`;
                    ctx.fillRect(p.x, p.y, 2, 2);
                }
            }

            // Draw UI (Health Bar)
            const barWidth = 300;
            const barHeight = 20;
            const x = (canvas.width - barWidth) / 2;
            const y = canvas.height - 40;

            ctx.strokeStyle = '#00ff41';
            ctx.strokeRect(x, y, barWidth, barHeight);

            ctx.fillStyle = gameState.current.health > 30 ? '#00ff41' : '#ff0000';
            ctx.fillRect(x + 2, y + 2, (barWidth - 4) * (gameState.current.health / 100), barHeight - 4);

            ctx.fillStyle = '#00ff41';
            ctx.font = '16px monospace';
            ctx.fillText(`SERVER_INTEGRITY: ${gameState.current.health}%`, x, y - 10);

            if (gameState.current.isActive) {
                animationFrameId = requestAnimationFrame(loop);
            }
        };

        // Click Handler (Shooting)
        const handleClick = (e) => {
            if (!gameState.current.isActive) return;

            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            // Check hits
            for (let i = gameState.current.packets.length - 1; i >= 0; i--) {
                const p = gameState.current.packets[i];
                const dist = Math.sqrt((p.x - clickX) ** 2 + (p.y - clickY) ** 2);

                if (dist < 50) { // Hit radius
                    // Destroy packet
                    gameState.current.packets.splice(i, 1);
                    gameState.current.score += 100;
                    setScore(gameState.current.score);

                    // Spawn particles
                    for (let j = 0; j < 10; j++) {
                        gameState.current.particles.push({
                            x: p.x,
                            y: p.y,
                            vx: (Math.random() - 0.5) * 5,
                            vy: (Math.random() - 0.5) * 5,
                            life: 1
                        });
                    }
                }
            }
        };

        canvas.addEventListener('mousedown', handleClick);
        animationFrameId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousedown', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isOpen, gameStarted, gameOver]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black font-mono"
                >
                    <canvas ref={canvasRef} className="absolute inset-0 cursor-crosshair" />

                    {/* UI Overlay */}
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none">
                        <div>
                            <h2 className="text-2xl text-ops-green font-bold tracking-widest">CYBERDECK // PACKET_DEFENDER</h2>
                            <p className="text-ops-green/60">PROTECT THE MAINFRAME</p>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl text-ops-green font-bold">{score}</div>
                            <div className="text-sm text-ops-green/60">SCORE</div>
                        </div>
                    </div>

                    {/* Start Screen */}
                    {!gameStarted && !gameOver && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                            <div className="text-center border border-ops-green p-10 bg-ops-black max-w-md">
                                <FaShieldAlt className="text-6xl text-ops-green mx-auto mb-6 animate-pulse" />
                                <h3 className="text-2xl text-white mb-4">SYSTEM_BREACH_DETECTED</h3>
                                <p className="text-ops-green/80 mb-8">
                                    Malicious data packets are flooding the server.
                                    <br />
                                    Manual firewall override engaged.
                                    <br /><br />
                                    CLICK TO DESTROY PACKETS.
                                </p>
                                <button
                                    onClick={startGame}
                                    className="px-8 py-3 bg-ops-green text-black font-bold hover:bg-white transition-colors"
                                >
                                    INITIATE_DEFENSE
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Game Over Screen */}
                    {gameOver && (
                        <div className="absolute inset-0 flex items-center justify-center bg-red-900/20 backdrop-blur-sm">
                            <div className="text-center border border-red-500 p-10 bg-black max-w-md shadow-[0_0_50px_rgba(255,0,0,0.5)]">
                                <FaBug className="text-6xl text-red-500 mx-auto mb-6" />
                                <h3 className="text-3xl text-red-500 mb-2">SYSTEM_CRASHED</h3>
                                <p className="text-white mb-6">FINAL SCORE: {score}</p>
                                <div className="flex gap-4 justify-center">
                                    <button
                                        onClick={startGame}
                                        className="px-6 py-2 border border-ops-green text-ops-green hover:bg-ops-green hover:text-black transition-colors"
                                    >
                                        REBOOT_SYSTEM
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                                    >
                                        ABORT
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-ops-green/50 hover:text-ops-green z-50 pointer-events-auto"
                    >
                        <FaTimes size={24} />
                    </button>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Cyberdeck;
