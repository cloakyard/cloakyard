# Air refresh — current handoff

## Latest checkpoint — 2026-10-15 (Signature interior)

PDF commit `24a1965`: Signature now uses Air source segments, labelled switches,
colour controls, an object selector and keyboard placement/move/resize/remove.
Drawing has one focus contour, preserves completed strokes through tool/layout
changes, handles single taps/final segments and ignores cancellation from another
pointer. The pad caps its display size without stretching ink, including short
landscape. Draw and Choose keep separate drafts. Image preparation reports errors,
retains the previous image for retry, supports same-file retry and aborts abandoned
reads. Existing transparency/white ink survives; opaque paper becomes transparent.

Copy to remaining pages preserves aspect on mixed sizes. Apply awaits PDF embedding;
failed mobile Done retains the tool/placements for retry, and Undo restores exact
prior bytes/objects. PDF.js confirms raster ink, selectable text, metadata and
attachments. Removed old skins, unused Switch/focusRing, ignored payload property,
global Delete handling, silent decode fallbacks, void Apply and stale standalone
references. No dependencies added; editor 91.13 kB gzip (+1.43), CSS 25.14 (-0.09).

405 units in 42 files, 16 production smoke + seven extended + focused Signature and
page-geometry suites pass (25 distinct browser suites). Inspected 44 source/size/
theme cases, twelve enlarged-text cases, expanded short-landscape, forced colours
and reduced motion. Native Safari and Firefox pass, including actual Firefox 200%
zoom. Final display refinements were rerun through focused Signature and production
motion. Check/dead/build/design/portability pass. Evidence is in PDF's validation
and `docs/air/evidence/signature-panel-2026-10-15.json`. Air 1.0.1 remains locked;
canonical PDF appendix and standalone DESIGN are synchronized.

Native review tabs are closed; Firefox zoom restored. In-app tab 12 at 8132 holds
synthetic `Air signature.pdf` with Signature open for review. Servers 8122 (PDF dev),
8132 (PDF preview), 8120 (reference), 8131 (homepage) remain; no new server was added.

Next bounded piece: **Stamp/numbering interiors** in `StampTools.tsx` — start with
Stamp (WatermarkPanel), then page numbers/header-footer/Bates. All four still use
legacy WholeDocPanel/Segmented and void `applyTransform` callbacks. Migrate controls,
draft/Apply/failure ownership and actual output; keep those adapters until their
last consumers migrate. Then remaining custom controls/panels and shell loading/
error/restored-draft banners. Keep the source/dead-code audit and green-check commit
gate. Physical pen/touch/software keyboards, real OS IME and assistive speech remain
open. PDF/family migration is unfinished. Local commits authorized; no push/deploy.

## Previous checkpoint — 2026-10-15 (Crop and Strip furniture)

PDF commit `9f64243`: Crop and Strip furniture interiors use Air fields, scope
segments, full sample rows and explicit feedback. Crop now has keyboard percentage
entry, shared pointer geometry and cancellable/owned content suggestions. Furniture
selections survive tool/layout changes; preview bands derive from the selected
result without duplicate state. Both tools await mobile Done and retain failed
drafts for retry. Applied drafts retire before Undo. Busy focus stays in the panel.

Straighten preserves the catalog/page references and original rotated/CropBox/
UserUnit geometry instead of rebuilding everything and applying rotation twice.
Changed native annotated/widget pages are rejected before writing; pending marks
block automatic adjustments. Actual raster rows, untouched text/forms, metadata,
attachments and exact no-op bytes are tested. Crop's data-retention limits remain
explicit. Old skins, void apply chains, duplicate state and obsolete comments are
removed. No dependencies added; editor 89.70 kB gzip (+1.36), CSS 25.23 (-0.06).

404 units in 41 files, all 16 production smoke + seven extended + focused crop/
furniture and geometry suites pass (25 browser suites). All 44 tool/size/theme
combinations and 12 enlarged-text cases were inspected. Forced colours/reduced
motion and native Safari/Firefox pass, including actual Firefox 200% zoom. Check,
dead-code, build, design and portability pass. Evidence is in PDF's dated validation
and `docs/air/evidence/crop-furniture-2026-10-15.json`. The smoke now waits for actual
scan/apply completion instead of rail labels/static help. Canonical PDF appendix
and standalone DESIGN are synchronized; Air 1.0.1 remains locked.

