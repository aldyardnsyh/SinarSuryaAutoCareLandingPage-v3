// ============================================================
// site.ts — SATU-SATUNYA tempat data bisnis.
// Data di bawah sudah diverifikasi dari Google Maps resmi
// (link: https://maps.app.goo.gl/q5tPToCPzbebyi2z8, diakses 2026-10-31):
// buka setiap hari 07.00-17.00,
// Jl. Cijagra No.8, Bojongsoang, Kab. Bandung 40288.
// Telepon/WA aktif dari client (2026-11): 0812-2022-203.
// ============================================================

export const SITE = {
  name: "Sinar Surya Auto Care",
  shortName: "SSAC",
  tagline: "Bengkel Mobil & Cuci Hidrolik · Bojongsoang",
  // Domain resmi dari pemilik — samakan dengan `site` di astro.config.mjs
  domain: "https://bengkelmobilbojongsoang.web.id",
  // Nomor telepon aktif dari client (sekaligus WhatsApp) — 0812-2022-203.
  // Catatan: listing Google Maps masih menampilkan nomor lama; minta
  // pemilik memperbarui nomor di Profil Bisnis Google agar NAP konsisten.
  phone: "0812-2022-203",
  phoneIntl: "+628122022203",
  whatsapp: "628122022203",
  // Template pesan: selalu diawali nama bengkel + lokasinya,
  // sisanya menyesuaikan tombol yang diklik (booking / tanya /
  // konsultasi / tanya harga / cuci).
  waIntro: "Halo Sinar Surya Auto Care yang lokasinya di Jl. Cijagra No.8, Bojongsoang. ",
  waDefault: "Saya mau tanya soal servis mobil saya.",
  waBooking: "Saya mau booking jadwal servis mobil.",
  waConsult: "Saya mau konsultasi dulu soal keluhan mobil saya.",
  waPrice: "Saya mau tanya harga untuk layanan",
  waWash: "Mobil saya butuh servis atau cuci bersih, bisa dibantu?",
  address: {
    street: "Jl. Cijagra No.8",
    full: "Jl. Cijagra No.8, Bojongsoang, Kec. Bojongsoang, Kab. Bandung, Jawa Barat 40288",
    short: "Jl. Cijagra No.8, Bojongsoang, Kab. Bandung",
    city: "Kab. Bandung",
    region: "Jawa Barat",
    postalCode: "40288",
  },
  // Koordinat pin Google Maps asli bengkel
  geo: { lat: -6.9848264, lng: 107.6329325 },
  // Verifikasi dari panel Google Maps: 07.00-17.00.
  // Aturan jadwal dari pemilik: SERVIS MOBIL hanya Senin-Sabtu (Minggu
  // tidak tersedia), CUCI & STEAM buka setiap hari.
  hours: { days: "Setiap hari", open: "07.00", close: "17.00" },
  schedule: {
    // 0 = Minggu .. 6 = Sabtu (getDay())
    servis: { hari: [1, 2, 3, 4, 5, 6], label: "Senin–Sabtu" },
    cuci: { hari: [0, 1, 2, 3, 4, 5, 6], label: "Setiap hari" },
    open: 7 * 60, // 07.00 dalam menit
    close: 17 * 60, // 17.00 dalam menit
    // [DATA-CLIENT:jam-minggu] — konfirmasi apakah jadwal cuci hari
    // Minggu berbeda dari 07.00-17.00
  },
  // Sosmed resmi bengkel (diketahui dari pemilik)
  social: {
    facebook: "https://www.facebook.com/pages/Sinar-Surya-Auto-Care/154461098013280",
    instagram: "https://www.instagram.com/explore/locations/270770150/sinar-surya-auto-care/",
  },
  // Data ulasan Google Maps (real, diakses 2026-10-31)
  rating: { score: "4,7", count: 96, url: "https://maps.app.goo.gl/q5tPToCPzbebyi2z8" },
} as const;

/** Link WhatsApp dengan template intro nama + lokasi bengkel */
export function waLink(message: string = SITE.waDefault): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    SITE.waIntro + message
  )}`;
}

/** URL Google Maps: embed resmi dari client + link share untuk "Buka di Google Maps" */
export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11757.020765797182!2d107.62229337177436!3d-6.978662238352537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9a34ef881e7%3A0xa83f3dd35d1d0b27!2sSinar%20Surya%20Auto%20Care!5e1!3m2!1sid!2sid!4v1793396259398!5m2!1sid!2sid";
export const mapLinkUrl = "https://maps.app.goo.gl/q5tPToCPzbebyi2z8";
