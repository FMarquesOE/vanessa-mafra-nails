// scripts/prerender.mjs
import { chromium } from "playwright";
import { preview } from "vite";
import fs from "node:fs/promises";
import path from "node:path";

// Ajuste para as rotas reais definidas no seu wouter (App.tsx ou onde ficam as <Route>)

const routes = ["/", "/servicos", "/sobre", "/contato"];

async function prerender() {
const previewServer = await preview({ preview: { port: 4173 } });
const baseUrl = "http://localhost:4173";

const browser = await chromium.launch();
for (const route of routes) {
  const page = await browser.newPage();
  await page.goto(baseUrl + route, { waitUntil: "networkidle" });
  const html = await page.content();
  const outDir = route === "/" ? "dist" : path.join("dist", route);
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, "index.html"), html);
  await page.close();
  console.log(`✅ Pré-renderizado: ${route}`);
}
await browser.close();
previewServer.httpServer.close();
}

prerender();