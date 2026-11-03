// Daftar layanan — disesuaikan dari PRD §4.2, TANPA layanan motor.
// (jasa terkait motor tidak tersedia di bengkel ini)

export interface Layanan {
  id: string;
  nama: string;
  deskripsi: string;
  ikon: string; // nama ikon pada Icon.astro
  group: "servis" | "cuci";
  // URL halaman dedikasi (relatif, tanpa trailing slash) — null jika belum ada.
  // Kartu di homepage + footer memakai ini untuk internal linking.
  href: string | null;
}

export const LAYANAN: Layanan[] = [
  // Grup A — Servis & Perbaikan
  {
    id: "servis-rutin",
    nama: "Servis Rutin & Tune Up",
    deskripsi: "Perawatan berkala agar mesin tetap sehat dan hemat bahan bakar.",
    ikon: "wrench",
    group: "servis",
    href: "/layanan/servis-rutin-tune-up",
  },
  {
    id: "ganti-oli",
    nama: "Ganti Oli & Filter",
    deskripsi: "Oli dan filter disesuaikan dengan tipe mobil Anda.",
    ikon: "oil",
    group: "servis",
    href: "/layanan/ganti-oli",
  },
  {
    id: "service-ac",
    nama: "Service AC Mobil",
    deskripsi: "Dari cuci AC sampai perbaikan, agar kabin kembali sejuk.",
    ikon: "snow",
    group: "servis",
    href: "/layanan/service-ac-mobil",
  },
  {
    id: "kaki-kaki",
    nama: "Kaki-kaki & Rem",
    deskripsi: "Suspensi, shockbreaker, dan rem diperiksa dengan teliti.",
    ikon: "disc",
    group: "servis",
    href: "/layanan/kaki-kaki-rem",
  },
  {
    id: "kelistrikan",
    nama: "Kelistrikan & Aki",
    deskripsi: "Cek kelistrikan, aki, sampai lampu, agar mobil siap dipakai pagi hari.",
    ikon: "bolt",
    group: "servis",
    href: null,
  },
  // Grup B — Cuci Hidrolik & Steam
  {
    id: "cuci-mobil",
    nama: "Cuci Mobil Hidrolik",
    deskripsi: "Mobil diangkat hidrolik, bagian bawahnya ikut tercuci bersih.",
    ikon: "car",
    group: "cuci",
    href: "/layanan/cuci-mobil-hidrolik",
  },
  {
    id: "steam-interior",
    nama: "Steam Wash Interior",
    deskripsi: "Interior dibersihkan dengan steam, higienis dan tidak lembap.",
    ikon: "steam",
    group: "cuci",
    href: "/layanan/steam-wash-interior",
  },
  {
    id: "vacuum-detailing",
    nama: "Vacuum & Detailing",
    deskripsi: "Vakum menyeluruh dan detailing agar tampilan mobil kembali rapi.",
    ikon: "sparkle",
    group: "cuci",
    href: null,
  },
];

// Trust strip — 4 poin identitas (02-copywriting.md §4)
export const TRUST_ITEMS = [
  {
    ikon: "mechanic",
    judul: "Teknisi Berpengalaman",
    sub: "Dikerjakan mekanik yang paham kondisi mobil Anda.",
  },
  {
    ikon: "bolt",
    judul: "Pelayanan Cepat & Ramah",
    sub: "Datang sesuai jadwal, dikerjakan dengan teliti.",
  },
  {
    ikon: "gear",
    judul: "Sparepart Berkualitas",
    sub: "Kami bantu rekomendasikan sparepart yang tepat.",
  },
  {
    ikon: "drop",
    judul: "Cuci Hidrolik & Steam",
    sub: "Bersih sampai bagian bawah mobil.",
  },
] as const;
