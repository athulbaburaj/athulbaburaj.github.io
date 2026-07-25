import { FaUsers, FaBolt, FaCubes } from 'react-icons/fa';

const Philosophy = () => {
    const pillars = [
        {
            icon: <FaUsers />,
            title: "Closest to the Problem",
            desc: "The best spec comes from sitting with the people who have the problem. I've been solutions architect across internal service mergers — absorbing constraints from teams that didn't agree yet, and turning that into something that shipped."
        },
        {
            icon: <FaBolt />,
            title: "Ship, Then Sharpen",
            desc: "A working prototype answers questions a document can't. I built the frontend for a cloud migration orchestrator to unblock a team's POC, then hardened it — validators, automation, the unglamorous parts — once the shape was proven."
        },
        {
            icon: <FaCubes />,
            title: "Primitives Over Abstractions",
            desc: "I've built a distributed orchestrator on Linux namespaces, cgroups and gRPC — because understanding the substrate is what separates engineers who use platforms from engineers who build them."
        }
    ];

    return (
        <section className="py-16 relative">
            <div className="w-full">

                {/* Header */}
                <div className="mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary leading-none uppercase">
                            Engineering Philosophy.
                        </h2>
                        <span className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase hidden md:block">
                            Embedded // Iterative // Deep
                        </span>
                    </div>
                    <div className="h-px bg-hairline w-full mt-3" />
                </div>

                {/* Rows */}
                <div className="flex flex-col">
                    {pillars.map((pillar, idx) => (
                        <div
                            key={idx}
                            className="grid md:grid-cols-[120px_1fr] gap-x-8 gap-y-3 py-8 border-b border-hairline"
                        >
                            {/* Label column: index + icon */}
                            <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
                                <span className="text-xl text-muted">
                                    {pillar.icon}
                                </span>
                                <span className="font-mono text-[10px] tracking-[0.3em] text-faint">
                                    {`0${idx + 1}`}
                                </span>
                            </div>

                            {/* Value column: title + description */}
                            <div>
                                <h3 className="text-base font-bold text-primary mb-2 leading-snug">
                                    {pillar.title}
                                </h3>
                                <p className="text-secondary text-sm leading-relaxed measure">
                                    {pillar.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Philosophy;
