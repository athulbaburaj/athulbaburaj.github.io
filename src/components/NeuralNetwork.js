// src/components/NeuralNetwork.js
import React, { useRef, useEffect, useState } from 'react';

const NeuralNetwork = ({ trainingMode }) => {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Configuration
        const particleCount = 80;
        const connectionDistance = 150;
        const mouseDistance = 200;

        // Mouse position
        let mouse = { x: null, y: null };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;

                // Target position for training mode (forming "AI" roughly)
                // Simple grid formation for "AI" text simulation or just a cluster
                this.targetX = Math.random() * canvas.width;
                this.targetY = Math.random() * canvas.height;
            }

            update() {
                if (trainingMode) {
                    // Move towards center/target
                    const dx = (canvas.width / 2) + (this.baseX - canvas.width / 2) * 0.85 - this.x;
                    const dy = (canvas.height / 2) + (this.baseY - canvas.height / 2) * 0.85 - this.y;
                    this.x += dx * 0.05;
                    this.y += dy * 0.05;
                } else {
                    // Normal movement
                    this.x += this.vx;
                    this.y += this.vy;

                    // Mouse interaction
                    if (mouse.x != null) {
                        let dx = mouse.x - this.x;
                        let dy = mouse.y - this.y;
                        let distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < mouseDistance) {
                            const forceDirectionX = dx / distance;
                            const forceDirectionY = dy / distance;
                            const maxDistance = mouseDistance;
                            const force = (maxDistance - distance) / maxDistance;
                            const directionX = forceDirectionX * force * this.density;
                            const directionY = forceDirectionY * force * this.density;
                            this.x -= directionX;
                            this.y -= directionY;
                        }
                    }

                    // Bounce off edges
                    if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                    if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
                }
            }

            draw() {
                ctx.fillStyle = '#00e5ff';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw connections
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 229, 255, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;
        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [dimensions, trainingMode]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.4 }}
        />
    );
};

export default NeuralNetwork;
