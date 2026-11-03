/** Actual app dialogs: scrolling/focus, fixed dismiss/actions, classic gutter and all Air sizes.
 * Supply PLAYWRIGHT_MODULE, AIR_DIALOG_URLS (PDF,IMG,Resume) and optionally AIR_PDF_FIXTURE.
 * This emulates classic gutter geometry in Chrome on macOS, not a physical Windows run. */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
const { chromium, webkit } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const family = resolve(import.meta.dirname, "../..");
const urls = (
  process.env.AIR_DIALOG_URLS || "http://127.0.0.1:8506,http://127.0.0.1:8502,http://127.0.0.1:8503"
).split(",");
const out = process.env.AIR_EVIDENCE_DIR || "/tmp/air-dialogs";
await mkdir(out, { recursive: true });
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
let rows = [];
for (const engine of ["chromium", "webkit"]) {
  const b = await (engine === "webkit"
    ? webkit.launch()
    : chromium.launch({
        ignoreDefaultArgs: ["--hide-scrollbars"],
        executablePath:
          process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        args: ["--disable-features=OverlayScrollbar,FluentOverlayScrollbar"],
      }));
  try {
    for (const app of ["pdf", "img", "resume"])
      for (const theme of ["light", "dark"]) {
        const p = await b.newPage({
          viewport: { width: 1440, height: 900 },
          colorScheme: theme,
          reducedMotion: "reduce",
          serviceWorkers: "block",
        });
        p.setDefaultTimeout(10000);
        await p.goto(urls[{ pdf: 0, img: 1, resume: 2 }[app]]);
        if (app === "pdf") {
          await p
            .locator("input[type=file]")
            .first()
            .setInputFiles(
              process.env.AIR_PDF_FIXTURE || resolve(family, "cloakpdf/tests/fixtures/sample.pdf"),
            );
          await p.locator('img[alt="Page 1"]').waitFor();
          await p.getByRole("button", { name: "Export", exact: true }).click();
        } else if (app === "img") {
          await p
            .locator("input[type=file]")
            .first()
            .setInputFiles(resolve(family, "cloakimg/scripts/fixtures/orange.webp"));
          await p.locator(".editor-topbar [aria-label=Export]:not(:disabled)").waitFor();
          await p.getByRole("button", { name: "Export", exact: true }).click();
        } else {
          await p.getByRole("button", { name: "Start blank", exact: true }).first().click();
          await p.getByRole("button", { name: /^Template:/ }).click();
        }
        const dialog = p.getByRole("dialog").last();
        await dialog.waitFor();
        for (const [width, height] of sizes)
          for (const font of [16, 32]) {
            await p.setViewportSize({ width, height });
            await p.evaluate((f) => (document.documentElement.style.fontSize = f + "px"), font);
            await p.evaluate(() => document.fonts.ready);
            await p.waitForTimeout(50);
            const close = dialog.locator(".air-dismiss").first();
            await close.focus();
            const initial = await dialog.evaluate((d) => {
              const q = d.getBoundingClientRect(),
                close = d.querySelector(".air-dismiss").getBoundingClientRect(),
                s = d.querySelector(".pdf-dialog__body,.cloak-dialog__body,.resume-library-body"),
                r = s?.getBoundingClientRect();
              return {
                box: { x: q.x, y: q.y, width: q.width, height: q.height },
                close: {
                  width: close.width,
                  height: close.height,
                  top: close.top,
                  bottom: close.bottom,
                },
                scroll: s && {
                  height: s.clientHeight,
                  content: s.scrollHeight,
                  width: s.offsetWidth - s.clientWidth,
                  style: getComputedStyle(s, "::-webkit-scrollbar").width,
                  overflow: getComputedStyle(s).overflowY,
                },
                overflow: d.scrollWidth > d.clientWidth + 1,
                bodyVisible: r && r.height > 24,
              };
            });
            const key = `${engine}-${app}-${width}-${theme}-${font}`;
            await p.screenshot({ path: `${out}/${key}.png` });
            assert(
              !initial.overflow &&
                initial.box.y >= -1 &&
                initial.box.y + initial.box.height <= height + 1,
              key + JSON.stringify(initial),
            );
            assert(
              initial.close.width >= 44 &&
                initial.close.height >= 44 &&
                initial.close.top >= 0 &&
                initial.close.bottom <= height,
              key + " close " + JSON.stringify(initial),
            );
            assert(initial.bodyVisible, key + " body squeezed " + JSON.stringify(initial));
            assert.equal(initial.scroll.overflow, "auto", key + " must scroll only when needed");
            if (engine === "chromium")
              assert.equal(initial.scroll.width, 8, key + " classic scrollbar gutter");
            const footer = dialog.locator(".pdf-dialog__footer,.cloak-dialog__footer").first();
            if (await footer.count()) {
              const f = await footer.boundingBox();
              assert(f.y >= 0 && f.y + f.height <= height + 1, key + " footer clipped");
            }
            // Real native scroll region moves while close stays in place; focused fields stay inside it.
            const scroll = dialog
              .locator(".pdf-dialog__body,.cloak-dialog__body,.resume-library-body")
              .first();
            if (engine === "chromium" && width === 1280 && font === 16) {
              await scroll.evaluate((s) => {
                s.scrollTop = 0;
              });
              await close.focus();
              await p.mouse.move(1, 1);
              assert.equal(
                await scroll.evaluate(
                  (s) => getComputedStyle(s, "::-webkit-scrollbar-thumb").backgroundColor,
                ),
                "rgba(0, 0, 0, 0)",
                key + " idle thumb",
              );
              const rail = await scroll.boundingBox();
              await p.mouse.move(rail.x + rail.width - 4, rail.y + 12);
              assert.notEqual(
                await scroll.evaluate(
                  (s) => getComputedStyle(s, "::-webkit-scrollbar-thumb").backgroundColor,
                ),
                "rgba(0, 0, 0, 0)",
                key + " hover thumb",
              );
              assert.equal(
                await scroll.evaluate(
                  (s) => getComputedStyle(s, "::-webkit-scrollbar-button").display,
                ),
                "none",
                key + " no arrow buttons",
              );
              await p.mouse.down();
              await p.mouse.move(rail.x + rail.width - 4, rail.y + 80, { steps: 6 });
              await p.mouse.up();
              await p.waitForFunction(
                () =>
                  document.querySelector(
                    ".pdf-dialog__body,.cloak-dialog__body,.resume-library-body",
                  ).scrollTop > 0,
              );
              await scroll.evaluate((s) => {
                s.scrollTop = 0;
              });
              await p.mouse.move(rail.x + rail.width / 2, rail.y + rail.height / 2);
              await p.mouse.wheel(0, 350);
              await p.waitForFunction(
                () =>
                  document.querySelector(
                    ".pdf-dialog__body,.cloak-dialog__body,.resume-library-body",
                  ).scrollTop > 0,
              );
              await p.screenshot({ path: `${out}/${key}-scroll.png` });
            }
            await scroll.evaluate((s) => (s.scrollTop = s.scrollHeight));
            const after = await close.boundingBox();
            assert(Math.abs(after.y - initial.close.top) < 1, key + " close moved");
            if (initial.scroll.content > initial.scroll.height + 1)
              assert(await scroll.evaluate((s) => s.scrollTop > 0), key + " cannot scroll");
            const controls = scroll.locator("button,input,select");
            for (const ctl of [
              controls.first(),
              ...(await scroll.locator('input[type="number"]').all()),
              controls.last(),
            ])
              if (await ctl.isVisible()) {
                await ctl.focus();
                const r = await ctl.boundingBox(),
                  s = await scroll.boundingBox();
                if (r && s && r.height <= s.height)
                  assert(
                    r.y >= s.y - 1 && r.y + r.height <= s.y + s.height + 1,
                    key +
                      " focus clipped " +
                      JSON.stringify({ r, s, html: await ctl.evaluate((e) => e.outerHTML) }),
                  );
              }
            rows.push({ engine, app, theme, width, height, font, ...initial });
            await scroll.evaluate((s) => (s.scrollTop = 0));
          }
        await closeDialog();
        async function closeDialog() {
          await dialog.locator(".air-dismiss").first().click();
          await dialog.waitFor({ state: "hidden" });
        }
        await p.close();
        console.log(engine, app, theme, "passed");
      }
  } finally {
    await b.close();
    await writeFile(`${out}/results.json`, JSON.stringify(rows, null, 2));
  }
}
