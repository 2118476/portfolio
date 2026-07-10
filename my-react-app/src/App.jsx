import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Analytics from './components/Analytics';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Resume from './pages/Resume';

const CV = lazy(() => import('./pages/CV'));
const AllProjects = lazy(() => import('./pages/AllProjects'));

/*
 * Restores scroll position on navigation: jumps to a #hash target when
 * present, otherwise scrolls to the top on each new route.
 */
function RouteScroller() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    // Lazy-loaded sections may not be mounted yet, so retry a few frames.
    let tries = 0;
    let timer;
    const findAndScroll = () => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else if (tries < 20) {
        tries += 1;
        timer = window.setTimeout(findAndScroll, 100);
      }
    };
    findAndScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Analytics />
        <RouteScroller />
        <Suspense fallback={<div className="loading">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:id" element={<CaseStudy />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
