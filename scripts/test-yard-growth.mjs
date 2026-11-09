import assert from "node:assert/strict";
import { test } from "node:test";
import { yardGrowth } from "../src/components/yard-growth.ts";

test("registry growth retains existing cells, space for the next app and a bounded sequence", () => {
  let previous = [];
  for (let count = 0; count <= 125; count++) {
    const layout = yardGrowth(count);
    assert.equal(layout.cells.length, count + 1);
    const positions = layout.cells.map(({ x, y }) => [x, y]);
    assert.deepEqual(positions.slice(0, previous.length), previous);
    assert.ok(layout.duration <= layout.step);
    assert.ok(layout.nextDelay + 480 <= 4540);
    for (const cell of layout.cells) {
      assert.ok(cell.left >= 0 && cell.top >= 0);
      assert.ok(cell.left + cell.width <= 100);
      assert.ok(cell.top + cell.height <= 100);
    }
    previous = positions;
  }
});