Native review tabs are closed and Firefox zoom restored. In-app tab 12 at 8132
holds synthetic `Air crop.pdf`, Crop controls expanded, Top = 8% as an unapplied
review draft. No new server was started; 8122 dev and 8132 production remain.

Next bounded piece: **Signature interior** — its shared legacy source toggle,
image upload/background controls, canvas input, promised apply/failure/retry and
output/Undo. `WholeDocPanel.Segmented` still has live Signature/Stamp consumers;
do not delete it until each migrates. Then Stamp/numbering interiors, remaining
panels and shell loading/error/restored-draft banners. Keep dead-code audit in every
slice and commit only after all applicable checks. Physical touch/software keyboards,
real OS IME and assistive speech remain open. Full PDF/family migration is unfinished.
Local commits authorized; no push/deployment. Do not mark the family goal complete.

## Previous checkpoint — 2026-10-15 (Attach)

PDF commit `8fcdbe8`: Attach now uses Air open rows, complete filenames, sizes and
40/44px actions, explicit read failure/retry, retained byte-scoped selections,
discard/Cancel and immediate undoable changes. Duplicate Unicode names have
separate identities. Nested trees, unique sorted keys, standard AF/annotation
cleanup, shared streams and physical removal of unshared bytes are tested.
Malformed trees and unsupported surviving references fail without changing the PDF.
Shared busy focus now returns to the initiating control or surviving Attach action;
closed dialogs keep their Export fallback. Pending privacy marks are protected.

400 units in 40 files, 16 production smoke + seven extended + focused Attach and
Bookmarks pass (25 browser suites). All 22 required layouts/themes, 16 empty/read/
failure/retry examples, enlarged text, forced colours/reduced motion and Safari/
Firefox native checks pass, including actual Firefox 200% zoom. Final production
add/remove/Undo reviewed. Check, dead-code, build, design and portability pass.
Evidence: PDF `docs/air/evidence/attachments-2026-10-15.json` and dated validation.

Old panel skins, name-only removal, unused exports and a redundant graph traversal
are removed. No dependencies added; editor 88.34 kB gzip (+0.05), CSS 25.29 kB gzip
(+0.05). Canonical PDF appendix and portable DESIGN are synchronized. Temporary
native tabs are closed, Firefox zoom reset and server 8138 stopped. Preview 8132
contains a synthetic PDF with two attachments and expanded Attach controls.

Next bounded slice: **Crop and Strip furniture interiors**. Their callbacks still
return void before `applyTransform` finishes; review mobile Done/failure retention,
invalid numeric drafts, shared WholeDocPanel/Segmented controls, safe crop geometry
and output/Undo. Keep shared controls with live Signature/Stamp consumers until
migrated. Then remaining tool interiors and shell loading/error/restored-draft
banners. Continue source/dead-code audit and commit only after applicable checks.

Air 1.0.1 remains locked. Full PDF/family migration, physical touch/software keyboards,
real OS IME and assistive speech remain open. Local commits are authorized; no push
or deployment. Do not call the family goal complete.

## Previous checkpoint — 2026-10-15 (Bookmarks)

PDF commit `3163a35`: Bookmarks is implemented and validated with Air fields,
shared nesting menus, keyboard reorder and remove/restore, explicit target
validation, retained drafts, cancellable/owned heading detection and safe contents
insertion. Pending overlays are protected. Applied drafts retire; Cancel discards.
A shared pending-apply bug is fixed: validation failure keeps Done ready for retry,
and concurrent flushes await one operation. No silent target clamping remains.

390 units, all 16 production smoke suites, seven extended suites and focused
Bookmarks/Metadata pass (25 browser suites). All 22 required layouts/themes,
six container-boundary cases, 12 empty/pending/failure states, enlarged text,
forced colours and native Safari/Firefox (actual 200% zoom) reviewed. Check,
build, dead-code, design and portability pass. Evidence is in PDF's dated
validation record and `docs/air/evidence/bookmarks-2026-10-15.json`.

Removed legacy panel skins/cycling controls, unused imports/global row counter,
obsolete target helper and unused outline-node properties. No dependencies added;
editor +1.32 kB gzip, CSS +0.03 kB gzip. Keep live legacy shared controls until their
remaining consumers migrate. The in-app production preview on 8132 is updated,
with the synthetic Air review PDF and expanded Bookmarks controls. Native review
tabs are closed and Firefox zoom restored; temporary server 8138 is stopped.

