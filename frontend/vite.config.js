import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3003,
    host: "0.0.0.0"
  },
  build: {
    target: 'esnext',
  },
});
