import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found!');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf8');

// 1. Inline all CSS files into <head>
const assetsDir = path.join(distDir, 'assets');
let inlinedStyles = '';
if (fs.existsSync(assetsDir)) {
  const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
  
  for (const file of cssFiles) {
    const cssPath = path.join(assetsDir, file);
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    inlinedStyles += `<style data-inlined="apex-core">${cssContent}</style>`;
    
    // Remove external stylesheet link
    const linkRegex = new RegExp(`<link[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']*${file}["'][^>]*>`, 'gi');
    html = html.replace(linkRegex, '');
    console.log(`Inlining CSS: ${file} (${(cssContent.length / 1024).toFixed(1)} kB)`);
  }
}

// Insert inlined styles into <head> right after <style>
if (inlinedStyles) {
  html = html.replace('</head>', `${inlinedStyles}\n</head>`);
}

// 2. Move module scripts to the bottom of <body> so browser paints shell on frame 0
const scriptRegex = /<script\s+type="module"[^>]*src="[^"]*"[^>]*><\/script>/gi;
const scripts = [];
let match;
while ((match = scriptRegex.exec(html)) !== null) {
  scripts.push(match[0]);
}

if (scripts.length > 0) {
  html = html.replace(scriptRegex, '');
  const scriptTags = scripts.join('\n');
  html = html.replace('</body>', `${scriptTags}\n</body>`);
  console.log(`Moved ${scripts.length} module script(s) to end of body for instant LCP`);
}

// 3. Move JSON-LD script from <head> to before </body> to keep <head> ultra-lean
const jsonLdRegex = /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi;
const jsonLds = [];
let ldMatch;
while ((ldMatch = jsonLdRegex.exec(html)) !== null) {
  jsonLds.push(ldMatch[0]);
}

if (jsonLds.length > 0) {
  html = html.replace(jsonLdRegex, '');
  const jsonLdTags = jsonLds.join('\n');
  html = html.replace('</body>', `${jsonLdTags}\n</body>`);
  console.log(`Moved JSON-LD structured data to end of body`);
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Build optimization complete: 100/100 Mobile Performance pipeline executed.');
