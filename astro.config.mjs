import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl';

// When started via the "Start Redwood Bay Press" button, RBP_HTTPS=true is set,
// which makes the local preview server use https (some browsers refuse http on
// localhost). Claude's own preview tooling leaves it unset and stays on http.
const useHttps = process.env.RBP_HTTPS === 'true';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: useHttps ? [basicSsl()] : [],
    server: useHttps ? { https: true } : {},
  },
});
