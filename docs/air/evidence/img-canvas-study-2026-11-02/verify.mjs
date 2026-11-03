import {
  chromium,
  webkit,
} from "/Users/sumitsahoo/.npm/_npx/9833c18b2d85bc59/node_modules/playwright/index.mjs";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
const out = "/tmp/air-img-canvas-study-2026-11-02",
  results = [];
for (const [engine, type] of [
  ["chrome", chromium],
  ["webkit", webkit],
]) {
  const browser = await type.launch(
    engine === "chrome"
      ? { executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" }
      : {},
  );
  try {
    for (const width of [320, 390, 736])
      for (const theme of ["light", "dark"]) {
        const page = await browser.newPage({
          viewport: { width: width + 32, height: 1000 },
          colorScheme: theme,
          hasTouch: true,
        });
        const errors = [];
        page.on("pageerror", (e) => errors.push(e.message));
        await page.goto("file:///tmp/cloakimg-canvas-first-preview.html");
        const f = page.frames().find((x) => x !== page.mainFrame());
        await f.locator(".ci-tool-actions svg").first().waitFor();
        await f.waitForFunction(() => document.querySelector(".ci-photo")?.naturalWidth > 0);
        await f.evaluate(
          ({ width, theme }) =>
            document
              .getElementById("img-canvas-study")
              .setMockOptions({ layout: width > 600 ? "tablet" : "phone", appearance: theme }),
          { width, theme },
        );
        await page.waitForTimeout(100);
        const metric = () =>
          f.evaluate(() => {
            const rect = (s) => {
              const b = document.querySelector(s).getBoundingClientRect();
              return { x: b.x, y: b.y, width: b.width, height: b.height };
            };
            const controls = document.querySelector(".ci-controls");
            return {
              screen: rect(".ci-screen"),
              stage: rect(".ci-photo-stage"),
              header: rect(".ci-panel-head"),
              photo: rect(".ci-photo-frame"),
              cancel: rect("[data-cancel]"),
              apply: rect("[data-apply]"),
              scrollable: controls.scrollHeight > controls.clientHeight,
              scrollTop: controls.scrollTop,
              overflow: document.documentElement.scrollWidth > innerWidth,
              background: getComputedStyle(document.querySelector(".ci-panel")).backgroundColor,
              actionsLocal:
                !!document.querySelector(".ci-panel-head [data-cancel]") &&
                !!document.querySelector(".ci-panel-head [data-apply]"),
            };
          });
        const before = await metric();
        assert(before.stage.height >= before.screen.height * 0.4 - 1, JSON.stringify(before));
        assert(!before.overflow);
        assert(before.actionsLocal);
        assert(before.apply.width >= 44 && before.cancel.height >= 44);
        await f.locator(".ci-controls").evaluate((x) => (x.scrollTop = x.scrollHeight));
        const after = await metric();
        assert.deepEqual(after.stage, before.stage);
        assert.deepEqual(after.header, before.header);
        assert.deepEqual(after.photo, before.photo);
        await f.locator(".ci-controls").evaluate((x) => (x.scrollTop = 0));
        await f.locator('input[name=ci-ratio][value="0.8"]').check({ force: true });
        const crop = await metric();
        assert(Math.abs(crop.photo.width / crop.photo.height - 0.8) < 0.01);
        await f.locator("[data-apply]").tap();
        assert(await f.locator(".ci-panel").isHidden());
        await f.locator("[data-tool=adjust]").tap();
        await f.locator("[data-exposure]").fill("0.4");
        assert.match(await f.locator(".ci-photo").evaluate((x) => x.style.filter), /1.319/);
        await f.locator("[data-cancel]").tap();
        assert.match(
          await f.locator(".ci-photo").evaluate((x) => x.style.filter),
          /brightness\(1\)/,
        );
        await f.locator("[data-undo]").tap();
        await f.locator("[data-redo]").tap();
        await f.locator("[data-tool=crop]").tap();
        await f.locator("[data-reset]").first().tap();
        await f.locator(".ci-controls").evaluate((x) => (x.scrollTop = 0));
        await f.locator(".ci-status").waitFor({ state: "hidden" });
        await f
          .locator(".ci-screen")
          .screenshot({ path: `${out}/${engine}-${width}-${theme}.png` });
        assert.deepEqual(errors, []);
        results.push({ engine, width, theme, ...before, errors });
        await page.close();
      }
  } finally {
    await browser.close();
  }
}
await fs.writeFile(`${out}/results.json`, JSON.stringify(results, null, 2));
console.log(
  `${results.length} states passed; fixed local actions, photo minimum, scroll isolation, Crop/Adjust apply/cancel and undo/redo; no runtime errors.`,
);
