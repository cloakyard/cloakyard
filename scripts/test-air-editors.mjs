/** Compare real workspace control roles across PDF, IMG and Resume.
 * Complement all-tool, secondary-flow and dialog matrices; this is not whole-app coverage.
 * Supply PLAYWRIGHT_MODULE, AIR_EDITOR_URLS (PDF,IMG,Resume), AIR_PDF_FIXTURE,
 * AIR_EVIDENCE_DIR and optionally AIR_BROWSER=webkit. No runtime dependency is added. */
import assert from "node:assert/strict";
import { compareControlStates } from "./air-component-audit.mjs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { mkdir, writeFile } from "node:fs/promises";
const family = resolve(import.meta.dirname, "../..");
const { chromium, webkit } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const { blankResume } = await import(
  pathToFileURL(resolve(family, "cloakresume/src/data/blankResume.ts"))
);
const { selectEditorTool } = await import(
  pathToFileURL(resolve(family, "cloakimg/scripts/air-editor-driver.mjs"))
);
const out = process.env.AIR_EVIDENCE_DIR || "/tmp/air-editors";
await mkdir(out, { recursive: true });
const fixture = {
  resume: {
    ...blankResume,
    profile: {
      ...blankResume.profile,
      name: "Amara Morgan",
      title: "Design engineer",
      summary: "Designing accessible tools with clear interactions and dependable local workflows.",
    },
    experience: [
      {
        id: "e1",
        title: "Design engineer",
        company: "Example studio",
        location: "Remote",
        start: "2021",
        end: "Present",
        bullets: ["Built accessible workflows for everyday creative work."],
      },
    ],
  },
  templateId: "ats-plain",
  primary: "#047857",
  paperSize: "a4",
  activeSection: "profile",
};
const apps = ["pdf", "img", "resume"];
const urls = Object.fromEntries(
  apps.map((app, index) => [
    app,
    (
      process.env.AIR_EDITOR_URLS ||
      "http://127.0.0.1:8511,http://127.0.0.1:8512,http://127.0.0.1:8513"
    ).split(",")[index],
  ]),
);
const engine = process.env.AIR_BROWSER || "chromium";
const errors = [],
  rows = [];
const b = await (engine === "webkit"
  ? webkit.launch()
  : chromium.launch({
      executablePath:
        process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      ignoreDefaultArgs: ["--hide-scrollbars"],
    }));
