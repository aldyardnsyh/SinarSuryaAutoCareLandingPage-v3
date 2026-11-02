// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Domain resmi dari pemilik.
const SITE_URL = "https://www.bengkelmobilbojongsoang.web.id";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      // Samakan dengan canonical: tanpa trailing slash (vercel trailingSlash false).
      // Homepage "/" dikecualikan agar tetap canonical root.
      // lastmod: pakai tanggal build agar GSC tahu halaman berubah.
      // image: foto asli bengkel di homepage masuk image sitemap.
      serialize(item) {
        if (item.url !== SITE_URL + "/") {
          item.url = item.url.replace(/\/$/, "");
        }
        item.lastmod = new Date().toISOString().split("T")[0];
        if (item.url === SITE_URL + "/") {
          item.img = [
            {
              url: SITE_URL + "/og-image.jpg",
              title: "Sinar Surya Auto Care - bengkel mobil dan cuci hidrolik Bojongsoang",
            },
          ];
        }
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
