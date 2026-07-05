import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

const site = "https://mmni.dev";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "CabinetGrotesk",
      cssVariable: "--font-cabinet-grotesk",
      options: {
        variants: [
          {
            weight: "100 1000",
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Variable.ttf"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Satoshi",
      cssVariable: "--font-satoshi",
      options: {
        variants: [
          {
            weight: "100 1000",
            style: "normal",
            src: ["./src/assets/fonts/Satoshi-Variable.ttf"],
          },
          {
            weight: "100 1000",
            style: "italic",
            src: ["./src/assets/fonts/Satoshi-VariableItalic.ttf"],
          },
        ],
      },
    },
  ],
  site,
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        `${site}/sitemap-index.xml`,
        `${site}/sitemap-0.xml`,
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [],
  },
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  vite: {
    assetsInclude: "**/*.riv",
  },
});
