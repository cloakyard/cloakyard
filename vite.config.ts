import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [react()],
  fmt: { ignorePatterns: [".agents/**"] },
  lint: { ignorePatterns: [".agents/**"] },
});
