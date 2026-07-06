import React, { Suspense, lazy } from 'react';
import SiteChrome from '../components/layout/SiteChrome';
import Hero from '../sections/Hero';

const Stats = lazy(() => import('../sections/Stats'));
const About = lazy(() => import('../sections/About'));
const Skills = lazy(() => import('../sections/Skills'));
const Projects = lazy(() => import('../sections/Projects'));
const Services = lazy(() => import('../sections/Services'));
const Pricing = lazy(() => import('../sections/Pricing'));
const Process = lazy(() => import('../sections/Process'));
const Education = lazy(() => import('../sections/Education'));
const GithubActivity = lazy(() => import('../sections/GithubActivity'));
const Trust = lazy(() => import('../sections/Trust'));
const Faq = lazy(() => import('../sections/Faq'));
const Contact = lazy(() => import('../sections/Contact'));

const Home = () => (
  <SiteChrome>
    <main>
      <Hero />
      <Suspense fallback={null}>
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Pricing />
        <Process />
        <Education />
        <GithubActivity />
        <Trust />
        <Faq />
        <Contact />
      </Suspense>
    </main>
  </SiteChrome>
);

export default Home;
