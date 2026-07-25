// src/constants/animations.js
// Shared Framer Motion variants — import instead of redeclaring per component
//
// The site deliberately avoids scroll-triggered reveal-on-scroll props and
// page-load stagger animations — content is simply present. The only two animated
// moments left are the Hero clip-reveal (uses these variants) and the route
// transition in src/App.js (`pageVariants`, defined locally there since it
// isn't reused elsewhere).

// Used by Hero
// Critically damped spring (stiffness 280, damping 28) — arrives decisively, zero overshoot
export const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.10, delayChildren: 0.05 }
    }
};

export const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 280, damping: 28 }
    }
};
