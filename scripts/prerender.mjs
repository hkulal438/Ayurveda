// After `vite build`, put each page's full rendered content into its HTML file
// (dist/index.html, dist/about/index.html …).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render } = await import(pathToFileURL(ssrEntry).href);
const { PAGES } = await import(pathToFileURL(path.join(root, "src", "seo", "site.js")).href);

for (const route of Object.keys(PAGES)) {
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
  const html = fs.readFileSync(file, "utf8");
  const appHtml = render(route);
  fs.writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
  console.log(`prerendered ${route}  (${Math.round(appHtml.length / 1024)} KB)`);
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
