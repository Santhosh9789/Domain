import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Standard relative base path for GitHub Pages and custom domain deployments
  server: {
    port: 3000,
    open: true
  }
});
