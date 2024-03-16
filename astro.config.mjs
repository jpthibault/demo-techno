import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jpthibault.github.io",
  base: "/demo-techno",
  integrations: [mdx(), sitemap()],
});
