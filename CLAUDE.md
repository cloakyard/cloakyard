# Repository guidance

Read `AGENTS.md` and the complete `DESIGN.md` before visible changes. Air 1.2.3 is
the implementation baseline. `design/air/` in this repository owns the family
contract; products receive self-contained, pinned copies.

## Commands

The toolchain is Vite+, with Node.js 24 or newer and pinned dependency versions.
Use `vp dev`, `vp check`, `vp build` and `vp preview`. `vp check` covers formatting
and lint; also run `./node_modules/.bin/tsc --noEmit`. Product changes require the
applicable browser/feature checks in `docs/air/IMPLEMENTATION_PLAN.md`, not just a
successful build. `vp run deploy` publishes and needs separate authorization.

Shared design commands:

- `node scripts/sync-air-design.mjs --bundle` generates full portable contracts and bundles.
- `node scripts/sync-air-design.mjs --bundle --check` verifies synchronized copies.
- `node scripts/check-air-design.mjs` checks tokens, provenance and migrated sources.
- `node scripts/check-air-portability.mjs` checks the independent bundle.
- `node scripts/air-inventory.mjs` updates the surface list while preserving evidence.
- `node scripts/test-air-family.mjs` compares built Yard/PDF/Drop/Resume public pages and secondary reading/recovery shells.
  Set `AIR_FAMILY_URLS` (four comma-separated URLs, in that order), `PUPPETEER_MODULE` and
  `AIR_EVIDENCE_DIR`; use `AIR_BROWSER=firefox AIR_THEME=light` (then `dark`)
  for Firefox, otherwise Chrome covers both themes. Profiles are disposable.
- `node scripts/test-air-notices.mjs` compares built PDF/Resume PWA notices with real
  disposable workers across themes, sizes and enlarged text; product lifecycle
  suites separately verify activation and work preservation.
- `node --test scripts/test-air-file-workflow.mjs` and
  `node --test scripts/test-air-collections.mjs` exercise reference behavior.

## Architecture

A client-rendered React directory: no router, backend, analytics, external fonts,
or runtime data fetch. `src/data/tools.ts` owns product names, descriptions,
platform/privacy/status, local brand assets, source links and destinations. Product entries and
exploration links render from that registry. KERR is a text exploration link,
with no screenshot or simulated preview. Native macOS interfaces are outside scope.

`src/App.tsx` composes header, hero, products, curiosity, principles and footer.
Hash navigation preserves `#tools`, `#experiments`, `#principles` and the skip
link's `#main`; targets are focusable and malformed fragments fail safely.
`Header` uses a native in-flow details disclosure. Escape closes it and returns
focus. A complete product-link directory in `index.html` survives disabled JS.

## Styling and motion

`src/index.css` imports the generated `src/styles/air.css`. That pinned stylesheet
owns tokens and shared control skins; index.css contains homepage composition.
Never redefine `--air-*`, add a competing palette, or copy study/demo bundles into
production. Complex React adapters will share the product's existing React runtime.
Only extract a production adapter when a real product needs its behavior.

System appearance is the default. Shared `light-dark()` tokens handle both themes;
there is no stored homepage preference to migrate. Content-sized container queries
make enlarged text reflow; 44px targets apply on coarse input. Keep semantic links,
labels, decorative icon hiding, keyboard focus and the skip link intact.

`AirHorizon` mounts the canonical `design/air/light-runtime.mjs`. Its pinned Shaders
renderer is a separate lazy chunk, loaded only for visible, supported, unconstrained
artwork. The 900ms arrival and spring pointer response stop at rest; offscreen/hidden
states release the device. Reduced motion uses the still SVG, forced colours hide
it. `vite.config.ts` enforces 350 kB gzip for the shader and 85 kB for the page entry,
and ships dependency licenses. No shader is mounted inside an editor. Physical
battery/thermal validation remains tracked separately after the user's live activation request.

## Metadata and scope

Keep `index.html` OG/Twitter/JSON-LD and theme colours, `artwork/og.html`, the rendered
1200×630 `public/og.png`, README, sitemap and registry aligned. Brand artwork is a
brand asset; it does not define UI control colours. No remote icon fallback is needed.

Cloudflare Workers serves `dist/` with SPA not-found handling (`wrangler.jsonc`).
The home stays a directory and statement of principles, not per-product marketing.
Track phases and remaining device gates in `UX_REFRESH_TODO.md`; record evidence
before committing each bounded piece. Do not equate home completion with family
completion, and do not push or deploy without authorization.

## Dead-code audit

Run `npx --yes knip@6.43.0` for the declared web graph in `knip.json`. The pinned
CLI can also be supplied externally; no runtime package is required. Manual audit
commands and portable Air library entries are deliberate public entry points.

Knip covers the JavaScript/TypeScript graph here. Audit CSS imports and selectors
separately; this repository has no registered Knip stylesheet compiler.
