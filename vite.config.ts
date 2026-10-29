import { gzipSync } from "node:zlib";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "air-home-asset-budgets",
      generateBundle(_options, bundle) {
        const chunks = Object.values(bundle).filter((asset) => asset.type === "chunk");
        const entry = chunks.find((chunk) => chunk.isEntry);
        if (!entry || gzipSync(entry.code).byteLength > 85_000)
          this.error("Home entry exceeds 85 kB gzip");
      },
    },
  ],
  fmt: {
    ignorePatterns: [
      ".agents/**",
      ".claude/skills/**",
      "design/air/assets/**",
      "docs/air/assets/**",
    ],
  },
  lint: {
    ignorePatterns: [
      ".agents/**",
      ".claude/skills/**",
      "design/air/assets/**",
      "docs/air/assets/**",
    ],
  },
});
