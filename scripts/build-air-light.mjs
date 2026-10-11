import { build } from "vite";
import { readFile, writeFile, mkdir, realpath } from "node:fs/promises";
import { createHash } from "node:crypto";
import { gzipSync } from "node:zlib";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
// The published core uses the entire built-in catalog for media-size lookup.
// Air registers one custom generator directly, with no media/natural-size nodes.
// Exclude that unused catalog, while preserving the unmodified renderer/std code.
// A dependency upgrade must review this exact module and its exported interface.
const catalog = resolve(root, "node_modules/shaders/dist/core/shaderRegistry-C-P5WvzF.js");
const catalogSource = await readFile(catalog, "utf8");
if (
  createHash("sha256").update(catalogSource).digest("hex") !==
  "fb3b208c4bbc9359ed94b377673bcb33125bad886017c5127085a60610fffccc"
)
  throw new Error("Shaders catalog changed; review the pinned custom-only adapter");
if (
  !catalogSource.endsWith(
    "export { shaderRegistry as a, getShadersByCategory as i, getShaderByName as n, getShaderCategories as r, getAllShaders as t };\n",
  )
)
  throw new Error("Shaders catalog interface changed; review the custom-only build adapter");
const result = await build({
  configFile: false,
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  root,
  logLevel: "warn",
  plugins: [
    {
      name: "air-custom-generator-only",
      load(id) {
        if (id.endsWith("/shaders/dist/core/shaderRegistry-C-P5WvzF.js"))
          return "export const a={}; export const i=()=>[]; export const n=()=>undefined; export const r=()=>[]; export const t=()=>[];";
      },
    },
  ],
  build: {
    write: false,
    minify: true,
    target: "es2022",
    lib: { entry: resolve(root, "design/air/light-renderer.mjs"), formats: ["es"] },
    rolldownOptions: { output: { entryFileNames: "air-light-shader.js", codeSplitting: false } },
  },
});
const output = (Array.isArray(result) ? result[0] : result).output;
if (output.length !== 1 || output[0].type !== "chunk")
  throw new Error("Expected one self-contained shader bundle");
const code =
  "/* Air light / Shaders 4.0.4. Generated; see THIRD_PARTY_LICENSES.txt. */\n" + output[0].code;
const compressed = gzipSync(code).byteLength;
// Measured custom-only engine floor is ~369 kB. This is a lazy design-study
// ceiling, not a waiver of production startup/device-performance validation.
if (compressed > 400_000) throw new Error(`Lazy shader exceeds 400 kB gzip budget: ${compressed}`);
const path = resolve(root, "design/air/assets/air-light-shader.js");
await mkdir(dirname(path), { recursive: true });
if (check) {
  if ((await readFile(path, "utf8")) !== code)
    throw new Error("Shader bundle drift: run node scripts/build-air-light.mjs");
} else await writeFile(path, code);
console.log(
  `${check ? "Verified" : "Built"} Air shader: ${Buffer.byteLength(code)} bytes / ${compressed} gzip; SHA ${createHash("sha256").update(code).digest("hex").slice(0, 12)}`,
);

async function packageFile(name, from) {
  const localRequire = createRequire(from);
  for (const directory of localRequire.resolve.paths(name)) {
    const candidate = resolve(directory, name, "package.json");
    const metadata = await readFile(candidate, "utf8").then(JSON.parse, () => null);
    if (metadata?.name === name) return realpath(candidate);
  }
  throw new Error(`Cannot locate license for ${name}`);
}
const shaderPackage = await packageFile("shaders", import.meta.url);
const typegpuPackage = await packageFile("typegpu", shaderPackage);
const packages = [
  shaderPackage,
  typegpuPackage,
  ...(await Promise.all(
    ["tinyest", "tsover-runtime", "typed-binary"].map((name) => packageFile(name, typegpuPackage)),
  )),
];
let licenses = "Air light study — locally bundled third-party software\n\n";
for (const packagePath of packages) {
  const metadata = JSON.parse(await readFile(packagePath, "utf8"));
  licenses += `${metadata.name} ${metadata.version} (${metadata.license})\n${await readFile(resolve(dirname(packagePath), "LICENSE"), "utf8")}\n\n`;
}
const licensePath = resolve(root, "design/air/assets/THIRD_PARTY_LICENSES.txt");
if (check) {
  if ((await readFile(licensePath, "utf8")) !== licenses)
    throw new Error("Shader license bundle drift");
} else await writeFile(licensePath, licenses);
