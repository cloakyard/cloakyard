/** Built public-policy regression: real navigation, family geometry and readable reflow. */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
const { default: puppeteer } = await import(process.env.PUPPETEER_MODULE || "puppeteer-core");
const out = resolve(process.env.AIR_EVIDENCE_DIR || "/tmp/air-privacy");
await mkdir(out, { recursive: true });
const origins = (
  process.env.AIR_PRIVACY_URLS ||
  "http://127.0.0.1:8350,http://127.0.0.1:8351,http://127.0.0.1:8352,http://127.0.0.1:8354,http://127.0.0.1:8356,http://127.0.0.1:8357"
).split(",");
const apps = ["yard", "pdf", "drop", "resume", "roll", "img"];
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
  [639, 800],
  [640, 800],
  [641, 800],
  [959, 800],
  [960, 800],
  [961, 800],
];
const browser = await puppeteer.launch({
  executablePath:
    process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const result = { layouts: [], journeys: [], errors: [], failures: [] };
try {
  for (const [i, app] of apps.entries()) {
    const page = await browser.newPage();
    page.on("pageerror", (e) => result.errors.push(`${app}: ${e}`));
    await page.evaluateOnNewDocument(() =>
      Object.defineProperty(navigator, "serviceWorker", { value: undefined }),
    );
    const route = [2, 4, 5].includes(i) ? "/privacy/" : "/?view=privacy";
    for (const theme of ["light", "dark"]) {
      await page.emulateMediaFeatures([
        { name: "prefers-color-scheme", value: theme },
        { name: "prefers-reduced-motion", value: "reduce" },
      ]);
      await page.goto(origins[i] + route, { waitUntil: "networkidle0" });
      await page.waitForSelector(".air-policy");
      for (const font of [16, 32])
        for (const [width, height] of sizes) {
          await page.setViewport({ width, height, hasTouch: width < 1100 });
          await page.evaluate(async (font) => {
            document.documentElement.style.fontSize = `${font}px`;
            scrollTo(0, 0);
            await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
          }, font);
          const proof = await page.evaluate(() => {
            const issues = [];
            const check = (ok, issue) => {
              if (!ok) issues.push(issue);
            };
            const css = (n) => getComputedStyle(n),
              box = (n) => n.getBoundingClientRect();
            const policy = document.querySelector(".air-policy"),
              prose = policy.querySelector(".air-prose"),
              back = policy.querySelector(".air-policy-back"),
              contents = policy.querySelector(".air-contents");
            const root = parseFloat(css(document.documentElement).fontSize),
              near = (a, b) => Math.abs(a - b) < 0.2;
            check(document.documentElement.scrollWidth <= innerWidth + 1, "page overflow");
            check(
              document.querySelectorAll("h1:not([hidden])").length === 1 ||
                [...document.querySelectorAll("h1")].filter((n) => n.getClientRects().length)
                  .length === 1,
              "single visible h1",
            );
            check(policy.querySelector("h1").textContent === "Privacy policy", "shared title");
            const h1 = css(policy.querySelector("h1"));
            check(
              near(
                parseFloat(h1.fontSize),
                Math.min(4 * root, Math.max(2.25 * root, innerWidth * 0.045)),
              ) &&
                h1.fontWeight === "400" &&
                h1.marginTop === "16px" &&
                h1.marginBottom === "24px",
              "title type and rhythm",
            );
            check(near(parseFloat(css(back).lineHeight), root * 0.875 * 1.6), "return line height");
            check(
              back.getAttribute("href") === "/" &&
                back.textContent.trim().startsWith("Back to Cloak"),
              "explicit home link",
            );
            check(box(back).height >= 44, "return target");
            check(
              css(prose).fontSize === `${root}px` &&
                near(parseFloat(css(prose).lineHeight), root * 1.6),
              "prose type",
            );
            check(
              css(policy.querySelector("h2")).fontWeight === "500" &&
                near(parseFloat(css(policy.querySelector("h2")).fontSize), root * 1.5),
              "section type",
            );
            check(
              near(
                box(prose).width,
                Math.min(box(prose.parentElement).width, parseFloat(css(prose).maxWidth)),
              ),
              "reading measure",
            );
            const links = [...contents.querySelectorAll("a")];
            check(links.length > 0, "contents exists");
            for (const a of links) {
              const target = document.getElementById(decodeURIComponent(a.hash.slice(1)));
              check(!!target, "contents destination");
              check(box(a).height >= 44, "contents target");
            }
            for (const n of policy.querySelectorAll("p,h1,h2,li,a,summary")) {
              if (!n.getClientRects().length) continue;
              const range = document.createRange();
              range.selectNodeContents(n);
              for (const r of range.getClientRects())
                check(
                  r.left >= -1 && r.right <= innerWidth + 1,
                  `text overflow: ${n.textContent.trim().slice(0, 50)}`,
                );
            }
            const footer = document.querySelector("footer");
            check(
              footer.querySelector('[aria-current="page"]')?.textContent.trim() === "Privacy",
              "current footer destination",
            );
            const currentFooter = css(footer.querySelector('[aria-current="page"]'));
            check(
              currentFooter.textDecorationThickness === "1px" &&
                currentFooter.textUnderlineOffset === "3px" &&
                currentFooter.textDecorationColor === currentFooter.color,
              "neutral current footer underline",
            );
            return {
              issues,
              headerHeight: box(document.querySelector("header.air-page-header")).height,
              footerHeight: box(footer).height,
              backY: box(back).y,
              titleAfterReturn: box(policy.querySelector("h1")).y - box(back).bottom,
              proseWidth: box(prose).width,
              columns: css(prose.parentElement).gridTemplateColumns,
              footer: [...footer.querySelectorAll("nav a,nav button")].map((n) =>
                n.textContent.trim(),
              ),
            };
          });
          result.layouts.push({ app, theme, font, width, height, ...proof });
          for (const issue of proof.issues)
            result.failures.push({ app, theme, font, width, issue });
          if (font === 16 && [390, 768, 1280, 1440].includes(width))
            await page.screenshot({ path: `${out}/${app}-${width}-${theme}.png` });
        }
      await page.setViewport({ width: 390, height: 844 });
      await page.evaluate(() => (document.documentElement.style.fontSize = "16px"));
      await page.click(".air-contents a:last-child");
      const id = decodeURIComponent(new URL(page.url()).hash.slice(1));
      assert.equal(await page.evaluate(() => document.activeElement.id), id, `${app} anchor focus`);
      await page.reload({ waitUntil: "networkidle0" });
      assert.equal(
        await page.evaluate(() => document.activeElement.id),
        id,
        `${app} restored anchor focus`,
      );
      await page.focus(".air-contents summary");
      await page.keyboard.press("Escape");
      assert.equal(await page.$eval(".air-contents", (n) => n.open), false);
      await page.keyboard.press("Enter");
      assert.equal(await page.$eval(".air-contents", (n) => n.open), true);
      await page.focus(".air-policy-back");
      const ring = await page.$eval(".air-policy-back", (n) => getComputedStyle(n).outlineWidth);
      assert.equal(ring, "2px");
      await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle0" }),
        page.keyboard.press("Enter"),
      ]);
      assert.equal(await page.$(".air-policy"), null, `${app} returns home`);
      await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle0" }),
        page.click('footer a[href*="privacy"]'),
      ]);
      assert.ok(await page.$(".air-policy"), `${app} footer opens policy`);
      assert.ok(
        new URL(page.url()).pathname.includes("privacy") ||
          new URL(page.url()).search === "?view=privacy",
        `${app} policy URL is reloadable`,
      );
      await page.goBack({ waitUntil: "networkidle0" });
      assert.equal(await page.$(".air-policy"), null, `${app} browser Back reaches home`);
      result.journeys.push(
        `${app}/${theme}: direct visit, anchor/focus/reload, disclosure Escape/Enter and keyboard home`,
      );
    }
    await page.emulateMediaFeatures([
      { name: "forced-colors", value: "active" },
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    await page.goto(origins[i] + route, { waitUntil: "networkidle0" });
    await page.focus(".air-policy-back");
    assert.equal(
      await page.$eval(".air-policy-back", (n) => getComputedStyle(n).outlineStyle),
      "solid",
    );
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
    );
    await page.screenshot({ path: `${out}/${app}-forced.png` });
    result.journeys.push(`${app}: forced-colour return and readable layout`);
    if (app === "resume") {
      const saved = JSON.stringify({
        resume: { profile: { name: "Privacy Test" } },
        jobDescription: "Draft preservation fixture",
      });
      await page.evaluate((value) => localStorage.setItem("cloakresume:v1", value), saved);
      await page.reload({ waitUntil: "networkidle0" });
      await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle0" }),
        page.click(".air-policy-back"),
      ]);
      assert.equal(await page.evaluate(() => localStorage.getItem("cloakresume:v1")), saved);
      await page.reload({ waitUntil: "networkidle0" });
      assert.equal(await page.evaluate(() => localStorage.getItem("cloakresume:v1")), saved);
      result.journeys.push(
        "resume: direct privacy visit and home/reload preserve saved draft byte-for-byte",
      );
    }
    if ([2, 4, 5].includes(i)) {
      await page.setJavaScriptEnabled(false);
      await page.goto(origins[i] + route, { waitUntil: "networkidle0" });
      assert.ok(await page.$(".air-policy-back"));
      await page.click(".air-contents summary");
      assert.equal(await page.$eval(".air-contents", (n) => n.open), false);
      await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle0" }),
        page.click(".air-policy-back"),
      ]);
      assert.equal(await page.$(".air-policy"), null);
      result.journeys.push(`${app}: no-JavaScript contents and home`);
    }
    await page.close();
    console.log(`Verified ${app}`);
  }
  for (const row of result.layouts) {
    const reference = result.layouts.find(
      (r) =>
        r.app === "yard" && r.theme === row.theme && r.font === row.font && r.width === row.width,
    );
    for (const key of ["headerHeight", "footerHeight", "backY", "titleAfterReturn"])
      if (Math.abs(row[key] - reference[key]) > 0.2)
        result.failures.push({
          app: row.app,
          theme: row.theme,
          font: row.font,
          width: row.width,
          issue: `family ${key}`,
          actual: row[key],
          expected: reference[key],
        });
  }
} finally {
  await browser.close();
  await writeFile(`${out}/results.json`, JSON.stringify(result, null, 2));
}
console.log(
  `${result.layouts.length} policy layouts; ${result.journeys.length} journeys; ${result.failures.length} deviations; ${result.errors.length} errors`,
);
assert.equal(result.failures.length, 0, JSON.stringify(result.failures.slice(0, 15)));
assert.equal(result.errors.length, 0);