Next bounded slice: **Attach**. Audit found failed reads masquerading as empty
lists, void asynchronous actions, loss of failed file selections, Unicode display
name/name-tree key mismatches, unsupported nested Kids and duplicate-name identity.
Verify add/remove/retry, retained bytes, safe embedded-stream removal, output and
Undo before committing. Then remaining custom tool interiors and shell loading/
error/draft banners. Use the exhaustive TODO and keep cleanup in each slice.

Air 1.0.1 remains locked. Other products and physical touch/software keyboards,
real OS IME and assistive speech gates remain open. Full PDF/family refresh is
unfinished. Local commits remain authorized; no push or deployment.

## Previous checkpoint — 2026-10-15 (Metadata and date/time)

PDF commit `76b2d42`: the Metadata/date-time slice is implemented and validated. Metadata has Air fields
and an open report, explicit read/retry, byte-scoped drafts, safe failure recovery,
clear/save/undo/Cancel and promised mobile Done. Saving retires the applied draft.
The full calendar/year/hour/minute/AM-PM control uses Air with seven 44px columns,
320px full-width layout, immediate keyboard focus and nested-menu dismissal.

384 units, 16 production smoke suites, seven extended suites and focused acceptance
pass, alongside check/build/dead-code/design/portability. Required layouts/themes,
narrow-calendar breakpoint neighbors, long filenames, error/loading, 200% root text,
Safari and Firefox actual 200% zoom reviewed. No dependency added; date code is
76 lines shorter, the unused old popover skin is gone and modal suspension now
recognises actual Air surfaces. Evidence is in CloakPDF's dated validation record.

Next bounded slice: **Bookmarks and Attach**. Audit already found silent page clamping,
void asynchronous callbacks and failed attachment reads shown as empty lists. Keep
output/undo, nested outlines/contents pages, duplicate filenames, retained retry input,
stale detection and code cleanup in scope. Then remaining tool interiors and shell
loading/error/draft banners. Other products and physical touch/software keyboards,
OS IME and assistive speech remain open. Air 1.0.1 is unchanged. Local commits are
authorized; no push/deployment. Do not mark PDF or the full family complete.

## Previous checkpoint — 2026-10-15 (search and scrub)

PDF commit `fcd913a`: Find & Act and Scrub now use Air throughout their panel interiors. Search retains
query/results/inclusions after failure, cancels safely and ties matches to exact
bytes. Scrub reports failure/retry and selected-category readiness, with explicit
bookmark/form loss and annotation limitations. Mobile Done waits for promised
apply completion; failure keeps the tool open and repeat activation cannot apply
twice. Desktop primary actions consume reported failures.

384 units, all 16 production smoke suites, seven extended suites and two focused
search/privacy suites pass. 44 required layouts, 16 error/busy/long-term states,
200% root text and native Safari/Firefox including actual Firefox 200% zoom reviewed.
Real highlight/box/scrub outputs and undo/retry pass. Required checks, build,
dead-code, provenance and isolated portability pass. Removed 127 unused legacy
CSS lines and stale motion references; no dependency added. Air 1.0.1 is unchanged.

Next bounded slice: **Metadata, Bookmarks and Attach panel interiors**. Continue
checking the remaining tool callbacks that return void before their asynchronous
apply completes, shared controls and shell loading/error/draft banners. Keep source
and output cleanup in each piece. Physical touch/software keyboards, OS IME and
assistive speech remain open; full PDF/family migration is unfinished. Local commits
are authorized; no push or deployment. Product evidence lives in the dated PDF
validation record and `evidence/search-scrub-2026-10-15.json`.

## Previous checkpoint — 2026-10-15 (privacy marks)

Air 1.0.1 remains locked. PDF commit `c0ac5c0` gives Redact and Smart Erase Air choices, search,
colour controls and a shared pending-mark list. Cancelled/stale scans cannot add
boxes to another byte revision. The shared colour picker keeps invalid drafts,
keyboard axes, touch targets and focus; its popup stays reachable during zoom.
No dependency was added. Replaced skins and duplicate lifecycle/list code are gone.

384 units, 16 production smoke suites, seven extended suites and privacy/geometry
integrations pass. The focused privacy suite covers 44 panel/theme states, 22
picker states, enlarged text, failure/cancel/retry, mark undo and real erase output.
Native Safari/Firefox pass, including actual Firefox 200% zoom. Evidence and the
portable PDF appendix are recorded in CloakPDF and the main refresh TODO.

