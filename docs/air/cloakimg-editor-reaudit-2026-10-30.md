# CloakIMG editor Air re-audit — 2026-10-30

The fresh editor review found deviations missed by the earlier bounds-only pass: small fine-pointer controls, overlapping enlarged text, clipped export actions, bespoke search fields and switches, and residual non-Air targeting/typography. This bounded correction applies Air 1.3.2 without changing the portable contract, image processing, model consent or codecs.

CloakIMG now uses reflowing toolbar/tool/inspector layouts, shared mode and shape/position choices, native Air switches, correctly sized slider/action targets, persistent search labels and one focus contour. Export has one shared header, scrolling body and reachable action footer. The canvas remains mounted across tool changes. Obsolete markup, duplicate classes and stale comments are removed; no runtime dependency is added.

Detailed source findings, before/after captures, reproducible browser runner and coverage are in [the product audit](https://github.com/cloakyard/cloakimg/blob/main/docs/air/editor-reaudit-2026-10-30.md). Its verification ledger distinguishes the full layout matrix, strengthened target checks and the final toolbar/icon follow-up. Public/PWA family components and other applications are unchanged.

## Validation and release

All required local gates pass: **483 unit tests/50 files**, format/lint/types, production build (89 files), portable design/provenance and scoped Knip (zero issues). Both engines pass **764 initial layout observations** and **408 strengthened target observations** each. The final artifact passes **24 affected-tool observations per engine**, **60 toolbar/export layouts**, and **eight keyboard/control/tap-anchor journeys**. All eleven Air viewport sizes, both themes and four enlarged-root profiles are covered; the product ledger identifies each stage precisely.

Additional feature coverage: 24 import/search/numeric/compare/export journeys with 24 real PNG downloads; 12 colour/curve journeys; 44 modal states; 24 batch states with four ZIPs/eight JPEG entries; both-engine PNG RGBA parity with preceding production, including alpha. Existing tool/component probes, 204 entry observations with real PNG fidelity and 192 neutral link/64 keyboard checks pass. Image-processing and consent implementations are preserved.

Implementation commit `a9a588f654854a164ead8601d02c7186de7e7bfb` is merged through [IMG #23](https://github.com/cloakyard/cloakimg/pull/23). Exact main/dev are `005702c11c3e7db3b439275858f30ea1ba85069e`. Both required main checks pass, including the [Cloudflare production build](https://dash.cloudflare.com/73a3338267f567d02c3b79c9bcedc6a6/workers/services/view/cloakimg/production/builds/5dcb636f-c805-4903-a50e-55e787c03be0).

All **88 served files match raw local hashes**; `_headers` is deployment configuration, not a served file. Live verification passes **60 toolbar/export layouts**, **eight keyboard/control/target-anchor journeys** and **12 public/privacy/editor journeys**, including **eight real PNG downloads**. Both engines/themes pass with zero browser errors. The [release ledger](evidence/cloakimg-editor-reaudit-2026-10-30/release.json) preserves asset hashes and the exact main check URLs before dev synchronization.

IMG local dev and remote dev/main are synchronized. Preview 8455 is stopped. Central documentation closeout follows its own dev → main PR; application/shared-design bytes are unchanged. Other product code, Drop's unpublished native commits and separate Resume worktrees are preserved. Full local logs and captures remain at `/tmp/air-img-editor-reaudit-2026-10-30/`.

## Remaining acceptance

Physical iPhone/touch/software-keyboard, OS IME and spoken assistive checks remain open. Automated WebKit is not physical Safari proof. Existing large-model/native-codec and separate product acceptance retain their prior records; this audit does not claim to repeat every inference or output combination.
