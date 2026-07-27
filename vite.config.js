import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Universal relative base path for GitHub Pages & custom domain blueidealteck.com
  server: {
    port: 3000,
    open: true
  }
});
