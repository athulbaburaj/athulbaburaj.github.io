// src/App.js
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import your components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ArchitectPage from './pages/ArchitectPage';
import ScrollToTop from './components/ScrollToTop';
import Terminal from './components/Terminal';
import SystemStatus from './components/SystemStatus';
import Cyberdeck from './components/Cyberdeck';
import ConsultingModal from './components/ConsultingModal';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50 // Start 50px below the final position
  },
  in: {
    opacity: 1,
    y: 0 // Animate to its natural position
  },
  out: {
    opacity: 0,
    y: -50 // Animate 50px above the natural position
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3
};

// This is the component that will wrap every page to animate it
const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

// We need a component to handle the routes so we can use the useLocation hook
const AppRoutes = ({ openGame, toggleConsulting }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><HomePage openGame={openGame} toggleConsulting={toggleConsulting} /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
        <Route path="/resume" element={<AnimatedPage><ResumePage /></AnimatedPage>} />
        <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
        <Route path="/blog" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
        <Route path="/simulation" element={<AnimatedPage><ArchitectPage /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isConsultingOpen, setIsConsultingOpen] = useState(false);

  const toggleStatus = () => {
    setIsStatusOpen(!isStatusOpen);
  };

  const toggleConsulting = () => {
    setIsConsultingOpen(!isConsultingOpen);
  };

  const openGame = () => {
    setIsGameOpen(true);
  };

  // Listen for game trigger event
  useEffect(() => {
    const handleOpenGame = () => setIsGameOpen(true);

    window.addEventListener('openGame', handleOpenGame);

    return () => {
      window.removeEventListener('openGame', handleOpenGame);
    };
  }, []);

  return (
    <Router>
      <div
        className="flex flex-col min-h-screen bg-ops-black text-ops-green font-sans relative overflow-hidden selection:bg-ops-green selection:text-ops-black"
        onMouseMove={(e) => {
          const x = e.clientX;
          const y = e.clientY;
          document.documentElement.style.setProperty('--cursor-x', `${x}px`);
          document.documentElement.style.setProperty('--cursor-y', `${y}px`);
        }}
      >
        {/* Global Effects */}
        <div className="scanline-overlay"></div>
        <div className="crt-flicker"></div>
        <div className="vignette"></div>

        {/* Interactive Grid Background */}
        <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div
          className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none transition-opacity duration-300"
          style={{
            maskImage: `radial-gradient(circle 250px at var(--cursor-x, 50%) var(--cursor-y, 50%), black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 250px at var(--cursor-x, 50%) var(--cursor-y, 50%), black, transparent)`
          }}
        ></div>

        <ScrollToTop />

        {/* HUD Container */}
        <div className="relative z-10 flex flex-col min-h-screen p-2 md:p-6">
          <div className="flex-grow border border-ops-green/20 relative bg-ops-black/80 shadow-[0_0_20px_rgba(0,255,65,0.1)] flex flex-col">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ops-green z-[60]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ops-green z-[60]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ops-green z-[60]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ops-green z-[60]"></div>

            {/* Top Status Line */}
            <div
              onClick={toggleStatus}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ops-black px-4 text-xs font-mono tracking-widest text-ops-green z-[60] border border-ops-green/50 shadow-[0_0_10px_rgba(0,255,65,0.3)] cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] hover:text-ops-green hover:border-ops-green transition-all duration-300 animate-pulse"
            >
              SYSTEM_READY // OPS_GREEN_ACTIVE
            </div>

            <Navbar toggleConsulting={toggleConsulting} />
            <SystemStatus isOpen={isStatusOpen} onClose={() => setIsStatusOpen(false)} />
            <Cyberdeck isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
            <ConsultingModal isOpen={isConsultingOpen} onClose={() => setIsConsultingOpen(false)} />
            <Terminal />
            <main className="flex-grow overflow-hidden relative">
              <AppRoutes openGame={openGame} toggleConsulting={toggleConsulting} />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;