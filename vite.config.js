import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/React_Ecommerce/', // Ensure this base path ends with a slash
  server: {
    port: 3000,
  },
});
