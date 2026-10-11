import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [react()],
  fmt: { ignorePatterns: [".agents/**", "design/air/assets/**", "docs/air/assets/**"] },
  lint: { ignorePatterns: [".agents/**", "design/air/assets/**", "docs/air/assets/**"] },
});
