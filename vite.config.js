import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { PAGES, SITE_URL, headHtml, noscriptHtml, schemaHtml } from './src/seo/site.js'

// Fills in the SEO tags, and after the build writes one HTML file per page
// (about/index.html, contact/index.html …) with that page's own title,
// description and link, plus sitemap.xml — so search engines see the right
// details for every page without running any JavaScript.
function seoPages() {
  let outDir = 'dist'
  const fill = (html, route) =>
    html
      .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, `<!--seo:start-->\n    ${headHtml(route)}\n    <!--seo:end-->`)
      .replace('<!--NOSCRIPT-->', noscriptHtml(route))
      .replace(/(<noscript>)[\s\S]*?(<\/noscript>)/, `$1\n      ${noscriptHtml(route)}\n    $2`)

  return {
    name: 'seo-pages',
    configResolved(cfg) {
      outDir = path.resolve(cfg.root, cfg.build.outDir)
    },
    transformIndexHtml(html) {
      return fill(html.replace('<!--SCHEMA-->', schemaHtml()), '/')
    },
    closeBundle() {
      const indexFile = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexFile)) return
      const base = fs.readFileSync(indexFile, 'utf8')
      for (const route of Object.keys(PAGES)) {
        if (route === '/') continue
        const dir = path.join(outDir, route.slice(1))
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), fill(base, route))
      }
      const today = new Date().toISOString().slice(0, 10)
      const urls = Object.keys(PAGES)
        .map((r) => `  <url>\n    <loc>${SITE_URL}${r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r === '/' ? '1.0' : '0.8'}</priority>\n  </url>`)
        .join('\n')
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    seoPages(),
  ],
})
