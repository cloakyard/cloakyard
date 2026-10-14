import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const roots = resolve(repository, "..");
const check = process.argv.includes("--check");
const bundle = process.argv.includes("--bundle");
const sourceRepository = "https://github.com/cloakyard/cloakyard";
const products = [
  ["cloakyard", "Cloakyard", ["DESIGN.md"]],
  ["cloakpdf", "CloakPDF", ["DESIGN.md"]],
  ["cloakimg", "CloakIMG", ["DESIGN.md"]],
  ["cloakresume", "CloakResume", ["DESIGN.md"]],
  ["cloakdrop", "CloakDrop website", ["DESIGN.md", "apps/site/DESIGN.md"]],
];
const contract = (await readFile(resolve(repository, "design/air/contract.md"), "utf8")).trim();
const hash = createHash("sha256").update(contract).digest("hex");
let failures = 0;
async function sync(path, content) {
  if (check) {
    const actual = await readFile(path, "utf8").catch(() => "");
    if (actual !== content) {
      console.error(`Drift: ${path.slice(roots.length + 1)}`);
      failures++;
    }
  } else {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
  }
}
for (const [slug, name, destinations] of products) {
  const appendix = (
    await readFile(resolve(repository, `design/air/products/${slug}.md`), "utf8")
  ).trim();
  const content = `---
name: ${name} — Cloakyard Air
version: 1.0.1
status: approved
date: 2026-10-14
scope: complete-web-product
source-repository: ${sourceRepository}
source-directory: design/air
family-contract-sha256: ${hash}
---

<!-- BEGIN CLOAKYARD AIR CONTRACT -->

${contract}

<!-- END CLOAKYARD AIR CONTRACT -->

${appendix}
`;
  for (const destination of destinations) {
    await sync(resolve(roots, slug, destination), content);
  }
  if (bundle) {
    const css = await readFile(resolve(repository, "design/air/air.css"), "utf8");
    const cssHash = createHash("sha256").update(css).digest("hex");
    const pagesHash = createHash("sha256")
      .update(await readFile(resolve(repository, "design/air/pages.mjs")))
      .digest("hex");
    const filesHash = createHash("sha256")
      .update(await readFile(resolve(repository, "design/air/files.mjs")))
      .digest("hex");
    const cssPath = `${slug === "cloakdrop" ? "apps/site/" : ""}src/styles/air.css`;
    const overlayHash = createHash("sha256")
      .update(await readFile(resolve(repository, "design/air/assets/air-overlays.js")))
      .digest("hex");
    const collectionHash = createHash("sha256")
      .update(await readFile(resolve(repository, "design/air/assets/air-collections.js")))
      .digest("hex");
    const loader = (await readFile(resolve(repository, "design/air/overlays-loader.mjs"), "utf8"))
      .replace("__AIR_OVERLAY_REVISION__", overlayHash.slice(0, 12))
      .replace("__AIR_COLLECTION_REVISION__", collectionHash.slice(0, 12));
    const loaderHash = createHash("sha256").update(loader).digest("hex");
    const gallery = (await readFile(resolve(repository, "design/air/components.html"), "utf8"))
      .replace("__AIR_STYLESHEET__", `../../${cssPath}?air=${cssHash.slice(0, 12)}`)
      .replace("__AIR_OVERLAY_LOADER_REVISION__", loaderHash.slice(0, 12));
    await sync(resolve(roots, slug, cssPath), css);
    await sync(resolve(roots, slug, "docs/air/components.html"), gallery);
    for (const script of ["check-air-design.mjs", "check-air-portability.mjs"]) {
      await sync(
        resolve(roots, slug, "scripts", script),
        await readFile(resolve(repository, "scripts", script), "utf8"),
      );
    }
    const studyAssets = { "components.html": createHash("sha256").update(gallery).digest("hex") };
    for (const asset of [
      "reading.html",
      "recovery.html",
      "pages.mjs",
      "files.html",
      "collections.html",
      "files.mjs",
      "motion.mjs",
      "light-controller.mjs",
      "light-runtime.mjs",
      "light-runtime.d.mts",
      "assets/air-light-shader.js",
      "assets/THIRD_PARTY_LICENSES.txt",
      "overlays-loader.mjs",
      "assets/air-overlays.js",
      "assets/air-collections.js",
      "assets/OVERLAY_LICENSES.txt",
    ]) {
      let content = await readFile(resolve(repository, "design/air", asset), "utf8");
      if (asset.endsWith(".html"))
        content = content
          .replace("__AIR_STYLESHEET__", `../../${cssPath}?air=${cssHash.slice(0, 12)}`)
          .replace("__AIR_PAGES_REVISION__", pagesHash.slice(0, 12))
          .replace("__AIR_FILES_REVISION__", filesHash.slice(0, 12))
          .replace("__AIR_OVERLAY_LOADER_REVISION__", loaderHash.slice(0, 12));
      if (asset === "overlays-loader.mjs")
        content = content
          .replace("__AIR_OVERLAY_REVISION__", overlayHash.slice(0, 12))
          .replace("__AIR_COLLECTION_REVISION__", collectionHash.slice(0, 12));
      await sync(resolve(roots, slug, "docs/air", asset), content);
      studyAssets[asset] = createHash("sha256").update(content).digest("hex");
    }
    const manifest = {
      version: "1.0.1",
      source: {
        repository: sourceRepository,
        directory: "design/air",
        status: "approved",
        contractSha256: hash,
      },
      stylesheet: cssPath,
      studyAssets,
      sha256: cssHash,
      note: "Pinned family bundle. Runtime migration is tracked separately in surfaces.json.",
    };
    await sync(
      resolve(roots, slug, "docs/air/bundle.json"),
      JSON.stringify(manifest, null, 2) + "\n",
    );
  }
}
if (failures) process.exitCode = 1;
else
  console.log(
    `${check ? "Verified" : "Updated"} six portable Air specifications (${hash.slice(0, 12)}).`,
  );
