import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { RecruiterModeProvider } from './context/RecruiterModeContext';
import AmbientBackground from './components/AmbientBackground';
import Analytics from './components/Analytics';
import CommandPalette from './components/ui/CommandPalette';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import IntroLoader from './components/ui/IntroLoader';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Resume from './pages/Resume';

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
      <RecruiterModeProvider>
        <BrowserRouter>
          <AmbientBackground />
          <CustomCursor />
          <ScrollProgress />
          <IntroLoader />
          <Analytics />
          <CommandPalette />
          <RouteScroller />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/:id" element={<CaseStudy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RecruiterModeProvider>
    </ThemeProvider>
  );
}

export default App;
