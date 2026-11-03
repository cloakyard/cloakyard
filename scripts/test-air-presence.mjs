/** Real-engine presence, interruption and phone workflow audit. No app state is fabricated. */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
const { chromium, webkit } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const out = process.env.AIR_EVIDENCE_DIR || "/tmp/air-presence";
const urls = (
  process.env.AIR_FAMILY_URLS ||
  "http://127.0.0.1:8470,http://127.0.0.1:8471,http://127.0.0.1:8472,http://127.0.0.1:8473,http://127.0.0.1:8474,http://127.0.0.1:8475"
).split(",");
await mkdir(out, { recursive: true });
const results = [],
  errors = [];
const profiles = process.env.AIR_QUICK
  ? [[390, 844]]
  : [
      [320, 568],
      [390, 844],
      [430, 932],
      [844, 390],
      [768, 1024],
      [1024, 768],
      [1280, 720],
      [1440, 900],
    ];
// Sample actual running browser animations on paint frames, not a delayed protocol reply.
const watchMotion = (p, selector) =>
  p.evaluate((selector) => {
    cancelAnimationFrame(window.airAuditFrame);
    window.airAuditDurations = [];
    const sample = () => {
      const element = document.querySelector(selector);
      for (const animation of element?.getAnimations({ subtree: true }) ?? [])
        if (animation.playState === "running")
          window.airAuditDurations.push(animation.effect.getTiming().duration);
      window.airAuditFrame = requestAnimationFrame(sample);
    };
    sample();
  }, selector);
