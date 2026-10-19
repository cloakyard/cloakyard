import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const source = await readFile(new URL("../design/air/components.html", import.meta.url), "utf8");
const functionSource = (name) => {
  const match = source.match(new RegExp(`      function ${name}\\([^]*?\\n      }`));
  assert.ok(match, `Missing reference function ${name}`);
  return match[0];
};
const { escapeValue, slider, controlValues } = runInNewContext(`
  const controlValues = {};
  ${functionSource("escapeValue")}
  ${functionSource("slider")}
  ({ escapeValue, slider, controlValues });
`);

test("reference form values remain text across HTML reconstruction", () => {
  assert.equal(escapeValue(`&<>"'`), "&amp;&lt;&gt;&quot;&#39;");
  assert.equal(escapeValue("résumé 東京"), "résumé 東京");
  assert.equal(escapeValue("&lt;img&gt;"), "&amp;lt;img&amp;gt;");
});

test("a reconstructed slider cannot interpolate markup from its retained value", () => {
  controlValues.opacity = '"><img src=x onerror="window.injected=true">';
  const html = slider("Opacity", "opacity", 65);
  assert.ok(html.includes("&lt;img"));
  assert.ok(!html.includes("<img"));
  assert.ok(!html.includes('onerror="'));
  delete controlValues.opacity;
  assert.ok(slider("Opacity", "opacity", 65).includes('value="65"'));
});
