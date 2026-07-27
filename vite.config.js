import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Domain/', // Configured specifically for GitHub Pages repository 'Domain' (https://santhosh9789.github.io/Domain/)
  server: {
    port: 3000,
    open: true
  }
});
