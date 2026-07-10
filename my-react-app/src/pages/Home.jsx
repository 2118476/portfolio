import React, { Suspense, lazy } from 'react';
import SiteChrome from '../components/layout/SiteChrome';
import Hero from '../sections/Hero';

const Projects = lazy(() => import('../sections/Projects'));
const Skills = lazy(() => import('../sections/Skills'));
const About = lazy(() => import('../sections/About'));
const Availability = lazy(() => import('../sections/Availability'));
const Contact = lazy(() => import('../sections/Contact'));

const Home = () => (
  <SiteChrome>
    <main>
      <Hero />
      <Suspense fallback={null}>
        <Projects />
        <Skills />
        <About />
        <Availability />
        <Contact />
      </Suspense>
    </main>
  </SiteChrome>
);

export default Home;
