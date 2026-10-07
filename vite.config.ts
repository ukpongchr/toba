import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv, type Plugin} from 'vite';

// Plugin to automatically pre-generate physical route entry points & fallbacks for all deployment targets
function spaDeploymentPlugin(): Plugin {
  return {
    name: 'vite-plugin-spa-deployment',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const html = fs.readFileSync(indexPath, 'utf-8');

      // 1. Generate 404.html for static servers and CDNs
      fs.writeFileSync(path.join(distDir, '404.html'), html, 'utf-8');

      // 2. Pre-generate physical route directories so direct deep links load directly with HTTP 200
      const routes = [
        'work',
        'projects',
        'why-me',
        'services',
        'about',
        'contact',
        'request-a-quote',
        'quote',
        'privacy',
        'terms',
        'blog',
        'locations/lausanne',
        'locations/zurich',
        'locations/davos',
        'locations/basel',
        'locations/bern',
        'services/ngo-videographer-geneva',
        'services/conference-filming-geneva',
        'admin',
        'admin/login',
        'admin/dashboard',
      ];

      for (const route of routes) {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
      }

      // 3. Ensure Apache / LiteSpeed .htaccess rewrite rules are in dist
      const htaccessSource = path.resolve(__dirname, 'public/.htaccess');
      const htaccessDest = path.join(distDir, '.htaccess');
      if (fs.existsSync(htaccessSource)) {
        fs.copyFileSync(htaccessSource, htaccessDest);
      }

      // 4. Ensure _redirects rule is in dist
      const redirectsSource = path.resolve(__dirname, 'public/_redirects');
      const redirectsDest = path.join(distDir, '_redirects');
      if (fs.existsSync(redirectsSource)) {
        fs.copyFileSync(redirectsSource, redirectsDest);
      }
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    appType: 'spa',
    plugins: [react(), tailwindcss(), spaDeploymentPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    preview: {
      host: '0.0.0.0',
      port: 3000,
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', 'motion', 'lucide-react'],
          },
        },
      },
    },
  };
});
