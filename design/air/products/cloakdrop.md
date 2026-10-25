## CloakDrop website requirements

- This specification governs **`apps/site`**: landing, product/craft/privacy,
  download/install content, privacy document, 404, navigation, footer and artwork.
  It does not restyle the SwiftUI application or its native controls.
- Keep the native app's real screenshots accurate. Air styles their surrounding
  website, without drawing fake native chrome or presenting speculative features.
- Preserve actual architecture/OS requirements, release availability, signing and
  notarisation status, checksums, download links and installation guidance.
- Privacy copy continues to reflect the actual product, including deliberate
  download/browser/model requests and zero telemetry. Do not infer zero networking
  from local-first operation.
- The website remains static Astro and uses the portable family CSS directly;
  adopting Air does not require adding a React runtime to this site.
- Root `PRIVACY.md` remains the website policy source. Keep the displayed policy
  revision accurate. No Swift/native policy edits unless independently required.
- Required gates in `apps/site`: `npm run sync:assets`, `npm run check`,
  `npm run build`, anchor/download/privacy/404 checks, and the full responsive,
  light/dark, keyboard/touch/reduced-motion and long-content matrix.
- Keep SwiftUI application controls and KERR unchanged. Record evidence in `docs/air/`.

- The production home, policy and 404 share the quiet header/footer and an in-flow
  native compact menu. Focus/anchor/Escape enhancement lives in `navigation.ts`;
  no content reveal or decorative scroll handler may hide or delay navigation.
- Policy contents derive from the same imported Markdown headings. Preserve the
  displayed revision, real HTTP 404 and native link/no-JS recovery. Same-page
  enhancement preserves Back/Forward and the next keyboard destination.
- `assets/social/og.html` imports the pinned Air CSS and composes the real native
  screenshot; `scripts/make-og.sh` renders 1200×630. Keep source/capture/metadata
  aligned without editing logos, native screenshots or installation guarantees.
- `scripts/test-air-site.mjs` checks the built site with external Puppeteer tooling;
  it is not a runtime dependency. Supplement it with native browser/zoom review and
  keep physical/assistive acceptance distinct from browser input emulation.

- The hero assembles teal square pixels into FILE, PKG, ISO and ZIP silhouettes
  using the portable artwork lifecycle and precomputed Lucide-derived pixel masks.
  Include a visible neutral Air pause/resume control; static/no-JS visits show FILE.
  Pause offscreen/hidden and preserve manual pause across Back/Forward restoration.
  Keep real download actions immediately available and the actual native screenshot
  in the product section below the hero. No shader, React runtime or native UI change.

- On 2026-10-19 the user extended Air to the **installer background**.
  `apps/macos/scripts/dmg/background.swift` renders the fixed 760×570-point Finder
  composition at 2× using the canonical light palette and system typography.
  It is static artwork, like the OG card: Finder supports one background bitmap,
  so it does not imply a native-app theme change. Keep original app/Applications
  icons, actual installation targets, guide and signing instructions intact.
  Inspect the mounted DMG with its real icons and labels; retain ample space and
  a simple directional cue. No grid, nested card, status simulation or runtime dependency.
