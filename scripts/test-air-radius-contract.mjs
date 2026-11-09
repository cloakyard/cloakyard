import { test } from "node:test";
import assert from "node:assert/strict";
import { auditCorners, expectedCorners } from "./air-radius-contract.mjs";
const row = (overrides = {}) => ({
  origin: "https://example.test",
  class: "air-button",
  tag: "button",
  name: "Apply",
  parent: "",
  viewport: [390, 844],
  radii: ["10px", "10px", "10px", "10px"],
  ...overrides,
});
test("detects a single asymmetric corner and the legacy layer action", () => {
  assert.equal(auditCorners([row()]).failures.length, 0);
  assert.equal(auditCorners([row({ radii: ["10px", "10px", "4px", "10px"] })]).failures.length, 1);
  assert.equal(
    auditCorners([row({ class: "rounded", name: "Hide layer", radii: Array(4).fill("4px") })])
      .failures.length,
    1,
  );
});
test("preserves distinct sheet, attached pane, nested clip and palette roles", () => {
  assert.deepEqual(expectedCorners(row({ class: "cloak-dialog" })), ["20px", "20px", "0px", "0px"]);
  assert.deepEqual(
    expectedCorners(row({ class: "cloak-dialog", viewport: [1440, 900] })),
    Array(4).fill("20px"),
  );
  assert.deepEqual(expectedCorners(row({ class: "editor-mobile-surface" })), Array(4).fill("0px"));
  assert.deepEqual(expectedCorners(row({ class: "resume-template-paper" })), [
    "0px",
    "0px",
    "17px",
    "17px",
  ]);
  assert.deepEqual(expectedCorners(row({ class: "img-colour-swatch" })), Array(4).fill("50%"));
});
test("does not turn unknown artwork or output into a conformance claim", () => {
  const result = auditCorners([
    row({ class: "landscape", radii: Array(4).fill("2px") }),
    row({ output: true }),
  ]);
  assert.equal(result.checked, 0);
  assert.equal(result.unclassified.length, 1);
});
