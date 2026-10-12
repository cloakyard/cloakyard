import { build } from "vite";
import react from "@vitejs/plugin-react";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { gzipSync } from "node:zlib";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const result = await build({
  root,
  configFile: false,
  plugins: [react()],
  logLevel: "warn",
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    write: false,
    minify: true,
    target: "es2022",
    lib: { entry: resolve(root, "design/air/overlays.tsx"), formats: ["es"] },
    rolldownOptions: { output: { entryFileNames: "air-overlays.js", codeSplitting: false } },
  },
});
const output = (Array.isArray(result) ? result[0] : result).output;
if (
  output.length !== 1 ||
  output[0].type !== "chunk" ||
  output[0].imports.length ||
  output[0].dynamicImports.length
)
  throw new Error("Expected one self-contained overlay study bundle");
const code = "/* Air overlay study. Generated; see OVERLAY_LICENSES.txt. */\n" + output[0].code;
const compressed = gzipSync(code).byteLength;
if (compressed > 150_000)
  throw new Error(`Overlay study exceeds 150 kB lazy gzip ceiling: ${compressed}`);
async function save(name, content) {
  const path = resolve(root, "design/air/assets", name);
  await mkdir(dirname(path), { recursive: true });
  if (check) {
    if ((await readFile(path, "utf8")) !== content) throw new Error(`Overlay asset drift: ${name}`);
  } else await writeFile(path, content);
}
await save("air-overlays.js", code);
const packages = new Map();
for (const module of Object.keys(output[0].modules)) {
  if (!module.includes("node_modules/")) continue;
  let dir = dirname(module);
  while (dir.includes("node_modules")) {
    const meta = await readFile(resolve(dir, "package.json"), "utf8").then(JSON.parse, () => null);
    if (meta?.name) {
      if (!packages.has(meta.name)) {
        let license;
        for (const name of ["LICENSE", "LICENSE.md", "LICENSE.txt", "license"]) {
          license = await readFile(resolve(dir, name), "utf8").catch(() => null);
          if (license) break;
        }
        if (!license) throw new Error(`Missing license for ${meta.name}`);
        packages.set(
          meta.name,
          `${meta.name} ${meta.version} (${meta.license})\n${license.trim()}\n`,
        );
      }
      break;
    }
    dir = dirname(dir);
  }
}
if (!packages.has("@base-ui/react") || !packages.has("react-dom"))
  throw new Error("Incomplete overlay license inventory");
await save(
  "OVERLAY_LICENSES.txt",
  "Air overlay study — locally bundled third-party software\n\n" +
    [...packages]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, value]) => value)
      .join("\n"),
);
console.log(
  `${check ? "Verified" : "Built"} Air overlays: ${Buffer.byteLength(code)} bytes / ${compressed} gzip; SHA ${createHash("sha256").update(code).digest("hex").slice(0, 12)}; ${packages.size} licenses`,
);
