/** Check the shipped homepage by scrolling it. Optional AIR_EVIDENCE_DIR saves review captures. */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const playwright = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const base = process.env.SITE_URL || "http://127.0.0.1:4397/";
const engine = process.env.AIR_BROWSER || "chromium";
const browser = await playwright[engine].launch();
const out = process.env.AIR_EVIDENCE_DIR;
const sizes = [
  [320, 568],
  [375, 812],
  [390, 844],
  [430, 932],
  [844, 390],
  [564, 936],
  [639, 800],
  [640, 800],
  [641, 800],
  [703, 800],
  [704, 800],
  [705, 800],
  [768, 1024],
  [959, 800],
  [960, 800],
  [961, 800],
  [1024, 768],
  [1280, 720],
  [1366, 768],
  [1440, 900],
  [1920, 1080],
  [2560, 1440],
];
if (out) await mkdir(out, { recursive: true });
const layouts = [];
try {
  for (const theme of ["light", "dark"]) {
    const page = await browser.newPage({ colorScheme: theme, reducedMotion: "no-preference" });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const [width, height] of sizes) {
      await page.setViewportSize({ width, height });
      await page.goto(base);
      await page.waitForSelector('[data-air-reveal="pending"]', { state: "attached" });
      const result = await page.evaluate(async () => {
        const blocks = [...document.querySelectorAll("[data-air-reveal]")];
        const target = blocks.find(
          (block) =>
            block.dataset.airReveal === "pending" &&
            block.getBoundingClientRect().top >= innerHeight,
        );
        const top = target.getBoundingClientRect().top;
        const row = blocks.filter(
          (block) =>
            block.dataset.airReveal === "pending" &&
            Math.abs(block.getBoundingClientRect().top - top) < 1,
        );
        const delays = [];
        const durations = [];
        const record = (event) => {
          const index = row.indexOf(event.target.parentElement);
          if (index < 0 || event.animationName !== "air-landing-wipe") return;
          if (event.type === "animationstart")
            delays[index] = parseFloat(row[index].style.getPropertyValue("--air-reveal-delay"));
          else durations[index] = event.elapsedTime;
        };
        document.addEventListener("animationstart", record, true);
        document.addEventListener("animationend", record, true);
        scrollBy(0, Math.ceil(top - 48));
        const deadline = performance.now() + 4500;
        let combined = false;
        do {
          await new Promise((r) => requestAnimationFrame(r));
          const content = getComputedStyle(target.firstElementChild);
          const veil = getComputedStyle(target.querySelector(".air-reveal-veil"), "::before");
          if (content.transform !== "none" && veil.transform !== "none") {
            const y = new DOMMatrix(content.transform).m42;
            combined ||=
              Number(content.opacity) > 0.6 &&
              Number(content.opacity) < 1 &&
              y > 0 &&
              y < 4 &&
              new DOMMatrix(veil.transform).m42 > 0;
          }
        } while (
          performance.now() < deadline &&
          row.some((block) => block.dataset.airReveal !== "")
        );
        document.removeEventListener("animationstart", record, true);
        document.removeEventListener("animationend", record, true);
        return {
          count: blocks.length,
          combined,
          delays,
          durations,
          row: row.length,
          settled: row.every(
            (block) =>
              block.dataset.airReveal === "" &&
              getComputedStyle(block.querySelector(".air-reveal-veil")).display === "none",
          ),
          overflow: document.documentElement.scrollWidth > innerWidth,
        };
      });
      const label = JSON.stringify({ engine, width, height, theme, result });
      assert.equal(result.count, 11, label);
      assert.ok(result.combined && result.settled && !result.overflow, label);
      assert.equal(result.durations.length, result.row, label);
      assert.equal(result.delays.length, result.row, label);
      for (let i = 0; i < result.row; i++) {
        assert.ok(Math.abs(result.durations[i] - 0.52) < 0.002, label);
        if (i) assert.ok(Math.abs(result.delays[i] - result.delays[i - 1] - 240) < 2, label);
      }
      layouts.push({ width, height, theme, ...result });
      if (out && [390, 768, 1280, 1440].includes(width))
        await page.screenshot({ path: resolve(out, engine + "-" + width + "-" + theme + ".png") });
    }
    assert.deepEqual(errors, []);
    await page.close();
  }
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    reducedMotion: "no-preference",
  });
  await page.goto(base + "#principles");
  await page.waitForFunction(() => document.activeElement.id === "principles");
  assert.ok(
    await page
      .locator(".principle")
      .first()
      .evaluate((block) => block.dataset.airReveal === ""),
  );
  await page.goto(base);
  await page.waitForSelector('[data-air-reveal="pending"]', { state: "attached" });
  const arrivals = await page.evaluate(async () => {
    const blocks = [...document.querySelectorAll("[data-air-reveal]")];
    const starts = [];
    const record = (event) => {
      if (event.animationName === "air-landing-wipe")
        starts.push(blocks.indexOf(event.target.parentElement));
    };
    document.addEventListener("animationstart", record, true);
    const expected = blocks.flatMap((block, index) =>
      block.getBoundingClientRect().top >= innerHeight ? [index] : [],
    );
    for (const index of expected) {
      const block = blocks[index];
      if (!block.dataset.airReveal) continue;
      block.scrollIntoView({ block: "center", behavior: "instant" });
      const deadline = performance.now() + 4500;
      while (block.dataset.airReveal && performance.now() < deadline)
        await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    scrollTo({ top: 0, behavior: "instant" });
    document.removeEventListener("animationstart", record, true);
    return { expected, starts: starts.filter((index) => expected.includes(index)) };
  });
  assert.deepEqual(
    arrivals.starts,
    arrivals.expected,
    "Each below-fold block reveals once in order",
  );
  await page.reload();
  await page.waitForSelector('[data-air-reveal="pending"]', { state: "attached" });
  const entry = page.locator(".tool-entry").last();
  await entry.locator("a").first().focus();
  assert.equal(await entry.getAttribute("data-air-reveal"), "");
  await page.reload();
  await page.locator(".curiosity-inner").evaluate((el) => el.scrollIntoView({ block: "center" }));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForFunction(
    () => ![...document.querySelectorAll("[data-air-reveal]")].some((el) => el.dataset.airReveal),
  );
  assert.equal(await page.locator(".air-reveal-veil:visible").count(), 0);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto(base + "?view=privacy");
  assert.equal(await page.locator("[data-air-reveal]").count(), 0);
  await page.goBack();
  await page.locator(".tool-entry").first().waitFor({ state: "visible" });
  assert.ok(
    await page.evaluate(async () => {
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      return [...document.querySelectorAll("[data-air-reveal]")].every((block) => {
        const rect = block.getBoundingClientRect();
        return rect.bottom <= 0 || rect.top >= innerHeight || !block.dataset.airReveal;
      });
    }),
    "Visible blocks should be ready when returning from privacy",
  );
  if (out) await writeFile(resolve(out, engine + ".json"), JSON.stringify(layouts, null, 2) + "\n");
  console.log(
    engine +
      ": " +
      layouts.length +
      " layouts, combined pose, timing, focus, fragments, reduced motion and privacy passed.",
  );
} finally {
  await browser.close();
}
