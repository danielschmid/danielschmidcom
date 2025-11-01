// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compress from "@playform/compress";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES_URL || process.env.CUSTOM_DOMAIN || "https://danielschmid.pages.dev",
  output: "static",
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "ABC Diatype",
        cssVariable: "--font-diatype",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/ABCDiatype-Regular.woff2"]
          }
        ]
      },
      {
        provider: "local", 
        name: "ABC Diatype Mono",
        cssVariable: "--font-diatype-mono",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/ABCDiatypeMono-Regular.woff2"]
          }
        ]
      }
    ]
  },
  integrations: [
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@components": path.resolve("./src/components"),
        "@layouts": path.resolve("./src/layouts"),
        "@pages": path.resolve("./src/pages"),
        "@assets": path.resolve("./src/assets"),
        "@styles": path.resolve("./src/styles"),
        "@utils": path.resolve("./src/utils"),
        "@types": path.resolve("./src/types"),
      },
    },
  },
});
