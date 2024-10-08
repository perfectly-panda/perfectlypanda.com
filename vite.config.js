// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'app',
  publicDir: '../public',
  build: {
    outDir: '../docs', // Specify the output directory
  },
});