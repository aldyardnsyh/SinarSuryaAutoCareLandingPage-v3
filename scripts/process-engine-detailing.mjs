// One-off: proses foto hasil detailing mesin dari user jadi aset galeri.
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const src = String.raw`C:\Users\aldya\.zcode\cli\image-cache\sess_b2959312-4209-468b-b6ce-661722c14092\image-6ba7e3d92ced19abea164472f30f87df.png`;
const out = path.join(
  root,
  "..",
  "src",
  "assets",
  "photos",
  "detailing-mesin-toyota-bojongsoang.jpg"
);

const meta = await sharp(src).metadata();
await sharp(src)
  .resize({ width: Math.min(meta.width ?? 1200, 1200), withoutEnlargement: true })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(out);
console.log("detailing-mesin:", meta.width, "x", meta.height);
