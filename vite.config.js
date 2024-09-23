import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/React_Ecommerce/', 
  server: {
    port: 3000,
  },
});
