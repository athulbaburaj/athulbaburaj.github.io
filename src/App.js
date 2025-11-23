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
import TacticalBorder from './components/TacticalBorder';

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
        <div className="schematic-noise"></div>
        <div className="scanline-overlay opacity-50"></div>
        <div className="vignette opacity-80"></div>

        {/* Interactive Grid Background */}
        <div className="fixed inset-0 bg-grid-subtle opacity-30 pointer-events-none"></div>

        {/* Static Technical Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <svg className="w-full h-full opacity-20">
            {/* Large Circle */}
            <circle cx="85%" cy="50%" r="300" fill="none" stroke="#00e5ff" strokeWidth="1" strokeDasharray="10 20" className="animate-spin-slow" />
            <circle cx="85%" cy="50%" r="280" fill="none" stroke="#00e5ff" strokeWidth="0.5" />
            {/* Measurement Lines */}
            <line x1="10%" y1="10%" x2="90%" y2="10%" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="10%" y1="90%" x2="90%" y2="90%" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="10%" y1="10%" x2="10%" y2="90%" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="90%" y1="10%" x2="90%" y2="90%" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>

        <ScrollToTop />

        {/* Modals and Fixed Elements (Outside TacticalBorder to avoid clipping/positioning issues) */}
        <SystemStatus isOpen={isStatusOpen} onClose={() => setIsStatusOpen(false)} />
        <Cyberdeck isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
        <ConsultingModal isOpen={isConsultingOpen} onClose={() => setIsConsultingOpen(false)} />
        <Terminal />

        {/* HUD Container */}
        <div className="relative z-10 flex flex-col min-h-screen p-2 md:p-6">
          <TacticalBorder className="flex-grow flex flex-col bg-ops-black/90 shadow-[0_0_30px_rgba(0,229,255,0.1)] backdrop-blur-sm">

            {/* Top Status Line */}
            <div
              onClick={toggleStatus}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ops-black px-4 text-xs font-mono tracking-widest text-ops-green z-[60] border border-ops-green/50 shadow-[0_0_10px_rgba(0,229,255,0.3)] cursor-pointer hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:text-ops-green hover:border-ops-green transition-all duration-300"
            >
              TACTICAL_HUD // V.3.0 // ONLINE
            </div>

            <Navbar toggleConsulting={toggleConsulting} />
            <main className="flex-grow overflow-hidden relative">
              <AppRoutes openGame={openGame} toggleConsulting={toggleConsulting} />
            </main>
            <Footer />
          </TacticalBorder>
        </div>
      </div >
    </Router >
  );
};

export default App;
