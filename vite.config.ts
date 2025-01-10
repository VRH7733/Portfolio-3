import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-3/',
  // Replace <repository-name> with your GitHub repository name
  build: {
    assetsDir: 'assets', // Place assets in an "assets" folder
  },
});