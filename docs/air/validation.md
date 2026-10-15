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

## Resume reference refinement and motion acceptance — 2026-10-11

The opt-in study now uses the audited Resume writing patterns: multiline headline,
scoped bold/italic/underline/code tools above one-contour fields, open repeated
experience groups, month/year and year-only dates, retained end dates, keyboard
reordering and undoable removal. The document options are paper and primary colour;
PDF export and JSON saving are represented separately. The speculative text-size
slider and keep-sections switch were removed, including their obsolete IDs.
The two template treatments are explicitly labelled as simplified studies.

Evidence: `evidence/air-03-resume-study-checks.json` records 70 panel cases (five
panels × seven sizes × two themes), 14 date-dialog cases and 23 functional checks.
Sizes: 1440×900, 1280×800, 1024×768, 768×1024, 390×844, 320×568 and 844×390.
The five smaller configurations used touch emulation. No measured horizontal
page/panel overflow; inspected fields and formatting actions satisfy fine/coarse
size rules. Date choices are at least 44px and dialogs remain in the viewport.
Single-contour focus and white document paper pass in both themes.

Functional checks include multiline formatting/native undo, scoped entry editing,
reorder/focus return, removal/undo, month/year/year-only/clear/invalid/Escape paths,
previous end-date restoration, long-text preservation, valid/invalid document
colour, paper state, separate save/export views and immediate reduced-motion
export. Keyboard focus now wraps inside the date dialog. A discovered JSON-save
routing error was corrected before recording the final passing result.

The field labels now use the contract's 13px/1.4 with an 8px field gap; ordinary
inspector field text is 14px (16px coarse). The phone swatch rule no longer overrides
44px touch targets. `evidence/air-03-shared-field-checks.json` records another 196
cases across all 14 PDF/IMG/Resume default panels, seven sizes and both themes,
with no measured overflow, undersized fields or undersized editable text.
Four final `air-03-resume-*.jpg` captures were visually reviewed. The growing white
sample paper was corrected to contain long content. No browser console errors
were observed.

These checks cover the reference only. The study has a scrolling page with fixed
editor frames, simplified paper without pagination, one line per experience
highlight, and no actual file output. Production templates, separately editable
nested bullets, real import/export, physical keyboards/IME, software keyboards,
Safari and assistive-technology checks remain migration gates. Resume's production
baseline still has two browser-entry timeouts; no Resume commit or product feature
pass is claimed here.

The user reiterated the Shaders requirement. The portable contract and TODO now
require a working locally bundled Shaders light treatment before design sign-off,
including dark/light, deliberate pointer response, short arrival and static,
reduced-motion and no-WebGPU alternatives. At that earlier checkpoint the hero remained static and the
shader requirement was incomplete. No dependency was installed in that checkpoint.

Cloakyard `vp check`, `vp build`, inline-script syntax and `git diff --check` pass.
All five standalone design checkers and exact-copy sync pass at contract hash
`a14c9aca33ee` (prefix). The shared reference remains opt-in; production UI imports
are unchanged. Sibling bundles are synchronized but retain their own commit gates.

## Working Shaders light study — 2026-10-11

The opt-in reference now includes a real custom composition using Shaders 4.0.4,
with two overlapping planes, a 600ms arrival and a bounded pointer-following light.
Light and dark share geometry and semantic colour tokens. The reference includes
Replay arrival and Still artwork controls; technical rendering notes stay outside
the simulated product. Production imports and build output remain unchanged.

The local renderer is lazy, has no telemetry or remote media, caps effective DPR
at 1.5 and submits at most 30 frames/second while responding. It stops submitting
frames at rest and disposes its renderer/device offscreen or hidden. Abort handling
covers initialization in flight and its late completion. Rapid intersection
updates use the latest observation. An elapsed-time bound prevents a stalled
compositor animation from keeping the light active. The previous static ribbon
markup/styles and current-reference placeholder wording were removed.

Validation recorded in `evidence/air-03-light-checks.json`:

- **14/14** final layout cases: 1440×900, 1280×800, 1024×768, 768×1024,
  390×844, 320×568 and 844×390, in light and dark. No horizontal overflow;
  artwork aligns with the hero edges; touch controls are at least 44px.
- Initial arrival and deliberate pointer response settle. An idle frame count
  remains unchanged. Offscreen exit removes the live canvas; return initializes
  it again. Still artwork and five rapid disable/enable cycles recover correctly.
- Rapid replay retains one animation and its current opacity. Keyboard replay
  leaves zero animations. Coarse pointers do not wake pointer-following motion.
  A 1318×200 CSS canvas renders at 1977×300 on DPR 2, confirming the 1.5 cap.
- Reduced motion loads no shader asset and submits zero frames. Re-enabling motion
  requests only the local shader asset. The observed requests contain no external
  destinations. Simulated missing WebGPU, low memory/core count, Save-Data and
  hidden visibility select the fallback. Simulated adapter failure recovers via
  Retry light using real WebGPU.
- Four `air-03-light-*.jpg` captures were inspected: desktop light/dark,
  tablet light and phone dark. No browser console errors were observed.

During iteration, the browser retained a Node environment check in the first
library build; the build now replaces it explicitly. Mobile artwork initially
extended 4px beyond its container; it now shares the hero's exact edges. Rapid
visibility and initialization transitions were corrected before this checkpoint.

Local starts observed during this session were approximately 39–111ms, with
roughly 0.4–0.8ms average CPU submission. These are local/reloaded measurements,
not cold-network benchmarks or GPU timings. The final self-contained renderer is
2,248,986 bytes / **368,564 bytes gzip** (SHA prefix `1af6866d8cde`). The 400 kB
study build ceiling does not approve that payload for production. Real-device
GPU/battery/thermal checks, slow-network startup, Safari/Firefox and visual sign-off
remain open. Hidden/device capability tests above are simulations, not proof of
physical-device behaviour. The full family motion audit remains open as well.

The reproducible build is documented in `design/air/LIGHT.md`. The pinned catalog
adapter is guarded by its exact source hash and interface; renderer/std source is
unchanged. All included MIT notices are shipped beside the asset. The controller,
renderer and license files are copied to each standalone reference with hashes in
`bundle.json`. Generated assets are excluded from formatting/lint, and validated
through the deterministic rebuild and hash checks.

Cloakyard `vp check`, `vp build`, deterministic shader rebuild, exact-copy bundle
sync, all five standalone design checkers and `git diff --check` pass. Contract
hash: `c309bd4e4f44` (prefix). This checkpoint commits only Cloakyard's design study;
sibling synchronized files retain their independent validation/commit gates.

## Shared motion and isolated portability — 2026-10-11

The reference now shares native-dialog and completion motion through `motion.mjs`.
Interrupted exits preserve the current desktop or phone-sheet pose; repeated close
requests keep the existing exit. Completion replay continues from its current pose
with the remaining duration. Keyboard actions, release and theme/control colours
are immediate. A live reduced-motion change settles active motion immediately.
Native dialog focus and modality remain intact. See [the motion review](motion-review.md).

`evidence/air-03-motion-checks.json` records 42/42 PDF/IMG/Resume export-dialog cases:
seven viewport classes, both themes, no measured horizontal overflow, dialog
containment, focus entry/restoration, and 40px fine / 44px coarse buttons and text
fields. The documented numeric-slider value exception remains 32px on fine
pointers. Another 21 observations cover interrupted/repeated actions, native focus
wrapping, Enter/Space, Escape, pointer press/release, hover gating, reduced-motion
changes and shader startup. Final desktop-light and phone-dark captures were
visually inspected. These checks use browser emulation, not physical-device proof.

The current reference's unused rail spacer, old workspace class naming, duplicate
inline animation handlers and duplicate timing values were removed. A CSS-class
consumer search found no remaining orphan inline-style classes; the inline module
also passes a separate lint check. Historical migration references remain explicit.
Production cleanup is still required for every migrated piece.

Each standalone manifest now hashes the HTML, shared modules, renderer and licence
asset. `scripts/check-air-portability.mjs` copies only the required bundle into an
isolated temporary directory and verifies the baseline, omitted motion hash,
altered motion code, missing manifest and restored bundle. All five checks pass
for each product (25/25). Browser checks of both flat and nested-site copies loaded
their own CSS, motion and real WebGPU assets without foreign requests. The test
servers and temporary copies were removed afterwards. CI runs the portability gate.

PDF, IMG and Resume format/lint/type checks pass with no warnings. Generated vendor
assets are excluded from those tools; shared source modules remain checked and
generated assets retain deterministic rebuild and integrity gates. The stricter
checkers exposed floating startup promises in the light controller; `mount()` now
returns its actual in-flight promise and background callers explicitly discard it.

Real touch/software-keyboard behaviour, Safari/Firefox, production adapters and
full product feature suites remain separate gates. Resume's previously recorded
286/288 baseline has not been rerun or resolved in this checkpoint. No sibling
commit or production UI migration is claimed here. User visual sign-off remains open.

