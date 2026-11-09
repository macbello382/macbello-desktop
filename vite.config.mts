import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import * as path from 'path';

export default defineConfig({
  root: path.resolve(import.meta.dirname, 'src/renderer'),
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',
  server: {
    port: 5173,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src/renderer/src'),
      '@main': path.resolve(import.meta.dirname, 'src/main'),
      '@preload': path.resolve(import.meta.dirname, 'src/preload'),
      '@database': path.resolve(import.meta.dirname, 'src/database'),
      '@services': path.resolve(import.meta.dirname, 'src/services'),
      '@auth': path.resolve(import.meta.dirname, 'src/authentication'),
      '@sync': path.resolve(import.meta.dirname, 'src/synchronization'),
      '@utils': path.resolve(import.meta.dirname, 'src/utilities'),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/renderer'),
    emptyOutDir: true,
  },
});
