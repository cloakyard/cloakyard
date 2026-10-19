import assert from "node:assert/strict";
import { test } from "node:test";
import { createFileWorkflow, FILE_LIMIT } from "../design/air/files.mjs";
const file = (text = "café 日本語 🌿\n".repeat(30), name = "note.txt") => new File([text], name);
const tick = () => new Promise((resolve) => setImmediate(resolve));
const reader = (blob) => blob.arrayBuffer();
const create = (options = {}) => createFileWorkflow({ readChunk: reader, ...options });

test("invalid, multiple, oversize and cancelled picks retain the current file", () => {
  const flow = create();
  const original = file();
  assert.equal(flow.select([original]), true);
  for (const files of [
    [],
    [file("x", "picture.png")],
    [file(), file()],
    [file(new Uint8Array(FILE_LIMIT + 1))],
  ]) {
    assert.equal(flow.select(files), false);
    assert.equal(flow.getState().file, original);
  }
});
test("UTF-8 characters survive chunk boundaries and preview is bounded", async () => {
  const original = file();
  const flow = create({ chunkSize: 3 });
  flow.select([original]);
  assert.equal(await flow.start(), true);
  assert.equal(flow.getState().preview, await original.text());
  assert.equal(flow.getState().completed, original.size);
  flow.select([file("🌿".repeat(1300))]);
  await flow.start();
  assert.equal(Array.from(flow.getState().preview).length, 1200);
  assert.equal(flow.getState().preview.endsWith("🌿"), true);
});
test("invalid UTF-8 fails without discarding selected file; same file can be picked again", async () => {
  const original = file(new Uint8Array([0xff]));
  const flow = create();
  flow.select([original]);
  assert.equal(await flow.start(), false);
  assert.equal(flow.getState().phase, "error");
  assert.equal(flow.getState().file, original);
  assert.equal(flow.select([original]), true);
  assert.equal(flow.getState().phase, "ready");
});
test("empty text completes with a useful state", async () => {
  const flow = create();
  flow.select([file("")]);
  await flow.start();
  assert.equal(flow.getState().phase, "complete");
  assert.equal(flow.getState().completed, 0);
  assert.match(flow.getState().notice, /empty/);
});
test("manual pause has measured bytes, ignores duplicate starts and resumes", async () => {
  const flow = create();
  flow.select([file()]);
  const pending = flow.start({ pause: true, unknown: true });
  await tick();
  assert.equal(flow.getState().phase, "paused");
  assert.ok(flow.getState().completed > 0 && flow.getState().completed < flow.getState().file.size);
  assert.equal(flow.getState().unknown, true);
  assert.equal(await flow.start(), false);
  flow.resume();
  assert.equal(await pending, true);
  assert.equal(flow.getState().phase, "complete");
});
test("cancel while paused releases the wait and retry starts from zero", async () => {
  const seen = [];
  const flow = create({ onChange: (state) => seen.push(state) });
  flow.select([file()]);
  const pending = flow.start({ pause: true });
  await tick();
  const partial = flow.getState().preview;
  flow.cancel();
  assert.equal(await pending, false);
  assert.equal(flow.getState().preview, partial);
  assert.equal(flow.getState().phase, "cancelled");
  await flow.start();
  assert.equal(
    seen.filter((state) => state.phase === "reading" && state.completed === 0).length,
    2,
  );
  assert.equal(flow.getState().phase, "complete");
});
test("late completion after cancel, replacement, removal or disposal cannot publish", async () => {
  for (const operation of ["cancel", "replace", "clear", "dispose"]) {
    let finish;
    let signal;
    const seen = [];
    const flow = create({
      readChunk: (blob, abortSignal) => {
        signal = abortSignal;
        return new Promise((resolve) => {
          finish = async () => resolve(await blob.arrayBuffer());
        });
      },
      onChange: (state) => seen.push(state),
    });
    flow.select([file()]);
    const pending = flow.start();
    if (operation === "replace") flow.select([file("replacement", "new.json")]);
    else flow[operation]();
    assert.equal(signal.aborted, true);
    const state = flow.getState();
    const count = seen.length;
    await finish();
    assert.equal(await pending, false);
    assert.deepEqual(flow.getState(), state);
    assert.equal(seen.length, count);
  }
});
test("interruption keeps partial text and file; retry succeeds without simulation", async () => {
  const flow = create();
  const original = file();
  flow.select([original]);
  assert.equal(await flow.start({ fail: true, pause: true }), false);
  assert.equal(flow.getState().phase, "error");
  assert.equal(flow.getState().file, original);
  assert.ok(flow.getState().preview.length > 0);
  assert.match(flow.getState().notice, /Study interruption/);
  assert.equal(await flow.start(), true);
  assert.equal(flow.getState().phase, "complete");
});
test("short read rejects inconsistent byte counts", async () => {
  const flow = create({ readChunk: async () => new ArrayBuffer(0) });
  flow.select([file()]);
  assert.equal(await flow.start(), false);
  assert.equal(flow.getState().phase, "error");
  assert.equal(flow.getState().completed, 0);
});
