// seo.ts — pembangun JSON-LD untuk halaman dalam (layanan, area, tips).
// AutoRepair utama dengan @id #business sudah disuntik BaseLayout,
// jadi di sini cukup referensi provider-nya (pola sama dengan Website2).

import { SITE } from "../data/site";

interface Crumb {
  name: string;
  path: string; // path relatif, mis. "/layanan/ganti-oli"
}

/** BreadcrumbList — Beranda selalu posisi 1, sisanya menyusul. */
export function breadcrumb(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.domain}/` },
      ...items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: it.name,
        item: `${SITE.domain}${it.path}`,
      })),
    ],
  };
}

/** Service schema untuk halaman layanan dedikasi. */
export function servicePage(opts: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${SITE.domain}${opts.path}`,
    areaServed: [
      "Bojongsoang",
      "Dayeuhkolot",
      "Baleendah",
      "Buahbatu",
      "Kabupaten Bandung",
      "Bandung",
    ].map((n) => ({ "@type": "City", name: n })),
    provider: { "@id": `${SITE.domain}/#business` },
  };
}

/** Article schema untuk artikel tips. */
export function articlePage(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    inLanguage: "id-ID",
    author: { "@type": "Organization", name: SITE.name, url: SITE.domain },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.domain },
    mainEntityOfPage: `${SITE.domain}${opts.path}`,
  };
}
