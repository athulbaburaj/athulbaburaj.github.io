// src/App.js
import React from 'react';
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
import ScrollToTop from './components/ScrollToTop';

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
  duration: 0.4     
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
const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
        <Route path="/resume" element={<AnimatedPage><ResumePage /></AnimatedPage>} />
        <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow overflow-hidden"> {/* overflow-hidden helps prevent scrollbars during transition */}
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;