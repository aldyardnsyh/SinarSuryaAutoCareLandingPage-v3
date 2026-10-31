# Website Landing Page — Sinar Surya Auto Care

Landing page satu halaman untuk bengkel mobil & cuci hidrolik **Sinar Surya
Auto Care**, Bojongsoang, Kab. Bandung. Dibangun dengan **Astro** (statis,
zero framework JS), konsep desain ramah keluarga yang terang dan hangat.

Domain resmi: **https://bengkelmobilbojongsoang.web.id** · Deploy: Vercel.

## Deploy ke Vercel

1. Import repo/folder ini ke Vercel (framework preset: Astro, build `npm run build`, output `dist/`).
2. Setelah domain `bengkelmobilbojongsoang.web.id` diarahkan ke Vercel (A/CNAME), tambahkan di Project Settings → Domains.
3. Google Search Console: tambah property domain → verifikasi DNS → submit `https://bengkelmobilbojongsoang.web.id/sitemap-index.xml` → URL Inspection → Request Indexing.
4. Lengkapi Profil Bisnis Google (kategori "Bengkel mobil" + "Cuci mobil", foto, jam) — NAP harus persis sama dengan website.

## SEO yang sudah terpasang

- Title/description ber-keyword lokal, canonical ke domain resmi
- JSON-LD `AutoRepair` + **`AggregateRating` 4,7/96 (asli dari Google Maps)** → berpotensi rich result bintang di pencarian
- JSON-LD **`FAQPage`** 6 tanya-jawab (lokasi, buka Minggu, beda cuci hidrolik, harga, cara booking, area layanan) → menarget query yang sering diketik orang
- Sitemap otomatis (`@astrojs/sitemap`) + robots.txt menunjuk domain baru
- Open Graph + Twitter Card + **og-image branded 1200×630** (logo, rating, NAP, jadwal) → share di WA/FB tampil sebagai kartu, bukan link mentah
- FAQ berbasis riset SERP lokal: kompetitor utama di query "bengkel mobil bojongsoang" adalah Automaster (Jl. Terusan Bojongsoang No.97); diferensiasi konten kita: cuci hidrolik & steam, rating Google, dan status buka realtime

## Performa

- Gambar **AVIF + WebP fallback** (`<Picture>` dua format, `sizes` responsif), hero `fetchpriority=high`, sisanya lazy-load
- Font self-host 2 keluarga; JS hanya ~50 baris vanilla (menu mobile, slider, status buka)
- `vercel.json`: cache immutable 1 tahun untuk `/_astro/*`, cache harian untuk ikon/og-image, plus header keamanan dasar

## Menjalankan

```bash
npm install
npm run dev       # dev server
npm run build     # build produksi ke dist/
npm run preview   # preview hasil build
```

## Data bisnis (sudah diverifikasi dari Google Maps resmi)

Sumber: <https://maps.app.goo.gl/q5tPToCPzbebyi2z8> (diakses 2026-10-31).
Semua terpusat di `src/data/site.ts`:

| Data | Nilai |
|---|---|
| Alamat | Jl. Cijagra No.8, Bojongsoang, Kec. Bojongsoang, Kab. Bandung, Jawa Barat 40288 |
| Telepon resmi | (022) 7502999 |
| Jam operasional | Servis mobil: **Senin–Sabtu** 07.00–17.00 (Minggu tidak tersedia) · Cuci & steam: **setiap hari** 07.00–17.00. Konfigurasi di `site.ts` → `schedule` |
| Pin Maps | lat -6.9848264, lng 107.6329325 |
| Rating | 4,7 ★ dari 96 ulasan Google |
| WhatsApp | 62227502999 (nomor kantor; **konfirmasi ke pemilik apakah nomor kantor aktif di WhatsApp**, bila tidak ganti `whatsapp` di site.ts) |

**Status buka/tutup realtime**: top bar & section Kontak menampilkan jam WIB
perangkat pengunjung + status "Buka/Tutup sekarang" yang dihitung dari
`schedule` (vanilla JS, tanpa API eksternal). Jika jadwal cuci hari Minggu
berbeda, ubah `schedule.cuci` di `site.ts`.

**Template pesan WhatsApp** (aturan dari pemilik): setiap tombol WA selalu
diawali nama bengkel + lokasinya, sisanya menyesuaikan tombol. Contoh:
`"Halo Sinar Surya Auto Care yang lokasinya di Jl. Cijagra No.8, Bojongsoang. Saya mau booking jadwal servis mobil."`
Diatur lewat `waIntro` + `waDefault` / `waBooking` / `waPrice` di `site.ts`.

## Aset

- `src/assets/photos/` berisi **foto asli** bengkel yang diambil dari
  ulasan Google Maps + Street View listing bengkel (bukan foto stok/AI):
  - `cuci-mobil-hidrolik-bojongsoang-lift-hidrolik.jpg` — dipakai di hero
  - `interior-bengkel-sinar-surya-bojongsoang.jpg` — dipakai di Tentang Kami
  - `cuci-mobil-busa-bojongsoang.jpg`, `cuci-mobil-detail-bojongsoang.jpg`,
    `tampak-depan-bengkel-bojongsoang.jpg` — dipakai di galeri polaroid
- `scripts/generate-og.mjs` regenerasi `og-image.jpg` & `apple-touch-icon.png`.
- Ulasan asli di section Testimoni: Triwi Triwibowo (5★) & Evan Aradhana (4★),
  plus kartu ringkasan 4,7★/96 ulasan yang menautkan ke Google Maps.

## Catatan konten

- **Tidak ada layanan motor** (cuci motor hidrolik dihapus dari cards,
  data, JSON-LD, dan seluruh copy) — jasa motor tidak tersedia di bengkel ini.
- Copywriting sudah diaudit: tanpa em-dash pada teks tampil, kalimat
  dibuat natural tanpa klaim yang belum dikonfirmasi.

## Struktur

```
src/
├── layouts/BaseLayout.astro    # SEO meta, OG tags, JSON-LD AutoRepair, font self-host
├── components/                 # 14 section satu halaman + Icon/Logo
├── data/
│   ├── site.ts                 # SATU-SATUNYA tempat data bisnis + template WA
│   ├── layanan.ts              # 8 layanan (Grup A servis & Grup B cuci) + trust strip
│   └── testimoni.ts            # ulasan ASLI Google Maps
├── styles/tokens.css           # design tokens Konsep 3
└── pages/index.astro
```

## Sebelum rilis

| Item | Status |
|---|---|
| Nomor WhatsApp aktif | ⚠️ konfirmasi ke pemilik (saat ini memakai nomor kantor) |
| Domain final | ⚠️ ganti `site` di `astro.config.mjs`, `domain` di `site.ts`, dan `public/robots.txt` |
| Link sosmed | ✅ FB page & IG location page terpasang di footer + kontak (`site.ts` → `social`) |
| Foto & video tambahan | ⚠️ listing Google Maps baru punya sedikit foto; minta pemilik upload lebih banyak ke Maps & kirimkan file aslinya |
| Atribusi foto | foto galeri berasal dari ulasan pelanggan Google Maps — konfirmasi ijin pemakaian ke pemilik/pengulas bila perlu |
| Ulasan tambahan untuk slider | Google hanya membuka 5 ulasan teks tanpa login; slider otomatis bertambah saat ulasan baru dipindai ulang (tambahkan di `src/data/testimoni.ts`) |
| Foto dari Facebook | FB page tertutup login wall; minta file fotonya ke pemilik bila ingin ditambahkan |
