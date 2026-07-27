import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for GitHub Pages subfolder repositories (/Domain/) and custom domains
  server: {
    port: 3000,
    open: true
  }
});
