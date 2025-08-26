import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AnimationProvider } from './context/AnimationContext';
import ScrollToTop from './components/ui/ScrollToTop';
import ChatbotWidget from './components/ui/ChatbotWidget';

/*
 * Code splitting at the route/section level.  Each major section
 * of the portfolio is loaded lazily to reduce the initial bundle
 * size.  Suspense displays a simple fallback until the chunk has
 * loaded.  Because our sections don't depend on one another we can
 * defer loading until the user scrolls to them.
 */
const Navbar = lazy(() => import('./components/layout/Navbar'));
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Stats = lazy(() => import('./sections/Stats'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

function App() {
  return (
    <ThemeProvider>
      <AnimationProvider>
        <Suspense fallback={<div className="loading" role="status">Loading…</div>}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Stats />
          <Contact />
          <Footer />
          <ScrollToTop />
          {/* Floating chat widget that allows visitors to start a
              conversation anywhere on the site. */}
          <ChatbotWidget />
        </Suspense>
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;