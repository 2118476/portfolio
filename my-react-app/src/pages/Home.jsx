import React, { Suspense, lazy } from 'react';
import SiteChrome from '../components/layout/SiteChrome';
import SectionDots from '../components/ui/SectionDots';
import { useRecruiterMode } from '../context/RecruiterModeContext';
import Hero from '../sections/Hero';

const BentoHighlights = lazy(() => import('../sections/BentoHighlights'));
const About = lazy(() => import('../sections/About'));
const Skills = lazy(() => import('../sections/Skills'));
const Projects = lazy(() => import('../sections/Projects'));
const Services = lazy(() => import('../sections/Services'));
const Pricing = lazy(() => import('../sections/Pricing'));
const Process = lazy(() => import('../sections/Process'));
const Education = lazy(() => import('../sections/Education'));
const GithubActivity = lazy(() => import('../sections/GithubActivity'));
const Trust = lazy(() => import('../sections/Trust'));
const Testimonials = lazy(() => import('../sections/Testimonials'));
const Faq = lazy(() => import('../sections/Faq'));
const Contact = lazy(() => import('../sections/Contact'));

const Home = () => {
  const { recruiterMode } = useRecruiterMode();

  return (
    <SiteChrome>
      <SectionDots />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <BentoHighlights />
          <About />
          <Skills />
          <Projects />
          {!recruiterMode && <Services />}
          {!recruiterMode && <Pricing />}
          {!recruiterMode && <Process />}
          <Education />
          <GithubActivity />
          {!recruiterMode && <Testimonials />}
          <Trust />
          {!recruiterMode && <Faq />}
          <Contact />
        </Suspense>
      </main>
    </SiteChrome>
  );
};

export default Home;
