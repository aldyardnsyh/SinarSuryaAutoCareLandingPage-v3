// One-off: OG image 1200x630 branded untuk share card WhatsApp/FB/X.
// Komposisi: foto lift hidrolik + gradasi navy + logo + nama + tagline
// + rating Google. Regenerasi: node scripts/generate-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const photos = path.join(root, "..", "src", "assets", "photos");
const pub = path.join(root, "..", "public");
const W = 1200;
const H = 630;

const photo = path.join(
  photos,
  "cuci-mobil-hidrolik-bojongsoang-lift-hidrolik.jpg"
);

// overlay SVG: gradasi bawah + panel teks + rating (logo PNG disatukan terpisah)
const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="35%" stop-color="#22364F" stop-opacity="0"/>
      <stop offset="78%" stop-color="#22364F" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="#22364F" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>

  <!-- panel kanan: badge rating -->
  <rect x="795" y="70" width="345" height="64" rx="32" fill="#FFFFFF" opacity="0.94"/>
  <text x="830" y="112" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" font-weight="bold" fill="#22364F">4,7</text>
  <text x="890" y="112" font-family="DejaVu Sans, Arial, sans-serif" font-size="26" fill="#F2B705">★★★★★</text>
  <text x="1040" y="110" font-family="DejaVu Sans, Arial, sans-serif" font-size="18" fill="#5a6b80">96 ulasan</text>

  <!-- teks utama -->
  <text x="70" y="440" font-family="DejaVu Sans, Arial, sans-serif" font-size="56" font-weight="bold" fill="#FFFFFF">Sinar Surya Auto Care</text>
  <text x="70" y="496" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" font-weight="bold" fill="#F2B705">Bengkel Mobil &amp; Cuci Hidrolik Bojongsoang</text>
  <text x="70" y="552" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" fill="#cdd9e8">Jl. Cijagra No.8, Bojongsoang, Kab. Bandung · 0812-2022-203</text>
  <text x="70" y="590" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" fill="#9fd8d7">Servis Senin-Sabtu · Cuci &amp; steam setiap hari 07.00-17.00</text>
</svg>`);

// logo (favicon svg) dirender ke buffer png dulu
const logoPng = await sharp(path.join(pub, "favicon.svg"))
  .resize(120, 120)
  .png()
  .toBuffer();

await sharp(photo)
  .resize(W, H, { fit: "cover", position: sharp.strategy.attention })
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logoPng, top: 60, left: 64 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(pub, "og-image.jpg"));

// apple-touch-icon tetap dari favicon
await sharp(path.join(pub, "favicon.svg"))
  .resize(180, 180)
  .png()
  .toFile(path.join(pub, "apple-touch-icon.png"));

console.log("og-image.jpg branded + apple-touch-icon.png dibuat");
