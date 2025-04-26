import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/prototype-vreliefapp/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