Next bounded slice: **Find & Act and Scrub panel interiors**, including real output
and cleanup. Other interiors, shell loading/error/draft banners and other products
remain pending. Physical touch/software keyboards, OS IME and assistive speech
remain open. Continue one validated piece per local commit; no new design approval
is needed. No push or deployment is authorized.

## Previous checkpoint — 2026-10-14

Air 1.0.1 remains the locked baseline. PDF preview recovery is committed as
`a2935ac`; the separately tested AI preparation-cancellation fix is `cf2cbed`.
Retry keeps valid bytes, forms, page plans, OCR review, marks and undo/redo; missing
pages are named, preview memory is bounded, and obsolete render/encode paths are
removed. 384 units, 28 browser suites, 44 new layout/theme states and native
Safari/Firefox recovery pass, including Firefox 200% zoom. Evidence lives in
CloakPDF's dated validation record and `preview-recovery-2026-10-14.json`.

Next bounded slice: **Redact and Smart Erase panel interiors**, including custom
controls and destructive-output checks. General shell loading/error/draft banners,
other tool interiors and the other products remain tracked in `UX_REFRESH_TODO.md`.
Physical touch/software keyboards, OS IME and assistive speech remain open. Continue
one validated, cleaned-up piece per commit; no new design approval is needed.
No push or deployment has occurred.

## Earlier checkpoints

2026-10-13: the user authorized one final agent review followed by implementation.
The review is complete; **Air 1.0.0 is locked**. Do not restart broad design studies
or ask for another design approval. `DESIGN_FREEZE.md` records the decision.

**AIR-04 is committed as `39c08f9`**: the complete Cloakyard homepage imports the
canonical CSS, with open product rows, system typography/themes, in-flow mobile
navigation, focus-safe anchors, KERR exploration links, principles/footer and a
new social image. Legacy font assets, old cards/pipeline/KERR artwork and competing
CSS are removed. The live Shaders renderer is now a separate lazy production
chunk with a finite 900ms arrival, pointer response and complete static fallback.
The design gallery and overlay demo bundles do not enter production.

The local preview is `http://127.0.0.1:8131/` (production build); the development server on port 8130 was stopped after verification.
Existing reference/product servers are untouched. Evidence is in
`evidence/home-2026-10-13.json` and the dated section of `validation.md`.

Passing: check/type/build, 76 layout/theme/text cases, keyboard/menu/Escape/hash/
back-forward/malformed hash/skip-link/coarse target checks, reduced motion/forced
colours, no-JS links, production local-only requests, 13 remote destinations, native
Safari 27.0.1 and Firefox 157.0.1 checks (including real 200% zoom), all five bundles
and 75 portability assertions. See the entry checkpoint below for subsequent PDF
runtime adoption; IMG, Resume and Drop product UI remains unchanged.

The user subsequently instructed **“commit then continue”** after the two remaining
checks were explicitly reported. This authorizes the current local commit with
those gaps documented. Physical-touch and screen-reader speech/navigation remain
unverified; `validated: false` is retained rather than claiming they passed.
Design lock commits: Cloakyard `ea26823`, PDF `e59bcd5`, IMG `0182ec0`, Resume
`b91e39e`, Drop `f507724`. Homepage implementation: `39c08f9`.

Cloakyard now uses the four real local product marks at a consistent 36px. All
22 size/theme cases pass; KERR remains a text exploration link. Sources and update
rules are in `../brand-assets.md`. The user's subsequent shader activation request is implemented in the homepage
hero. Reference and production share `light-runtime.mjs`; the actual renderer is
lazy, finite and capped. Evidence: `evidence/live-shader-2026-10-13.json` and the
recorded pointer-response GIF. Production payload is 294.3 kB gzip with a 350 kB
build ceiling. Physical battery/thermal acceptance remains open.

**CloakPDF entry is committed as `dc20fe6`**: homepage/search, shared navigation/footer, privacy,
file intake, encrypted-file recovery and PWA notices. Check/dead-code, 355 units,
build, 88 layout cases, dev/production search and routing, six synthetic standalone
workflows, mobile editor smoke and serial responsive-motion checks pass. Native
Safari and Firefox 200% checks pass. The original standalone scanned/guide fixtures
are absent; generated demo fixtures were used explicitly. Physical touch/software
keyboard and screen-reader speech remain open. Full evidence is in CloakPDF's
`docs/air/validation.md`; production preview is `http://127.0.0.1:8132/`.

