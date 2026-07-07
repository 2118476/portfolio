import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import WhatsAppBubble from '../ui/WhatsAppBubble';
import AskAssistant from '../ui/AskAssistant';

/*
 * Shared page shell: navbar, page content, footer, and the floating
 * scroll-to-top, WhatsApp, and Ask-assistant controls. Used by every page.
 */
const SiteChrome = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <ScrollToTop />
    <WhatsAppBubble />
    <AskAssistant />
  </>
);

export default SiteChrome;
