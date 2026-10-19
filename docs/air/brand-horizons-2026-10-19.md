# App-coloured Air horizon — 2026-10-19

The user requested app colours across all family landing pages. cloakyard uses its
original logo's blue (#3975F6 / #6FC3FF), primary stop for light and highlight for dark.
Air 1.0.3 (`abcaee334ca7`) owns the five artwork-only tokens. The wrapper's computed
`color` feeds the existing shader and SVG `currentColor` fallback. Shared focus,
controls, page planes, motion/lifecycle and actual product output retain their rules.

Formatting/lint, TypeScript, production build, five shared lifecycle tests, pinned shader rebuild check, 13 inventory records and 18 portability checks pass. The lazy production shader remains 294.30 kB gzip; entry JS stays 75.58 kB gzip.

Twelve viewport/theme cases cover 1440×900 desktop, 1280×720 laptop, 768×1024
tablet, 390×844 and 320×568 phones, and 844×390 landscape. Both real GPU themes
render and stop at rest. Desktop/laptop/phone light/dark captures were visually
inspected, including the static fallback. Evidence: `evidence/brand-horizons-2026-10-19/`.
The family runner is `cloakyard/scripts/test-air-brand-horizons.mjs`; it accepts
`AIR_APP`, `AIR_URL`, `AIR_EVIDENCE_DIR`, `CHROME_PATH`, and `PUPPETEER_MODULE`.
It reads original logo stops, checks computed colours and static/GPU parity, and
uses disposable browser profiles. Full temporary captures/logs are under
`/tmp/air-brand-horizons-2026-10-19/`.

This is a local checkpoint. These colour changes have not been pushed or deployed.
Physical GPU/battery/thermal and assistive-device gates remain open; emulation
and desktop Chromium do not establish those results.

Local app commits: PDF `b67e32d`, Drop `a28264f`, Resume `4c302da`, IMG `e29495d`
with background integration `512c720`. IMG's parked draft is preserved; its
additional 475 tests, build, responsive themes and PNG-output/lifecycle checks
also pass. The horizon base matches the surrounding Air or legacy page.