The first migrated product exposed an isolated portability-fixture bug: the fixture
retained product inventory entries without their source files. The canonical test
now selects its bundled CSS entry only; real repository inventory checks remain
complete. All five bundles pass all 75 assertions. Synchronized fix commits: IMG `d6f4cdb`,
Resume `f361733`, Drop `5d79ab9`; PDF includes it in `dc20fe6`. Fresh IMG checks and
470 tests, Resume checks and 288 tests, and Drop asset/Astro check/build all pass.

CloakPDF utility headers, global error boundary and route loading are committed
as `70e0b70`. Recovery copy failure, retry focus, reload, 132 utility header cases
and 88 recovery/loading cases pass. All six synthetic standalone output workflows
and home-to-editor hand-offs pass again. The later constructor checkpoint below
removes the phone orientation overlay; deeper utility/editor surfaces remain pending.

The reusable light lifecycle and its TypeScript declarations are synchronized in
IMG `a894c1d`, Resume `e22f441` and Drop `bb02e6f`; PDF includes them in `70e0b70`.
All 85 portability assertions and each product's applicable checks pass. This
handoff's Cloakyard commit contains the production shader and recorded evidence.
Temporary audit tabs and emulation are cleared; the existing homepage preview
was refreshed to the live shader. Product editor tabs and preview servers remain.

Next: **CloakPDF remaining utility-specific options/results**, then editor chrome, every
panel, canvas and overlays. Continue IMG → Resume → Drop website →
family comparison using `IMPLEMENTATION_PLAN.md`. No further general design
approval is needed. Shared adapters/corrections return to Cloakyard first. KERR
and native macOS UI remain unchanged. No push or deployment is included.

## Latest bounded implementation — PDF constructors

CloakPDF `aba5643`: Merge and Images to PDF share one Air queue with
natural sorting, preserved manual order, explicit/keyboard moves, persistent Undo,
wrapped names and image previews. Shared action/segment/error/progress controls use
the pinned skins; busy actions retain focus/geometry and guard repeated dispatch.
File intake and queue changes are locked during work; late results cannot download
or open an editor after navigation. Obsolete queue skins, motion and the standalone
orientation gate are removed. A crop tool-switch registration defect found during
regression testing is fixed and covered by the existing editor workflows.

Passing: 112 final layout/theme/text cases, six landscape entries, reordered output
page dimensions, sorting/Undo focus, real held-work lifecycle, native Safari/Firefox
200% shared-component checks, 355 units, all six standalone outputs, desktop/mobile
editor smokes, three-fixture placement/preview, extended interactions, routing/motion, build/dead-code/design and
17 portability assertions. Physical touch/software keyboard and screen-reader
speech remain open. Full evidence: PDF `docs/air/validation.md` and
`docs/air/evidence/constructors-2026-10-13.json`.

This constructor checkpoint was followed by the Extract Images slice below. Preview
remains `http://127.0.0.1:8132/`. No user editor tab was reloaded; no push/deployment.

## Prior bounded implementation — Extract Images (2026-10-14)

CloakPDF `b25ae2c`: image selection/results, shared selected-file identity,
full-resolution PNG/ZIP delivery and complete empty/error/busy/recovery states use
Air. Cancel scan aborts obsolete work and releases PDF.js/canvas resources; replacement
survives late callbacks. Busy downloads guard repeated dispatch, preserve geometry
and focus, retain selection on failure and suppress delivery after navigation.
Unused spinner/file-info styles and references are removed. Canonical tokens and
control skins are unchanged; no sibling runtime change is required.

Passing: 176 DOM size/theme/text cases plus representative reviewed screenshots;
Safari/Firefox actual 200% zoom with real extracted images; keyboard, forced colours,
reduced motion, encrypted/corrupt recovery; PNG resolution, full/partial ZIP
names/counts and sampled byte equality, retry and cancellation lifecycle checks.
355 units, all six standalone production flows, check/type, dead-code, production
build/PWA/139-file limits, design inventory/integrity and 17 PDF portability assertions
pass. Explicit synthetic fixtures substitute for absent original scanned/guide PDFs.
PDF evidence is in `docs/air/validation.md` and `evidence/extract-2026-10-14.json`.
Physical touch/software keyboard, screen-reader speech and loaded-model AskPDF
integration remain open. Inventory `validated` remains false.

