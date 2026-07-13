// scripts/prerender.mjs
import { chromium } from "playwright";
import chromiumPack from '@sparticuz/chromium';
import path from 'path';
import { preview } from "vite";
import fs from "node:fs/promises";

// Ajuste para as rotas reais definidas no seu wouter (App.tsx ou onde ficam as <Route>)

const routes = ["/", "/servicos", "/sobre", "/contato"];

async function launchBrowser() {
  const isVercel = !!process.env.VERCEL;
  
  if (isVercel) {
    // Desativa o stack de WebGL/GPU (swiftshader/angle). A página não precisa disso
    // pra pré-renderizar HTML estático, e é o que está causando os crashes
    // "SharedImageManager::ProduceSkia: ... non-existent mailbox" no modo --single-process
    // da Vercel, que derrubam o browser inteiro depois da primeira página.
    // Atenção: é uma propriedade (setter), não um método — nada de "()" no final.
    chromiumPack.setGraphicsMode = false;

    // Configurações específicas para Vercel
    const executablePath = await chromiumPack.executablePath();
    const execDir = path.dirname(executablePath);

    // O @sparticuz/chromium já detecta Vercel+Node>=20 sozinho e configura
    // LD_LIBRARY_PATH apontando para /tmp/al2023/lib (onde ficam libnspr4.so, libnss3.so etc)
    // assim que o módulo é importado. Por isso aqui é preciso ADICIONAR o execDir
    // (onde fica o binário do chromium e as libs do swiftshader), nunca sobrescrever —
    // sobrescrever apaga o /tmp/al2023/lib e derruba o processo com "libnspr4.so: cannot open shared object file".
    const existingLibPaths = (process.env.LD_LIBRARY_PATH || "").split(":").filter(Boolean);
    if (!existingLibPaths.includes(execDir)) {
      process.env.LD_LIBRARY_PATH = [...existingLibPaths, execDir].join(":");
    }

    return await chromium.launch({
      args: chromiumPack.args,
      executablePath: executablePath,
      headless: true,
    });
  } else {
    // Desenvolvimento local
    return await chromium.launch({
      headless: true
    });
  }
}

async function prerender() {
const previewServer = await preview({ preview: { port: 4173 } });
const baseUrl = "http://localhost:4173";

const browser = await launchBrowser();
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