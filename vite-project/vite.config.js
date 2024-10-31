import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  plugins: [
    react(),
    NodeGlobalsPolyfillPlugin({ process: true, buffer: true }), // Adds Node.js global polyfills
  ],
  resolve: {
    alias: {
      path: 'path-browserify', // Polyfill the Node 'path' module for browser compatibility
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis', // Define 'global' for compatibility
      },
    },
  },
});
