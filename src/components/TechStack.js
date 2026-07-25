const skills = [
    { category: "LANGUAGES",     items: ["Python", "Go", "Java", "C++", "C#"] },
    { category: "CLOUD & INFRA", items: ["GCP", "AWS", "Docker", "Kubernetes", "OpenShift", "Terraform", "Helm", "ArgoCD"] },
    { category: "AI / ML",       items: ["PyTorch", "LangChain", "LLM Fundamentals", "NLP"] },
    { category: "DATABASES",     items: ["PostgreSQL", "Cassandra", "MongoDB", "PG Vector"] },
];

const TechStack = () => (
    <section className="py-16 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
            <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary leading-none uppercase">
                        Technologies & Tools.
                    </h2>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase hidden md:block">
                        What I build with
                    </span>
                </div>
                <div className="h-px bg-hairline w-full mt-3" />
            </div>

            <div className="flex flex-col">
                {skills.map((category) => (
                    <div
                        key={category.category}
                        className="grid md:grid-cols-[120px_1fr] gap-x-8 gap-y-1.5 py-4 border-b border-hairline"
                    >
                        <h3 className="text-[10px] font-bold text-muted tracking-[0.25em] uppercase">
                            {category.category}
                        </h3>
                        <p className="text-secondary text-sm leading-relaxed measure">
                            {category.items.join(' · ')}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    </section>
);

export default TechStack;
