// src/components/InteractiveGrid.js
import React, { useEffect, useRef } from 'react';

const InteractiveGrid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Grid Configuration
        const gridSize = 50; // Spacing between lines
        const gridColor = 'rgba(26, 10, 46, 1)'; // Very dark purple #1a0a2e
        const glowColor = '139, 92, 246'; // #8B5CF6 (Electric Violet) in RGB
        const glowRadius = 200; // Radius of influence for the cursor

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background (optional, effectively transparent to let body bg show)
            // ctx.fillStyle = '#050505';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            const width = canvas.width;
            const height = canvas.height;

            // Draw Vertical Lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.strokeStyle = gridColor;
                ctx.lineWidth = 1;
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Draw Horizontal Lines
            for (let y = 0; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.strokeStyle = gridColor;
                ctx.lineWidth = 1;
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Draw Glowing Intersections
            // We only need to check intersections near the mouse to save performance
            // Find the nearest grid lines to the mouse
            const startX = Math.floor((mouse.x - glowRadius) / gridSize) * gridSize;
            const endX = Math.ceil((mouse.x + glowRadius) / gridSize) * gridSize;
            const startY = Math.floor((mouse.y - glowRadius) / gridSize) * gridSize;
            const endY = Math.ceil((mouse.y + glowRadius) / gridSize) * gridSize;

            for (let x = startX; x <= endX; x += gridSize) {
                for (let y = startY; y <= endY; y += gridSize) {
                    const dist = Math.hypot(x - mouse.x, y - mouse.y);

                    if (dist < glowRadius) {
                        const alpha = 1 - Math.pow(dist / glowRadius, 2); // Quadratic falloff for smooth edge

                        // Draw glow bloom
                        ctx.beginPath();
                        ctx.fillStyle = `rgba(${glowColor}, ${alpha * 0.6})`;
                        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
                        ctx.fill();

                        // Draw brighter core
                        ctx.beginPath();
                        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                        ctx.arc(x, y, 0.5, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            // Draw Mouse Cursor Glow (General Ambience)
            const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius * 1.5);
            gradient.addColorStop(0, `rgba(${glowColor}, 0.05)`);
            gradient.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

export default InteractiveGrid;
