/** Compare built public surfaces against Air, not against one another's drift.
 * Uses disposable Chrome/Firefox profiles. No external destinations are followed.
 * AIR_FAMILY_URLS is a comma-separated yard,PDF,Drop list; PUPPETEER_MODULE may
 * point to existing external test tooling. AIR_REPORT_ONLY records initial drift. */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
const { default: puppeteer } = await import(process.env.PUPPETEER_MODULE || "puppeteer-core");
const engine = process.env.AIR_BROWSER || "chrome";
const themes = engine === "firefox" ? [process.env.AIR_THEME || "light"] : ["light", "dark"];
const out = resolve(process.env.AIR_EVIDENCE_DIR || `/tmp/air-family-${engine}`);
await mkdir(out, { recursive: true });
const urls = (
  process.env.AIR_FAMILY_URLS || "http://127.0.0.1:8180,http://127.0.0.1:8181,http://127.0.0.1:8182"
).split(",");
const products = [
  {
    name: "cloakyard",
    frame: ".site-header",
    brand: ".brand",
    sections: ".principles h2",
    menu: ".mobile-navigation",
    source: ".desktop-source",
    privacy: null,
  },
  {
    name: "cloakpdf",
    frame: ".pdf-header",
    brand: ".pdf-brand",
    sections: ".pdf-home h2",
    menu: ".pdf-mobile-nav",
    source: ".pdf-desktop-nav a:last-child, .pdf-header > .air-page-nav a:last-child",
    privacy: "button",
  },
  {
    name: "cloakdrop",
    frame: ".site-header",
    brand: ".brand",
    sections: ".section h2",
    menu: ".mobile-nav",
    source: ".desktop-source",
    privacy: "/privacy/",
  },
];
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
  [703, 800],
  [704, 800],
  [705, 800],
];
const browser = await puppeteer.launch({
  browser: engine,
  executablePath:
    engine === "firefox"
      ? "/Applications/Firefox.app/Contents/MacOS/firefox"
      : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  ...(engine === "firefox"
    ? {
        extraPrefsFirefox: {
          "ui.systemUsesDarkTheme": themes[0] === "dark" ? 1 : 0,
          "layout.css.prefers-color-scheme.content-override": themes[0] === "dark" ? 0 : 1,
          "ui.prefersReducedMotion": 1,
        },
      }
    : {}),
});
const evidence = {
  engine: await browser.version(),
  layouts: [],
  interactions: [],
  errors: [],
  failures: [],
};
try {
  for (const [index, product] of products.entries()) {
    const page = await browser.newPage();
    page.on("pageerror", (e) =>
      evidence.errors.push({ product: product.name, message: e.message }),
    );
    for (const theme of themes) {
      if (engine === "chrome")
        await page.emulateMediaFeatures([
          { name: "prefers-color-scheme", value: theme },
          { name: "prefers-reduced-motion", value: "reduce" },
        ]);
      await page.goto(urls[index], { waitUntil: "networkidle0" });
      assert.equal(
        await page.evaluate(() => matchMedia("(prefers-color-scheme:dark)").matches),
        theme === "dark",
        "Browser theme preference must actually apply",
      );
      assert.equal(
        await page.evaluate(() => matchMedia("(prefers-reduced-motion:reduce)").matches),
        true,
        "Reduced-motion preference must actually apply",
      );
      for (const root of [16, 32])
        for (const [width, height] of sizes) {
          await page.setViewport({
            width,
            height,
            ...(engine === "chrome" ? { hasTouch: width <= 1100 } : {}),
          });
          await page.evaluate((size) => {
            document.documentElement.style.fontSize = `${size}px`;
            document.querySelectorAll("header details").forEach((d) => (d.open = false));
          }, root);
          const result = await page.evaluate((p) => {
            const visible = (n) =>
              n.getClientRects().length && getComputedStyle(n).visibility !== "hidden";
            const style = (n) => {
              const s = getComputedStyle(n),
                r = n.getBoundingClientRect();
              return {
                text: n.textContent.trim().slice(0, 70),
                font: s.fontFamily,
                size: parseFloat(s.fontSize),
                weight: s.fontWeight,
                line: parseFloat(s.lineHeight),
                tracking: parseFloat(s.letterSpacing) || 0,
                color: s.color,
                width: r.width,
                height: r.height,
                left: r.left,
                right: r.right,
              };
            };
            const heading = style(document.querySelector("h1"));
            const frame = document.querySelector(p.frame),
              brand = document.querySelector(p.brand),
              menu = document.querySelector(`${p.menu} summary`);
            const issues = [];
            const near = (a, b) => Math.abs(a - b) < 0.12;
            const check = (condition, message) => {
              if (!condition) issues.push(message);
            };
            const root = parseFloat(getComputedStyle(document.documentElement).fontSize);
            const heroSize = Math.max(2.5 * root, Math.min(innerWidth * 0.055, 4.5 * root));
            check(
              near(heading.size, heroSize) &&
                heading.weight === "400" &&
                near(heading.line, heading.size * 1.05) &&
                near(heading.tracking, heading.size * -0.045),
              "hero typography",
            );
            const sections = [...document.querySelectorAll(p.sections)].map(style);
            for (const h of sections)
              check(
                h.weight === "400" &&
                  near(h.line, h.size * 1.15) &&
                  near(h.tracking, h.size * -0.03),
                `section typography: ${h.text}`,
              );
            check(document.documentElement.scrollWidth <= innerWidth + 1, "horizontal overflow");
            check(
              style(brand).width >= 43.9 && style(brand).height >= 43.9,
              "brand target under 44px",
            );
            if (menu && visible(menu))
              check(
                style(menu).height >= 43.9 &&
                  style(menu).width >= 43.9 &&
                  style(brand).right <= style(menu).left + 0.5,
                "compact targets overlap or are under 44px",
              );
            const textOverflow = [];
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
              const n = walker.currentNode,
                el = n.parentElement;
              if (
                !n.textContent.trim() ||
                !visible(el) ||
                el.closest(
                  "script,style,[aria-hidden=true],.visually-hidden,.sr-only,.skip-link,.air-page-skip",
                )
              )
                continue;
              const range = document.createRange();
              range.selectNodeContents(n);
              if (
                [...range.getClientRects()].some(
                  (r) => r.width && (r.left < -1 || r.right > innerWidth + 1),
                )
              )
                textOverflow.push(n.textContent.trim().slice(0, 60));
            }
            check(!textOverflow.length, "text overflow");
            const header = style(frame),
              s = getComputedStyle(frame);
            // The PDF reading shell uses viewport media queries; the directory and
            // static site use content containers. Both are permitted reflow modes.
            const expectedGutter =
              p.name === "cloakpdf"
                ? innerWidth <= 40 * root
                  ? 16
                  : matchMedia("(max-width:60rem)").matches
                    ? 24
                    : 32
                : innerWidth <= 40 * root
                  ? 16
                  : innerWidth <= 60 * root
                    ? 24
                    : 32;
            check(parseFloat(s.paddingLeft) === expectedGutter, "page gutter");
            check(header.width <= 1264.1, "page maximum width");
            const source = document.querySelector(p.source);
            const buttons = [...document.querySelectorAll(".air-button")]
              .filter(visible)
              .map((n) => {
                const s = getComputedStyle(n);
                return {
                  text: n.textContent.trim(),
                  radius: s.borderRadius,
                  fontSize: s.fontSize,
                  fontWeight: s.fontWeight,
                  height: n.getBoundingClientRect().height,
                };
              });
            for (const b of buttons)
              check(b.radius === "10px" && b.fontWeight === "500", `control skin: ${b.text}`);
            for (const link of document.querySelectorAll(
              ".footer-meta p a,.footer-inner p a,.pdf-footer p a",
            )) {
              const s = getComputedStyle(link);
              check(
                s.textDecorationLine.includes("underline") && s.textUnderlineOffset === "3px",
                "inline footer link affordance",
              );
            }
            return {
              heading,
              sections,
              header: { ...header, gutter: s.paddingLeft },
              brand: style(brand),
              menu: menu && visible(menu) ? style(menu) : null,
              source: source && visible(source) ? style(source) : null,
              buttons,
              textOverflow,
              issues,
            };
          }, product);
          const state = { product: product.name, theme, root, width, height };
          evidence.layouts.push({ ...state, ...result });
          for (const issue of result.issues) evidence.failures.push({ ...state, issue });
          if (result.menu) {
            await page.focus(`${product.menu} summary`);
            await page.keyboard.press("Enter");
            const menu = await page.$eval(product.menu, (n) => ({
              open: n.open,
              links: [...n.querySelectorAll("a")].filter((a) => a.getClientRects().length).length,
              bottom: n.getBoundingClientRect().bottom,
              headerBottom: n.closest("header").getBoundingClientRect().bottom,
            }));
            assert.ok(
              menu.open && menu.links > 0 && menu.bottom <= menu.headerBottom + 1,
              "Compact menu must expand in flow",
            );
            await page.keyboard.press("Tab");
            await page.keyboard.press("Escape");
            assert.equal(
              await page.$eval(
                product.menu,
                (n) => !n.open && document.activeElement === n.querySelector("summary"),
              ),
              true,
              "Escape restores summary focus",
            );
          }
          if (root === 16 && [390, 1280, 1440].includes(width)) {
            await page.evaluate(async () => {
              for (const img of document.images) {
                img.loading = "eager";
                await img.decode().catch(() => {});
              }
            });
            await page.screenshot({
              path: `${out}/${product.name}-${width}-${theme}.png`,
              fullPage: true,
            });
          }
        }
      await page.setViewport({
        width: 1440,
        height: 900,
        ...(engine === "chrome" ? { hasTouch: false } : {}),
      });
      await page.evaluate(() => (document.documentElement.style.fontSize = "16px"));
      const source = await page.$(product.source);
      if (source) {
        await source.focus();
        await page.keyboard.press("Tab");
        await page.keyboard.down("Shift");
        await page.keyboard.press("Tab");
        await page.keyboard.up("Shift");
        const focus = await source.evaluate((n) => {
          const s = getComputedStyle(n);
          return {
            width: s.outlineWidth,
            offset: s.outlineOffset,
            style: s.outlineStyle,
            color: s.color,
          };
        });
        evidence.interactions.push({ product: product.name, theme, focus });
        if (focus.width !== "2px" || focus.offset !== "3px" || focus.style !== "solid")
          evidence.failures.push({
            product: product.name,
            theme,
            issue: "source focus contour",
            focus,
          });
      }
      if (product.privacy) {
        if (product.privacy === "button") {
          // A real first-install toast may arrive while the matrix is running.
          // Dismiss that temporary notice before pointer-testing the footer.
          const notice = await page.$('button[aria-label="Dismiss cache status"]');
          if (notice) {
            await notice.focus();
            await page.keyboard.press("Enter");
          }
          const buttons = await page.$$("button");
          for (const button of buttons)
            if (await button.evaluate((n) => n.textContent.trim() === "Privacy policy")) {
              await button.click();
              break;
            }
          await page.waitForSelector(".pdf-policy");
        } else await page.goto(urls[index] + product.privacy, { waitUntil: "networkidle0" });
        const privacy = await page.evaluate(() =>
          [...document.querySelectorAll(".pdf-policy-body,.policy-document p")]
            .filter((n) => n.getClientRects().length)
            .map((n) => ({
              size: getComputedStyle(n).fontSize,
              line: getComputedStyle(n).lineHeight,
            })),
        );
        evidence.interactions.push({ product: product.name, theme, privacy });
        if (privacy.some((s) => s.size !== "16px" || Math.abs(parseFloat(s.line) - 25.6) > 0.1))
          evidence.failures.push({
            product: product.name,
            theme,
            issue: "policy prose typography",
          });
        await page.screenshot({
          path: `${out}/${product.name}-privacy-${theme}.png`,
          fullPage: true,
        });
      }
    }
    await page.close();
  }
} finally {
  await browser.close();
  await writeFile(`${out}/comparison.json`, JSON.stringify(evidence, null, 2) + "\n");
}
console.log(
  `${evidence.layouts.length} layouts; ${evidence.failures.length} deviations; ${evidence.errors.length} browser errors. Evidence: ${out}`,
);
console.log([...new Set(evidence.failures.map((f) => `${f.product}: ${f.issue}`))].join("\n"));
if (!process.env.AIR_REPORT_ONLY) {
  assert.deepEqual(evidence.failures, []);
  assert.deepEqual(evidence.errors, []);
}
