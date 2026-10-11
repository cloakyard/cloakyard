import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const roots = resolve(repository, "..");
const check = process.argv.includes("--check");
const bundle = process.argv.includes("--bundle");
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
version: 1.0.0
status: design-review
date: 2026-10-11
scope: complete-web-product
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
    const cssPath = `${slug === "cloakdrop" ? "apps/site/" : ""}src/styles/air.css`;
    const gallery = (
      await readFile(resolve(repository, "design/air/components.html"), "utf8")
    ).replace("__AIR_STYLESHEET__", `../../${cssPath}`);
    await sync(resolve(roots, slug, cssPath), css);
    await sync(resolve(roots, slug, "docs/air/components.html"), gallery);
    const manifest = {
      version: "1.0.0",
      stylesheet: cssPath,
      sha256: createHash("sha256").update(css).digest("hex"),
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
