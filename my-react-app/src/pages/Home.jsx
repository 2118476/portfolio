import React, { Suspense, lazy } from 'react';
import SiteChrome from '../components/layout/SiteChrome';
import SectionDots from '../components/ui/SectionDots';
import Hero from '../sections/Hero';
import TechMarquee from '../components/ui/TechMarquee';

const Bento = lazy(() => import('../sections/Bento'));
const About = lazy(() => import('../sections/About'));
const Skills = lazy(() => import('../sections/Skills'));
const Projects = lazy(() => import('../sections/Projects'));
const Services = lazy(() => import('../sections/Services'));
const Pricing = lazy(() => import('../sections/Pricing'));
const Process = lazy(() => import('../sections/Process'));
const Education = lazy(() => import('../sections/Education'));
const GithubActivity = lazy(() => import('../sections/GithubActivity'));
const Testimonials = lazy(() => import('../sections/Testimonials'));
const Trust = lazy(() => import('../sections/Trust'));
const Faq = lazy(() => import('../sections/Faq'));
const Contact = lazy(() => import('../sections/Contact'));

const Home = () => (
  <SiteChrome>
    <SectionDots />
    <main className="snap-y">
      <Hero />
      <TechMarquee />
      <Suspense fallback={null}>
        <Bento />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Pricing />
        <Process />
        <Education />
        <GithubActivity />
        <Testimonials />
        <Trust />
        <Faq />
        <Contact />
      </Suspense>
    </main>
  </SiteChrome>
);

export default Home;
