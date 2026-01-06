// src/App.js
import React, { useState } from 'react';
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
import ArchitectPage from './pages/ArchitectPage'; // Rename/Re-purpose if needed
import SecretDocPage from './pages/SecretDocPage';
import ConsultingModal from './components/ConsultingModal';
import InteractiveGrid from './components/InteractiveGrid';
import ScrollProgress from './components/ScrollProgress';

// Simplified page transitions for a "sharp" feel
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.2
};

const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="w-full"
  >
    {children}
  </motion.div>
);

const AppRoutes = ({ toggleConsulting }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><HomePage toggleConsulting={toggleConsulting} /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
        <Route path="/resume" element={<AnimatedPage><ResumePage /></AnimatedPage>} />
        <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
        <Route path="/blog" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
        <Route path="/simulation" element={<AnimatedPage><ArchitectPage /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
        <Route path="/course-description" element={<AnimatedPage><SecretDocPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isConsultingOpen, setIsConsultingOpen] = useState(false);

  const toggleConsulting = () => {
    setIsConsultingOpen(!isConsultingOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-obsidian text-ghost-white font-sans selection:bg-electric-violet selection:text-white overflow-x-hidden">

        {/* Interactive Grid Background */}
        <InteractiveGrid />
        <ScrollProgress />

        <ConsultingModal isOpen={isConsultingOpen} onClose={() => setIsConsultingOpen(false)} />

        {/* Main Content Wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
          <Navbar toggleConsulting={toggleConsulting} />

          <main className="flex-grow flex flex-col pt-20 pb-32">
            <AppRoutes toggleConsulting={toggleConsulting} />
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
