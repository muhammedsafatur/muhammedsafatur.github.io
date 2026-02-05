import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages'te repo adınıza göre burayı güncelleyin. 
  // Örn: Repo adınız 'portfolio' ise base: '/portfolio/' olmalı.
  // Eğer kullanıcı sitesi ise (kullaniciadi.github.io) '/' olarak bırakın.
  base: './', 
});