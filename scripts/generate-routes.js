import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found.');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf-8');

// Copy index.html to 404.html for static servers/CDNs that use 404 fallback
fs.writeFileSync(path.join(distDir, '404.html'), indexContent, 'utf-8');
console.log('✓ Generated dist/404.html');

// List of all primary and secondary SPA routes to pre-generate as physical directories
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
  'admin/dashboard'
];

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent, 'utf-8');
  console.log(`✓ Pre-generated static entry: dist/${route}/index.html`);
}

console.log('✓ All SPA route fallbacks successfully generated in dist/');
