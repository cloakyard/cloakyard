import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import puppeteer from "/Users/sumitsahoo/Developer/cloakpdf/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js";
const url = process.env.SITE_URL || "http://127.0.0.1:8156",
  out = "/tmp/cloakyard-rollout-2026-10-21/cloakyard",
  results = [],
  errors = [],
  analytics = [];
const b = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
try {
  for (const [w, h, text] of [
    [1920, 1080, 16],
    [1280, 800, 16],
    [768, 1024, 16],
    [390, 844, 16],
    [320, 568, 32],
    [844, 390, 16],
  ])
    for (const theme of ["light", "dark"]) {
      const ctx = await b.createBrowserContext(),
        p = await ctx.newPage();
      p.on("pageerror", (e) => errors.push(String(e)));
      p.on("request", (r) => {
        if (/cloudflareinsights|cdn-cgi\/rum/.test(r.url())) analytics.push(r.url());
      });
      p.on("console", (m) => {
        if (m.type() === "error") errors.push(m.text());
      });
      await p.setViewport({ width: w, height: h, hasTouch: w < 1100 });
      await p.emulateMediaFeatures([
        { name: "prefers-color-scheme", value: theme },
        { name: "prefers-reduced-motion", value: "reduce" },
      ]);
      const response = await p.goto(url, { waitUntil: "networkidle0" });
      assert.equal(response.status(), 200);
      await p.evaluate((t) => (document.documentElement.style.fontSize = `${t}px`), text);
      await p.evaluate(() => document.fonts.ready);
      const state = await p.evaluate(() => ({
        title: document.querySelector("h1").textContent,
        overflow: document.documentElement.scrollWidth > innerWidth,
        projects: [...document.querySelectorAll("a[href]")]
          .map((e) => e.href)
          .filter((h) => /^https:\/\/(pdf|resume|img|drop|kerr)\.cloakyard\.com\/?$/.test(h)),
        logos: [...document.querySelectorAll('img[src^="/brands/"]')].every(
          (e) => e.complete && e.naturalWidth > 0,
        ),
        og: document.querySelector('meta[property="og:image"]').content,
      }));
      assert.equal(state.title, "Your work.A little lighter.");
      assert.equal(state.overflow, false);
      assert.ok(state.logos);
      assert.ok(new Set(state.projects).size === 5);
      if (await p.$eval(".mobile-navigation summary", (e) => e.getClientRects().length > 0)) {
        await p.click(".mobile-navigation summary");
        assert.ok(await p.$eval(".mobile-navigation", (e) => e.open));
        await p.keyboard.press("Escape");
        assert.ok(
          await p.$eval(
            ".mobile-navigation",
            (e) => !e.open && document.activeElement === e.querySelector("summary"),
          ),
        );
      }
      if ((w === 1920 && theme === "light") || (w === 390 && theme === "dark"))
        await p.screenshot({
          path: `${out}/${process.env.SITE_URL ? "live" : "candidate"}-${w}-${theme}.png`,
        });
      results.push({ w, h, text, theme, ...state });
      await ctx.close();
    }
  const p = await b.newPage();
  await p.setJavaScriptEnabled(false);
  await p.goto(url, { waitUntil: "networkidle0" });
  assert.ok(await p.$('a[href="https://pdf.cloakyard.com"]'));
  assert.deepEqual(errors, []);
  assert.deepEqual(analytics, []);
  await writeFile(
    `${out}/${process.env.SITE_URL ? "live" : "candidate"}-checks.json`,
    JSON.stringify({ results, noJavaScript: true, errors, analytics }, null, 2),
  );
  console.log("PASS 12 responsive/theme/text cases; links/logos/menu/Escape/no-JS");
} finally {
  await b.close();
}
