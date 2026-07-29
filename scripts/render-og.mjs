import { access } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(projectRoot, "artwork", "og.html");
const outputPath = path.join(projectRoot, "public", "og.png");

const candidates = [
  process.env.CHROME_BIN,
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

let browserPath;

for (const candidate of candidates) {
  try {
    await access(candidate);
    browserPath = candidate;
    break;
  } catch {
    // Try the next known browser location.
  }
}

if (!browserPath) {
  throw new Error("Chrome or Chromium was not found. Set CHROME_BIN to its executable path.");
}

const args = [
  "--headless=new",
  "--disable-background-networking",
  "--force-device-scale-factor=1",
  "--hide-scrollbars",
  "--no-first-run",
  "--run-all-compositor-stages-before-draw",
  "--virtual-time-budget=1000",
  "--window-size=1200,630",
  `--screenshot=${outputPath}`,
  pathToFileURL(sourcePath).href,
];

await new Promise((resolve, reject) => {
  const child = spawn(browserPath, args, { stdio: "inherit" });

  child.on("error", reject);
  child.on("exit", (code) => {
    if (code === 0) {
      resolve();
      return;
    }

    reject(new Error(`Browser exited with code ${code ?? "unknown"}.`));
  });
});

console.log(
  `Rendered ${path.relative(projectRoot, outputPath)} from ${path.relative(projectRoot, sourcePath)}.`,
);
