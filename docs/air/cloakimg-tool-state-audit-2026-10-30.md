# CloakIMG editor tool-state audit — 2026-10-30

This deeper pass follows the previous deployed editor audit. It inspects all 26 tools, including selected/conditional controls, real file choosers, invalid numeric drafts, AI-ready inspectors and enlarged-text layouts. It applies the existing Air 1.3.2 contract; shared design and other application code are unchanged.

The corrections replace remaining bespoke switches and selection skins with the shared Air controls, make image placement/watermark browsing keyboard reachable with same-file retry and error recovery, and give numeric fields native semantics within one shared contour. Preset grids, image actions and watermark controls reflow with enlarged text. The caption uses the canonical resizable textarea. A real breakpoint bug is fixed: an active tool now opens directly on phone and can reopen without changing tool identity or baking unnecessarily. Obsolete state classes, field-unit CSS and unused bindings are removed without adding a runtime dependency.

The [product audit](https://github.com/cloakyard/cloakimg/blob/main/docs/air/tool-state-audit-2026-10-30.md) records the per-tool coverage and reproducible browser drivers. Its durable evidence distinguishes the full initial matrix, alternate states, final bounded CSS follow-up and output checks. Image processing, persistent canvas, undo/history, AI consent and model implementations are preserved.

## Verification and release

Local gates pass: **484 units / 50 files**, format/lint/types, 90-file production build, 104-source inventory, 22 portability checks and Knip 6.43.0 with zero issues. Initial layouts pass **764 observations per engine**; alternate states pass **692 Chromium / 688 WebKit**. Final preset/Chroma checks pass **132 each**, and the active-tool correction passes **80 breakpoint transitions** with retained values and the same canvas. Twelve actual depth/mask-ready layouts pass.

Keyboard/error recovery, colour/curve, modal, selected-layer and batch checks pass. Four ZIPs have valid CRC and eight correctly resized JPEGs; twelve selected-layer exports are real 900×600 PNGs. Separate both-engine PNG comparison preserves exact RGBA parity with preceding production, including alpha. The product verification ledger identifies each stage and its limits; interrupted/failing candidates are excluded.

Implementation `5e5ae1d070330f17fcd6b0cd935dc5a84ec5a360` is in [IMG #24](https://github.com/cloakyard/cloakimg/pull/24). It is merged and deployed at main/dev `1c10ba23409e04468a784f79ac8e431efe4faea1`. Exact main contract and [Cloudflare production build](https://dash.cloudflare.com/73a3338267f567d02c3b79c9bcedc6a6/workers/services/view/cloakimg/production/builds/7b340a0a-3891-4d6e-a096-f9697ea0a171) checks pass.

All **89 served files match raw local hashes**. Live verification passes **12 native field/switch/file-recovery journeys**, **eight control/target journeys**, **80 retained-inspector/value/canvas transitions** and **12 public/privacy/editor journeys**, including **eight real PNG downloads**, in both engines with zero browser errors. The [release ledger](evidence/cloakimg-tool-state-audit-2026-10-30/release.json) records exact main checks before dev synchronization and all asset hashes.

IMG dev/main are synchronized; previews 8456/8457 are stopped. Central documentation follows its own dev → main PR, with unchanged homepage/shared-design bytes. All 12 served Yard files already match the local build.

## Remaining acceptance

Physical iPhone/software-keyboard, OS IME and spoken assistive acceptance remain open. Automated WebKit is not physical Safari proof. This pass does not repeat every high-resolution workload, native codec or AI tier. Keep the existing product/output/native acceptance backlog separate.

Scratch logs and full captures: `/tmp/air-img-tool-states-2026-10-30/`. Other product work, Drop's unpublished native/release commits and separate Resume worktrees remain untouched.
