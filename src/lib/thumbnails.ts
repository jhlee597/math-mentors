import fs from "node:fs";
import path from "node:path";

// Server-only: looks up /public/thumbnails/<pdf filename>.<ext> for a resource's
// pdfUrl (e.g. "/pdfs/sample-resource.pdf" -> checks for
// "/thumbnails/sample-resource.{png,jpg,jpeg,webp}"). Returns the public URL of
// the first match, or null if no thumbnail exists yet.

const THUMBNAIL_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

export function getThumbnailSrc(pdfUrl: string): string | null {
  const filename = pdfUrl.split("/").pop() ?? "";
  const stem = filename.replace(/\.[^./]+$/, "");
  if (!stem) return null;

  for (const ext of THUMBNAIL_EXTENSIONS) {
    const relativePath = `thumbnails/${stem}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", relativePath))) {
      return `/${relativePath}`;
    }
  }
  return null;
}
