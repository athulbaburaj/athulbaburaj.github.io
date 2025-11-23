import React, { useMemo, useRef, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { FaCompressArrowsAlt } from 'react-icons/fa';

const ProjectGraph = ({ projects, activeTab, onProjectSelect }) => {
    const graphRef = useRef();

    // Transform data into graph format
    const graphData = useMemo(() => {
        const nodes = [];
        const links = [];

        // 1. Anchor Node (The Sun)
        const anchorId = `ANCHOR-${activeTab}`;
        nodes.push({
            id: anchorId,
            name: activeTab,
            type: 'anchor',
            val: 40,
            color: '#00e5ff'
        });

        projects.forEach((project) => {
            // 2. Project Nodes (Planets)
            const projectId = project.title;
            nodes.push({
                id: projectId,
                name: project.title,
                type: 'project',
                val: 20,
                project: project, // Store full data
                color: '#00e5ff'
            });

            // Link Anchor -> Project
            links.push({
                source: anchorId,
                target: projectId,
                distance: 100,
                color: 'rgba(0, 229, 255, 0.2)'
            });

            // 3. Tech Nodes (Moons)
            if (project.tech) {
                project.tech.forEach((tech) => {
                    const techId = `${projectId}-${tech}`;
                    // Avoid duplicate tech nodes if possible, or just unique IDs per project-tech combo
                    // For visual simplicity, unique IDs per project-tech creates a distinct cluster per project
                    nodes.push({
                        id: techId,
                        name: tech,
                        type: 'tech',
                        val: 5,
                        color: 'rgba(0, 229, 255, 0.5)'
                    });

                    // Link Project -> Tech
                    links.push({
                        source: projectId,
                        target: techId,
                        distance: 30,
                        color: 'rgba(0, 229, 255, 0.1)'
                    });
                });
            }
        });

        return { nodes, links };
    }, [projects, activeTab]);

    // Custom Node Rendering
    const drawNode = (node, ctx, globalScale) => {
        const label = node.name;
        const fontSize = 12 / globalScale;
        ctx.font = `${fontSize}px "Share Tech Mono", monospace`;

        // const textWidth = ctx.measureText(label).width;
        // const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

        if (node.type === 'anchor') {
            // Anchor: Large Glowing Ring
            ctx.beginPath();
            ctx.arc(node.x, node.y, 15, 0, 2 * Math.PI, false);
            ctx.strokeStyle = node.color;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 15;
            ctx.shadowColor = node.color;
            ctx.stroke();
            ctx.shadowBlur = 0; // Reset

            // Inner Text
            ctx.fillStyle = node.color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, node.x, node.y);
        } else if (node.type === 'project') {
            // Project: Medium Ring
            ctx.beginPath();
            ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
            ctx.strokeStyle = node.color;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Label below
            ctx.fillStyle = 'rgba(0, 229, 255, 0.8)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(label, node.x, node.y + 12);
        } else if (node.type === 'tech') {
            // Tech: Small Dot
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2, 0, 2 * Math.PI, false);
            ctx.fillStyle = node.color;
            ctx.fill();

            // Faint Label
            if (globalScale > 1.5) { // Only show tech labels when zoomed in
                ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(label, node.x, node.y + 4);
            }
        }
    };

    // Auto-zoom on data change
    useEffect(() => {
        // Small timeout to let the graph settle
        const timer = setTimeout(() => {
            if (graphRef.current) {
                graphRef.current.zoomToFit(400, 50); // duration, padding
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [graphData]); // Re-run when graph data changes (e.g. tab switch)

    const handleNodeClick = (node) => {
        if (node.type === 'project') {
            // Zoom in
            graphRef.current.centerAt(node.x, node.y, 1000);
            graphRef.current.zoom(2.5, 1000);

            // Trigger selection
            onProjectSelect(node.project);
        } else if (node.type === 'anchor') {
            // Reset zoom
            graphRef.current.zoomToFit(400, 50);
        }
    };

    const handleResetZoom = () => {
        if (graphRef.current) {
            graphRef.current.zoomToFit(400, 50);
        }
    };

    return (
        <div className="w-full h-[60vh] border border-ops-green/20 bg-ops-black/40 relative overflow-hidden rounded-sm group">
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{ backgroundImage: 'radial-gradient(#00e5ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <ForceGraph2D
                ref={graphRef}
                graphData={graphData}
                nodeCanvasObject={drawNode}
                nodePointerAreaPaint={(node, color, ctx) => {
                    ctx.fillStyle = color;
                    const size = node.type === 'anchor' ? 20 : node.type === 'project' ? 12 : 4;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
                    ctx.fill();
                }}
                linkColor={() => 'rgba(0, 229, 255, 0.15)'}
                linkWidth={1}
                enableNodeDrag={false}
                onNodeClick={handleNodeClick}
                cooldownTicks={100}
                d3VelocityDecay={0.3} // Lower friction for more movement
                d3AlphaDecay={0.02} // Slower decay for longer settlement
                warmupTicks={50} // Pre-calculate layout
            />

            {/* Controls Overlay */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                    onClick={handleResetZoom}
                    className="p-2 bg-ops-black/80 border border-ops-green/30 text-ops-green hover:bg-ops-green/20 transition-all rounded-sm"
                    title="Reset View"
                >
                    <FaCompressArrowsAlt size={16} />
                </button>
            </div>

            {/* Instructions Overlay */}
            <div className="absolute bottom-4 left-4 text-ops-green/60 text-xs font-mono pointer-events-none bg-ops-black/50 p-2 rounded-sm border border-ops-green/10 backdrop-blur-sm">
                <div>&gt;&gt; DRAG TO PAN</div>
                <div>&gt;&gt; SCROLL TO ZOOM</div>
                <div>&gt;&gt; CLICK NODES TO EXPAND</div>
            </div>

            <div className="absolute bottom-4 right-4 text-ops-green/40 text-xs font-mono pointer-events-none">
                &gt;&gt; SECTOR_MAP_VISUALIZER // INTERACTIVE
            </div>
        </div>
    );
};

export default ProjectGraph;
