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

## IMG audit and precision-control refinement — 2026-10-11

Inspected all 26 existing IMG desktop default panels (1440 × 900 / light) and
25 mobile picker tools (390 × 844 / dark / coarse pointer). Also inspected mobile
Adjust sliders, first-use AI consent/decline, selected text/layer/history and the
colour picker DOM. Per-tool requirements, raw snapshots, evidence and remaining
states are in IMG's `docs/air/editor-audit.md`. A mobile exposure value persisted
after Cancel/re-entry; this is a recorded baseline finding to reproduce before
product migration, not a passing rollback test. No export or model download was run.

The shared contract and reference now define signed domain values, aligned units,
compact precision rows, editable curve points, layer action separation and explicit
commit/rollback boundaries. IMG's study uses Adjust, Crop & rotate, Spot heal,
Levels and Selective color. It replaces inaccurate percentage exposure, generic
brush strength and an invented adjustment-layer example. Actual processing remains
in the product; this checkpoint does not import Air into any application runtime.

Reference verification:

- 70 panel cases: five IMG tools × seven sizes × two themes. No page/panel horizontal
  overflow; inspected number fields meet fine/coarse height and coarse font rules.
- 14 final curve cases at 1440 × 900, 1280 × 800, 1024 × 768, 768 × 1024,
  390 × 844, 320 × 568 and 844 × 390, both themes. The square plot and precise
  value fields fit inside the study's working panel; coarse point targets ≥44px.
- Exact signed exposure, invalid-value retention, curve keyboard/Shift movement,
  numeric editing, add/remove/reset, protected endpoints, pointer dragging and
  tool-switch persistence checked. Levels reject crossed input bounds; colour-band
  values remain independent. Compact curve selection expands controls; Restore
  split view works and reopening the curve expands it again.
- Focus is one 2px solid replacement contour, offset 0, transparent border and no
  shadow in light/dark. All 14 current reference tool headings render correctly.
- Visually reviewed new desktop/light adjustment, tablet/light curve, phone/dark
  curve and focused phone-field captures. Evidence is in
  `evidence/air-03-img-controls-checks.json`, `air-03-tool-checks.json` and the new
  `air-03-img-*.jpg` files.

These are fixed-height reference frames in a scrolling study page. They do not
validate production full-screen short-height layouts, physical software keyboards
or assistive technology. The in-app browser cannot inject native touch cancellation;
its handler was source-reviewed, and physical cancellation remains pending.

Checks passed: Cloakyard `vp check` and `vp build`; IMG `vp check`, 470/470 unit tests
and `pnpm run build` including the 100-file / 25 MiB deployment asset gate. Existing
large-chunk warnings remain. All five portable contract checks and exact-copy sync
pass at contract hash `80ae0cf6d1d6` (prefix). Product feature/E2E/model/codec/PWA
probes remain required when those production surfaces change; no such coverage is
claimed by this documentation and opt-in reference checkpoint.

## Resume section audit and structured-writing contract — 2026-10-11

The existing Resume editor now has 104 default-section geometry cases: 13 populated
sections at 1440×900, 1280×800, 768×1024 and 390×844 in both themes. Phone and tablet
used touch emulation. No measured page/panel horizontal overflow; this does not
certify scrolled descendants, output or untested states. Per-app evidence names
tablet 40px targets, 10px desktop contact selectors and 40px phone review actions as
baseline defects to correct during migration.

Twelve conditional observations cover month/year lists, mobile options/colour,
template/icon search, all four review tabs and inline writing hints. The local
writing-engine loading and completed review were observed. No document content
was edited and no export was initiated by this manual audit. Two baseline images
were visually reviewed; they are not proposed Air styling or design approval.

The canonical contract now defines rich-text toolbar scope, caret/scroll stability,
open repeated entries, partial dates and distinct hint/error states. Touch targets
cannot shrink at desktop breakpoints. Resume's appendix preserves its actual
template/colour/paper and direct PDF/JSON workflows. Bringing the reduced Resume
study into line with those detailed requirements remains explicitly in the TODO.
This checkpoint changes documentation, not runtime UI or the reference rendering.

Cloakyard `vp check` and `git diff --check` pass. All five standalone design
checkers and exact-copy sync pass at contract hash `982f0e18a380` (prefix). The
portable release gate also carries the required legacy-design cleanup into every
app's contract. Resume
format/lint/type and production build pass. Its full serial suite initially passed
287/288 with a Horizon PDF-symbol timeout; the eight symbol cases and four earlier
contact-focus cases pass in targeted runs. Resume's validation record retains the
full-suite result and commit gate separately; a targeted pass is not a waiver.
The subsequent isolated run finished 286/288: all 107 editor-browser cases passed,
but Modern Minimal/Letter and Prism/Letter timed out in the template harness's
Resume editing click (`tests/template-layouts.spec.ts:125`). Resume remains
uncommitted pending diagnosis and a complete passing run. Assertions and timeouts
are unchanged.
