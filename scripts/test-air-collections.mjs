import assert from "node:assert/strict";
import test from "node:test";
import { createCollection, collectionReducer as reduce } from "../design/air/collection-model.ts";
const current = (state) => state.history[state.cursor].rows;

test("reorder preserves identity and every field, with exact undo/redo", () => {
  const start = createCollection();
  const moved = reduce(start, { type: "move", id: "layer-4", edge: "top" });
  assert.deepEqual(
    current(moved).map((row) => row.id),
    ["layer-4", "layer-1", "layer-2", "layer-3", "layer-5"],
  );
  assert.equal(current(moved)[0], current(start)[3]);
  assert.deepEqual(current(reduce(moved, { type: "jump", cursor: 0 })), current(start));
  assert.deepEqual(current(reduce(moved, { type: "jump", cursor: 1 })), current(moved));
  assert.equal(reduce(start, { type: "move", id: "layer-1", edge: "up" }), start);
});
test("new work after undo discards the future while leaving previous snapshots intact", () => {
  const start = createCollection();
  let state = reduce(start, { type: "rename", id: "layer-1", name: "Renamed" });
  state = reduce(state, { type: "visibility", id: "layer-2" });
  state = reduce(state, { type: "jump", cursor: 1 });
  state = reduce(state, { type: "move", id: "layer-3", edge: "bottom" });
  assert.equal(state.history.length, 3);
  assert.equal(current(state).find((row) => row.id === "layer-2").visible, true);
  assert.equal(current(start)[0].name, "A little more room.");
  assert.equal(reduce(state, { type: "jump", cursor: 3 }), state);
});
test("selection across filtered views retains other selections and rejects stale IDs", () => {
  let state = createCollection();
  state = reduce(state, { type: "select", ids: ["layer-1", "layer-2", "missing"], checked: true });
  state = reduce(state, { type: "select", ids: ["layer-1", "layer-4"], checked: true });
  state = reduce(state, { type: "select", ids: ["layer-1", "layer-4"], checked: false });
  assert.deepEqual(state.selected, ["layer-2"]);
  assert.equal(state.history.length, 1);
});
test("remove all is reversible and clears stale selections without deleting history", () => {
  let state = createCollection();
  const ids = current(state).map((row) => row.id);
  state = reduce(state, { type: "select", ids, checked: true });
  state = reduce(state, { type: "remove", ids });
  assert.equal(current(state).length, 0);
  assert.deepEqual(state.selected, []);
  state = reduce(state, { type: "jump", cursor: 0 });
  assert.deepEqual(
    current(state).map((row) => row.id),
    ids,
  );
  assert.deepEqual(state.selected, []);
});
test("invalid and unchanged mutations create no misleading history entries", () => {
  const state = createCollection();
  for (const action of [
    { type: "rename", id: "layer-1", name: "   " },
    { type: "rename", id: "layer-1", name: "x".repeat(161) },
    { type: "rename", id: "layer-1", name: " A little more room. " },
    { type: "visibility", id: "gone" },
    { type: "remove", ids: ["gone"] },
    { type: "jump", cursor: -1 },
  ])
    assert.equal(reduce(state, action), state);
});
test("100-row sample stays uniquely addressable through reorder, rename, remove and undo", () => {
  let state = createCollection(100);
  assert.equal(new Set(current(state).map((row) => row.id)).size, 100);
  state = reduce(state, { type: "move", id: "layer-100", edge: "top" });
  state = reduce(state, { type: "rename", id: "layer-100", name: "星 — résumé" });
  state = reduce(state, { type: "remove", ids: ["layer-100"] });
  state = reduce(state, { type: "jump", cursor: 2 });
  assert.equal(current(state)[0].name, "星 — résumé");
  assert.equal(current(state).length, 100);
  state = reduce(state, { type: "reset", count: 5 });
  assert.equal(current(state).length, 5);
  assert.equal(state.history.length, 1);
});
