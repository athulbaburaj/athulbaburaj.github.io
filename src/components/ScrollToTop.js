// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout to ensure the new page content is rendered and transition started
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default ScrollToTop;