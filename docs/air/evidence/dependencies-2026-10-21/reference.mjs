import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import puppeteer from "/Users/sumitsahoo/Developer/cloakpdf/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const rows = [];
try {
  for (const [width, height] of [
    [1440, 900],
    [1280, 720],
    [390, 844],
  ])
    for (const theme of ["light", "dark"]) {
      const page = await browser.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(String(e)));
      await page.setViewport({ width, height });
      await page.emulateMediaFeatures([
        { name: "prefers-color-scheme", value: theme },
        { name: "prefers-reduced-motion", value: "reduce" },
      ]);
      await page.goto("http://127.0.0.1:8225/docs/air/components.html", {
        waitUntil: "networkidle0",
      });
      const result = await page.evaluate(async () => {
        const settle = async () => {
          await new Promise(requestAnimationFrame);
          await new Promise(requestAnimationFrame);
        };
        const payload = '<img id="air-test-injected" src=x onerror="window.airInjected=true">';
        document.querySelector('button[data-app="resume"]').click();
        await settle();
        document.querySelector('[data-tool="1"]').click();
        const contact = document.querySelector('[data-contact="0"]');
        contact.value = payload;
        contact.dispatchEvent(new Event("input", { bubbles: true }));
        document.querySelector('[data-contact-down="0"]').click();
        const retained = [...document.querySelectorAll("[data-contact]")].some(
          (e) => e.value === payload,
        );
        document.querySelector('[data-tool="4"]').click();
        const paper = document.querySelector("#paper-size");
        const option = new Option(payload, payload);
        paper.add(option);
        paper.value = payload;
        paper.dispatchEvent(new Event("change", { bubbles: true }));
        document.querySelector("#open-dialog").click();
        const literal = document.querySelector("#export-options").textContent.includes(payload);
        const safe = !document.querySelector("#air-test-injected") && !window.airInjected;
        document.querySelector("#export-dialog").close();
        await settle();
        paper.value = "A4";
        paper.dispatchEvent(new Event("change", { bubbles: true }));
        document.querySelector('button[data-app="pdf"]').click();
        await settle();
        const range = document.querySelector("#opacity");
        range.value = "35";
        range.dispatchEvent(new Event("input", { bubbles: true }));
        document.querySelector('[data-tool="1"]').click();
        document.querySelector('[data-tool="0"]').click();
        return { retained, literal, safe, range: document.querySelector("#opacity").value };
      });
      assert.deepEqual(result, { retained: true, literal: true, safe: true, range: "35" });
      assert.deepEqual(errors, []);
      await page.$eval(".editor-workspace", (e) => e.scrollIntoView({ block: "start" }));
      await page.evaluate(async () => {
        await document.fonts.ready;
        await new Promise(requestAnimationFrame);
        await new Promise(requestAnimationFrame);
      });
      await new Promise((r) => setTimeout(r, 100));
      await page.screenshot({
        path: `/tmp/cloakyard-rollout-2026-10-21/cloakyard/reference-${width}-${theme}.png`,
      });
      rows.push({ width, height, theme, ...result, errors });
      await page.close();
    }
  await writeFile(
    "/tmp/cloakyard-rollout-2026-10-21/cloakyard/reference-security.json",
    JSON.stringify(rows, null, 2),
  );
  console.log(
    "PASS 6 desktop/laptop/phone light/dark reference cases: literal hostile contact/paper text, no injected elements, retained precision values.",
  );
} finally {
  await browser.close();
}
