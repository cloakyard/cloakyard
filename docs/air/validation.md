# Air refresh — validation evidence

This record distinguishes existing baseline checks, documentation validation,
visual inspection and functional validation. No app is considered migrated until
its source/state inventory and feature gates pass. Dates use Asia/Kolkata.

## 2026-10-11 — baseline and contract preparation

All five repositories started clean on `dev`; each now uses `codex/air-refresh`.
Starting commits: Cloakyard `b4fb69c`, PDF `ed452d1`, IMG `a613be5`,
Resume `dcf6ef7`, Drop `25ecb7b`.

| Repository  | Command    | Result                                     |
| ----------- | ---------- | ------------------------------------------ |
| Cloakyard   | `vp check` | PASS: 24 formatted files, 13 linted files  |
| CloakPDF    | `vp check` | PASS: 242 formatted, 208 lint/type checked |
| CloakIMG    | `vp check` | PASS: 297 formatted, 271 lint/type checked |
| CloakResume | `vp check` | PASS: 142 formatted, 112 lint/type checked |

PDF units: **355/355 pass**. IMG units: **470/470 pass**. Drop's Astro check:
**19 files, zero errors/warnings/hints**; its production build passes (three routes).
Cloakyard's production build passes.

Resume's initial full run: **286/288 pass**, two 15-second browser timeouts (Contact
CRUD and the 320px scrolling picker). Both pass in the targeted rerun (2/2).
The next full run also exposed resource-sensitive template timing. Full stable
coverage is still required before Resume's contract commit; no timeout is waived.

## Contract/governance validation

- Six portable DESIGN documents share family contract SHA-256
  `d5c2e7f5e07a` (prefix); exact-copy synchronization passes.
- Local contract/inventory checker passes in all five repos and in five separate
  temporary directories containing only each portable document, script and data.
- Regenerating all 284 source records is stable and preserves recorded progress.
- CI checks contract integrity and inventory drift in an independent checkout.
- Local `design:check` and `design:inventory` commands expose the same checks.
- Cloakyard/PDF/IMG/Resume format/lint/type checks pass after the new docs/scripts.
- PDF dead-code check and all 355 unit tests pass with the scripts registered.
- Runtime styles, rendered states and screenshots remain explicitly pending.

This is governance evidence, not a completed app redesign. Detailed local command
logs are retained under `/tmp/cloakyard-air-checks` during the refresh.

## Initial source findings

- Previous per-app specifications mandate the heavy Workbench language and
  prohibit the proposed light treatment. They must be replaced together.
- PDF, IMG and Resume have independent token/alias layers, custom fields and
  overlays. A single landing stylesheet cannot migrate those components.
- IMG's photo-coloured app surfaces and Resume's green controls diverge from
  Air's common neutral shell and blue focus/selection language.
- Phone orientation overlays currently restrict workflows. The responsive audit
  must inspect actual landscape/short-height work, not certify the overlay.
- Résumé templates and rendered PDF/image content need explicit output exceptions
  so global typography/theme changes cannot silently alter exported work.
- The family KERR section contains a CSS orbital simulation with invented readouts;
  the user requires a text exploration link instead.

Rendered editor/component findings and screenshots are pending the full inventory
sweep. Existing historical audits are background evidence, not Air sign-off.
