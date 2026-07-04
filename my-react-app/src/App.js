import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ui/ScrollToTop';
import AmbientBackground from './components/AmbientBackground';

const Navbar = lazy(() => import('./components/layout/Navbar'));
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const Services = lazy(() => import('./sections/Services'));
const Skills = lazy(() => import('./sections/Skills'));
const Process = lazy(() => import('./sections/Process'));
const Trust = lazy(() => import('./sections/Trust'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

function App() {
  return (
    <ThemeProvider>
      <AmbientBackground />
      <Suspense fallback={<div className="loading" role="status">Loading...</div>}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Skills />
          <Process />
          <Trust />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