try {
  for (const [width, height] of JSON.parse(
    process.env.AIR_PROFILES ||
      "[[320,568],[375,812],[390,844],[430,932],[844,390],[768,1024],[1024,768],[1280,720],[1366,768],[1440,900],[1920,1080]]",
  ))
    for (const theme of ["light", "dark"])
      for (const app of ["pdf", "img", "resume"]) {
        const p = await b.newPage({
          viewport: { width, height },
          hasTouch: width < 1100,
          colorScheme: theme,
          reducedMotion: "reduce",
          serviceWorkers: "block",
        });
        p.setDefaultTimeout(15000);
        p.on("pageerror", (e) => errors.push({ app, width, theme, error: e.message }));
        if (app === "resume")
          await p.addInitScript(
            (f) => localStorage.setItem("cloakresume:v1", JSON.stringify(f)),
            fixture,
          );
        await p.goto(urls[app]);
        if (app === "resume") {
          await p.getByRole("button", { name: "Resume editing", exact: true }).first().click();
          await p.locator('.resume-root[data-template-ready="true"]').waitFor();
        } else {
          await p
            .locator("input[type=file]")
            .first()
            .setInputFiles(
              app === "img"
                ? resolve(family, "cloakimg/scripts/fixtures/orange.webp")
                : process.env.AIR_PDF_FIXTURE ||
                    resolve(family, "cloakpdf/tests/fixtures/sample.pdf"),
            );
          await p.getByRole("button", { name: "Export", exact: true }).waitFor();
          if (app === "pdf") await p.locator('img[alt="Page 1"]').waitFor();
          else await p.locator("canvas.upper-canvas").waitFor();
        }
        await p.evaluate(() => document.fonts.ready);
        await p.waitForTimeout(200);
        await p.screenshot({ path: `${out}/${app}-${width}-${theme}-editor.png` });
        if (app === "img") await selectEditorTool(p, "Watermark");
        if (app === "pdf") {
          if (await p.locator(".editor-toolrail").count())
            await p
              .locator(".editor-toolrail")
              .getByRole("button", { name: "Metadata", exact: true })
              .click();
          else {
            await p.getByRole("button", { name: "Open tools", exact: true }).click();
            await p
              .locator(".editor-mobile-sheet")
              .getByRole("button", { name: "Metadata", exact: true })
              .click();
          }
          await p.getByRole("textbox", { name: "Title", exact: true }).waitFor();
        }
        await p.waitForTimeout(200);
        await p.screenshot({ path: `${out}/${app}-${width}-${theme}-controls.png` });
        const selectors =
          app === "resume"
            ? {
                shell: ".resume-editor",
                header: ".resume-editor-header",
                panel: ".resume-editor-panel",
                field: 'input[name="profile-name"]',
                heading: ".resume-section-title",
              }
            : {
                shell: app === "img" ? ".editor-shell" : '[aria-label="PDF editor"]',
                header: ".editor-topbar",
                panel: ".editor-properties,.editor-mobile-surface,.editor-mobile-sheet",
                field:
                  app === "img"
                    ? ".editor-properties input[type=text],.editor-mobile-surface input[type=text]"
                    : "#metadata-title",
                heading:
                  ".editor-properties__heading h2,.editor-properties__title,.editor-mobile-title,.editor-mobile-sheet h2",
              };
        const metrics = await p.evaluate((sel) => {
          const val = (e) => {
            if (!e) return null;
            const s = getComputedStyle(e),
              r = e.getBoundingClientRect();
            return {
              text: (e.getAttribute("aria-label") || e.textContent).trim().slice(0, 80),
              rect: { x: r.x, y: r.y, width: r.width, height: r.height },
              font: s.fontFamily,
              size: s.fontSize,
              weight: s.fontWeight,
              lineHeight: s.lineHeight,
              color: s.color,
              background: s.backgroundColor,
              border: s.borderColor,
              borderWidth: s.borderWidth,
              radius: s.borderRadius,
              outline: s.outline,
              outlineWidth: s.outlineWidth,
              outlineStyle: s.outlineStyle,
              shadow: s.boxShadow,
            };
          };
          const all = (q) =>
            [...document.querySelectorAll(q)].filter((e) => {
              const r = e.getBoundingClientRect();
              return r.width && r.height && !e.closest("[inert],[hidden]");
            });
          const tokens = Object.fromEntries(
            [
              "font",
              "surface",
              "surface-soft",
              "ink",
              "ink-secondary",
              "line",
              "line-control",
              "action",
              "on-action",
              "accent",
              "control",
              "radius-control",
            ].map((k) => [
              k,
              getComputedStyle(document.documentElement)
                .getPropertyValue("--air-" + k)
                .trim(),
            ]),
          );
          return {
            tokens,
            shell: val(document.querySelector(sel.shell)),
            header: val(document.querySelector(sel.header)),
            panel: all(sel.panel).map(val),
            heading: all(sel.heading).map(val),
            field: all(sel.field).map(val),
            buttons: all(sel.header + " button").map(val),
            overflow: document.documentElement.scrollWidth > innerWidth + 1,
          };
        }, selectors);
        rows.push({ app, width, height, theme, ...metrics });
        assert.equal(metrics.overflow, false, `${app} horizontal overflow`);
        assert.equal(metrics.field.length > 0, true, `${app} control missing`);
        const control = metrics.field[0];
        assert.equal(control.radius, "10px", `${app} field radius`);
        assert.equal(control.borderWidth, "1px", `${app} field contour`);
        assert.equal(control.shadow, "none", `${app} field shadow`);
        assert.equal(control.size, width < 1100 ? "16px" : "14px", `${app} field text`);
        assert(control.rect.height >= (width < 1100 ? 44 : 32), `${app} field target`);
        assert.equal(metrics.heading.length > 0, true, `${app} heading missing`);
        assert.equal(metrics.heading[0].weight, "500", `${app} heading weight`);
        assert.equal(
          metrics.heading[0].size,
          app === "resume" ||
            (await p
              .locator(
                '.editor-properties:not([data-compact]),.editor-properties[data-compact="false"]',
              )
              .count())
            ? "20px"
            : "14px",
          `${app} heading hierarchy`,
        );
        const field = p.locator(selectors.field).first();
        if (await field.count()) {
          await field.focus();
          await p.screenshot({ path: `${out}/${app}-${width}-${theme}-focus.png` });
          rows.at(-1).focus = await field.evaluate((e) => {
            const s = getComputedStyle(e);
            return {
              border: s.borderColor,
              outline: s.outline,
              outlineWidth: s.outlineWidth,
              outlineStyle: s.outlineStyle,
              shadow: s.boxShadow,
            };
          });
        }
        assert.equal(
          rows.at(-1).focus.border,
          "rgba(0, 0, 0, 0)",
          `${app} duplicate focus contour`,
        );
        assert.equal(rows.at(-1).focus.outlineWidth, "2px", `${app} focus outline width`);
        assert.equal(rows.at(-1).focus.outlineStyle, "solid", `${app} focus outline style`);
        assert.equal(rows.at(-1).focus.shadow, "none", `${app} focus shadow`);
        if (app === "resume") {
          const more = p.getByRole("button", { name: "More options", exact: true });
          if (await more.isVisible()) {
            await more.click();
            await p.getByRole("dialog", { name: "Options", exact: true }).waitFor();
          } else {
            await p.getByRole("button", { name: /^Template:/ }).click();
            await p.getByRole("dialog", { name: "Choose a template", exact: true }).waitFor();
          }
        } else {
          await p.getByRole("button", { name: "Export", exact: true }).click();
          await p.getByRole("dialog").waitFor();
        }
        await p.waitForTimeout(400);
        await p.screenshot({ path: `${out}/${app}-${width}-${theme}-dialog.png` });
        const dismiss = p.getByRole("dialog").last().locator(".air-dismiss").first();
        const modalControls = [{ locator: dismiss, kind: "dismiss", name: "Dialog close" }];
        if (app !== "resume") {
          modalControls.push({
            locator: p.getByRole("dialog").getByRole("button", { name: "Download", exact: true }),
            kind: "primary",
            name: "Download",
          });
          if (app === "img")
            modalControls.push({
              locator: p.getByRole("dialog").getByRole("button", { name: "Copy", exact: true }),
              kind: "secondary",
              name: "Copy",
            });
        }
        rows.at(-1).componentStates = await compareControlStates(p, modalControls);
        const box = await dismiss.boundingBox();
        assert(box && box.width >= 44 && box.height >= 44, `${app} dismiss target`);
        await dismiss.click();
        await p.getByRole("dialog").waitFor({ state: "hidden" });
        assert(await field.isVisible(), `${app} workspace lost after closing dialog`);
        const editorControls = [{ locator: field, kind: "field", name: "Editor text field" }];
        if (app === "resume")
          editorControls.push({
            locator: p.getByRole("button", { name: "Add photo", exact: true }),
            kind: "secondary",
            name: "Add photo",
          });
        rows.at(-1).componentStates.push(...(await compareControlStates(p, editorControls)));
        const differences = rows.at(-1).componentStates.flatMap((control) =>
          control.states.flatMap((state) =>
            state.differences.map((difference) => ({
              control: control.name,
              state: state.state,
              ...difference,
            })),
          ),
        );
        rows.at(-1).componentDifferences = differences;
        if (!process.env.AIR_REPORT_ONLY)
          assert.deepEqual(differences, [], `${app} ${width} ${theme}: shared component states`);
        await p.close();
        console.log(
          app,
          width,
          theme,
          differences.length
            ? `${differences.length} component differences`
            : "component states match",
        );
      }
  // Compare computed control colours and font roles, not app-specific document composition.
  for (const width of new Set(rows.map((row) => row.width)))
    for (const theme of ["light", "dark"]) {
      const group = rows.filter((r) => r.width === width && r.theme === theme);
      for (const other of group.slice(1))
        for (const key of ["font", "border", "background", "color"])
          assert.equal(
            other.field[0][key],
            group[0].field[0][key],
            `${other.app} ${width} ${theme} ${key}`,
          );
      for (const other of group.slice(1))
        assert.deepEqual(other.focus, group[0].focus, `${other.app} focus treatment`);
    }
  assert.deepEqual(errors, []);
} finally {
  await writeFile(`${out}/results.json`, JSON.stringify({ rows, errors }, null, 2));
  await b.close();
}
