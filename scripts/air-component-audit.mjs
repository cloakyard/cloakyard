/** Compare product controls with the portable Air CSS in an isolated browser page. */
import { readFile } from "node:fs/promises";
const css = await readFile(new URL("../design/air/air.css", import.meta.url), "utf8");
const properties = [
  "fontFamily",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "color",
  "backgroundColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor",
  "borderTopWidth",
  "borderRadius",
  "boxShadow",
  "opacity",
];
function appearance(element, keys) {
  const style = getComputedStyle(element);
  return Object.fromEntries(keys.map((key) => [key, style[key]]));
}
export async function compareControlStates(page, controls) {
  const reference = await page
    .context()
    .browser()
    .newPage({
      viewport: page.viewportSize(),
      hasTouch: await page.evaluate(() => matchMedia("(pointer: coarse)").matches),
      colorScheme: await page.evaluate(() =>
        matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
      ),
      reducedMotion: "reduce",
      serviceWorkers: "block",
    });
  const results = [];
  try {
    await reference.setContent(`<style>${css}</style><style>body{margin:24px;display:grid;gap:32px;font:400 var(--air-text-body)/1.5 var(--air-font);color:var(--air-ink)}button,input{width:200px}</style>
      <button data-kind="secondary" class="air-button">Secondary</button>
      <button data-kind="primary" class="air-button air-button--primary">Primary</button>
      <button data-kind="quiet" class="air-button air-button--quiet">Quiet</button>
      <input data-kind="field" class="air-field" value="Air field">
      <button data-kind="dismiss" class="air-icon-button air-button--quiet air-dismiss" aria-label="Close">×</button>`);
    for (const { locator, kind, name } of controls) {
      const standard = reference.locator(`[data-kind="${kind}"]`);
      const states = [];
      for (const state of ["default", "hover", "focus"]) {
        const keys =
          state === "focus"
            ? [...properties, "outlineWidth", "outlineStyle", "outlineColor", "outlineOffset"]
            : properties;
        async function capture(surface, control) {
          await surface.bringToFront();
          await surface.mouse.move(0, 0);
          await control.evaluate((element) => element.blur());
          if (state === "hover") await control.hover();
          if (state === "focus") {
            await surface.keyboard.press("Tab");
            // Let the modal focus trap finish a Tab wrap before targeting this control.
            await surface.evaluate(
              () =>
                new Promise((resolve) =>
                  requestAnimationFrame(() => requestAnimationFrame(resolve)),
                ),
            );
            await control.focus();
            await surface.evaluate(
              () =>
                new Promise((resolve) =>
                  requestAnimationFrame(() => requestAnimationFrame(resolve)),
                ),
            );
            if (
              !(await control.evaluate(
                (element) =>
                  document.activeElement === element && element.matches(":focus-visible"),
              ))
            )
              throw new Error(`${name}: keyboard focus was not established`);
          }
          return control.evaluate(appearance, keys);
        }
        const actual = await capture(page, locator);
        const expected = await capture(reference, standard);
        const differences = keys
          .filter((key) => actual[key] !== expected[key])
          .map((key) => ({ property: key, actual: actual[key], expected: expected[key] }));
        states.push({ state, actual, differences });
      }
      results.push({ name, kind, states });
    }
  } finally {
    await reference.close();
  }
  return results;
}