This checkpoint was followed by Password below. The active checklist is in
`UX_REFRESH_TODO.md`.
PDF preview 8132 and dev 8122 are running. Earlier home/reference servers were not
restarted or verified during this checkpoint. Own test tabs/emulation were cleaned
up; no user tab was reloaded. No push or deployment.

## Previous bounded implementation — Password (2026-10-14)

CloakPDF `5770f7b` completes the Password option/result slice: single-contour Air
fields, inset visibility focus, explicit permissions, detection/corrupt recovery,
one wrong-password error and truthful completion. Busy work preserves drafts,
blocks duplicate dispatch and prevents late output after leaving. Cancelled
security detection cannot replace a newer file. A corrected mismatch clears while
typing; the old input/disclosure/mono/tint code is removed.

Passing: 264 state/size/theme/text geometry observations and 44 final icon geometry
rechecks, reviewed representative screenshots, native Safari/Firefox 200% zoom,
forced colours and reduced motion. Production feature tests verify permission bits,
AES-256, source-stream equality through protection/unlocking, wrong/empty-password
handling, editor handoff and cancellation/replacement. Check/dead-code, 355 units,
all six standalone flows, build/PWA/135-asset limits, inventory, design integrity,
17 portability assertions and canonical synchronization pass. PDF evidence:
`docs/air/validation.md` and `evidence/password-2026-10-14.json`.

This checkpoint was followed by Digital Signature below. Air 1.0.0 remains
unchanged. Physical touch/software keyboard and screen-reader acceptance stay open;
inventory `validated` stays false. PDF preview 8132 and dev 8122 are running.
Own tabs/zoom/emulation and synthetic download were cleaned up, without reloading
user tabs. No push or deployment.

## Previous bounded implementation — Digital Signature (2026-10-14)

CloakPDF `109baea` adopts Air for certificate import/generation, password visibility,
existing/loaded metadata, optional details and result/recovery. It removes replaced
skins, mono/uppercase/tinted presentation, obsolete imports and redundant async state.
Cancellation terminates the crypto worker; new imports complete before an obsolete
read resolves, without a dangling shared-action guard. File replacement, focus,
error-input retention, duplicate dispatch and late output are covered.

Validation exposed and fixed padded signature parsing and Unicode certificate/CMS
issuer encoding. Generated and imported signatures, certificate chains and empty
passwords pass independent OpenSSL CMS verification plus ByteRange, page count and
exact source-stream checks. All six standalone production workflows pass alongside
359 unit tests, format/lint/type, dead-code, build/PWA/129-asset limits, design checks,
17 isolated-portability assertions and canonical synchronization.

484 geometry observations cover every contract size, both themes and 16/32px text
across eleven states. Representative screenshots, forced colours/reduced motion
and native Safari/Firefox 200% zoom are recorded in the PDF validation/evidence files.
Physical touch/software keyboard and screen-reader acceptance remain open;
`validated` stays false. Own test tabs/emulation/downloads were cleaned up.
No user tab reload, push or deployment.

The Compare slice is now complete; see the latest checkpoint below.

## Saved checkpoints

- Cloakyard `0f32115`: shared motion and portable bundle integrity; `b2fbee4`:
  locally bundled Shaders light study. Current reference is served at
  `http://127.0.0.1:8120/docs/air/components.html` while the existing server runs.
- CloakDrop `4124a5b`: complete website baseline source/visual/functional audit and
  opt-in Air bundle. All 18 production source files reviewed; 19 inventory entries
  include the shared CSS. Evidence records 90 layouts, 24 header journeys,
  370 computed text pairs, 12 text-stress cases and 16 reviewed screenshots.
  Dark skip-link contrast and narrow enlarged-text home/404 layouts fail; the
  source-linked audit tracks these as migration requirements. Astro gates pass.
- The 2026-10-12 Cloakyard landing refinement adds native compact navigation,
  relative landing typography, short-landscape composition and a static family
  mark. The validation record contains 96 layout + 96 text-bound cases, keyboard,
  no-JS, touch emulation, field contours and 12 editor-dialog smoke checks.

- The 2026-10-12 dropdown/motion refinement gives all reference selects a shared
  native custom picker, inset arrow, neutral selected row/blue checkmark and
  viewport-constrained scrolling. The light has a stronger finite 900ms sweep;
  completion settles from 8px/.90 over 240ms. Evidence and remaining browser
  support gates are in the select/motion section of `validation.md`. No product
  migration or sibling commit is included in this checkpoint.

