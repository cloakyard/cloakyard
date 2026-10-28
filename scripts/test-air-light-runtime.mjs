/** Lifecycle invariants with a controlled renderer; actual GPU evidence is recorded separately. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { mountAirLight } from "../design/air/light-runtime.mjs";
import { motionMilliseconds } from "../design/air/motion.mjs";

function environment({
  pendingMount = false,
  pendingDraw = false,
  resizeThrows = false,
  arrival = "900ms",
} = {}) {
  const saved = new Map();
  const set = (name, value) => {
    saved.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
    Object.defineProperty(globalThis, name, { configurable: true, value });
  };
  const media = new Map();
  const frameCallbacks = new Map();
  const observers = [];
  let nextFrame = 0,
    destroyCount = 0,
    drawCount = 0,
    mountCount = 0;
  let releaseMount, releaseDraw, currentSignal;
  const renderer = {
    destroy() {
      destroyCount++;
    },
    resize() {
      if (resizeThrows) throw new Error("resize failed");
    },
    async draw() {
      drawCount++;
      if (pendingDraw)
        await new Promise((resolve) => {
          releaseDraw = resolve;
        });
    },
  };
  const parent = new EventTarget();
  const durations = [];
  const canvas = {
    style: {},
    animate: (_frames, options) => {
      durations.push(options.duration);
      return {
        playState: "finished",
        effect: { getComputedTiming: () => ({ progress: 1 }) },
        cancel() {},
      };
    },
  };
  const field = {
    dataset: {},
    parentElement: parent,
    querySelector: () => canvas,
    getBoundingClientRect: () => ({ left: 0, width: 100 }),
  };
  const doc = new EventTarget();
  doc.hidden = false;
  doc.documentElement = { dataset: {} };
  set("document", doc);
  set("window", new EventTarget());
  set("navigator", { gpu: {}, hardwareConcurrency: 8 });
  set("getComputedStyle", () => ({
    backgroundColor: "#fff",
    color: "#285ad7",
    outlineColor: "#eee",
    colorScheme: "light",
    getPropertyValue: (name) =>
      name === "--air-motion-arrival" ? arrival : "cubic-bezier(0.23,1,0.32,1)",
  }));
  set("matchMedia", (query) => {
    if (!media.has(query)) {
      const value = new EventTarget();
      value.matches = query.includes("pointer: fine");
      media.set(query, value);
    }
    return media.get(query);
  });
  set("requestAnimationFrame", (callback) => {
    frameCallbacks.set(++nextFrame, callback);
    return nextFrame;
  });
  set("cancelAnimationFrame", (id) => frameCallbacks.delete(id));
  for (const name of ["IntersectionObserver", "ResizeObserver", "MutationObserver"]) {
    set(
      name,
      class {
        constructor(callback) {
          this.callback = callback;
          this.kind = name;
          observers.push(this);
        }
        observe() {}
        disconnect() {
          this.disconnected = true;
        }
      },
    );
  }
  const light = mountAirLight(field, {
    loadRenderer: async () => ({
      async createAirLightRenderer(_canvas, _palette, _failure, signal) {
        mountCount++;
        currentSignal = signal;
        if (pendingMount)
          await new Promise((resolve) => {
            releaseMount = resolve;
          });
        return renderer;
      },
    }),
  });
  const flush = async () => {
    for (let i = 0; i < 8; i++) await Promise.resolve();
  };
  return {
    light,
    field,
    parent,
    media,
    observers,
    durations,
    flush,
    async enter(visible = true) {
      observers
        .find((o) => o.kind === "IntersectionObserver")
        .callback([{ isIntersecting: visible, intersectionRatio: visible ? 1 : 0 }]);
      await flush();
    },
    async frame() {
      const callbacks = [...frameCallbacks.values()];
      frameCallbacks.clear();
      for (const callback of callbacks) void callback(performance.now());
      await flush();
    },
    stats: () => ({
      destroyCount,
      drawCount,
      mountCount,
      frames: frameCallbacks.size,
      aborted: currentSignal?.aborted,
    }),
    releaseMount: () => releaseMount?.(),
    releaseDraw: () => releaseDraw?.(),
    restore() {
      light.destroy();
      for (const [name, descriptor] of saved) {
        if (descriptor) Object.defineProperty(globalThis, name, descriptor);
        else delete globalThis[name];
      }
    },
  };
}

test("CSS seconds and milliseconds retain the same Air timings", () => {
  for (const [ms, seconds] of [
    [900, ".9s"],
    [240, ".24s"],
    [160, ".16s"],
    [0, "0s"],
  ]) {
    assert.equal(motionMilliseconds(`${ms}ms`), ms);
    assert.equal(motionMilliseconds(` ${seconds} `), ms);
  }
});

test("the shader arrival stays 900ms after CSS minification", async () => {
  for (const arrival of ["900ms", ".9s"]) {
    const e = environment({ arrival });
    try {
      await e.enter();
      assert.deepEqual(e.durations, [900]);
    } finally {
      e.restore();
    }
  }
});

test("finite arrival submits once in the settled clock and rests until input", async () => {
  const e = environment();
  try {
    await e.enter();
    await e.frame();
    assert.equal(e.field.dataset.lightState, "idle");
    assert.equal(e.stats().drawCount, 1);
    assert.equal(e.stats().frames, 0);
    await e.enter(false);
    assert.equal(e.stats().destroyCount, 1);
    assert.equal(e.field.dataset.lightReady, undefined);
  } finally {
    e.restore();
  }
});
test("unmount aborts pending startup and destroys its late renderer", async () => {
  const e = environment({ pendingMount: true });
  try {
    await e.enter();
    e.light.destroy();
    assert.equal(e.stats().aborted, true);
    e.releaseMount();
    await e.flush();
    assert.equal(e.stats().destroyCount, 1);
    assert.equal(e.stats().frames, 0);
    assert(e.observers.every((o) => o.disconnected));
    e.light.destroy();
    assert.equal(e.stats().destroyCount, 1);
  } finally {
    e.restore();
  }
});
test("input arriving during a pending draw schedules a follow-up without overlap", async () => {
  const e = environment({ pendingDraw: true });
  try {
    await e.enter();
    await e.frame();
    const event = new Event("pointermove");
    Object.assign(event, { pointerType: "mouse", clientX: 90 });
    e.parent.dispatchEvent(event);
    assert.equal(e.stats().drawCount, 1);
    assert.equal(e.stats().frames, 0);
    e.releaseDraw();
    await e.flush();
    assert.equal(e.stats().frames, 1);
    assert.equal(e.field.dataset.lightState, "live");
  } finally {
    e.restore();
  }
});
test("reduced motion never mounts and preference changes are reversible", async () => {
  const e = environment();
  try {
    const reduce = e.media.get("(prefers-reduced-motion: reduce)");
    reduce.matches = true;
    reduce.dispatchEvent(new Event("change"));
    await e.enter();
    assert.equal(e.stats().mountCount, 0);
    assert.equal(e.field.dataset.lightState, "reduced");
    reduce.matches = false;
    reduce.dispatchEvent(new Event("change"));
    await e.flush();
    assert.equal(e.stats().mountCount, 1);
    reduce.matches = true;
    reduce.dispatchEvent(new Event("change"));
    assert.equal(e.stats().destroyCount, 1);
    assert.equal(e.stats().frames, 0);
  } finally {
    e.restore();
  }
});
test("resize failure releases the device and leaves the fallback available", async () => {
  const e = environment({ resizeThrows: true });
  try {
    await e.enter();
    e.observers
      .find((o) => o.kind === "ResizeObserver")
      .callback([{ contentRect: { width: 320, height: 200 } }]);
    assert.equal(e.field.dataset.lightState, "failed");
    assert.equal(e.field.dataset.lightReady, undefined);
    assert.equal(e.stats().destroyCount, 1);
  } finally {
    e.restore();
  }
});
