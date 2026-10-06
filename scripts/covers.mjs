// Puts each guide's series cover in front of its PDF.
//
//   1. Keep the original PDFs (straight from LaTeX) in pdfs-source/.
//   2. Start the site:  npm run dev
//   3. In another terminal:  npm run covers
//
// For every pdfs-source/<name>.pdf, this renders the site's cover page
// (/covers/<name>) at the exact size of that PDF's first page, and writes
// cover + original to public/pdfs/<name>.pdf, which is what the site serves.
// A PDF with no matching guide in src/data/resources.ts is copied unchanged.
// Re-running is safe: it always starts from the originals in pdfs-source/.

import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = path.join(ROOT, "pdfs-source");
const OUT_DIR = path.join(ROOT, "public", "pdfs");
const SITE = process.env.COVERS_URL ?? "http://localhost:3000";

async function siteIsUp() {
  try {
    return (await fetch(SITE, { method: "HEAD" })).ok;
  } catch {
    return false;
  }
}

async function launch() {
  // Prefer the installed Chrome; fall back to Playwright's own Chromium
  // (run `npx playwright install chromium` once if neither is available).
  try {
    return await chromium.launch({ channel: "chrome" });
  } catch {
    return await chromium.launch();
  }
}

async function main() {
  if (!(await siteIsUp())) {
    console.error(`Can't reach the site at ${SITE}. Start it first with: npm run dev`);
    process.exit(1);
  }

  const files = (await readdir(SOURCE_DIR)).filter((f) => f.toLowerCase().endsWith(".pdf"));
  if (files.length === 0) {
    console.log("No PDFs in pdfs-source/. Put the original guide PDFs there first.");
    return;
  }

  await mkdir(OUT_DIR, { recursive: true });
  const browser = await launch();

  try {
    for (const file of files) {
      const name = file.replace(/\.pdf$/i, "");
      const original = await PDFDocument.load(await readFile(path.join(SOURCE_DIR, file)));
      const { width, height } = original.getPage(0).getSize(); // in points (1/72 in)

      const page = await browser.newPage({
        viewport: { width: Math.round((width / 72) * 96), height: Math.round((height / 72) * 96) },
      });
      const response = await page.goto(`${SITE}/covers/${encodeURIComponent(name)}`, { waitUntil: "networkidle" });

      if (!response || response.status() === 404) {
        await writeFile(path.join(OUT_DIR, file), await original.save());
        console.log(`- ${file}: no guide uses this PDF, copied without a cover`);
        await page.close();
        continue;
      }

      await page.evaluate(() => document.fonts.ready);
      const coverPdf = await page.pdf({
        width: `${width / 72}in`,
        height: `${height / 72}in`,
        printBackground: true,
        pageRanges: "1",
      });
      await page.close();

      const merged = await PDFDocument.create();
      const cover = await PDFDocument.load(coverPdf);
      const [coverPage] = await merged.copyPages(cover, [0]);
      merged.addPage(coverPage);
      for (const p of await merged.copyPages(original, original.getPageIndices())) merged.addPage(p);

      const title = original.getTitle();
      if (title) merged.setTitle(title);
      merged.setAuthor(original.getAuthor() ?? "Math Mentors");

      await writeFile(path.join(OUT_DIR, file), await merged.save());
      console.log(`✓ ${file}: cover added (${original.getPageCount()} → ${merged.getPageCount()} pages)`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
