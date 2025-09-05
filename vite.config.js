import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = process.env.NODE_ENV === 'production' ? '/reacr-coin/' : '';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
});
