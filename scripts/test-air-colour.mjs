import assert from "node:assert/strict";
import { test } from "node:test";
import { hexToHsv, hsvToHex, wheelPosition, wheelValue } from "../design/air/colour.mjs";

test("wheel coordinates match the displayed clockwise spectrum", () => {
  for (const [x, y, hex] of [
    [0, -1, "#ff0000"],
    [1, 0, "#80ff00"],
    [0, 1, "#00ffff"],
    [-1, 0, "#8000ff"],
  ]) {
    const { h, s } = wheelValue(x, y, 0);
    assert.equal(hsvToHex(h, s, 1), hex);
  }
  assert.deepEqual(wheelValue(0, 0, 210), { h: 210, s: 0 });
  assert.equal(wheelValue(5, 6, 0).s, 1);
});

test("thumb and pointer are inverse mappings throughout the wheel", () => {
  for (let h = 0; h < 360; h += 3)
    for (const s of [0.01, 0.25, 0.5, 1]) {
      const point = wheelPosition(h, s);
      const actual = wheelValue((point.x - 50) / 50, (point.y - 50) / 50, h);
      assert.ok(Math.abs(actual.h - h) < 0.00001);
      assert.ok(Math.abs(actual.s - s) < 0.00001);
    }
});

test("author colours round-trip without changing channel bytes", () => {
  for (let r = 0; r <= 255; r += 17)
    for (let g = 0; g <= 255; g += 17)
      for (let b = 0; b <= 255; b += 17) {
        const hex = `#${[r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("")}`;
        const { h, s, v } = hexToHsv(hex);
        assert.equal(hsvToHex(h, s, v), hex);
      }
});