- The component-foundations checkpoint makes main-repo ownership explicit in
  `design/air/README.md`, the portable contract and bundle provenance. Both local
  validators are synchronized. Expanded fields/choices have working validation,
  read-only/disabled/multiline states, mixed checkboxes and native radio segments.
  `design/air/COMPONENTS.md` is the component coverage/next-work map. Production
  adoption and user visual sign-off remain open.

- The compound-fields/action-states checkpoint adds clearable template filtering,
  a bounded numeric unit field with visible retained applied value, and explicit
  busy/success/failure/retry/cancel controls. Shared shells preserve one field
  contour, a 44px clear target and stable translated action dimensions. The
  outcomes are simulated; no product file is processed. Evidence is in the dated
  validation section and `air-03-compound-actions-2026-10-12.json`.

- The floating-controls checkpoint adds settings popovers, named/hoverable
  tooltips, equivalent action/context menus, invalid rename and safe remove/restore
  dialogs. 56 viewport/theme/text configurations cover four surfaces each, with
  keyboard/focus journeys, text-stress traversal and lazy-load recovery. Canonical
  React adapters use unstyled Base UI 1.9.0; their generated local reference module
  and licenses are portable. Product runtime imports remain unchanged.

## Next bounded pieces

1. Finish Export and command-palette interiors, then Ask PDF chat/indexing/citations. AI setup/model dialogs, entry, constructors, shared utility controls,
   landscape handling, policy/encrypted/PWA, utility headers and recovery are implemented.
2. Proceed through PDF editor chrome, every tool panel, overlays and exported
   output checks. Then IMG → Resume → Drop website → full-family comparison.
3. Shared corrections return to Cloakyard first and propagate as a pinned revision.
   Run available required feature/build/design checks before each local commit;
   record physical-device/assistive follow-ups without reporting them as passed.

The commit-all checkpoint is saved: PDF `f960092`, IMG `2a639c4`, Resume `5367f46`
and Drop `9340c6d`; Cloakyard's reference is `340aee8`, followed by the implementation
plan checkpoint. Each repository passed its applicable gates before commit.
Resume's fresh full serial suite passes **288/288 in eight files, 386.58s**, with
zero skips or weakened assertions/timeouts. This supersedes the previous failing
latest-run gate. Historical intermittent failures are not claimed fixed; entry
failure capture now preserves UI state/screenshots before rethrowing. The complete
log is committed in Resume's `docs/air/evidence/precommit-suite-2026-10-12.log`.
All runtime Air adoption and product-specific migration gates remain open.

The task's CloakDrop preview server was stopped and its browser tab closed.
Temporary Air audit tabs/viewport/touch/media/font overrides were restored or
closed. Existing user/reference/editor servers and the user's Air tab remain.

Final base portable checkpoints (2026-10-13): PDF `dea80e8`, IMG `68b0828`, Resume
`4fb514c`, Drop `f44a492`; the Cloakyard commit containing this handoff owns the
canonical change. Contract `c6ec55c0fe59`, CSS `80fb336bb4eb`, collection module
`0bbea11f0a18`. All checks pass; Resume's complete serial gate is 288/288 in
386.12s. Evidence and five reviewed screenshots are in the collection section of
`validation.md`. Next: close the candidate's visual review, then AIR-04.

## Latest bounded implementation — Compare (2026-10-14)

CloakPDF `f1d99d5`: both input regions, persistent file identities, comparison modes,
page/difference controls, thumbnail navigation and recovery now use Air. Different
page sizes retain their geometry. Cancellation closes both PDF.js tasks; partial
failures, replacement and unmount release canvases and every temporary URL. The
shared mobile-editor page stepper adopts Air and drops obsolete size/variant props.

Passing: 366 units, six expanded standalone production workflows, desktop/mobile
editor smoke, format/lint/type/dead-code, build/PWA/128-asset limits, design integrity,
17 isolated portability assertions and canonical sync. 484 layout observations,
representative pixel review, 44px coarse controls, forced colours/reduced motion
and native Safari/Firefox 200% zoom pass. Two proof screenshots are committed;
the larger local set is referenced by the compact evidence record. No dependencies
or shared contract changes. Physical/assistive gates remain open. No push/deploy.

