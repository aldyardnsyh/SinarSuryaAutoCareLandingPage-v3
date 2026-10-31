// One-off: proses 4 foto dari user (screenshot OneDrive Pictures)
// menjadi aset galeri JPEG terkompresi.
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, "..", "src", "assets", "photos");

const FILES = [
  {
    src: String.raw`C:\Users\aldya\OneDrive\Pictures\Screenshots\Screenshot 2026-10-31 062738.png`,
    out: "area-cuci-bengkel-bojongsoang.jpg",
  },
  {
    src: String.raw`C:\Users\aldya\OneDrive\Pictures\Screenshots\Screenshot 2026-10-31 062932.png`,
    out: "servis-perbaikan-lift-bojongsoang.jpg",
  },
  {
    src: String.raw`C:\Users\aldya\OneDrive\Pictures\Screenshots\Screenshot 2026-10-31 063606.png`,
    out: "servis-mobil-pelanggan-bojongsoang.jpg",
  },
  {
    src: String.raw`C:\Users\aldya\OneDrive\Pictures\Screenshots\Screenshot 2026-10-31 063416.png`,
    out: "perbaikan-mesin-toyota-bojongsoang.jpg",
  },
];

for (const f of FILES) {
  const meta = await sharp(f.src).metadata();
  await sharp(f.src)
    .resize({ width: Math.min(meta.width ?? 1200, 1200), withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(outDir, f.out));
  console.log(f.out, "->", meta.width, "x", meta.height);
}
