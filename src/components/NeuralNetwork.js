import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NeuralNetwork = ({ trainingMode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Resize handling
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Node configuration
        const nodeCount = 40;
        const connectionDistance = 150;
        const nodes = [];

        // Initialize Nodes
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * (trainingMode ? 1.5 : 0.5), // Faster in training mode
                vy: (Math.random() - 0.5) * (trainingMode ? 1.5 : 0.5),
                radius: Math.random() * 2 + 1,
            });
        }

        const draw = () => {
            // Trails effect if training mode, otherwise clear
            if (trainingMode) {
                ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // Minimal trail
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            const activeColor = '139, 92, 246'; // Electric Violet RGB

            // Update and Draw Nodes
            nodes.forEach((node, i) => {
                // Movement
                node.x += node.vx * (trainingMode ? 2 : 1);
                node.y += node.vy * (trainingMode ? 2 : 1);

                // Bounce
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Draw Node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${activeColor}, ${trainingMode ? 0.8 : 0.5})`;
                ctx.fill();

                // Draw Connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${activeColor}, ${1 - dist / connectionDistance})`;
                        ctx.lineWidth = trainingMode ? 0.8 : 0.4;
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();

                        // Active pulse packet in training mode
                        if (trainingMode && Math.random() > 0.95) {
                            const packetX = node.x + (other.x - node.x) * 0.5;
                            const packetY = node.y + (other.y - node.y) * 0.5;
                            ctx.beginPath();
                            ctx.fillStyle = '#fff';
                            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [trainingMode]);

    return (
        <motion.canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1 }}
        />
    );
};

export default NeuralNetwork;
