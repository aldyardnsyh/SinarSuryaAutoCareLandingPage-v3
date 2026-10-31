// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Domain resmi dari pemilik.
const SITE_URL = "https://bengkelmobilbojongsoang.web.id";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