Next: AI setup/model-management components and consent, followed by Ask PDF chat
and then the editor. The user explicitly asked to continue after Compare and keep
the codebase lean: remove replaced code and unused APIs, inspect actual consumers,
run dead-code checks, avoid unnecessary abstractions/dependencies and record bundle
cost per piece. Use the central TODO; do not count setup-only work as full AI migration.

## Latest bounded implementation — AI setup and dialogs (2026-10-14)

PDF `74e32ed` implements setup/tier selection and one complete-bundle loader.
PDF `747aa44` implements the shared Air modal frame, consent/progress/error,
model details/storage actions, tier picker and loaded-model bar. Pointer dialogs
retain focus/inertness through exit; keyboard/reduced motion is immediate. Safari
Tab traversal and trigger return, explicit memory release/reload, cancelled warm
loading, IDB transaction failure and pending tier reset are corrected.

268 layout cases, both themes, enlarged text, coarse targets, forced colours and
native Safari/Firefox 200% zoom reviewed. Required checks, 366 units, real AI
questions/extraction/warm-return/switch/reload, storage failure/retry, modal stacks,
command palette, responsive motion and three-fixture editor features pass. No new
dependencies; 791 net production lines removed. Ask PDF is 596.20/179.08 kB raw/gzip.
Only two proof PNGs and compact evidence/log enter Git. Larger local captures live
in the task's `air-ai-modals` visualization directory; model-picker captures include
private fixture replies and must not be published. No push or deployment.

Next: **Export dialog interior**, then **command palette interior**, followed by
Ask PDF chat/indexing/citations and every remaining editor surface. The user called
out modals explicitly; finish those interiors before returning to chat. Their shared
frame is implemented, not their full migration. Physical-device/assistive speech
acceptance stays open. Preserve the lean-code and validate-before-commit workflow.

## 2026-10-14 — Export interior checkpoint

PDF `5f8ab8c` migrates all six Export formats, PDF modifiers, compression
segments, progress/error/retry and the compact trigger. Native Air choices replace
numbered ledgers and accent strips. Export retains settings and focus on failure;
duplicate work is guarded. Existing processing is not cancellable, so dismissal
is protected with explicit status until settlement. Global document shortcuts
cannot escape a modal; the command palette keeps its toggle shortcut.

320 layout cases pass across all Air sizes, 640/1024px neighbors, light/dark and
16/32px root text. Safari/Firefox native keyboard and actual 200% zoom inspected.
Real outputs cover all formats/modifiers and combinations, exact source/history
preservation, grayscale pixels, form flattening, metadata removal and redaction
across every format. Required checks, 366 units, build/PWA, dead-code and applicable
modal/editor/output suites pass. No dependencies or contract changes. Obsolete
Export styles, helper and imports removed. Compact evidence plus two synthetic
proof PNGs live in PDF's `docs/air/evidence/`; larger captures stay local.

Next bounded slice: **command palette interior** — search, grouped/selected/empty
results, key hints, scrolling and safe handoffs. Then Ask PDF chat/indexing/citations,
followed by remaining editor chrome/canvas/panels. Physical touch/software-keyboard
and assistive speech acceptance remain open. Commit only after the same validation
and cleanup gates; no push or deployment is authorized.

## 2026-10-14 — Command palette checkpoint

PDF `343bc00` completes the next modal interior: Air compound search, neutral
result rows, readable category labels/hints, phone sheet and empty recovery. IME
filtering/confirmation, fresh reopen and focus return across replaced desktop/mobile
triggers are covered. Old numbered/mono/tinted styling and reset effects are removed.
No dependency or portable-contract change. Editor JS decreases 0.19 kB gzip; CSS
adds 0.23 kB gzip. Compact evidence and two synthetic-document screenshots are saved
in PDF's `docs/air/evidence/palette-2026-10-14.json` and adjacent proof files.

192 palette layouts, 366 units, required checks/build/dead-code/portability and real
command/history actions pass. Export outputs (320 layouts), AI states (192 layouts),
modal stack and responsive motion regressions pass. Native Safari/Firefox keyboard
and actual 200% zoom inspected. Physical touch, software keyboard, real OS IME and
assistive speech acceptance remain open; no full-product migration claim.

Next bounded slice: **Ask PDF chat, indexing, citations and recovery**, then remaining
editor chrome/canvas/panels/overlays. Continue removing replaced code, validate real
features and all required sizes/themes before each local commit. No push/deployment.
