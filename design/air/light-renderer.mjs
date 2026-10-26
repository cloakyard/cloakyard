/** Air light — custom composition using Shaders 4.0.5's public core/std APIs.
 * This module is bundled locally for the opt-in study. No preset service, textures,
 * telemetry collector, default RAF loop or remote asset is used.
 */
import { shaderRendererGPU, createGpuUniformsMap, rootPassthrough } from "shaders/core";
import { defineShader, wgsl, transformColor } from "shaders/std";

const AirLight = defineShader({
  name: "AirLight",
  props: {
    base: { default: "#ffffff", transform: transformColor },
    accent: { default: "#285ad7", transform: transformColor },
    plane: { default: "#f0f2f6", transform: transformColor },
    aim: { default: 0.5 },
    arrival: { default: 1 },
    dark: { default: 0 },
  },
  paint: wgsl`
    let x = uv.x - 0.5;
    let response = (aim - 0.5) * 0.08;
    let edgeBack = 0.43 + 0.32 * x * x + 0.19 * x + (1.0 - arrival) * 0.12 + response;
    let edgeFront = 0.61 + 0.24 * x * x - 0.18 * x + (1.0 - arrival) * 0.06 - response * 0.5;
    let sweep = mix(0.14, aim, arrival);
    let spot = exp(-pow((uv.x - sweep) / 0.18, 2.0));
    let veil = smoothstep(0.0, 0.16, uv.x) * (1.0 - smoothstep(0.84, 1.0, uv.x));
    let lowerFade = 1.0 - smoothstep(0.78, 1.0, uv.y);
    let lineWidth = 1.1 / viewport.y;
    let backFill = smoothstep(edgeBack, edgeBack + 0.006, uv.y) * exp(-max(uv.y - edgeBack, 0.0) * 9.0);
    let frontFill = smoothstep(edgeFront, edgeFront + 0.006, uv.y) * exp(-max(uv.y - edgeFront, 0.0) * 8.0);
    let backEdge = exp(-pow((uv.y - edgeBack) / lineWidth, 2.0));
    let frontEdge = exp(-pow((uv.y - edgeFront) / lineWidth, 2.0));
    let glowBack = exp(-abs(uv.y - edgeBack) * 28.0) * (0.22 + spot * 0.78);
    let glowFront = exp(-abs(uv.y - edgeFront) * 36.0) * (0.24 + spot * 0.76);
    let grain = (fract(sin(dot(uv * viewport, vec2f(12.9898, 78.233))) * 43758.5453) - 0.5) / 600.0;
    var color = mix(base.rgb, plane.rgb, backFill * 0.75);
    color = mix(color, accent.rgb, glowBack * mix(0.24, 0.17, dark));
    color = mix(color, mix(base.rgb, plane.rgb, 0.35), frontFill * 0.58);
    color = mix(color, accent.rgb, glowFront * mix(0.32, 0.24, dark));
    color = mix(color, accent.rgb, (backEdge * mix(0.30, 0.20, dark) + frontEdge * mix(0.45, 0.32, dark)) * (0.4 + spot * 0.6));
    color = mix(base.rgb, color + grain, veil * lowerFade);
    return vec4f(color, 1.0);
  `,
});

export async function createAirLightRenderer(canvas, palette, onFailure, signal) {
  const adapter = await navigator.gpu.requestAdapter({ powerPreference: "low-power" });
  signal.throwIfAborted();
  if (!adapter) throw new Error("no-adapter");
  const device = await adapter.requestDevice();
  if (signal.aborted) {
    device.destroy();
    signal.throwIfAborted();
  }
  const renderer = shaderRendererGPU();
  let destroyed = false;
  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    signal.removeEventListener("abort", destroy);
    renderer.cleanup();
    device.destroy();
  };
  signal.addEventListener("abort", destroy, { once: true });
  try {
    renderer.setFrameLocked(true);
    renderer.setOnUnavailable(onFailure);
    renderer.setOnDeviceLost(onFailure);
    await renderer.initialize({
      canvas,
      gpu: { adapter, device },
      observeElement: false,
      enablePerformanceTracking: false,
      colorSpace: "srgb",
      toneMapping: "linear",
    });
    signal.throwIfAborted();
    if (renderer.getFailureReason()) throw new Error(renderer.getFailureReason());
    renderer.setResolutionScale(Math.min(1, 1.5 / (window.devicePixelRatio || 1)));
    renderer.registerNode("air-root", rootPassthrough.fragment, null, null, {}, rootPassthrough);
    renderer.registerNode(
      "air-light",
      AirLight.fragment,
      "air-root",
      { renderOrder: 0 },
      createGpuUniformsMap(AirLight, { ...palette, aim: 0.5, arrival: 1 }, "air-light"),
      AirLight,
    );
    await renderer.renderAndWait({ waitForGpu: true });
    signal.throwIfAborted();
    if (renderer.getFailureReason()) throw new Error(renderer.getFailureReason());
    return {
      async draw(props, waitForGpu = false) {
        if (destroyed) return;
        for (const [key, value] of Object.entries(props))
          renderer.updateUniformValue("air-light", key, value);
        await renderer.renderAndWait({ waitForGpu });
        if (renderer.getFailureReason()) throw new Error(renderer.getFailureReason());
      },
      resize(width, height) {
        if (destroyed) return;
        renderer.resize(width, height);
        renderer.setResolutionScale(Math.min(1, 1.5 / (window.devicePixelRatio || 1)));
      },
      destroy,
    };
  } catch (error) {
    // initialize() can settle after an abort already destroyed the device.
    // Clean any resources it created in that interval as well.
    if (destroyed) renderer.cleanup();
    else destroy();
    throw error;
  }
}
