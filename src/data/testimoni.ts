// ============================================================
// Testimoni ASLI dari ulasan Google Maps bengkel
// (https://maps.app.goo.gl/q5tPToCPzbebyi2z8, diakses 2026-10-31).
// Hanya ulasan berbintang positif, kata-kata tidak diubah.
// Catatan: tanpa login Google, Maps hanya membuka 5 ulasan teks
// (4 positif + 1 negatif). Tambahkan ulasan baru di sini saat
// muncul di Maps, jangan mengarang.
// ============================================================

export interface Testimoni {
  nama: string;
  bintang: number;
  quote: string;
}

export const TESTIMONI: Testimoni[] = [
  {
    nama: "Triwi Triwibowo",
    bintang: 5,
    quote:
      "Tempat cuci mobil terbersih selama yang saya rasakan, pokoknya hasilnya memuaskan dibandingkan yang lain.",
  },
  {
    nama: "Luthfi Lathifuddin",
    bintang: 5,
    quote:
      "Cuci mobil rush lama cuma 50 rb, tempat nyaman, ada mushola & toilet, bayar bisa pakai QRIS.",
  },
  {
    nama: "B.C. Andriyono",
    bintang: 5,
    quote:
      "Lokasi strategis. Petugasnya ramah dan welcome. Meski sudah gelap masih bisa nawar utk dilayani. Ada kedai mie ayam, kopi klo mesti nunggu.",
  },
  {
    nama: "Evan Aradhana",
    bintang: 4,
    quote: "Sangat bagus, bersih, dan cukup detail.",
  },
];
