// src/App.js
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import your components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Route pages are code-split — each becomes its own chunk, fetched on demand.
const HomePage = lazy(() => import('./pages/HomePage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const SecretDocPage = lazy(() => import('./pages/SecretDocPage'));

// Quiet, on-brand fallback shown while a route chunk loads
const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <span className="font-mono t-label tracking-[0.3em] text-muted uppercase">
      Loading
    </span>
  </div>
);

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

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<RouteFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
          {/* /about was merged into /resume — redirect so existing links survive */}
          <Route path="/about" element={<Navigate to="/resume" replace />} />
          <Route path="/resume" element={<AnimatedPage><ResumePage /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
          <Route path="/blog" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
          <Route path="/course-description" element={<AnimatedPage><SecretDocPage /></AnimatedPage>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-ground text-primary font-sans overflow-x-hidden">

        {/*
          Single content column. The width and horizontal padding live HERE and
          nowhere else — pages must not re-wrap themselves in a container, or the
          padding applies twice. Navbar and Footer mirror these values so their
          contents line up with the column.
        */}
        <div className="relative z-10 flex flex-col flex-grow shell">
          <Navbar />

          <main className="flex-grow flex flex-col pt-24 pb-[var(--space-l)]">
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
