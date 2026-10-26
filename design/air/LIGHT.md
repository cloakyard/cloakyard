# Air light study

This is the canonical, locally bundled landing light. Product wrappers import
`light-runtime.mjs`; the reference gallery uses the same runtime through
`light-controller.mjs`. Production/device acceptance is tracked per app.

`light-renderer.mjs` defines Air's two illuminated planes using the public
`shaders/core` and `shaders/std` APIs. `light-runtime.mjs` owns lazy loading,
pointer response, theme/resize updates, finite drawing and resource disposal.
The SVG in `components.html` uses the same curve geometry as a permanent fallback.
The horizon wrapper supplies the app logo colour through computed CSS `color`;
SVG edges use `currentColor`. The theme pairs in `contract.md` apply only to
artwork. Shared Air tokens retain neutral planes, UI colours, duration and easing.

Build and verify from the Cloakyard checkout:

```sh
node scripts/build-air-light.mjs
node scripts/build-air-light.mjs --check
node scripts/sync-air-design.mjs --bundle
node scripts/sync-air-design.mjs --bundle --check
node scripts/check-air-design.mjs
vp check
vp build
```

The build is pinned to Shaders 4.0.5. Its core imports the full built-in catalog
for media sizing; Air uses one custom generator and no media. The build adapter
excludes that catalog after checking its exact SHA-256 and export interface.
The published renderer/std code is bundled without local edits. Review this adapter on every dependency upgrade;
do not relax its guard to make an unfamiliar version build. Hosted presets and
the Shaders editor are not used. The local bundle includes MIT license notices
for Shaders, TypeGPU, tinyest, tsover-runtime and typed-binary.

The approximately 371 kB gzip payload is lazy and separate from the product build.
The 400 kB build ceiling is a study constraint; production adoption still requires
startup, real GPU/battery and device validation. CPU submission measurements shown
in the reference are not GPU timings or proof of battery efficiency. Formatting
and lint ignore generated vendor assets; the reproducible build check and bundle
hashes validate them instead. Source modules remain linted and formatted.

`sync-air-design.mjs --bundle` copies the controller, self-contained renderer and
licenses into every app's reference directory and writes their SHA-256 values in
`bundle.json`. Each reference runs without a sibling checkout or CDN.

Browser evidence and remaining gates are in `docs/air/validation.md` and
`UX_REFRESH_TODO.md`. Fallback simulations are labelled separately from actual
hardware/browser coverage. No screenshots of KERR or graphics in editing canvases
are introduced by this study.

The 2026-10-12 visibility refinement keeps a finite 900ms arrival. The rear/front
planes begin 24px/12px below their resting position at the 200px reference height;
a light concentration sweeps from 14% of the width toward the pointer target.
Pointer movement slightly separates the two planes as well as moving the light.
The existing 30fps/DPR limits, spring, resting state and disposal remain unchanged.
The stronger edge/glow lives below the hero copy. Reduced-motion and still modes
retain the quiet SVG fallback instead of requesting the renderer.
