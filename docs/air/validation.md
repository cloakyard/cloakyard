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

## 2026-10-11 — shared component bundle

The pinned local CSS and working `docs/air/components.html` reference are identical
across the family. They are not yet imported into product screens. Contract/bundle
hashes, palette equality and standalone-copy validation pass. All 15 required and
breakpoint-neighbour viewport sizes have no document overflow in light and dark.
The reference was visually inspected on desktop, laptop and phone, including the
390px dark sheet and 320px light controls. Evidence images are recorded in the
family repository's `docs/air/evidence/reference-*.jpg`.

Verified: field/select editing; checkbox and segment selection; slider keyboard
increment; dialog initial focus, forward/reverse focus wrap, Escape, Done and focus
return; 44px coarse-pointer controls; 16px mobile inputs; zero-duration reduced
motion. Fixed the native dialog's default max-width narrowing the phone sheet.
Contrast calculations: all tested normal text/semantic pairs >=4.5:1; required
field boundaries >=3:1 (light 3.31:1, dark 4.39:1). Source review covers disabled,
busy, hover/press and status variants. Product-specific controls, real app state
sweeps, 200% browser zoom and software-keyboard behaviour remain separate gates.

The CSS is an explicit standalone reference entry for PDF's dead-code tool because
its HTML reference imports it; it is not a dead-code ignore. Product migration will
replace this entry with the application's normal stylesheet import.

## 2026-10-11 — refinement 03, grounded in existing editors

The live Resume, PDF and IMG editors were inspected before this refinement. See
[the existing-editor audit](existing-editor-audit.md) for the actual workflows,
fixtures, sources, 24 layout measurements and seven reviewed captures. This is a
representative audit; no product migration or full feature certification is implied.

The reference now has a 420px left writing panel for Resume (360px compact), and
328/288px right inspectors for PDF and IMG. It includes nine annotation modes,
editable numeric slider values with validation, contact ordering, and product-specific
export choices. A phone tool selector and Done action stay outside the scrolling
panel. Canvas Fit accounts for both available dimensions. All fields use one border;
focus uses a transparent border plus one 2px outline at zero offset, with no shadow.

Reference verification:

- 120 DOM layout checks: three editors × two themes × twenty sizes, including
  320px phones, 844×390 landscape, tablets, laptops, desktop and breakpoint neighbours.
  No document/panel horizontal overflow; sample output fits its stage.
- All 13 representative tool panels render the expected heading; no browser errors.
- Visual review: Resume 1440×900 light and 1280×720 dark; IMG 1440×900 dark;
  PDF 1024×768 light and 390×844 dark; IMG export sheet 390×844 dark.
- Numeric field/range synchronization and invalid-value feedback; contact reorder
  with focus retained on the moved row; profile values retained across mobile tool
  switching and expanded preview; live profile text reflected on the sample paper.
- Export initial focus, forward/reverse wrap, Escape and focus return. The phone
  export actions are visible inside the viewport. Light/dark field focus has exactly
  one outline, transparent border and no box shadow. Coarse fields are 16px/44px.
- Shared contract hash `1699e014b48a` (prefix); six DESIGN documents and five bundles
  synchronized; all five local contract/inventory checks pass (289 source records).

Evidence: `evidence/air-03-layout-checks.json`, `air-03-tool-checks.json` and
`air-03-*.jpg`. Earlier evidence belongs to earlier candidates. Unreliable captures
from rapid background resize sequences were excluded, not treated as visual proof.

Limits: this is a design study with synthetic output and selected interactions.
Actual exports, all custom colour/rich-text/date widgets, AI flows, Safari/Firefox,
physical keyboards/touch devices, 200% zoom and performance still need migration
validation. Reduced motion was enabled for stable capture; the existing motion
specification remains, and further motion review is pending design lock.

Resume baseline update: one serial full run passed 288/288. A later complete run
passed 287/288 and failed the existing browser focus-ring assertion. That remains
unresolved. No production UI, test assertions or test configuration were changed to
hide it, and Resume's required commit gate remains closed. Reference/layout results
must not be reported as a passing Resume feature suite.

Final reference checkpoint checks: Cloakyard `vp check` (52 formatted files, 16
linted) and `vp build` pass. PDF `vp check` (251/210), IMG (306/273) and Resume
(151/114) pass format/lint/type checks. These do not override the unresolved Resume
browser-suite result above. Drop's unchanged site passed Astro check (19 files,
zero errors/warnings/hints) during this refinement. Runtime imports remain unchanged.

## 2026-10-11 — full PDF default-panel audit and signature follow-up

All 22 actual PDF default panels were inspected at 1440×900/light and 390×844/dark,
with conditional annotation and signature states and Metadata's date/time popup.
CloakPDF's `docs/air/editor-audit.md` contains the per-tool preservation requirements,
limits, source progress, accessible snapshots and mobile measurements. No actual
PDF edit or export was applied during that audit.

The Air study now uses the actual nine annotation mode names and Draw/Choose
signature sources. Native switch controls have 44×44px targets, a 40×24px track,
18px thumb and keyboard operation. The signature study supports pointer drawing,
clear, local image preview and retained source/ink/background state across tool
changes. PDF placement/export is deliberately outside this reduced study. A phone
can expand the controls while retaining a 112px preview region, then restore the
split or expanded preview without resetting tool values.

Fourteen signature layout/theme checks (320, 390, 768, 844 landscape, 1024, 1280, 1440) found no page/panel overflow and all switches measured 44×44px. Manual checks
covered Space toggle, clear/draw, PNG source preview, tool-switch persistence,
expanded-controls/split/preview return and no browser errors. Evidence is in
`air-03-signature-checks.json` and the signature desktop/phone captures.

The portable contract also specifies date/time calendars, position grids, insertion
chips, report/list rows and transactional Apply/Cancel semantics. Its writing-width
table now agrees with the 420px/360px editor composition. These detailed patterns
remain design targets: they have not been applied to production apps.

CloakPDF gates for its documentation/opt-in bundle checkpoint: `vp check`,
`pnpm check:dead`, and all **355/355** unit tests pass. Existing production UI is
unchanged; this is not a production E2E certification. Full state/feature/utility
coverage remains pending and is named in the per-app audit.

The follow-up also passed Cloakyard `vp check` (54 formatted/16 linted) and build,
and PDF production build including PWA generation. All five local design checkers
and exact-copy sync pass at contract hash `2b0b13f20830` (prefix). Existing large-chunk
warnings in PDF's build remain warnings; no runtime chunks were changed by this
opt-in bundle. PDF checkpoint: `4830570`. All 13 reference tool headings were
rechecked after the names changed, and expanded controls were checked in all three
editor variants. Switch focus has one contour around the track, with no outer box.
