/** Compare built public surfaces against Air, not against one another's drift.
 * Uses disposable Chrome/Firefox profiles. No external destinations are followed.
 * AIR_FAMILY_URLS is a comma-separated yard,PDF,Drop,Resume,Roll,IMG list; PUPPETEER_MODULE may
 * point to existing external test tooling. AIR_REPORT_ONLY records initial drift. */
import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
const { default: puppeteer } = await import(process.env.PUPPETEER_MODULE || "puppeteer-core");
const engine = process.env.AIR_BROWSER || "chrome";
const themes = engine === "firefox" ? [process.env.AIR_THEME || "light"] : ["light", "dark"];
const out = resolve(process.env.AIR_EVIDENCE_DIR || `/tmp/air-family-${engine}`);
await mkdir(out, { recursive: true });
const urls = (
  process.env.AIR_FAMILY_URLS ||
  "http://127.0.0.1:8180,http://127.0.0.1:8181,http://127.0.0.1:8182,http://127.0.0.1:8184,http://127.0.0.1:8186,http://127.0.0.1:8187"
).split(",");
const products = [
  {
    name: "cloakyard",
    frame: ".site-header",
    brand: ".brand",
    sections: ".principles h2",
    menu: ".mobile-navigation",
    source: ".desktop-source",
    privacy: "/?view=privacy",
  },
  {
    name: "cloakpdf",
    frame: ".pdf-header",
    brand: ".pdf-brand",
    sections: ".pdf-home h2",
    menu: ".pdf-mobile-nav",
    source: ".pdf-desktop-nav a:last-child, .pdf-header > .air-page-nav a:last-child",
    privacy: "/?view=privacy",
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
  {
    name: "cloakresume",
    frame: ".resume-header",
    brand: ".resume-brand",
    sections: ".resume-site main > section h2",
    menu: ".resume-menu",
    source: ".resume-nav a:last-child",
    privacy: "/?view=privacy",
  },
];
products.push({
  name: "cloakroll",
  frame: ".site-header",
  brand: ".brand",
  sections: ".section h2",
  menu: ".mobile-nav",
  source: ".desktop-source",
  privacy: "/privacy/",
});
products.push({
  name: "cloakimg",
  frame: ".img-header",
  brand: ".img-brand",
  sections: ".img-section h2",
  menu: ".img-mobile-navigation",
  source: ".img-navigation a:last-child",
  privacy: "/privacy/",
});
for (const p of products) {
  p.repo = `https://github.com/cloakyard/${p.name}`;
  if (["cloakpdf", "cloakresume", "cloakimg"].includes(p.name))
    p.version = JSON.parse(
      await readFile(new URL(`../../${p.name}/package.json`, import.meta.url), "utf8"),
    ).version;
}
const sizes = [
  [863, 800],
  [864, 800],
  [865, 800],
  [767, 800],
  [769, 800],
  [1023, 800],
  [1025, 800],
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
function inspectShell(p) {
  const visible = (n) => n.getClientRects().length && getComputedStyle(n).visibility !== "hidden";
  const style = (n) => {
    const s = getComputedStyle(n),
      r = n.getBoundingClientRect();
    return {
      text: n.textContent.trim(),
      size: parseFloat(s.fontSize),
      weight: s.fontWeight,
      line: parseFloat(s.lineHeight),
      tracking: parseFloat(s.letterSpacing) || 0,
      width: r.width,
      height: r.height,
    };
  };
  const frame = document.querySelector(p.frame),
    brand = document.querySelector(p.brand);
  const root = parseFloat(getComputedStyle(document.documentElement).fontSize),
    issues = [];
  const near = (a, b) => Math.abs(a - b) < 0.12;
  const check = (pass, message) => {
    if (!pass) issues.push(message);
  };
  const mark = brand.querySelector("img"),
    word = brand.querySelector("span");
  check(near(style(mark).width, 36) && near(style(mark).height, 36), "canonical 36px mark");
  check(getComputedStyle(brand).gap === "12px", "brand gap");
  if (visible(word)) {
    const w = style(word);
    check(
      near(w.size, 1.125 * root) && w.weight === "500" && near(w.tracking, -0.03 * w.size),
      "wordmark typography",
    );
  }
  const footer = document.querySelector("footer"),
    fs = getComputedStyle(footer);
  // Firefox serializes the WebKit alias as its native "grayscale" keyword.
  const smoothing = CSS.supports("-moz-osx-font-smoothing", "grayscale")
    ? ["-moz-osx-font-smoothing", "grayscale"]
    : ["-webkit-font-smoothing", "antialiased"];
  if (CSS.supports(...smoothing))
    check(
      getComputedStyle(frame).getPropertyValue(smoothing[0]) === smoothing[1] &&
        fs.getPropertyValue(smoothing[0]) === smoothing[1],
      "public chrome font rendering",
    );
  const fr = footer.getBoundingClientRect(),
    hr = frame.getBoundingClientRect();
  check(
    near(fr.left, hr.left) &&
      near(fr.right, hr.right) &&
      fs.paddingLeft === getComputedStyle(frame).paddingLeft,
    "header/footer content alignment",
  );
  check(
    fs.paddingTop === "32px" && fs.paddingBottom === "32px" && fs.borderTopWidth === "1px",
    "footer cadence",
  );
  for (const n of document.querySelectorAll(
    "header nav a,header .desktop-source,footer nav a,footer nav button",
  )) {
    if (!visible(n)) continue;
    const v = style(n);
    check(
      near(v.size, 0.875 * root) && v.weight === "500" && near(v.line, 1.5 * v.size),
      `navigation typography: ${v.text}`,
    );
    check(v.height >= 43.9 && v.width >= 43.9, `navigation target: ${v.text}`);
    for (const icon of n.querySelectorAll("svg"))
      check(
        near(style(icon).width, 16) && near(style(icon).height, 16),
        `navigation icon: ${v.text}`,
      );
  }

  const label = (n) => n.textContent.trim().replace(/\s+/g, " ");
  const nav = footer.querySelector('nav[aria-label="Footer navigation"]');
  check(!!nav, "named footer navigation");
  const links = [...(nav?.querySelectorAll("a,button") || [])];
  const expected = [
    "Privacy",
    "Source",
    "MIT license",
    p.name === "cloakyard" ? "All apps" : "Cloakyard",
    "Buy me a coffee",
  ];
  check(JSON.stringify(links.map(label)) === JSON.stringify(expected), "footer labels and order");
  const support = links.find((n) => label(n) === "Buy me a coffee");
  check(
    support?.target === "_blank" &&
      support.relList.contains("noopener") &&
      support.relList.contains("noreferrer") &&
      support.querySelector('svg[aria-hidden="true"]'),
    "support link opens safely with a decorative angled arrow",
  );
  for (const [text, href] of [
    ["Source", p.repo],
    ["Buy me a coffee", "https://ko-fi.com/sumitsahoo21"],
    ["MIT license", `${p.repo}/blob/main/LICENSE`],
    ...(p.name === "cloakyard"
      ? [
          ["Privacy", "/?view=privacy"],
          ["All apps", "/#tools"],
        ]
      : [["Cloakyard", "https://cloakyard.com"]]),
  ])
    check(
      links.find((n) => label(n) === text)?.getAttribute("href") === href,
      `footer destination: ${text}`,
    );
  for (const n of footer.querySelectorAll("nav")) {
    const spacing = getComputedStyle(n);
    check(
      spacing.rowGap === "8px" && spacing.columnGap === "24px",
      "canonical footer navigation gaps",
    );
  }
  for (const link of links) {
    const cue = link.querySelector("svg");
    const needsCue = ["Source", "MIT license", "Cloakyard", "Buy me a coffee"].includes(
      label(link),
    );
    check(Boolean(cue) === needsCue, `footer directional cue: ${label(link)}`);
    if (cue) check(cue.getAttribute("aria-hidden") === "true", "decorative footer cue");
  }
  const identity = footer.querySelector(".air-page-identity");
  if (identity) {
    const copy = getComputedStyle(identity);
    check(
      copy.marginTop === "0px" && copy.marginBottom === "0px",
      "footer credit has no prose margins",
    );
    check(copy.color === fs.color, "footer credit inherits shared neutral ink");
  }
  const author = identity?.querySelector("a");
  check(label(identity || footer).includes("Built by Sumit Sahoo"), "shared author credit");
  check(author?.getAttribute("href") === "https://github.com/sumitsahoo", "author destination");
  if (p.version)
    check(
      label(identity || footer).startsWith(
        `${{ cloakpdf: "CloakPDF", cloakresume: "CloakResume", cloakimg: "CloakIMG" }[p.name]} v${p.version}`,
      ),
      "build-derived footer version",
    );
  const privacy = links.find((n) => label(n) === "Privacy");
  if (["cloakdrop", "cloakroll", "cloakimg"].includes(p.name))
    check(privacy?.getAttribute("href") === "/privacy/", "policy destination");
  else if (p.name !== "cloakyard" && privacy?.tagName === "A")
    check(
      p.name === "cloakpdf"
        ? privacy.search === "?view=privacy"
        : privacy.search === "?view=privacy" || privacy.hash === "#privacy-policy",
      "recovery policy destination",
    );
  check(footer.children.length === 2, "one identity group and one navigation group");
  const menu = frame.querySelector("details");
  const entries = (nodes) =>
    [...nodes].map((n) => [label(n), n.getAttribute("href"), n.getAttribute("target")]);
  const desktop = [...frame.querySelectorAll("nav a,.desktop-source")].filter(
    (n) => !n.closest("details"),
  );
  check(
    desktop.at(-1)?.getAttribute("href") === p.repo && label(desktop.at(-1) || frame) === "Source",
    "header Source last and exact repository",
  );
  for (const n of frame.querySelectorAll("nav"))
    check(n.getAttribute("aria-label") === "Primary navigation", "named primary navigation");
  if (menu)
    check(
      JSON.stringify(entries(desktop)) === JSON.stringify(entries(menu.querySelectorAll("nav a"))),
      "desktop/compact content parity",
    );
  check(document.documentElement.scrollWidth <= innerWidth + 1, "horizontal overflow");
  return issues;
}

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
  secondary: [],
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
          await page.evaluate(async (size) => {
            document.documentElement.style.fontSize = `${size}px`;
            document.querySelectorAll("header details").forEach((d) => (d.open = false));
            await document.fonts.ready;
            await new Promise((resolve) =>
              requestAnimationFrame(() => requestAnimationFrame(resolve)),
            );
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
            check(
              Boolean(menu && visible(menu)) === innerWidth <= 40 * root,
              "shared compact boundary",
            );
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
                  "script,style,[aria-hidden=true],.visually-hidden,.sr-only,.skip-link,.air-page-skip,.resume-skip,.img-skip",
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
            const expectedGutter = innerWidth <= 40 * root ? 16 : innerWidth <= 60 * root ? 24 : 32;
            check(parseFloat(s.paddingLeft) === expectedGutter, "page gutter");
            check(header.width <= 1264.1, "page maximum width");
            const source = document.querySelector(p.source);
            check(
              Boolean(source && visible(source)) === !(menu && visible(menu)),
              "one active navigation mode",
            );
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
            for (const link of document.querySelectorAll("footer .air-page-identity a")) {
              const s = getComputedStyle(link);
              check(
                s.textDecorationLine.includes("underline") && s.textUnderlineOffset === "3px",
                "inline footer link affordance",
              );
            }
            return {
              heading,
              footer: style(document.querySelector("footer")),
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
          result.issues.push(...(await page.evaluate(inspectShell, product)));
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
              chevron: getComputedStyle(n.querySelector("summary svg")).rotate,
            }));
            assert.ok(
              menu.open && menu.links > 0 && menu.bottom <= menu.headerBottom + 1,
              "Compact menu must expand in flow",
            );
            assert.equal(menu.chevron, "180deg", `${product.name}: open menu chevron`);
            const rows = await page.$eval(`${product.menu} nav`, (nav) => {
              const style = getComputedStyle(nav);
              return {
                gap: style.rowGap,
                margin: style.marginTop,
                padding: style.paddingTop,
                border: style.borderTopWidth,
                links: [...nav.querySelectorAll("a")].map((a) => {
                  const s = getComputedStyle(a);
                  return { padding: s.padding, gap: s.gap, justify: s.justifyContent };
                }),
              };
            });
            assert.deepEqual(
              { ...rows, links: undefined },
              { gap: "0px", margin: "12px", padding: "8px", border: "1px", links: undefined },
              `${product.name}: shared compact navigation rhythm`,
            );
            for (const link of rows.links)
              assert.deepEqual(link, { padding: "8px 12px", gap: "8px", justify: "flex-start" });
            evidence.interactions.push({ ...state, compactRows: rows });
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
          if (product.name === "cloakresume" && root === 16 && width === 390) {
            await page.click(`${product.menu} summary`);
            await page.focus(`${product.menu} a[href="#features"]`);
            await page.keyboard.press("Enter");
            assert.equal(
              await page.evaluate(() => document.activeElement?.id),
              "features",
              "Compact section navigation retains destination focus",
            );
            await page.evaluate(() => scrollTo(0, 0));
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
      await page.evaluate(async () => {
        document.documentElement.style.fontSize = "16px";
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      });
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
        await page.goto(urls[index] + product.privacy, { waitUntil: "networkidle0" });
        const privacy = await page.evaluate(() =>
          [...document.querySelectorAll(".air-policy .air-prose p")]
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
        if (product.privacy !== "dialog") {
          const route = "privacy",
            routeShell = product;
          for (const root of [16, 32])
            for (const [width, height] of [
              [320, 568],
              [390, 844],
              [844, 390],
              [768, 1024],
              [1280, 720],
              [1440, 900],
            ]) {
              await page.setViewport({ width, height });
              await page.evaluate(async (size) => {
                document.documentElement.style.fontSize = `${size}px`;
                await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
              }, root);
              const issues = await page.evaluate(inspectShell, routeShell);
              const state = { product: product.name, route, theme, root, width, height };
              evidence.secondary.push({ ...state, issues });
              for (const issue of issues) evidence.failures.push({ ...state, issue });
            }
        }
      }
      if (index === 1) {
        await page.goto(urls[index], { waitUntil: "networkidle0" });
        // Exercise the actual render-boundary shell with a controlled synthetic error.
        // No production hook or application code is added for this audit.
        await page.evaluate(() => {
          const node = document.querySelector(".pdf-site");
          let fiber = node[Object.keys(node).find((key) => key.startsWith("__reactFiber$"))];
          while (fiber && !(fiber.stateNode?.handleReload && fiber.stateNode?.handleReset))
            fiber = fiber.return;
          if (!fiber) throw new Error("Public render boundary was not found");
          fiber.stateNode.setState({
            error: new Error("Synthetic Air shell audit"),
            copied: false,
            copyFailed: false,
          });
        });
        await page.waitForSelector("#error-main", { visible: true });
        for (const root of [16, 32])
          for (const [width, height] of [
            [320, 568],
            [390, 844],
            [844, 390],
            [768, 1024],
            [1280, 720],
            [1440, 900],
          ]) {
            await page.setViewport({ width, height });
            await page.evaluate(async (size) => {
              document.documentElement.style.fontSize = `${size}px`;
              await document.fonts.ready;
            }, root);
            const issues = await page.evaluate(inspectShell, product);
            const state = {
              product: product.name,
              route: "render-recovery",
              theme,
              root,
              width,
              height,
            };
            evidence.secondary.push({ ...state, issues });
            for (const issue of issues) evidence.failures.push({ ...state, issue });
            if (root === 16 && [390, 1280, 1440].includes(width))
              await page.screenshot({
                path: `${out}/${product.name}-render-recovery-${width}-${theme}.png`,
                fullPage: true,
              });
          }
        await Promise.all([
          page.waitForNavigation({ waitUntil: "networkidle0" }),
          page.click('footer a[href$="?view=privacy"]'),
        ]);
        await page.waitForSelector(".air-policy", { visible: true });
        evidence.interactions.push({
          product: product.name,
          theme,
          renderRecoveryPolicy: "full navigation reaches actual policy",
        });
      }
      if (index > 0) {
        // IMG deliberately recovers unknown routes to its start page; others ship a 404 shell.
        const route = index === 5 ? "/missing-air-page" : "/404.html";
        await page.goto(urls[index] + route, { waitUntil: "networkidle0" });
        const routeShell = [2, 4, 5].includes(index)
          ? product
          : { ...product, frame: "header", brand: "header .air-page-brand" };
        for (const root of [16, 32])
          for (const [width, height] of [
            [320, 568],
            [390, 844],
            [844, 390],
            [768, 1024],
            [1280, 720],
            [1440, 900],
          ]) {
            await page.setViewport({ width, height });
            await page.evaluate(async (size) => {
              document.documentElement.style.fontSize = `${size}px`;
              await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
            }, root);
            const issues = await page.evaluate(inspectShell, routeShell);
            const state = { product: product.name, route, theme, root, width, height };
            evidence.secondary.push({ ...state, issues });
            for (const issue of issues) evidence.failures.push({ ...state, issue });
          }

        await page.screenshot({
          path: `${out}/${product.name}-recovery-${theme}.png`,
          fullPage: true,
        });
        if (index === 1 || index === 3) {
          await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle0" }),
            page.click(
              index === 1 ? 'footer a[href$="?view=privacy"]' : 'footer a[href$="#privacy-policy"]',
            ),
          ]);
          await page.waitForSelector(".air-policy", {
            visible: true,
          });
          await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle0" }),
            page.click(".air-policy-back"),
          ]);
          assert.equal(
            new URL(page.url()).hash,
            "",
            "Leaving a recovery policy clears its entry hash",
          );
          await page.reload({ waitUntil: "networkidle0" });
          assert.equal(
            await page.$(".air-policy"),
            null,
            "Dismissed recovery policy does not reopen on refresh",
          );
          evidence.interactions.push({
            product: product.name,
            theme,
            recoveryPolicy: "opens actual policy and returns home",
          });
        }
      }
    }
    await page.close();
  }
  const baseline = evidence.layouts.filter((row) => row.product === "cloakyard");
  for (const row of evidence.layouts) {
    const reference = baseline.find(
      (r) =>
        r.theme === row.theme &&
        r.root === row.root &&
        r.width === row.width &&
        r.height === row.height,
    );
    if (Math.abs(row.footer.height - reference.footer.height) > 0.5)
      evidence.failures.push({
        product: row.product,
        theme: row.theme,
        root: row.root,
        width: row.width,
        height: row.height,
        issue: "cross-product footer height",
        actual: row.footer.height,
        expected: reference.footer.height,
      });
    if (
      Boolean(row.menu) !== Boolean(reference.menu) ||
      Math.abs(row.header.height - reference.header.height) > 0.5
    )
      evidence.failures.push({
        product: row.product,
        theme: row.theme,
        root: row.root,
        width: row.width,
        height: row.height,
        issue: "cross-product header mode/height",
      });
  }
} finally {
  await browser.close();
  await writeFile(`${out}/comparison.json`, JSON.stringify(evidence, null, 2) + "\n");
}
console.log(
  `${evidence.layouts.length} home layouts; ${evidence.secondary.length} secondary layouts; ${evidence.failures.length} deviations; ${evidence.errors.length} browser errors. Evidence: ${out}`,
);
console.log([...new Set(evidence.failures.map((f) => `${f.product}: ${f.issue}`))].join("\n"));
if (!process.env.AIR_REPORT_ONLY) {
  assert.deepEqual(evidence.failures, []);
  assert.deepEqual(evidence.errors, []);
}
