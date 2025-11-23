import React from 'react';

const TacticalBorder = ({ children, className = "", delay = 0 }) => {
    return (
        <div className={`relative ${className}`}>
            {/* SVG Container for Drawing Effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full overflow-visible">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="none"
                        stroke="rgba(0, 229, 255, 0.3)" /* Electric Cyan */
                        strokeWidth="1"
                        className="draw-path"
                        style={{ animationDelay: `${delay}s` }}
                    />
                </svg>
            </div>

            {/* Technical Markers - Corners */}
            {/* Top Left Crosshair */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-ops-green z-10"></div>
            <div className="absolute top-2 -left-3 text-[8px] font-mono text-ops-green/50">[0,0]</div>

            {/* Top Right L-Bracket */}
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-ops-green z-10"></div>

            {/* Bottom Left L-Bracket */}
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-ops-green z-10"></div>

            {/* Bottom Right Crosshair */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-ops-green z-10"></div>
            <div className="absolute bottom-2 -right-8 text-[8px] font-mono text-ops-green/50">[MAX,MAX]</div>

            {/* Mid-point Markers */}
            <div className="absolute top-1/2 -left-1 w-1 h-2 bg-ops-green/50"></div>
            <div className="absolute top-1/2 -right-1 w-1 h-2 bg-ops-green/50"></div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default TacticalBorder;
