import { readFileSync } from "node:fs";
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
        const shader = chunks.find((chunk) => chunk.fileName.includes("air-light-shader"));
        if (!shader) this.error("Expected a separate lazy Air shader chunk");
        if (gzipSync(shader.code).byteLength > 350_000)
          this.error("Lazy Air shader exceeds 350 kB gzip");
        const entry = chunks.find((chunk) => chunk.isEntry);
        if (!entry || gzipSync(entry.code).byteLength > 85_000)
          this.error("Home entry exceeds 85 kB gzip");
        this.emitFile({
          type: "asset",
          fileName: "air-light.LICENSE.txt",
          source: readFileSync(
            new URL("./design/air/assets/THIRD_PARTY_LICENSES.txt", import.meta.url),
            "utf8",
          ),
        });
      },
    },
  ],
  fmt: { ignorePatterns: [".agents/**", "design/air/assets/**", "docs/air/assets/**"] },
  lint: { ignorePatterns: [".agents/**", "design/air/assets/**", "docs/air/assets/**"] },
});
