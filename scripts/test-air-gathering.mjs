/** Production family artwork: actual timing, static preferences and real directory links. */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
const { default: puppeteer } = await import(process.env.PUPPETEER_MODULE || "puppeteer-core");
const out = resolve(process.env.AIR_EVIDENCE_DIR || "/tmp/air-gathering");
await mkdir(out, { recursive: true });
const url = process.env.SITE_URL || "http://127.0.0.1:8350/";
const sizes = [
  [320, 568],
  [375, 812],
  [390, 844],
  [430, 932],
  [844, 390],
  [768, 1024],
  [1024, 768],
  [1280, 720],
  [1366, 768],
  [1440, 900],
  [1920, 1080],
];
const result = { layouts: [], arrivals: [], journeys: [], errors: [] };
const browser = await puppeteer.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
try {
  const page = await browser.newPage();
  page.on("pageerror", (e) => result.errors.push(String(e)));
  const requests = [];
  page.on("request", (r) => requests.push(r.url()));
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, "hardwareConcurrency", { value: 8 });
    Object.defineProperty(navigator, "deviceMemory", { value: 8 });
  });
  for (const theme of ["light", "dark"])
    for (const [width, height] of sizes) {
      await page.setViewport({ width, height });
      await page.emulateMediaFeatures([
        { name: "prefers-color-scheme", value: theme },
        { name: "prefers-reduced-motion", value: "reduce" },
      ]);
      await page.goto(url, { waitUntil: "networkidle0" });
      for (const font of [16, 32]) {
        await page.evaluate(
          (font) => (document.documentElement.style.fontSize = `${font}px`),
          font,
        );
        const row = await page.evaluate(() => {
          const root = document.querySelector(".tool-gathering"),
            box = root.getBoundingClientRect();
          return {
            state: root.dataset.artState,
            overflow: document.documentElement.scrollWidth > innerWidth + 1,
            contained: box.left >= 0 && box.right <= innerWidth + 1,
            active: root.getAnimations({ subtree: true }).length,
            forms: root.querySelectorAll(".gathering-object").length,
            sheets: [...root.querySelectorAll(".gathering-sheet")].map(
              (n) => getComputedStyle(n).fill,
            ),
            labels: [...document.querySelectorAll(".tool-entry h3")].map((n) => n.textContent),
            roll: document.querySelector('.tool-entry a[href="https://roll.cloakyard.com"]')?.href,
          };
        });
        assert.equal(row.overflow, false);
        assert.equal(row.contained, true);
        assert.equal(row.state, "reduced");
        assert.equal(row.active, 0);
        assert.equal(row.forms, 5);
        assert.ok(row.sheets.every((c) => c === "rgb(255, 255, 255)"));
        assert.equal(row.roll, "https://roll.cloakyard.com/");
        assert.equal(row.labels.length, 5);
        result.layouts.push({ theme, width, height, font, ...row });
      }
      await page.emulateMediaFeatures([
        { name: "prefers-color-scheme", value: theme },
        { name: "prefers-reduced-motion", value: "no-preference" },
      ]);
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await page.$eval(".tool-gathering", (n) => n.scrollIntoView({ block: "center" }));
      await page.waitForFunction(
        () => document.querySelector(".tool-gathering")?.dataset.artState === "playing",
      );
      const timings = await page.$eval(".tool-gathering", (n) =>
        n.getAnimations({ subtree: true }).map((a) => a.effect.getTiming()),
      );
      assert.equal(timings.length, 40);
      assert.ok(timings.every((t) => t.duration === 1800 && t.duration + t.delay <= 4300));
      await page.waitForFunction(
        () => document.querySelector(".tool-gathering").dataset.artState === "complete",
      );
      assert.equal(
        await page.$eval(".tool-gathering", (n) => n.getAnimations({ subtree: true }).length),
        0,
      );
      result.arrivals.push({ theme, width, height, timings });
    }
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(
    () => document.querySelector(".tool-gathering")?.dataset.artState === "playing",
  );
  await page.$eval("footer", (n) => n.scrollIntoView());
  await page.waitForFunction(
    () => document.querySelector(".tool-gathering").dataset.artState === "offscreen",
  );
  assert.ok(
    await page.$eval(".tool-gathering", (n) =>
      n.getAnimations({ subtree: true }).every((a) => a.playState === "paused"),
    ),
  );
  await page.$eval(".tool-gathering", (n) => n.scrollIntoView({ block: "center" }));
  await page.waitForFunction(
    () => document.querySelector(".tool-gathering").dataset.artState === "playing",
  );
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.waitForFunction(
    () => document.querySelector(".tool-gathering").dataset.artState === "reduced",
  );
  assert.equal(
    await page.$eval(".tool-gathering", (n) => n.getAnimations({ subtree: true }).length),
    0,
  );
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
  await page.waitForFunction(
    () => document.querySelector(".tool-gathering").dataset.artState === "complete",
  );
  result.journeys.push(
    "Offscreen pause/resume and immediate preference change; no restart after restriction",
  );
  const constrained = await browser.newPage();
  await constrained.evaluateOnNewDocument(() =>
    Object.defineProperty(navigator, "deviceMemory", { value: 4 }),
  );
  await constrained.goto(url, { waitUntil: "networkidle0" });
  assert.equal(
    await constrained.$eval(".tool-gathering", (n) => n.dataset.artState),
    "constrained",
  );
  await constrained.close();
  result.journeys.push("Constrained device uses the still");
  const nojs = await browser.newPage();
  await nojs.setJavaScriptEnabled(false);
  await nojs.goto(url, { waitUntil: "networkidle0" });
  assert.ok(await nojs.$('noscript a[href="https://roll.cloakyard.com"]'));
  await nojs.close();
  result.journeys.push("No-JavaScript directory includes CloakRoll");
  assert.ok(requests.every((u) => !u.includes("air-light-shader") && !u.includes("ko-fi.com")));
  result.journeys.push("No shader or support-service requests on page load");
  assert.deepEqual(result.errors, []);
} finally {
  await browser.close();
  await writeFile(resolve(out, "gathering.json"), JSON.stringify(result, null, 2));
}
console.log(
  `${result.layouts.length} static layouts, ${result.arrivals.length} real arrivals and ${result.journeys.length} journeys passed.`,
);
