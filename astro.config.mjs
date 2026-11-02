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
      serialize(item) {
        if (item.url !== SITE_URL + "/") {
          item.url = item.url.replace(/\/$/, "");
        }
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