Final Cloakyard `vp check`, `vp build`, inline-module syntax, deterministic shader
rebuild, exact-copy bundle synchronization, all five standalone checkers and
`git diff --check` pass. The 25 isolated portability assertions were rerun after
the startup-promise correction and pass. Contract hash: `be2cbc3b068b` (prefix).
The production build remains 242.40 kB JS / 28.52 kB CSS with no Air imports.

## Landing navigation and text refinement — 2026-10-12

The user explicitly chose to keep refining Air before production rollout. The
landing study now retains all navigation on phones through a native in-flow
Explore disclosure. Its open content pushes the page down instead of covering it.
The brand and chevron render without JavaScript. Summary/home targets are at least
44×44px; navigation links are at least 44px high on desktop and touch layouts.
The 40rem navigation and 22rem compact-mark boundaries respond to enlarged text.

Landing type uses relative units, display tracking/leading matches the contract,
body prose wraps naturally at 16px reference size, and actions wrap without
shrinking. Short landscape reduces ornamental spacing and the light field; the
primary action fits within the 844×390 landing composition (the study's own
control bar is outside this composition). The native family mark is now one static
SVG source, reused by the editor study; there is no new external asset.

`evidence/air-03-landing-checks-2026-10-12.json` records:

- 96 closed-menu layout cases: 24 viewport/breakpoint sizes × light/dark ×
  100%/200% root font. No measured document or landing-descendant overflow.
- 96 open-menu text-bound checks at the same settings. No text outside the
  containing experience or brand/summary collision.
- Enter/Space, Tab to the first destination, Escape/focus return, same-page
  dismissal and a no-JS anchor journey. Keyboard disclosure has zero animations.
- Coarse-pointer emulation at 320px/1024px: every visible header target ≥44px in
  both dimensions. These are browser simulations, not physical-device tests.
- Four field-focus checks: transparent border, one 2px outline at zero offset and
  no shadow on desktop/phone in both themes. Twelve PDF/IMG/Resume export-dialog
  checks retain focus inside a contained dialog and the family mark.
- Nine saved, visually inspected `air-03-landing-*.png` captures covering desktop,
  laptop, tablet, phone, short landscape, menu, enlarged text and no-JS. An initially
  stale desktop capture was replaced after settling. No console errors/warnings.

The 200% setting is root-font stress, not browser zoom. Shared editor/control text
still needs relative-unit refinement and enlarged-text coverage. Physical touch,
software keyboards, Safari/Firefox, assistive technology, real GPU/battery costs
and final visual review remain open. This is a bounded landing-reference pass.
Production UI, KERR and native macOS remain unchanged.

CloakDrop's separate audit checkpoint `4124a5b` records 90 existing-site layouts,
24 header journeys and source-linked migration findings. Its dark skip link fails
contrast and narrow home/404 fail enlarged text. These remain explicit pending
work; baseline audit completion does not certify Air conformance.

The shader licence generator now emits exactly one trailing newline. This fixes
the first-add whitespace gate in standalone repositories without changing licence
text or renderer bytes. The bundle and contract are synchronized to all products.

Final Cloakyard gates pass: `vp check`, `vp build`, extracted inline-module syntax
and lint, deterministic shader rebuild, exact-copy synchronization, all five
standalone design checkers and isolated portability. Contract hash prefix:
`5ad8bd070341`. The final matrix also checks the enlarged summary stays within
its header. Production output remains 242.40 kB JS / 28.52 kB CSS, with no Air
imports. Sibling reference synchronization retains separate commit gates.

## Dropdown and motion visibility refinement — 2026-10-12

