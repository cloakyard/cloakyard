import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const roots = resolve(repository, "..");
const check = process.argv.includes("--check");
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
for (const [slug, name, destinations] of products) {
  const appendix = (
    await readFile(resolve(repository, `design/air/products/${slug}.md`), "utf8")
  ).trim();
  const content = `---
name: ${name} — Cloakyard Air
version: 1.0.0
status: authoritative-target
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
    const path = resolve(roots, slug, destination);
    if (check) {
      const actual = await readFile(path, "utf8").catch(() => "");
      if (actual !== content) {
        console.error(`Drift: ${slug}/${destination}`);
        failures++;
      }
    } else {
      await mkdir(dirname(path), { recursive: true });
      await writeFile(path, content);
    }
  }
}
if (failures) process.exitCode = 1;
else
  console.log(
    `${check ? "Verified" : "Updated"} six portable Air specifications (${hash.slice(0, 12)}).`,
  );