const duration = (p) => p.evaluate(() => [...new Set(window.airAuditDurations)]);
const settle = (p) => p.waitForTimeout(300);
for (const engine of process.env.AIR_BROWSER ? [process.env.AIR_BROWSER] : ["chromium", "webkit"]) {
  const browser = await (engine === "webkit"
    ? webkit.launch()
    : chromium.launch({
        executablePath:
          process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      }));
  try {
    // The portable controller: actual composited reversal, repeat close, live preference and disposal.
    if (!process.env.AIR_SKIP_CONTROLLER) {
      const harness = await browser.newPage({ viewport: { width: 390, height: 844 } });
      await harness.goto(urls[0]);
      assert(
        await harness.evaluate(() => {
          const disclosure = document.createElement("details");
          disclosure.innerHTML =
            '<summary>Keyboard regression</summary><input aria-label="Revealed field">';
          document.body.append(disclosure);
          const closedOpacity = getComputedStyle(disclosure, "::details-content").opacity;
          disclosure.open = true;
          const field = disclosure.querySelector("input");
          field.focus();
          const focused = document.activeElement === field;
          disclosure.remove();
          return focused && closedOpacity === "0";
        }),
        "Opening a disclosure delayed access to its controls",
      );
      await harness.evaluate(async () => {
        const { createPresenceMotion } = await import(
          new URL("/docs/air/presence.mjs", location.href).href
        );
        const el = document.createElement("div");
        el.className = "air-modal";
        el.style.position = "fixed";
        el.style.inset = "100px 0 auto";
        el.textContent = "Presence regression fixture";
        document.body.append(el);
        window.airMotionAudit = { el, exits: 0 };
        window.airMotionAudit.controller = createPresenceMotion(
          el,
          "panel",
          () => window.airMotionAudit.exits++,
        );
        window.airMotionAudit.controller.update(true);
      });
      await harness.waitForTimeout(60);
      const reverse = await harness.evaluate(() => {
        const { el, controller } = window.airMotionAudit;
        const before = getComputedStyle(el).transform;
        controller.update(false);
        const after = getComputedStyle(el).transform;
        return { before, after, duration: el.getAnimations()[0].effect.getTiming().duration };
      });
      assert.equal(
        reverse.before,
        reverse.after,
        "Interrupted close jumps away from the current pose",
      );
      assert.equal(reverse.duration, 160);
      await harness.waitForTimeout(40);
      await harness.evaluate(() => window.airMotionAudit.controller.update(true));
      await settle(harness);
      assert.equal(
        await harness.evaluate(() => window.airMotionAudit.exits),
        0,
        "An old exit closed a reopened surface",
      );
      await harness.evaluate(() => {
        window.airMotionAudit.controller.update(false);
        window.airMotionAudit.controller.update(false);
      });
      await harness.emulateMedia({ reducedMotion: "reduce" });
      await harness.waitForTimeout(40);
      assert.equal(await harness.evaluate(() => window.airMotionAudit.exits), 1);
      await harness.evaluate(() => window.airMotionAudit.controller.destroy());
      assert.equal(
        await harness.evaluate(() => window.airMotionAudit.el.getAnimations().length),
        0,
      );
      results.push({ engine, controller: "retarget/repeat/reduced/dispose passed" });
      await harness.close();
    }
    for (const [width, height] of profiles)
      for (const theme of ["light", "dark"]) {
        // Public navigation remains native and exposes the same Air animation in all six products.
        if (width <= 430)
          for (let app = 0; app < urls.length; app++) {
            const p = await browser.newPage({
              viewport: { width, height },
              hasTouch: true,
              colorScheme: theme,
              serviceWorkers: "block",
            });
            p.on("pageerror", (e) => errors.push({ engine, app, width, theme, error: e.message }));
            await p.goto(urls[app]);
            const menu = p.locator("header details").first();
            const summary = menu.locator("summary");
            await summary.tap();
            await p.waitForTimeout(50);
            const entry = await menu.evaluate((e) => ({
              opacity: Number(getComputedStyle(e, "::details-content").opacity),
              time: getComputedStyle(e, "::details-content").transitionDuration,
            }));
            assert(entry.opacity < 1, "Disclosure entered abruptly");
            await settle(p);
            assert.equal(
              await menu.evaluate((e) => getComputedStyle(e, "::details-content").opacity),
              "1",
            );
            await p.screenshot({
              path: `${out}/${engine}-${app}-${width}-${theme}-navigation.png`,
            });
            await p.keyboard.press("Escape");
            await settle(p);
            assert.equal(await menu.getAttribute("open"), null);
            assert(await summary.evaluate((e) => e === document.activeElement));
            await p.emulateMedia({ reducedMotion: "reduce" });
            await summary.tap();
            await p.waitForTimeout(30);
            assert.equal(
              await menu.evaluate((e) => getComputedStyle(e, "::details-content").opacity),
              "1",
            );
            results.push({ engine, app, width, height, theme, navigation: entry });
            await p.close();
          }
        for (const app of [1, 3, 5]) {
          const p = await browser.newPage({
            viewport: { width, height },
            hasTouch: width < 1100,
            colorScheme: theme,
            serviceWorkers: "block",
          });
          p.setDefaultTimeout(15000);
          p.on("pageerror", (e) => errors.push({ engine, app, width, theme, error: e.message }));
          await p.goto(urls[app]);
          let opener, close, dialog;
          if (app === 5) {
            await p
              .locator("input[type=file]")
              .first()
              .setInputFiles(
                new URL("../../cloakimg/scripts/fixtures/orange.webp", import.meta.url).pathname,
              );
            await p.locator('.editor-topbar [aria-label="Export"]:not(:disabled)').waitFor();
            if (width < 768) {
              await p.getByRole("button", { name: "Crop", exact: true }).click();
              await settle(p);
              const photo = await p.locator(".canvas-container").boundingBox();
              const shell = await p.locator(".editor-shell").boundingBox();
              assert(photo.height >= shell.height * 0.4 - 2);
              await p.getByRole("button", { name: "Cancel", exact: true }).click();
              await p.waitForTimeout(35);
              assert.equal(
                await p.locator(".editor-mobile-surface").getAttribute("data-air-presence"),
                "closing",
              );
              await p.locator(".editor-mobile-surface").waitFor({ state: "detached" });
            }
            opener = p.locator('.editor-topbar [aria-label="Export"]');
            close = p.getByRole("button", { name: "Close export", exact: true });
            dialog = p.locator(".cloak-dialog");
          } else if (app === 1) {
            await p
              .locator("input[type=file]")
              .first()
              .setInputFiles(
                new URL("../../cloakpdf/tests/fixtures/sample.pdf", import.meta.url).pathname,
              );
            await p.getByRole("button", { name: "Export", exact: true }).waitFor();
            opener = p.getByRole("button", { name: "Export", exact: true });
            close = p.getByRole("button", { name: "Close export", exact: true });
            dialog = p.locator(".pdf-dialog");
          } else {
            await p.getByRole("button", { name: "Start blank", exact: true }).first().click();
            if (width < 1024) {
              opener = p.getByRole("button", { name: "More options", exact: true });
              close = p.getByRole("button", { name: "Close options", exact: true });
            } else {
              opener = p.getByRole("button", { name: /^Template:/ });
              close = p.getByRole("button", { name: "Close template library", exact: true });
            }
            dialog = p.locator(".air-modal");
          }
          const motionRoot =
            app === 1
              ? ".pdf-modal-root"
              : app === 5
                ? ".cloak-modal-root"
                : ".air-presence-viewport";
          await watchMotion(p, motionRoot);
          await (width < 1100 ? opener.tap() : opener.click());
          await dialog.waitFor();
          await p.waitForTimeout(35);
          const entry = await duration(p);
          assert(
            entry.some((d) => d === 240),
            `${engine}/${app}/${width}: missing 240ms modal entry ${entry}`,
          );
          await settle(p);
          await p.screenshot({ path: `${out}/${engine}-${app}-${width}-${theme}-dialog.png` });
          const box = await dialog.boundingBox();
          assert(
            box.x >= -1 &&
              box.x + box.width <= width + 1 &&
              box.y >= -1 &&
              box.y + box.height <= height + 1,
            "Dialog exceeds viewport",
          );
          await watchMotion(p, motionRoot);
          await p.keyboard.press("Escape");
          await p.waitForTimeout(35);
          assert(await dialog.count(), "Exit unmounted immediately");
          const exit = await duration(p);
          assert(
            exit.some((d) => d === 160),
            `Missing 160ms exit: ${exit}`,
          );
          await dialog.waitFor({ state: "detached" });
          await p.waitForTimeout(50);
          assert(
            await opener.evaluate((e) => e === document.activeElement),
            `${engine}/${app}/${width}: focus not restored`,
          );
          // Keyboard opening has the same presence, while live reduced-motion settles it immediately.
          await opener.focus();
          await watchMotion(p, motionRoot);
          await p.keyboard.press("Enter");
          await dialog.waitFor();
          await p.waitForTimeout(35);
          assert(
            (await duration(p)).some((d) => d === 240),
            "Keyboard entry deviates",
          );
          await p.emulateMedia({ reducedMotion: "reduce" });
          await settle(p);
          await close.click();
          await dialog.waitFor({ state: "detached" });
          results.push({
            engine,
            app,
            width,
            height,
            theme,
            entry,
            exit,
            focusReturned: true,
            reduced: true,
          });
          console.log(`${engine}/${app}/${width}/${theme} passed`);
          await p.close();
        }
      }
  } finally {
    await browser.close();
  }
}
await writeFile(`${out}/results.json`, JSON.stringify({ results, errors }, null, 2) + "\n");
assert.deepEqual(errors, []);
console.log(`${results.length} surface motion and workflow checks passed`);