Scope: the canonical opt-in Air reference and synchronized portable design bundle.
Production screens, KERR and native macOS are unchanged. The native custom picker
uses `appearance: base-select` with shared Air field/menu tokens; the browser owns
keyboard navigation, focus, typeahead, form values and top-layer placement.
[MDN's customizable-select documentation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)
records limited browser support. Unsupported engines retain an inset-arrow native
fallback; an established accessible adapter and cross-engine visual verification
are explicit pre-rollout requirements, not a claimed pass.

Dropdown changes: 12px arrow inset, fixed 16px chevron, one field contour, opaque
light/dark menus, 8px menu inset, neutral selected row, blue trailing checkmark,
keyboard outline, disabled choices and 40px fine/44px coarse minimum rows. Pickers
follow trigger width with a viewport-capped 15rem readable minimum. Long labels
wrap; native anchor placement and `max-block-size: stretch` constrain scrolling
to the available space. A first short-landscape check exposed clipping; that
constraint corrected it before the final matrix was recorded. Inspector selects
now respect relative font sizing without changing document artwork.

`evidence/air-03-select-motion-checks-2026-10-12.json` records:

- 16 final reference menu cases: eight sizes (1920×1080, 1440×900, 1280×800,
  1024×768, 768×1024, 390×844, 320×568, 844×390), both themes. No page overflow;
  menu panels remain within the viewport. Offscreen rows inside scrollable menus
  are intentional and are not panel-overflow failures.
- Four additional 200% root-font cases at 320×568/844×390 in both themes. The
  select font is 32px, panels remain contained and End selects WebP while skipping
  the disabled last option. A separate compact IMG check wraps Selective color,
  retains the arrow and shows the selected row within the scrolling picker.
- Space/arrow/Enter selection, End skipping disabled choices, Home/Escape
  cancellation, typeahead, Tab dismissal and disabled-control exclusion.
- Twelve PDF/IMG export-menu cases across laptop/phone/landscape and both themes.
  Native modal layering and menu bounds pass. IMG export keyboard selection,
  PDF/IMG/Resume tool switching and focus return pass; Resume's paper select
  changes the preview to US Letter. Resume exports PDF directly and has no format
  select, so it is not counted among export-picker cases.
- Real pointer completion uses 240ms; Enter and reduced motion have no animation.
  Interrupted completion retains one animation and its current pose. The light's
  arrival uses 900ms; live reduced motion releases it; rest submits no frames;
  pointer response settles; still and offscreen states release readiness.
- The final renderer draws and settles at laptop/phone sizes in both themes.
  Fresh reduced motion makes zero shader requests. No external HTTP requests or
  console warnings/errors. Inline SVG data resources are local, not network calls.
- Five saved and visually inspected captures: `air-03-select-laptop-light.png`,
  `air-03-select-export-phone-dark.png`, `air-03-select-text200-phone-light.png`,
  and `air-03-light-refined-laptop-{light,dark}.png`.

The finite shader now uses stronger light-theme contrast, larger initial plane
offsets and a traveling light concentration. Generated bundle: 2,249,127 bytes /
368,615 gzip, SHA-256 prefix `f375a59db6e1`; the 400kB study ceiling still passes.
The controller's 30fps/DPR1.5, lazy-loading, interruption and disposal limits are
unchanged. Physical GPU/battery/thermal and slower-network measurements remain
open. Emulation and root-font stress do not certify real touch or browser zoom.

Remaining broader work includes relative text throughout other controls, complete
state/assistive-technology coverage, cross-engine select adaptation, the user's
visual review and all per-app migration/feature gates. Resume's existing 286/288
baseline remains unresolved; no sibling commit or feature-suite pass is claimed.

Final gates pass: Cloakyard `vp check` (71 formatted, 23 linted), `vp build`,
extracted inline-module syntax/lint, deterministic shader rebuild, all five
standalone contract checkers and 25/25 isolated portability assertions. Contract
hash prefix: `5f24d99e3a9a`. Production output remains 242.40kB JS / 28.52kB CSS;
no Air runtime import was added. Temporary browser test tabs and overrides were
removed. The user's reference tab and existing servers were left in place.

## Component foundations and canonical ownership — 2026-10-12

Cloakyard's main repository is now the explicit upstream authority in the contract,
root README, `design/air/README.md` and every derived DESIGN document. Product
appendices add domain constraints; wrappers adapt APIs without changing the skin.
The central `design/air/COMPONENTS.md` records component coverage and remaining
state/browser/feature work. Candidate revisions remain under design review.

Bundle provenance identifies the source repository/directory, review status and
exact contract SHA-256. The standalone checker rejects mismatched provenance or
versions in addition to existing CSS/module drift. In the main repository it
also compares canonical contract, CSS and study assets to their generated copies,
so forgetting to synchronize a source edit fails the same CI command. Both validators synchronize to
each app. The HTML uses a stylesheet URL pinned by its content hash: the browser
was observed holding an earlier unversioned stylesheet after a reload, and the
versioned URL loaded the correct custom primitives. This is a preview cache fix,
not a runtime dependency on the source repository.

The portable contract now defines field/choice/overlay anatomy and acceptance in
detail. Shared primitives use relative body/label/help/editable tokens. Fields have
read-only and multiline treatment; checkbox/radio glyphs share Air's boundary,
geometry and selection colours while retaining native semantics. Segmented choices
use native radio groups. Forced-colour mode restores native glyphs and system
selection colours. The export dialog has relative type, wrapping actions and
scroll containment/padding. A native skip link reaches the reference's main region.

### Review findings corrected

Reviewed against the [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md)
with Air's canonical visual rules retained:

- `design/air/air.css:29` — shared fixed-size text did not respond to root-font
  enlargement; component type now uses relative semantic tokens.
- `design/air/components.html:2543` — field help lacked complete programmatic
  associations and required/read-only/disabled/multiline states were absent;
  expanded labelled specimens now connect help/errors and preserve entered text.
- `design/air/components.html:2724` — the standalone alignment buttons had no working
  selection handler; native grouped radios now own selection and arrow traversal.
- `design/air/components.html:4519` — a success message remained after subsequent
  invalid edits during testing; the input boundary now clears stale success
  without validating midway through typing/composition.
- `design/air/air.css:304` — checkbox/radio appearance depended on platform defaults;
  shared geometry now applies, with explicit system-colour fallback.
- `design/air/components.html:2231` — reference navigation lacked a skip destination;
  the visible-on-focus native link now moves focus to the main region.

### Recorded evidence

`evidence/air-03-component-foundations-2026-10-12.json` records:

- 32 layout cases: eight desktop/laptop/tablet/phone/landscape sizes × both themes
  × 100%/200% root font. No page or component horizontal escape; every choice
  label is at least 44px and coarse-pointer segments are at least 44px high.
  Phone editable text measures 16px normally and 32px when enlarged.
- Invalid submit focuses the first invalid field and retains both errors; valid
  correction preserves multilingual multiline text. Editing clears stale success;
  reversed ranges stay invalid. Read-only content resists typing and Tab skips the
  disabled field. Four theme/size focus checks retain one 2px zero-offset contour,
  transparent border, no shadow and visible error text.
- Mixed checkbox/child synchronization, Space selecting all, radio and segmented
  arrow navigation, rendered disabled states and switch Space behavior. Forced-colour
  emulation uses native glyphs (`appearance:auto`, no custom pseudo-content);
  reduced-motion choice interaction creates zero animations.
- 36 PDF/IMG/Resume native export-dialog cases at six sizes and both themes: modal
  state, viewport containment, no horizontal overflow, initial field focus and
  Escape return all pass. Nine additional 200% dark-theme journeys traverse every
  dialog control at laptop, narrow phone and short landscape. Hit testing confirms
  focused controls remain visible instead of hidden beneath sticky actions.
- Four saved, visually inspected captures: `air-03-components-fields-laptop-dark`,
  `air-03-components-choices-laptop-light`, `air-03-components-choices-phone-dark`
  and `air-03-components-fields-text200-phone-light` (all `.png` in `evidence/`).
  No console warnings or errors. Temporary overrides and audit tab were restored.

The field form is explicitly a local interaction study, not a product export.
The central matrix keeps compound fields, busy/retry actions, actual popovers,
tooltips, destructive/invalid overlays and specialised editor states open. Other
editor typography is not certified by the shared primitive pass. Root-font and
forced-colour emulation do not certify real zoom, software keyboards, screen
readers or Safari/Firefox. Production apps remain unmigrated; Resume's 286/288
baseline is unresolved. Sibling candidate sync retains separate commit gates.

Final gates pass: `vp check` (73 formatted / 23 linted), `vp build`, inline-module
syntax/lint, deterministic shader verification, exact-copy synchronization,
all five standalone checkers and 40/40 isolated portability assertions. Contract
hash prefix: `5bd4b3b1f158`. Production output is unchanged at 242.40kB JS and
28.52kB CSS. No product runtime import, push, deployment or sibling commit was made.

## 2026-10-12 — compound fields and action states

Bounded reference refinement; the detailed design remains under review. Canonical
sources are `design/air/air.css`, `components.html` and `contract.md`. The same
candidate contract and bundle are synchronized to all five web repositories;
production imports and real processing flows are unchanged.

### Changes

- Search/clear and numeric-unit fields share one outer boundary. Input focus
  replaces it; clear-button focus identifies only its 44px action with an inset
  ring. The empty clear slot reserves geometry and is absent from tab order.
  The initial inspection found a height change caused by the reference's generic
  hidden rule; a reserved action slot fixes it without overriding hidden semantics.
- The local template search supports clear, no results, accent/case normalization
  and composition completion. Quality accepts native whole-number input within
  1–100, validates on blur/apply, and keeps the applied value visible when an
  invalid draft is being corrected. No image or file is processed.
- The explicit action-state study supports start, success, failure, retry and
  cancellation. All labels reserve their intrinsic dimensions; busy remains
  readable/focusable and guards duplicate activation. A separate live status
  reports outcomes. Study resolution controls return focus before disabling;
  ordinary production completion must not move focus. No new motion or dependency.
- Removed the reference's inert Cancel/Reset sample buttons. Working actions now
  demonstrate their semantics; product async lifecycle and stale-result guards
  remain separate required tests.

### Recorded evidence

`evidence/air-03-compound-actions-2026-10-12.json` records:

- **32 final layout cases:** 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024,
  390×844, 320×568 and 844×390, in both themes at 100%/200% root font. Zero
  page/component horizontal escape. Every action-state label keeps its width and
  height; empty/populated search geometry stays identical. Long queries scroll
  inside the field. Clear targets remain 44×44px; phone input text is 16px/32px.
- **16 interaction records:** native search Tab/Enter and focus return, absent
  empty-clear tab stop, case/accent filtering, no-results recovery, simulated IME
  composition boundary, four invalid numeric submissions, native arrow stepping,
  valid apply, retained applied value, busy duplicate Enter/Space/programmatic-click
  rejection, error/retry/success and cancellation. Values and status messages are
  recorded, not inferred from screenshots.
- **12 focus probes:** both fields and clear action at laptop/phone in both themes.
  Input focus has a transparent outer border, one solid 2px zero-offset group
  outline and no inner outline/shadow. Clear focus has its own inset 2px outline;
  the group outline is `none`. Computed outline width alone is insufficient: this
  browser reports a width even for `outline-style:none`, so style is recorded too.
- A 320px/200% translated-label stress case preserves all action dimensions,
  including wrapped height. A long suffix wraps within half the field without
  overlapping the editable value or escaping its container.
- Forced-colour and reduced-motion emulation preserves readable system colours,
  one focus boundary, a 44px clear action and zero busy-button animations. Shared
  read-only/disabled shell styles were probed; clear remains hidden even without
  the gallery's generic hidden rule. Physical devices/screen readers remain open.
- **18 export-dialog regressions:** PDF/IMG/Resume at laptop/tablet/phone in both
  themes retain native modal state, initial field focus, containment, no overflow
  and Escape focus return. An initial programmatic click probe correctly returned
  to its previously focused search field; the final matrix uses focused native
  Enter activation to exercise the actual trigger journey.
- Four saved and visually reviewed PNGs: `air-03-compound-laptop-dark`,
  `air-03-actions-tablet-light`, `air-03-compound-phone-light` and
  `air-03-number-text200-phone-dark`. No console warnings/errors. Temporary browser
  overrides and the audit tab were removed; the user's reference tab is untouched.

The action outcomes are deliberately manually resolved simulations; they do not
certify product processing, cancellation or race handling. Real search loading,
result selection, native IME/software keyboards, actual browser zoom and other
browser engines remain required. Next component work: popovers/tooltips/context
menus, destructive/invalid overlays, then remaining specialised editor controls.
Resume's 286/288 feature baseline and all product rollout gates remain open.

Final gates pass: `vp check` (74 formatted / 23 linted), `vp build`, inline-module
syntax/lint, exact-copy synchronization, all five standalone contract checkers and
40/40 isolated portability assertions. Contract hash prefix: `9806c42e6fab`.
Production assets remain 242.40kB JS / 28.52kB CSS. No runtime adoption, sibling
commit, push or deployment is included in this checkpoint.

## 2026-10-12 — floating controls and safe action handoffs

This bounded reference checkpoint adds settings popovers, action/context menus,
tooltips, invalid rename and safe remove/restore dialogs. Air's canonical contract,
CSS, interaction source and coverage map remain in the main Cloakyard repository.
All actions affect an in-memory sample; product files and processing are untouched.

### Design and implementation

- Floating planes share opaque theme surfaces, 12px corners, quiet shadow, 8px
  trigger offset and 16px viewport clearance. Menus have inset 40px fine / 44px
  coarse rows, neutral highlight, blue checked marker, visible disabled commands
  and a separated danger action. Relative typography wraps within available space.
- Unstyled Base UI 1.9.0 owns navigation, positioning, dismissal and focus. Air
  owns the appearance. A small Shift+F10/ContextMenu trigger adapter bridges the
  embedded browser's missing synthesized contextmenu event; it does not implement
  menu navigation. More and contextual menus expose the same actions.
- Rename validates whitespace and retains the previous name. Confirmation begins
  on Keep sample and ignores outside presses. Removal focuses Restore sample;
  restoration retains the edited name/review mark and focuses its new More button
  before Restore becomes disabled. That last focus handoff was corrected in testing.
- The tooltip explicitly supplies its role and description association; the
  library alone did not expose the association in this adapter. Hover remains
  hoverable, Escape dismisses, and the trigger works without a touch tooltip.
- The React study is built to one local, lazy module with ten bundled package
  licenses. It costs **557,054 bytes / 142,703 gzip**, within its 150 kB study-only
  ceiling. It adds no production import. Actual app adoption must reuse the app's
  React runtime and pass its own bundle/performance gates.
- Loader and module each carry content revisions. A failed dynamic-import fetch
  initially could not recover because the browser cached the rejection. Deliberate
  retry now uses a fresh URL and restores focus to View settings after mounting.
  The observer disconnects at the first attempt, so failure cannot trigger a loop.

Primary API references consulted: [Base UI Popover](https://base-ui.com/react/components/popover),
[Tooltip](https://base-ui.com/react/components/tooltip),
[Context Menu](https://base-ui.com/react/components/context-menu) and
[Alert Dialog](https://base-ui.com/react/components/alert-dialog). These supply
behavioral primitives; the family contract remains the design authority.

### Recorded evidence

`evidence/air-03-overlays-2026-10-12.json` records:

- **56 layout configurations / 224 surface checks:** 1920×1080, 1440×900,
  1366×768, 1280×720, 1024×768, 768×1024, 844×390, 320×568, 375×812,
  390×844, 430×932, 639×800, 640×800 and 641×800; both themes at 100%/200%
  root font. Each opens settings, the action menu, rename and confirmation. All
  fit the viewport without horizontal escape. Keyboard opening is immediate;
  dismissal returns to the trigger, with surface-first rename focus on coarse
  pointers. Root-font stress is not actual browser zoom.
- **15 interaction records:** keyboard context entry, invalid and valid rename,
  actual-origin focus restoration, checked actions, Home/End/typeahead, safe
  confirmation focus, Escape cancellation, remove/restore, tooltip association
  and dismissal, settings updates, disabled command rejection and outside-press
  protection. The disabled-command probe deliberately focuses an unavailable row
  before Enter to verify its guard; ordinary navigation skips it.
- **15 enlarged-text focus checks** across laptop, 320px phone and short landscape:
  the invalid field and subsequent actions remain visible/reachable as the dialog
  scrolls. Long content scrolls internally; header/footer are not claimed fixed.
- Pointer entrance timing/interruption, immediate keyboard reopen, delayed hover,
  hoverable tooltip, forced-colour focus/borders and reduced-motion emulation.
  The raw CSS/keyframe measurement difference is documented in `motion-review.md`.
- Deferred loading makes no bundle request before the study approaches the
  viewport. A blocked-module test exposes Retry examples; recovery mounts the
  study and restores focus. Normal operation reports no console warnings/errors;
  the deliberate network-block case is kept separate.
- Four saved, visually reviewed PNGs: `air-03-menu-laptop-dark`,
  `air-03-popover-laptop-light`, `air-03-confirmation-phone-dark` and
  `air-03-rename-text200-phone-light`. Temporary audit tabs and viewport/media/touch
  overrides were removed; the user's reference tab remains untouched.

The final matrix uses settled keyboard focus between menu navigation and activation;
an earlier automation sequence advanced before that focus update and was rerun.
Real touch/software keyboards, actual zoom, assistive technology, Safari/Firefox,
nested/stacked overlays and production processing remain open. The complete system
still needs user visual sign-off before rollout. Resume's 286/288 baseline remains
unresolved; sibling candidate synchronization does not authorize sibling commits.

Final gates pass: `vp check` (79 formatted / 27 linted), `vp exec tsc --noEmit`,
`vp build`, deterministic overlay rebuild/license verification, exact-copy sync,
all five standalone contract checkers and **50/50 isolated portability assertions**
(13 files per dependency-free fixture). Contract hash prefix: `dc6032235f40`;
overlay module: `cd7f69ff30c0`. Production output remains **242.40kB JS / 28.52kB
CSS**. No runtime adoption, sibling commit, push or deployment is included.

## 2026-10-12 — commit-all checkpoint and implementation plan

At the user's request, saved the outstanding canonical reference copies, local
contracts, audits and validation tooling in all sibling repositories. Product UI,
KERR and native macOS sources remain unchanged. No push or deployment occurred.

- CloakPDF `f960092`: `vp check`, `pnpm check:dead`, 355/355 unit tests (34 files),
  `vp run build` and 138-file deployment asset gate pass. Knip initially found the
  portability checker unreferenced; adding the actual `design:portability` package
  script fixed it without an ignore. The same useful alias is exposed in all apps.
- CloakIMG `2a639c4`: `vp check`, 470/470 tests (46 files), `vp run build` and the
  100-file deployment asset gate pass.
- CloakDrop `9340c6d`: Astro check (19 files, no errors/warnings/hints), asset sync
  (all seven current) and home/privacy/404 build pass. Native sources are untouched.
- CloakResume `5367f46`: check, TypeScript/build/PWA and the **complete serial
  288/288 tests in eight files, zero skipped**, pass in **386.58s**. The two old
  failing template cases first passed a targeted diagnostic run. Entry failures
  now capture rendered page/focus/button state and a screenshot before rethrowing.
  No timeout/assertion/retry policy or runtime source changed. The old failing
  baseline is superseded by this fresh full pass, not claimed permanently fixed.
- All five contract checkers and 50 isolated portability assertions pass. Exact
  synchronization verifies six standalone DESIGN.md files including Drop's site.
  Post-commit hook formatting is covered by a final sync check.
- Cloakyard `vp check` (80 formatted / 27 linted) and `vp build` pass; production
  output remains 242.40kB JS / 28.52kB CSS.

[IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) sets the base closure, production
adapter strategy, product order, commit slices, validation matrix, output invariants,
legacy cleanup and final family review. The existing exhaustive TODO remains the
scope tracker. The plan retains detailed visual review before runtime adoption;
this request was to commit and plan, so no product implementation began.

## 2026-10-13 — reading and recovery reference

Canonical `design/air/reading.html`, `recovery.html` and `pages.mjs` add full-page
patterns to the reference. Shared navigation/footer, quiet display typography,
65ch prose, a responsive native contents disclosure and ruled definition rows
extend Air beyond the gallery. Privacy wording is explicitly illustrative; no
product policy, router, processing, persistence or native source is replaced.
The recovery page covers a missing page, preview interruption and an editable
sample note. Storage failure and preview outcomes are labelled simulations;
session saving/restoring, the text backup and unsaved-navigation guard are real.

The portable contract now defines these patterns, keyboard behavior, reading
measure, truthful recovery copy and output boundaries. All five bundles include
the pages and content-versioned behavior module. Gallery links carry the explicit
appearance choice; system remains the default. The integrity checks reject missing
page behavior and altered reading markup in an isolated standalone checkout.

Evidence: [raw observations](evidence/air-03-reading-recovery-2026-10-13.json).

- **136 configurations:** two pages × 17 sizes × light/dark × normal/200% root
  text. Sizes: 1920×1080, 1440×900, 1366×768, 1280×800, 1024×768, 768×1024,
  844×390, 320×568, 375×812, 390×844, 430×932; breakpoint neighbours 639/640/641
  and 959/960/961 at 800px high. Coarse input was emulated at widths ≤1024.
  No horizontal container/text overflow or undersized checked targets; one h1 per
  page. No external network assets. The local inline SVG select arrow is not an
  external request; the measurement excludes data URLs from that classification.
- Keyboard skip/section links move focus to their real targets. Contents Escape
  collapses and returns focus to its summary. Native contents still toggles with
  JavaScript disabled; reading content remains available and unavailable sample
  actions stay hidden. System light/dark, reduced-motion and forced-colour focus
  were checked. Recovery and reading have no ambient animation or shader work.
- Failed save and preview retry preserve exact note text and initiating focus.
  Storage failure does not mark valid note contents invalid. Successful retry
  updates the heading as well as the status; successful save restores on reload.
  An unsaved edit emits the browser's beforeunload dialog and cancelled navigation
  retains the page. Saving clears the guard. A real downloaded UTF-8 backup matches
  the edited note including newlines, accents and Japanese characters byte-for-byte.
- The initial data-URL download did not complete in the embedded browser. Replacing
  it with a temporary local Blob URL and attached download anchor fixed delivery;
  the URL is released after the browser begins reading it. The interface requests
  verification of the downloaded file and does not falsely claim durable saving.
- Gallery appearance handoffs and the existing export dialog pass after settled
  load. The raw record retains an early click that preceded opening, followed by
  the successful focused dialog check. No console warnings/errors were observed.
  Long translated recovery actions also fit 320px at 200% text.
- Final specificity review caught the page link reset overriding primary-link
  text colour. Excluding `.air-button` from that reset restores exact link/button
  parity. Eight rendered checks across laptop/tablet/390px/320px in both themes
  give **14.83:1 light / 13.92:1 dark** primary-action text contrast. Layout bounds
  remain intact; this correction changes colour only.
- Six saved, visually inspected screenshots: laptop reading/light, tablet
  reading/dark, phone recovery/light and dark, 320px reading at 200% text, and
  laptop missing-page/retry actions in dark mode.
  Audit tab and temporary viewport/touch/media/font overrides were removed.

This is Chromium reference evidence. Root-font enlargement is not browser zoom;
Safari/Firefox, physical touch/software keyboard, assistive technology and actual
product persistence/failure flows remain open. The sample's 404 label does not
assert a server status. Detailed user review remains required before rollout.

Scope review found no production Air imports, output-style changes, new external
dependencies or native edits. New page styles are shared and token-based; obsolete
data-URL download code was removed. Existing production styles remain tracked for
removal in their migration slices. The component matrix, exhaustive TODO, handoff
and implementation plan now point to upload/drop and progress/cancel/retry next.

Validation also resolves all **32 local page links and anchors** and checks the
new module and gallery inline script syntax. Final gates:

- Cloakyard: `vp check` (87 formatted / 29 linted), `vp build`, syntax and diff
  checks pass. Production output remains **242.40kB JS / 28.52kB CSS**.
- All five standalone design checkers and **60/60 portability assertions** pass
  with 16 files per isolated fixture. Six complete DESIGN.md copies match the
  canonical contract (`cc0c56b98f5a`); final CSS is `d5d711391750`, page behavior
  `11af689c6047`. These are design-review assets, not runtime adoption.
- PDF: check, dead-code check, **355/355 tests** in 34 files, build and 138-file
  deployment limit pass. Saved as `bf0777a`.
- IMG: check, **470/470 tests** in 46 files, build and 100-file deployment limit
  pass. Saved as `a63b87e`.
- Drop: seven assets current, Astro check (19 files, no errors/warnings/hints),
  three-route build and standalone checks pass. Saved as `e35933c`; no native edits.
- Resume: check, build/PWA and final **288/288 serial tests** in eight files,
  zero skips, pass in **384.00s**. Saved as `e110863`. The first full run had two
  failures: a detached Remove button after viewport reflow and a Classic
  Sidebar/Letter readiness timeout. Both passed a focused diagnostic run, then the
  complete suite passed unchanged. No runtime source, assertion, timeout, retry
  or test was modified. This is a passing commit gate, not a claimed fix for the
  intermittent failures. Logs:
  [initial full run](evidence/resume-reading-gate-failed-2026-10-13.txt),
  [focused diagnostic](evidence/resume-reading-gate-targeted-2026-10-13.txt),
  [final full run](evidence/resume-reading-gate-passed-2026-10-13.txt).

No product redesign, push or deployment occurred. The detailed design review and
remaining component/browser/device requirements still precede rollout.

## 2026-10-13 — file intake and measured progress reference

Canonical `files.html` and `files.mjs` extend the shared page family with one matte
file area and a separate text preview. Browse/drop/paste share validation, selected
names wrap, one action leads each state, and progress uses actual completed bytes.
The reference reads UTF-8 `.txt`/`.json` files up to 4 MiB with a safe, bounded
1,200-code-point preview. It does not parse JSON, decode images, unlock PDFs,
import résumés, upload, persist or modify the original file. Manual halfway pause,
interruption and unknown-total presentation are explicitly labelled study controls.

The source audit reviewed PDF's `FileDropZone.tsx`/`ProgressBar.tsx`, IMG's
`DropZone.tsx` and Resume's `CloakWorkbenchLanding.tsx`. Domain formats, encryption,
HEIC/HEIF MIME fallbacks, batch mode, preview cleanup and saved-JSON validation stay
with their existing adapters. Clipboard denial now has an explicit shared recovery
rule. Those actual product operations still need validation before adoption.

Evidence: [raw file-study observations](evidence/air-03-files-2026-10-13.json).

- **68 configurations:** 17 sizes × light/dark × normal/200% root text. Sizes are
  1920×1080, 1440×900, 1366×768, 1280×800, 1024×768, 768×1024, 844×390,
  320×568, 375×812, 390×844, 430×932, and 639/640/641/959/960/961 × 800.
  Paused progress, selected file, preview and expanded study options were visible.
  No horizontal document/component overflow or undersized inspected targets.
  Coarse pointer emulation applied at widths ≤1024. Long filenames, translated
  actions and unbroken preview text also fit 320px at 200% root text.
- **27 interaction observations:** actual native Browse with known local fixtures,
  exact UTF-8 output, same-file reselection/input reset, malformed UTF-8 failure,
  cancel before a real FileReader callback, manual pause/continue, cancellation
  with retained partial text, retry and focus recovery. Unknown totals omit current
  and maximum values and show bytes/phase without a determinate fill. Keyboard
  cancel returns focus; the skip link reaches the main region.
- Synthetic DataTransfer/ClipboardEvent fixtures verify nested drag stability,
  accepted drop propagation, missed-drop navigation protection, wrong type/count/
  size retaining the valid file, and paste selection. Tab-local clipboard API
  mocks verify denied/empty/successful reads and late results after selection or
  cancellation. These are handler checks, not OS dragging or actual clipboard
  permission evidence. No user clipboard was read or changed.
- Nine deterministic lifecycle tests cover UTF-8 across 3-byte boundaries,
  code-point preview bounds, empty/malformed files, invalid acquisition retaining
  input, measured pause/resume, duplicate starts, cancellation/retry, interruption,
  incomplete reads and late completions after cancel/replacement/removal/disposal.
  Deferred readers intentionally ignore AbortSignal to verify stale results cannot
  publish. Run `node --test scripts/test-air-file-workflow.mjs`.
- Native no-JS content and navigation remain available; unavailable interactive
  controls stay hidden. System light/dark, forced-colour keyboard focus and reduced
  motion pass. No active animation or shader work occurs during reading. Console
  has no warnings/errors; all observed resources are local CSS and two modules.
- Six saved and visually inspected captures: laptop/light full page, laptop/light
  working area, tablet/dark, 390px light/dark and 320px enlarged filename. Final
  captures use the full emulated page surface because the host-panel screenshot
  API cropped/scaled emulated viewports. Layout measurements use the page's actual
  viewport and content bounds. Temporary tab/media/touch/viewport overrides were
  cleared and the audit tab was closed; existing user tabs/server remain.

Shared rules are in the portable contract's **File acquisition and measured
progress** section. The component matrix, TODO and implementation handoff now point
to lists/layers/history and real adapter gates. All 47 local page links/anchors
resolve. Existing production styles remain in place until their tracked migration;
no obsolete alternate upload design, duplicate dependency or compatibility alias
was introduced. No production import changed; Cloakyard output remains
**242.40 kB JS / 28.52 kB CSS**.

This is Chromium reference evidence. Root-font stress is not browser zoom; actual
Safari/Firefox, physical touch/software keyboards, screen readers, OS file dragging,
clipboard permission flows and real format/processing/export invariants remain
open. This checkpoint does not lock the visual system or authorize product rollout.

Repository gates: Cloakyard format/lint, nine lifecycle tests and build pass. PDF
check/dead-code, 355 tests in 34 files, build and 138-file asset limit pass. IMG
check, 470 tests in 46 files, build and 100-file asset limit pass. Drop's 19-file
Astro check, seven current assets and three-route build pass. All five design
checkers and **70/70 isolated portability assertions** pass with 18 files per
fixture, including missing-file-behavior and altered-file-page detection. Resume
check/build/PWA and its complete serial suite pass: **288/288 tests in eight files,
zero skips, 384.70s**, on the first full run of this checkpoint. Historical flakiness
remains a separate concern; no assertions, timing or source were weakened.
[Full serial gate log](evidence/resume-files-gate-passed-2026-10-13.txt).

Final consistency review replaced the native disclosure marker with the existing
Air chevron and Escape/focus behavior, removing duplicate summary styling. The
file disclosure fills its working column rather than inheriting the reading
column's 65ch cap. The 68-case matrix was repeated after the shared-disclosure
change, with a final width-alignment spot check. The lifecycle module was unchanged.
The evidence retains initial and final observations; the six unique screenshots
show the final composition (the filename stress image excludes the disclosure).
All final reference checks and bundle hashes were revalidated before commit.

Final pinned revisions: contract `69673d876d00`, CSS `776013044c75`, file behavior
`7ae954ca6df8`. Local sibling checkpoints: PDF `4dc0eb5` + `fe090e8`, IMG
`df38956` + `d514ae6`, Drop `d65ad03` + `de00cb2`, Resume `60947b9`. The second
PDF/IMG/Drop commits carry the final shared-disclosure consistency correction.
Only reference markup/CSS/cache revisions changed after the product suites;
format/type, standalone integrity, portability and affected UI checks were repeated.
No product runtime or feature behavior changed, and nothing was pushed or deployed.

## 2026-10-13 — collections and final base candidate

The final broad base-pattern pass adds `docs/air/collections.html`. It combines
ruled layer rows, complete names, mixed/filtered selection, a fully custom Base UI
Select, explicit reorder actions, rename/discard, visibility, reversible removal
and branching history. Nested submenus and confirmations use one shared layering
and focus policy. Existing PDF/IMG/Resume code was inspected before defining it;
the product-specific transaction constraints are recorded in the implementation
plan. No product engines or runtime UI imports changed.

[Structured observations](evidence/air-collections-2026-10-13.json) record **76
viewport/theme/text cases**, **16 nested-dialog cases**, **23 interaction
observations**, five reviewed screenshots and final nested-backdrop checks.
Coverage spans 320/375/390/430px phones, 844×390 landscape, 768/1024px tablets,
1280/1366px laptops, 1440/1920px desktops, and both sides of the affected layout
thresholds. Each layout was checked with 16px/32px root text and both themes.
There is no page/control overflow or undersized coarse row action in the final
matrix. Text stress is not real browser zoom; touch/reduced-motion/forced-colour
settings are Chromium emulation, not physical-device or assistive-technology proof.

Interactions cover custom-option selection/typeahead/Enter and focus return,
selection retained outside filters with explicit counts, no results, filtered
reorder disabling, keyboard submenu entry/Escape, a 100th-row keyboard move,
blank/corrected rename, dirty-draft preservation, discard, safe initial focus,
eight settled Tab steps within the nested dialog, removal/Undo focus, undo/redo
branching, no-JavaScript guidance and deliberately blocked module/retry recovery.
Six model tests prove object identity/order, immutable history, branch replacement,
selection reconciliation, invalid/no-op edits and 100-row operations.

Issues found and corrected before this checkpoint: missing Base UI group context,
enlarged-text filter crowding just above tablet width, focus loss after removal or
exhausting Undo, and Base UI's default omission of a nested backdrop. Container
reflow now respects text size; a nested confirmation visibly dims its parent.
The latest mobile sheet capture uses the actual emulated viewport, avoiding a
full-page capture's repositioning of fixed elements. Temporary browser overrides
were cleared and audit tabs closed; the existing user tabs/server were retained.

The attempted combined study exceeded the existing 150,000-byte gzip limit.
It was split into independent per-page lazy modules without increasing the limit:
overlays **142,703 bytes gzip**, collections **147,472 bytes gzip**. Both contain
local pinned dependencies and ten recorded licences. Production apps must reuse
their own React runtime and import individual primitives, never these demo bundles.
The shared loader has versioned URLs and an explicit retry. Standalone integrity
checks now require the collection assets and reject an altered collection page.

Passing gates: Cloakyard `vp check`, explicit TypeScript, `vp build`, six collection
tests, deterministic two-bundle rebuild, exact six-spec sync, all five standalone
checkers, and **75/75 isolated portability assertions** (20 files per fixture).
PDF: check, dead-code, **355/355 tests**, build and 138-file deploy asset check.
IMG: check, **470/470 tests**, build and 100-file deploy asset check. Drop: 19-file
Astro check with no diagnostics, seven current assets and three-route build.
Resume: check/build/PWA and its first complete serial suite, **288/288 tests in
eight files, 386.12s**, with no skips or weakened assertions. Historical timing
flakiness is not claimed fixed.
[Resume gate log](evidence/resume-collections-gate-passed-2026-10-13.txt).

`DESIGN_FREEZE.md` closes broad exploration into one review candidate. Detailed
user approval remains open. Actual browser/device, format/IME/AI/output, shader
performance and specialised product-state gates remain mapped to their owning
implementation. Next after visual lock: **AIR-04 shared foundation + Cloakyard
home**, then PDF, IMG, Resume and Drop. KERR becomes link-only in the home piece.
No production adoption, native UI change, push or deployment occurred here.

## 2026-10-13 — final review lock and first home implementation

The user authorized “One final glance over on design then after that let's start”.
The delegated review is complete. The expanded gallery navigation overflowed at
390px after Collections was added; wrapping/min-width fixes it. Eight checks at
320/390/768/1440px in both themes have no document overflow. Desktop landing and
IMG, phone Resume and tablet PDF were visually reviewed. The final baseline is
Air 1.0.0, contract `4232d7b9e8e0`; this is design approval for implementation,
not a claim that every real product/device state is validated.
[Final glance](evidence/air-final-glance-2026-10-13.json).

AIR-04 is implemented **in the working tree**, with the pinned Air CSS imported
at runtime. Header, hero, open product rows, KERR link-only section, principles,
footer, metadata and social artwork now share the family language. A native
in-flow disclosure replaces the previous floating mobile menu. Hash navigation
handles initial loads, encoded/malformed fragments, keyboard focus and back/forward.
Closing the menu restores trigger focus before a new-tab link, while hash links
handoff to their destination. A six-link no-JS directory remains available.

The home needs CSS/native links/disclosure only: no study bundle, new UI library,
shader payload, external font, remote icon or API is loaded. The horizon retains
the reviewed two-plane geometry, with one finite 900ms CSS arrival. Reduced motion
removes animation and forced colours omit the artwork. Live Shaders are still a
separate planned enhancement; no GPU/battery claim is made. The 704px header
breakpoint is a documented content collision threshold for brand + three labels

- Source; 352px hides the wordmark while retaining the named home link. Container
  queries follow enlarged type, in addition to the shared 640/1024 composition steps.

Passing observations and gates:

- **76 layout combinations**: 11 contract viewports plus 639/640/641, 703/704/705,
  1023/1025; light/dark; 16/32px root text. No document or measured text overflow.
  This is enlarged-text stress, not browser zoom. Native Firefox separately
  verified actual **200% page zoom**.
- Chromium keyboard menu/Enter/Escape, trigger/anchor focus, back/forward,
  malformed and encoded hashes on reload, skip link, 44px coarse targets,
  reduced-motion, forced-colours, and production no-JS directory pass. No console
  warnings/errors were observed. Resource inspection shows only local JS/CSS/mark.
- Real Firefox **157.0.1**: desktop rendering, actual 200% zoom and focused tool
  anchor. Real Safari **27.0.1**: desktop rendering, 390×844 native responsive
  disclosure, Escape focus return and anchor handoff; 768×844 open product rows.
  Browser native accessibility trees expose the links and disclosure state.
- **122 computed text contrast pairs** pass: minimum 5.19:1 light / 8.48:1 dark.
  Desktop light, tablet/phone dark, lower-page/footer, Safari phone/tablet and
  Firefox zoom screenshots were inspected. Social artwork rendered at 1200×630.
- **13/13 public destinations return HTTP 200**, including all apps/KERR, GitHub
  source repositories, author and licence. Existing destinations are preserved.
- `vp check`, explicit `tsc --noEmit`, production `vp build`, `git diff --check`,
  exact six-spec sync, five standalone design checks, **75/75 portability
  assertions**, and **15/15 file/collection reference tests** pass. Sibling runtime
  sources are unchanged; their preceding full-suite evidence is not rerun or
  relabelled as a fresh product test.

Legacy cleanup: removed ToolCard, pipeline/KERR illustration, remote-mark fallback,
old palette/typography/layout rules, unused registry aliases and both WOFF2 assets
(75,332 bytes). Authoritative README/CLAUDE/metadata/artwork now describe Air.
Source search finds no Archivo/JetBrains/font-face/font-path, tool-card, pipeline
or orbital artwork references in the migrated runtime/docs/artwork. Historical
audit records and explicit contract anti-patterns remain as evidence.
The canonical CSS adds shared shells (~45.0 kB raw total CSS versus 28.5 kB before);
JS decreases from 242.4 kB to 234.4 kB. Removed fonts avoid 75.3 kB of raw assets.
[Exact build comparison](evidence/home-build.json),
[baseline](evidence/home-baseline.json).

**Acceptance remains open:** physical-touch interaction and screen-reader speech/
navigation have not been executed. Responsive/touch emulation and accessibility
DOM inspection do not substitute for them. There is no connected physical touch
surface in this session. Under the saved commit gate, the home runtime change is
kept uncommitted and all 13 inventory entries remain `validated: false`. The
reviewed design lock can be committed separately; no push or deployment occurred.
Next: complete these checks, commit AIR-04, then begin PDF entry and shared real
editor adapters. No additional broad design review is needed.

[Layout/interaction evidence](evidence/home-2026-10-13.json) ·
[Destinations](evidence/home-links.json) ·
[Desktop light](evidence/home-desktop-light.png) ·
[Tablet dark](evidence/home-tablet-dark.png) ·
[Phone dark](evidence/home-phone-dark.png) ·
[Footer dark](evidence/home-footer-dark.png) ·
[No-JS](evidence/home-no-js.png) ·
[Safari phone](evidence/home-safari-phone-menu.png) ·
[Safari tablet](evidence/home-safari-tablet.png) ·
[Firefox 200%](evidence/home-firefox-200.png).

Design-lock-only commits: Cloakyard `ea26823`, PDF `e59bcd5`, IMG `0182ec0`,
Resume `b91e39e`, Drop `f507724`. Fresh PDF/IMG/Resume `vp check` and Drop's
19-file Astro check pass. Commit hooks also passed. Runtime implementation and
its evidence remain in the working tree under the outstanding acceptance gate.

### User-authorized local commit and rollout continuation

After the preceding report explicitly identified physical-touch and screen-reader
gaps, the user instructed **“commit then continue”**. The complete AIR-04 working
tree is committed on that authority; those two checks remain open and inventory
validation flags stay false. This supersedes the earlier local-commit hold, not
the evidence itself. Continue with CloakPDF's first bounded production piece.
No push or deployment is authorized or performed.

## 2026-10-13 — real product marks and shader verification

Replaced generic directory glyphs with exact local SVG marks from the four product
repositories. Each renders at 36×36px without recolouring or an extra frame.
Decorative image alternatives are empty because each adjacent heading names the
product. KERR remains a text exploration link. All four assets load in 22 cases
(eleven contract dimensions × light/dark), with no horizontal overflow and unchanged
product/source destinations. Provenance is in `../brand-assets.md`. Check, TypeScript,
production build and the full source validator pass.

The live Shaders 4.0.4 reference passes six desktop/tablet/phone × theme cases, finite
arrival and pointer response, stable idle frame count, still artwork, cold reduced
motion with no renderer request, offscreen disposal, simulated unavailable WebGPU
and immediate keyboard replay. No console warning/error was observed. First draw
on this Mac measured 73–84ms; this is not a GPU or cold-network benchmark. The local
renderer is 2,249,127 raw bytes / 368,615 gzip bytes; its reproducible build and
SHA `f375a59db6e1` pass. This still needs the separate production payload gate.
Production SVG arrival is exactly one 900ms iteration; desktop/phone reduced motion
is fully static, with no shader requests. Live production activation and physical
GPU/battery/thermal coverage remain pending.

The isolated portability fixture initially failed after PDF product sources were
marked implemented: it retained inventory entries for source files not present in
the copied bundle. The fixture now keeps its single bundled stylesheet entry. The
real-repository validator still checks the complete product inventory, and all
negative hash/provenance checks remain. All five repositories pass 75 assertions.
No canonical design token or contract content changed.

[Real mark evidence](evidence/home-real-logos-2026-10-13.json) ·
[Desktop](evidence/home-real-logos-desktop.png) ·
[Tablet dark](evidence/home-real-logos-tablet-dark.png) ·
[Shader evidence](evidence/shader-verification-2026-10-13.json).

CloakPDF's subsequent entry implementation and its feature/output/browser checks
are recorded in its own `docs/air/validation.md`. Homepage base commit: `39c08f9`.
Physical-touch and screen-reader acceptance remain open; no push or deployment.

Continuation commits: PDF `dc20fe6` (entry/recovery); IMG `d6f4cdb`, Resume
`f361733`, Drop `5d79ab9` (isolated portability fixture only). Fresh IMG check +
470 tests and Resume check + 288 tests (292.72s) pass. Drop asset sync, 19-file
Astro check and static build pass. No IMG/Resume/Drop product runtime changes.

## 2026-10-13 — live homepage shader

The user explicitly requested the missing shader before continuing rollout. The
production hero now runs the real Shaders 4.0.4 two-plane composition. The reference
and React adapter share one portable lifecycle. Static SVG renders first; no
shader runs in PDF or other editing workspaces. Corrected the canvas base to match
the page exactly in both themes. React unmount cancels initialization, frames and
observers/listeners. Async draws cannot overlap or drop pointer input arriving
during submission. Resize failure restores the fallback.

Verified 22 viewport/theme cases across all eleven Air dimensions. Native Safari and Firefox
render the light and preserve the tools anchor/focus. Production warm first draw
on this Mac was 53–64ms. Instrumented actual queue submissions completed in
0.5–3.1ms (GPU queue completion plus driver/callback scheduling, not hardware GPU
timestamps); no long tasks were observed in the measured interaction window.
Frames stop at idle. Offscreen and simulated-hidden checks each destroyed their
actual device. Unavailable WebGPU restores the still artwork; cold reduced motion
downloads no renderer. Reference still/replay controls remain functional.

Production output: page entry 75.59 kB gzip; separately requested renderer 294.30 kB
gzip. Build enforces 85/350 kB ceilings and emits the dependency license file. The
large optional-chunk warning remains visible. Five controlled lifecycle tests pass,
covering idle rest, pending-init cleanup, input during draw, reduced motion and
resize failure; browser evidence tests the real renderer separately.

[Evidence](evidence/live-shader-2026-10-13.json) ·
[Recorded pointer response](evidence/live-shader-pointer.gif) ·
[Safari rendering](evidence/live-shader-safari.png).
Physical mobile GPU/battery/thermal measurements remain open. This user-authorized
local implementation supersedes the preceding still-only state, without claiming
those physical checks passed. No push or deployment.

The shared runtime declarations also travel in the portable bundle. All 85
isolated assertions pass across five products. Fresh IMG 470/470 and Resume
288/288 (290.62s) suites and Drop asset/Astro check/build pass; sibling runtime
imports remain unchanged.

Saved continuation: PDF `70e0b70` implements utility headers, route loading and
global recovery with 88 recovery/loading and 132 utility-header layout cases,
355 unit tests, all six standalone output workflows, home-to-editor hand-offs,
dead-code and production build checks passing. Its own validation record and
evidence retain the remaining landscape, deeper-tool and physical-device limits.
Shared lifecycle commits: IMG `a894c1d`, Resume `e22f441`, Drop `bb02e6f`.

## 2026-10-14 — Air 1.0.1 header identity and canvas contrast

The portable rule now fixes the family header mark at 36×36px in landing, reading
and editor headers, including tablet/phone, with at least a 44px interactive target.
The canonical workspace study and CloakPDF editor follow it without increasing
normal toolbar height. The new paper-accent equals the light Air blue in either
appearance, preserving contrast on white document paper. It does not change PDF
content or export colours. Contract hash: `201f7c381b5f`.

All six DESIGN copies and five independent bundles are synchronized. Inventory
scripts read the manifest version to avoid a second version constant. Format/lint,
TypeScript, production build, exact sync, design integrity and portability pass.
Detailed canvas, keyboard, responsive/theme and real-output evidence is in
CloakPDF's `docs/air/validation.md` and `evidence/canvas-2026-10-14.json`.
This patch does not mark other products migrated; physical-device gates remain open.

The reference also removes its old 24px phone override. All six preview presets
(desktop/tablet/phone × light/dark) render a 36px mark without header overflow.
PDF implementation is `7743488`, with final reference copy `f40842a`; IMG portable
copy is `88253d7`, and Drop is `f073a51`. IMG's 470 tests, its build and checks,
and Drop's 19-file Astro check/three-route build pass. Native macOS is untouched.

Resume portable copy `a09ef58`: 288/288 serial tests pass (360.20s), with editor
browser checks against the fixed production build, plus format/lint/types/build.
Its validation record retains the two preceding development-run transients.
All current bundle and portability checks pass; no push or deployment.

## 2026-10-14 — PDF preview recovery checkpoint

PDF `a2935ac` implements one Air recovery strip for missing previews without
resetting document bytes, tool drafts, OCR review, page plans or history. The
canvas fallback remains readable at small fit sizes and enlarged text. Preview
memory is bounded independently of export resolution; unused encoding/rendering
paths and stale OCR references are removed. `cf2cbed` separately fixes a cancelled
AI preparation overtaking a newer retry, found by the required browser gate.

384 units, 28 browser suites, 44 new canvas/grid layouts in both themes,
Safari/Firefox retry and actual 200% Firefox zoom pass. Full output and scope
records are in CloakPDF's `docs/air/validation.md` and compact preview-recovery
evidence. Root lint/types/build, design integrity/isolation and exact six-document/
five-bundle synchronization pass. Air 1.0.1 and its contract hash are unchanged;
the portable PDF appendix now defines recovery. Other panels/products and physical
or assistive acceptance remain open. No push or deployment.

## 2026-10-15 — PDF privacy panels and colour controls

The PDF Redact/Smart Erase slice implements shared Air control anatomy, one pending
mark collection and safe byte-revision ownership for cancellable detection/search.
The shared colour picker removes overlapping targets and hidden-only axes; it
keeps invalid hex drafts, explicit selection and accessible viewport containment.
Native Firefox 200% zoom exposed an offscreen-anchor bug, fixed and rechecked.

44 panel layouts, 22 colour-popup layouts, 200% text, native Safari/Firefox, actual
search/PII, mark undo, stale/cancel/error/retry, all erase methods and geometry
checks pass. 384 units, 16 production smoke and seven extended suites pass; the
final spacing cleanup is followed by the focused layout/behaviour suite. Build,
dead-code, inventory and portability pass. Evidence is in CloakPDF's dated
validation section and `docs/air/evidence/privacy-panels-2026-10-15.json`. The
canonical product appendix and generated DESIGN.md agree; family tokens stay at
Air 1.0.1. Main-repo check/types/build, design and sync/portability pass.

Next: Find & Act and Scrub interiors. Full product/family and physical-device/OS
IME/assistive acceptance remain open. No push or deployment.

## 2026-10-15 — PDF search and scrub checkpoint

The PDF Find & Act/Scrub interiors now use the pinned Air controls and report
styles. Search preserves query/results/inclusion across failure and cancellation,
rejects stale coordinates, and keeps author colours separate from snippet UI.
Scrub has actionable analysis retry, selected-category readiness and explicit
bookmark/form/annotation consequences. Promised mobile apply is awaited before
closing; failures keep work available and repeat Done is guarded.

384 units, 16 production smoke suites, seven extended suites, focused search/scrub
and privacy panels pass (25 browser suites). 44 required layouts and 16 edge-state
examples cover both themes, with enlarged text and forced-colour/reduced-motion
checks. Native Safari and Firefox actions pass; Firefox actual 200% zoom reviewed.
Output tests cover selectable marked text, both annotation modes and scrub category
keep/remove, failure/retry and undo. The final term-padding change receives its own
focused rerun. Full command scope/evidence lives in PDF's `docs/air/validation.md`.

127 lines of unused legacy CSS and dangling motion variants removed. Repository
searches and Knip pass; remaining old shared controls still have real consumers.
No dependency or contract change. Product appendix updated and regenerated; six
portable specs/five bundles remain exact. Main repo check/types/build/design and
portability pass. Physical-device/OS IME/assistive gates remain open. Next: Metadata,
Bookmarks and Attach, including unresolved asynchronous callback contracts in
remaining tool interiors. No full-product completion, push or deployment claim.

## 2026-10-15 — CloakPDF Metadata and date/time

The next bounded PDF slice adopts Air for the document report, metadata fields and
complete calendar/year/time control. Read failure/retry, byte ownership, draft
retention, clear/save/undo/Cancel and mobile Done are tested against real PDF output.
Clearing standard fields retains XMP and says so. Replaced skins, duplicate date
markup and the last legacy popover selector are removed; modal suspension follows
actual Air portals. No dependency added; calendar code is 76 lines shorter.

PDF check/dead-code, 384 units, build/design/portability, all 16 production smoke suites,
seven extended suites and focused metadata/date acceptance pass. Responsive themes,
long text, read/loading failure, calendar targets, nested menus, enlarged text,
native Safari and Firefox actual 200% zoom are reviewed. The production interaction
suite was rerun after the before-paint focus fix. Evidence and screenshots are kept
in CloakPDF `docs/air/evidence/metadata-calendar-2026-10-15.json` and its validation log.
The portable PDF appendix is regenerated from Cloakyard; Air 1.0.1 remains pinned.
Physical-device and assistive-speech acceptance is still open. Bookmarks and Attach
are next; this record does not certify the entire PDF product or web family.

## 2026-10-15 — PDF Bookmarks checkpoint

CloakPDF's Bookmarks panel now follows Air throughout manual/detected entries,
fields, shared nesting menu, reorder/remove/restore, contents options, validation,
cancel/retry and mobile Done. Pending overlays are protected before page insertion.
A shared pending-apply fix retains failed validation for retry and makes concurrent
flush callers await one operation. Applied drafts retire; real output and Undo pass.

390 unit tests, 16 production smoke suites, seven extended suites and focused
Bookmarks/Metadata suites pass. Acceptance covers 22 required layouts/themes,
six container-boundary cases, 12 error/pending/empty states, 200% root text, forced
colours/reduced motion and native Safari/Firefox, including actual Firefox 200%
browser zoom. Physical touch/software keyboards, OS IME and assistive speech remain
open. The full PDF/family migration remains unfinished.

Removed old panel skins/cycling controls, spinner/Toggle imports, global row counter,
silent target clamps and unused outline properties. Existing shared-control consumers
remain intact. No dependencies; editor +1.32 kB gzip, CSS +0.03 kB gzip. The canonical
PDF appendix and portable DESIGN are synchronized; family contract remains Air 1.0.1.
Full evidence is in the PDF repository's dated validation and `bookmarks-2026-10-15.json`.
Next: Attach, including failed-read recovery, retained retry files and name-tree identity.

## 2026-10-15 — PDF Attach checkpoint

PDF commit `8fcdbe8` adopts Air throughout Attach: open rows, complete filenames,
40/44px controls, explicit reading/error/retry, byte-scoped failed selections,
discard/Cancel, guarded immediate actions and Undo. Unicode/duplicate filenames
have distinct identities, nested name trees are supported, additions get unique
sorted keys and removal cleans standard AF/annotation references plus unshared
streams. Shared data survives; unsupported references fail without source changes.
The shared busy overlay now restores the initiating or surviving action instead
of always sending focus to Export. Export regression behavior remains intact.

400 units, 16 production smoke suites, seven extended suites and focused Attach/
Bookmarks pass. All 22 required layouts/themes, 16 edge examples, 200% root text,
forced colours/reduced motion and native Safari/Firefox are reviewed (Firefox at
actual 200% zoom). Final production preview add/remove/Undo passes. PDF check,
dead-code, build/PWA/asset ceiling, inventory and isolated portability pass; root
check/type/build/design/portability and exact six-spec/five-bundle sync pass.

Old skins, name-only removal, unused barrel exports and redundant traversal are
gone. No new dependency; editor 290.52 kB raw / 88.34 kB gzip, CSS 144.58 / 25.29.
Air 1.0.1 is unchanged; canonical PDF appendix and portable DESIGN are updated.
Full details and proof images live in PDF's dated validation and attachment evidence.
Physical-device/OS IME/assistive gates remain open; full product/family completion
is not claimed. Next: Crop and Strip furniture interiors, shared controls and
promised failure/retry handling. No push or deployment.

## 2026-10-15 — PDF Crop and Strip furniture checkpoint

PDF commit `9f64243`: Crop/furniture interiors now use Air throughout their scope, fields, selection,
preview and feedback states. Both await mobile Done and retain failed drafts.
Straighten preserves the catalog and original page geometry, rejecting unsafe
native annotation changes. Full output, cancellation, source ownership and Undo
are covered. Replaced skins, duplicate preview state and void async chains are
removed; no dependency added. 404 units and 25 browser suites pass, alongside
44 size/theme layouts, 12 enlarged-text cases and native Safari/Firefox including
actual Firefox 200% zoom. Product evidence and the portable PDF appendix are updated.
Root checks/types/build/design/portability and exact synchronization pass. Air 1.0.1
is unchanged. Physical-device/IME/assistive gates and remaining tool interiors are
open. Next bounded piece: Signature and its shared controls, then Stamp/numbering
and shell feedback. This is not a complete PDF/family migration.

## 2026-10-15 — PDF Signature interior

PDF commit `24a1965` migrates Signature sources, the drawing pad, background and
placement controls to Air. Strokes survive responsive/tool changes; uploads expose
failure/retry and preserve alpha; mixed-page copies preserve image aspect. Mobile
Done awaits embedding and retains failed placements. Actual PDF raster/text,
metadata, attachments, Undo and Cancel pass. Obsolete skins, Switch/focusRing,
legacy payload property, global Delete listener and void Apply were removed.

405 units and 25 distinct browser suites pass, with 44 mode/size/theme cases,
twelve enlarged-text cases, a contained short-landscape pad, forced colours/reduced
motion and native Safari/Firefox (200% zoom). Final display refinements were checked
again with focused Signature and production motion. Product check/dead/build/design/
portability pass; no dependencies added. Editor 91.13 kB gzip (+1.43), CSS 25.14
(-0.09). Canonical PDF appendix synchronized; family tokens/version remain locked.
Detailed evidence lives in PDF's validation and `signature-panel-2026-10-15.json`.
Physical-device/real OS IME/assistive speech gates and full migration remain open.
Next: Stamp/numbering interiors. Local commits only; no push/deployment.
