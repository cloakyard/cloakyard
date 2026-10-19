/** Run against production previews; browsers use disposable, anonymous profiles. */
import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
const { default: puppeteer } = await import(process.env.PUPPETEER_MODULE || "puppeteer-core");
const output = process.env.AIR_EVIDENCE_DIR || "/tmp/air-brand-horizons";
const apps = [
  ["cloakyard", "air", 8170, "cloakyard-mark.svg"],
  ["cloakpdf", "pdf", 8171, "brands/cloakpdf-mark.svg"],
  ["cloakdrop", "drop", 8172, "brands/cloakdrop-mark.svg"],
  ["cloakresume", "resume", 8173, "brands/cloakresume-mark.svg"],
  ["cloakimg", "img", 8174, "brands/cloakimg-mark.svg"],
].filter(([app]) => !process.env.AIR_APP || app === process.env.AIR_APP);
await mkdir(output, { recursive: true });
const browser = await puppeteer.launch({
  executablePath:
    process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const results = [];
try {
  for (const [app, prefix, port, mark] of apps) {
    const logo = await readFile(new URL(`../public/${mark}`, import.meta.url), "utf8");
    const stops = [...logo.matchAll(/stop-color="(#[\da-f]+)"/gi)].map((m) => m[1]);
    assert.ok(stops.length >= 2, `${app}: original logo gradient`);
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(String(error)));
    const selector = `.${prefix}-horizon`;
    const url = process.env.AIR_URL || `http://127.0.0.1:${port}`;
    const layouts = [];
    for (const [width, height] of [
      [1440, 900],
      [1280, 720],
      [768, 1024],
      [390, 844],
      [320, 568],
      [844, 390],
    ]) {
      await page.setViewport({ width, height });
      for (const theme of ["light", "dark"]) {
        await page.emulateMediaFeatures([
          { name: "prefers-color-scheme", value: theme },
          { name: "prefers-reduced-motion", value: "reduce" },
        ]);
        await page.goto(url, { waitUntil: "networkidle0" });
        const state = await page.$eval(
          selector,
          (field, brand) => {
            const probe = document.createElement("span");
            probe.style.color = brand;
            field.append(probe);
            const expected = getComputedStyle(probe).color;
            probe.remove();
            const style = getComputedStyle(field);
            let parent = field.parentElement;
            while (
              parent &&
              ["transparent", "rgba(0, 0, 0, 0)"].includes(getComputedStyle(parent).backgroundColor)
            )
              parent = parent.parentElement;
            const box = field.getBoundingClientRect();
            return {
              expected,
              colour: style.color,
              base: style.backgroundColor,
              page: parent ? getComputedStyle(parent).backgroundColor : null,
              strokes: [...field.querySelectorAll("path[stroke]")].map(
                (path) => getComputedStyle(path).stroke,
              ),
              overflow: document.documentElement.scrollWidth > innerWidth + 1,
              contained: box.left >= -1 && box.right <= innerWidth + 1,
              height: box.height,
              state: field.dataset.lightState,
              ready: field.dataset.lightReady,
            };
          },
          stops[theme === "dark" ? 0 : 1],
        );
        assert.equal(state.colour, state.expected, `${app} ${theme}: logo colour`);
        assert.equal(state.base, state.page, `${app} ${theme}: artwork blends into its page`);
        assert.ok(state.strokes.length > 0);
        assert.ok(
          state.strokes.every((colour) => colour === state.colour),
          `${app}: SVG matches shader input`,
        );
        assert.equal(state.contained, true);
        assert.equal(state.overflow, false, `${app} ${width}: page overflow`);
        assert.equal(state.state, "reduced");
        assert.equal(state.ready, undefined);
        layouts.push({ width, height, theme, ...state });
        if ([1440, 1280, 390].includes(width)) {
          await page.screenshot({
            path: resolve(output, `${app}-${width}-${theme}.png`),
            fullPage: true,
          });
        }
      }
    }
    await page.setViewport({ width: 1440, height: 900 });
    const gpu = [];
    for (const theme of ["light", "dark"]) {
      await page.emulateMediaFeatures([
        { name: "prefers-color-scheme", value: theme },
        { name: "prefers-reduced-motion", value: "no-preference" },
      ]);
      await page.goto(url, { waitUntil: "networkidle0" });
      await page.$eval(selector, (field) => field.scrollIntoView({ block: "center" }));
      await page.waitForFunction(
        (s) => document.querySelector(s).dataset.lightState === "idle",
        { timeout: 15_000 },
        selector,
      );
      const state = await page.$eval(selector, (field) => ({ ...field.dataset }));
      assert.equal(state.lightReady, "true");
      assert.ok(Number(state.lightFrames) > 0);
      await new Promise((r) => setTimeout(r, 400));
      assert.equal(
        await page.$eval(selector, (field) => field.dataset.lightFrames),
        state.lightFrames,
      );
      await page.screenshot({ path: resolve(output, `${app}-gpu-${theme}.png`) });
      const horizon = await page.$(selector);
      await horizon.screenshot({ path: resolve(output, `${app}-artwork-${theme}.png`) });
      gpu.push({ theme, ...state });
    }
    assert.deepEqual(errors, []);
    results.push({ app, url, layouts, gpu, errors });
    await context.close();
    console.log(`${app}: ${layouts.length} layouts, both GPU themes and idle checks pass`);
  }
  await writeFile(resolve(output, "brand-horizons.json"), JSON.stringify(results, null, 2) + "\n");
} finally {
  await browser.close();
}
