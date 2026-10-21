import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import puppeteer from "/Users/sumitsahoo/Developer/cloakpdf/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js";
const b = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const rows = [],
  errors = [];
try {
  for (const [width, height] of [
    [1440, 900],
    [1280, 720],
    [390, 844],
  ])
    for (const theme of ["light", "dark"]) {
      const p = await b.newPage();
      p.on("pageerror", (e) => errors.push(String(e)));
      await p.setViewport({ width, height });
      await p.emulateMediaFeatures([
        { name: "prefers-color-scheme", value: theme },
        { name: "prefers-reduced-motion", value: "reduce" },
      ]);
      await p.goto("http://127.0.0.1:8225/docs/air/components.html", { waitUntil: "networkidle0" });
      await p.$eval("#air-overlay-root", (e) => e.scrollIntoView({ block: "center" }));
      await p.locator("#air-view-settings").click();
      await p.waitForSelector(".air-popover");
      await p.keyboard.press("Escape");
      await p.locator('button[aria-label="Sample actions"]').click();
      await p.locator("::-p-text(Rename sample…)").click();
      await p.waitForSelector("#air-rename-input");
      await p.$eval("#air-rename-input", (e) => e.select());
      await p.type("#air-rename-input", "Release proof");
      await p.keyboard.press("Enter");
      await p.waitForFunction(() =>
        document
          .querySelector("#air-overlay-status")
          ?.textContent.includes("renamed to Release proof"),
      );
      await p.goto("http://127.0.0.1:8225/docs/air/collections.html", {
        waitUntil: "networkidle0",
      });
      await p.locator("#air-kind").click();
      await p.waitForSelector('[role="listbox"]');
      await p.keyboard.press("ArrowDown");
      await p.keyboard.press("Enter");
      assert.equal(await p.$eval("#air-kind", (e) => e.getAttribute("aria-expanded")), "false");
      assert.equal(
        await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
        false,
      );
      await p.screenshot({
        path: `/tmp/cloakyard-rollout-2026-10-21/cloakyard/collections-${width}-${theme}.png`,
      });
      rows.push({
        width,
        height,
        theme,
        popover: true,
        rename: true,
        selectKeyboard: true,
        overflow: false,
      });
      await p.close();
    }
  assert.deepEqual(errors, []);
  await writeFile(
    "/tmp/cloakyard-rollout-2026-10-21/cloakyard/studies.json",
    JSON.stringify({ rows, errors }, null, 2),
  );
  console.log("PASS 6 overlay and collection keyboard/menu/dialog/select cases");
} finally {
  await b.close();
}
