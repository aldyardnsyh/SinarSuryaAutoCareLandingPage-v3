// One-off: proses screenshot Street View (Okt 2026) dari user
// menjadi aset bersih: crop UI Google Maps, kompres JPEG.
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const src = String.raw`C:\Users\aldya\.zcode\cli\image-cache\sess_b2959312-4209-468b-b6ce-661722c14092\image-9dd9181046155c1a7a84fd6c0f84419c.png`;
const out = path.join(root, "..", "src", "assets", "photos", "tampak-depan-bengkel-bojongsoang-2026.jpg");

const meta = await sharp(src).metadata();
console.log("asli:", meta.width, "x", meta.height);

// crop final: buang UI (atas) + ambil region terbaik bengkel:
// pintu kuning -> kanopi -> papan BENGKEL -> etalase AC (rasio 3:2)
await sharp(src)
  .extract({ left: 250, top: 200, width: 980, height: 653 })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(out);

const outMeta = await sharp(out).metadata();
console.log("hasil:", outMeta.width, "x", outMeta.height, "->", out);
