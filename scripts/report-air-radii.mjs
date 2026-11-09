/** Summarize observer NDJSON. Unknown roles require source/visual classification. */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { auditCorners } from "./air-radius-contract.mjs";
const input = process.argv[2],
  output = process.argv[3];
if (!input || !output)
  throw new Error("Usage: node scripts/report-air-radii.mjs <evidence-directory> <report.json>");
const rows = [];
async function visit(path) {
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const file = resolve(path, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith("baseline")) await visit(file);
    else if (entry.isFile() && entry.name.endsWith(".ndjson")) {
      for (const line of (await readFile(file, "utf8")).trim().split("\n"))
        if (line) rows.push(JSON.parse(line));
    }
  }
}
await visit(resolve(input));
const report = auditCorners(rows);
report.coverage = [
  ...new Set(
    rows
      .filter((r) => r.origin !== "null")
      .map((r) => JSON.stringify([r.origin, r.viewport, r.theme, r.rootFont])),
  ),
].map(JSON.parse);
await writeFile(output, JSON.stringify(report, null, 2) + "\n");
console.log(
  JSON.stringify({
    observations: report.observations,
    checked: report.checked,
    failures: report.failures.length,
    unclassified: report.unclassified.length,
    coverage: report.coverage.length,
  }),
);
process.exitCode = report.failures.length ? 1 : 0;
