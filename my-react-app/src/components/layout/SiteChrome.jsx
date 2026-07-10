import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';

/*
 * Shared page shell: navbar, page content, footer, and the floating
 * scroll-to-top control. Used by every page.
 */
const SiteChrome = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <ScrollToTop />
  </>
);

export default SiteChrome;
