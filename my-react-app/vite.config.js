import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'me.jpg'],
      manifest: {
        name: 'Mihretab Nega Portfolio',
        short_name: 'Mihretab',
        description:
          'Mihretab Nega — London-based full-stack developer building React and Spring Boot web apps.',
        theme_color: '#090d12',
        background_color: '#090d12',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,woff,woff2}'],
        navigateFallbackDenylist: [/^\/Mihretab-Nega-CV\.pdf$/]
      }
    })
  ],
  server: {
    port: 3000,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 900
  }
});
