import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages User Site (username.github.io) için base '/' olmalıdır.
  // Project Site (username.github.io/repo) olsaydı '/repo/' olurdu.
  base: '/', 
});