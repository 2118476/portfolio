import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import WhatsAppBubble from '../ui/WhatsAppBubble';

/*
 * Shared page shell: navbar, page content, footer, and the floating
 * scroll-to-top and WhatsApp controls. Used by every routed page.
 */
const SiteChrome = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <ScrollToTop />
    <WhatsAppBubble />
  </>
);

export default SiteChrome;
