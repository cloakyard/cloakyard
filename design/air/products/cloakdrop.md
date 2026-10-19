## CloakDrop website requirements

- This specification governs **`apps/site` only**: landing, product/craft/privacy,
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
- Confirm the change has no native-app or KERR diff. Record evidence in `docs/air/`.

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

- The hero includes the canonical finite Air horizon between the entry actions and
  actual native screenshot. Its static SVG is usable without JavaScript; the local
  renderer loads lazily only for capable, visible, motion-enabled visits. Keep its
  350 kB gzip build ceiling and license. Stop at rest, release offscreen/hidden and
  preserve browser Back/Forward restoration. No React runtime or native UI change.
