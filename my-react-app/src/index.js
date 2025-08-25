import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.scss';
// Import the modern design tokens defined in modern.css.  These
// variables enhance the base design system with glassmorphism,
// gradients and new shadows.  Placing this import after the
// global SCSS ensures that these custom properties are available
// throughout the application.
import './styles/modern.css';

/*
 * Entrypoint for the portfolio application.  We use React 18's
 * `createRoot` API to render the application into the #root div in
 * our public/index.html.  All global styles are imported here so
 * individual components don't need to reference them directly.
 */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);