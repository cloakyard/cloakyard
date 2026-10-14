# Air implementation plan

Prepared 2026-10-12 after the request to commit the current work and plan rollout.
This document defines execution order and commit boundaries. The exhaustive scope
remains in [UX_REFRESH_TODO.md](../../UX_REFRESH_TODO.md); the component matrix is
[design/air/COMPONENTS.md](../../design/air/COMPONENTS.md). A checked reference study
is not a migrated product. The final base review is now consolidated in [DESIGN_FREEZE.md](DESIGN_FREEZE.md).
That visual lock is complete. AIR-04 is the first local implementation; continue
with the saved product sequence after its validation gate.

## Starting point and decisions

- **Direction:** Air. Canonical source: `cloakyard/design/air/`. Reference checkpoint
  `638a571`; Air `1.0.0` was locked on 2026-10-13 after the user-authorized final
  review. `bundle.json` records the current contract and asset hashes.
- **Scope:** Cloakyard home, all CloakPDF/CloakIMG/CloakResume web surfaces, and the
  entire CloakDrop website. KERR's app and native macOS UI retain their appearance.
  Cloakyard shows KERR as an exploration link with no screenshot or simulated preview.
- **Order:** finish the base → establish production adapters → Cloakyard → CloakPDF
  → CloakIMG → CloakResume → CloakDrop website → complete family validation.
  PDF establishes the production editor patterns; IMG and Resume reuse them while
  retaining their different canvas and writing workflows. Phases match the family TODO.
- **Preserve:** all features, local-data boundaries, undo/history, cancellation,
  document/image fidelity, existing URLs and truthful download/model disclosures.
  No document/template font, colour or geometry changes are part of the UI refresh.
- **Delivery:** small commits on `codex/air-refresh`, each after its own passing
  checks. Local commits are authorized; pushing, merging and deployment are separate.

## 0. Close the base before product screens

The table below records the original closure scope. Reading/recovery, files,
collections/history, nested overlays and the custom Select now have working
references. Remaining device/engine and domain checks belong to the affected
production adapters, as mapped in `DESIGN_FREEZE.md`; they are not marked passed.
Reuse the completed evidence and close the detailed visual review once.

| Piece                       | Deliverable                                                                                                                     | Exit condition                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Reading and recovery        | Long privacy page, shared navigation/footer, not-found, load failure and preserved-work recovery                                | Reading measure, links, focus and long content pass both themes and every layout class                                            |
| Remaining control states    | Upload/drop, progress/cancel/retry, long lists/layers/history, toast/undo, nested popovers/submenus and confirmation stacks     | Real interactions defined, no inaccessible hover-only action, correct Escape order and focus return                               |
| Editor-specific base        | Complete relative UI typography; colour/curves/levels, rich-writing and date/signature states from the existing audits          | Narrow/tablet/coarse controls remain usable; output surfaces are unaffected                                                       |
| Browser and device behavior | Custom-select adapter where native `base-select` is absent, real zoom, software keyboard, touch and assistive-technology checks | Chromium, Safari/WebKit and Firefox behavior recorded; unavailable checks remain open                                             |
| Motion and Shaders          | Production-suitable locally bundled light, static/reduced-motion fallback, nested-dialog interruption                           | Finite motion, offscreen disposal and measured payload/startup/GPU costs meet recorded budgets; no decorative GPU work in editors |
| Review and freeze           | Updated contract, component matrix, reference and dated approval/revision record                                                | Detailed Air review closes before runtime adoption; subsequent shared corrections return to this source                           |

Readiness is component-specific: an unresolved AI state blocks that state, not an
unrelated finished privacy specimen. Never label the whole system complete while
one of these required patterns remains undefined or untested.

## 1. Build the production foundation once

1. Promote reusable behavior from the study into canonical production adapters
   under `design/air/`, with clearly separated sample data and domain actions.
   React adapters use the existing app React runtime and direct primitive imports.
   Never import the standalone study bundle into an app: it includes its own React
   runtime and demonstration-only remove/restore behavior.
2. Extend the existing sync/manifest/check tooling to pin adapter sources as well
   as tokens/CSS. Copy self-contained modules into each React app's `src/ui/air/`;
   imports remain local. No live upstream fetch or sibling checkout requirement.
   Astro uses the same tokens, classes and interaction contract with native markup
   and minimal scripts; it does not need React merely to look consistent.
3. Provide buttons/icon actions, fields and compound fields, selection controls,
   menus/popovers/tooltips, dialogs/sheets, notices and progress. Define public
   states, labels, announcements, keyboard behavior and focus responsibility.
   Product wrappers supply values/actions; they cannot supply alternate skins.
4. Map existing CSS/Tailwind aliases to `--air-*`; migrate one coherent surface at
   a time. Keep temporary legacy bridges named and tracked with removal criteria.
   Do not apply broad font/colour/reset rules to document or image output trees.
5. Integrate the shared theme policy and input/motion preferences. System is the
   default; preserve any explicit user choice. Test portals and nested overlays,
   including stacking, not just controls rendered inside their normal container.
6. Add runtime conformance evidence to the inventory only when a surface is
   implemented. Extend checks for copied-adapter drift and output-style leakage.
   Establish matched visual fixtures and baseline bundle sizes before adoption.

**Gate:** isolated adapters pass behavior tests, all copied sources match their
revision, representative real product integrations pass without changing output,
and production dependency/bundle costs are recorded. The reference's lazy payload
ceilings are not production budget approvals.

## 2. Cloakyard home — first production expression

The three home slices below were implemented together as one coherent local
change, avoiding a temporary mixed visual language. The shared CSS is the only
runtime foundation needed by this directory; complex production adapters begin
with the first real editor that needs them.

- **Slice A:** page/theme/type foundations and shared header, navigation, focus,
  footer and complete product links. Preserve hash navigation and narrow no-JS use.
- **Slice B:** hero, product presentation and principles. Replace KERR's preview
  with the exploration link. Add the reviewed finite Air light with its fallback.
- **Slice C:** metadata/social image and maintained docs; remove replaced CSS,
  old hero/pipeline artwork, fonts and unused motion/assets after consumer checks.

**Gate per commit:** `vp check`, `vp build`, links/anchors/return navigation, all
responsive/theme/input checks, no console failures, no unexpected runtime requests,
and a recorded bundle comparison. A shell-only commit is not home completion.

## 3. CloakPDF — establish the complete editor pattern

| Commit slice                | Surfaces and preserved features                                                                                 | Feature evidence                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Entry and reading           | Home, upload/drop, toolkit search, privacy, loading/error and recovery                                          | Existing routing/search/standalone entry checks; keyboard and malformed/encrypted inputs       |
| Editor shell                | Header, rail/search, inspector, page list/overview, canvas surround, zoom and selection chrome                  | Desktop/mobile editor smoke; tool changes preserve the stage, document and selection           |
| Shared and custom controls  | All 22 panels, including advanced states; date/time, colour, signatures, drawing and command palette            | Applicable interaction, signature, font, placement and resize suites; pointer cancel/undo/redo |
| Output and standalone tools | Export PDF/images/contact sheet/split; merge, images-to-PDF, compare, extract, passwords, signatures, inspector | Corresponding standalone/extended tests; inspect exported bytes/content and failure recovery   |
| AI, overlays and PWA        | Consent/model/cache/progress/cancel/retry, Ask PDF, modal stacks, update/offline prompts                        | AI suites when these surfaces change; real lifecycle and interruption checks                   |
| Closure                     | Remaining inventory states, screenshots, metadata, docs and legacy removal                                      | Full product gate and source-by-source inventory review                                        |

Run `vp check`, `pnpm check:dead`, `pnpm test` and `vp run build` on each piece,
plus applicable E2E tests. Before product completion run the full smoke, extended
and AI coverage. Preserve real redaction consequences, output quality and model
privacy disclosures. A model download test must use the documented supported path.

## 4. CloakIMG — reuse the shell, preserve the canvas lifecycle

- **Commit A:** landing, import/drop, privacy, errors and recovery.
- **Commit B:** editor shell, rail, inspector, mobile picker, canvas surround,
  layers/history and compare. Keep canvas identity and pool ownership intact.
- **Commit C:** tool families in separate commits: adjustment/colour/curves/levels;
  crop/resize/perspective/print; text/shapes/drawing/overlays; retouch/masks/redaction.
  Cover every one of the 26 desktop panels and every mobile tool, including modes
  hidden behind disclosures. Histograms/colour data remain functional visual data.
- **Commit D:** AI consent/download/cache/error/retry/cancel and export/batch flows.
- **Commit E:** remaining state coverage, PWA/social assets and obsolete design cleanup.

Before migrating commit/cancel controls, reproduce the recorded +0.4 Adjust
Cancel/re-entry finding on a fresh session. Resolve it in a focused behavior commit
if confirmed; changing the appearance must not obscure a rollback defect.

**Gate:** `vp check`, `vp test run`, `vp run build` including asset limits, relevant
`test:tools`/audit/probe scripts, pixel/output checks and real apply/cancel/undo/redo.
Validate alpha, HEIC/import errors, all supported export formats, layer reordering,
AI lifecycle and repeated previews. No screenshot substitutes for processing tests.

## 5. CloakResume — reuse controls, protect every template

- **Commit A:** landing, blank/sample/load/restore, privacy and recovery.
- **Commit B:** writing shell/section navigation and paginated preview surround.
  Correct tablet/coarse targets and undersized contact selectors.
- **Commit C:** all 13 sections in small groups, including repeated/nested entries,
  rich text, reorder alternatives, partial dates and colour/logo selectors.
- **Commit D:** template gallery, paper and format controls, review tabs and field
  jumps, local language-engine progress, modal/sheet/update states.
- **Commit E:** JSON/PDF save/load/export, failure/unsaved-work handling, PWA/social
  imagery, remaining inventory and old UI styles/assets/references.

**Gate:** `vp check`, complete `vp test run --no-file-parallelism` with all browser
cases actually executed, and `vp run build`; production browser/template checks
where affected. Keep all 17 templates × A4/Letter, pagination, long fields, links,
symbols, images, export text and document geometry intact. No timeout increase,
skipped template or weakened assertion may turn a failing gate green. Preserve
failure artifacts before rerunning an intermittent browser case.

## 6. CloakDrop website — complete all routes

- **Commit A:** shared layout/navigation/theme, home/hero/product/download/footer.
  Keep the real native screenshot as product evidence; only the surrounding web
  design changes. Preserve accurate OS/architecture/signing/release/download copy.
- **Commit B:** privacy and 404 reading/recovery layouts using the shared patterns.
  Correct baseline dark skip-link contrast, narrow enlarged-text clipping, coarse
  targets, tablet spacing, keyboard motion and no-JS menu behavior.
- **Commit C:** remove unused tokens/classes/band artwork and outdated maintained
  design references; refresh website metadata/imagery only where affected.

**Gate:** asset sync, `npm run check`, `npm run build` in `apps/site`, all route and
anchor/download/policy checks, both themes, no-JS and reduced motion. Verify there
are no Swift/native edits. The policy's meaning does not change in a visual refresh.

## Per-piece acceptance checklist

1. List affected inventory entries, real states, feature/output invariants and
   baseline findings before edits. Include empty, populated, invalid, disabled,
   busy, error, recovery, long content and selected/focused states as applicable.
2. Implement with the canonical tokens/adapters. Any missing shared rule is fixed
   in Cloakyard first and copied as one revision to affected adopters.
3. Inspect desktop 1920×1080, laptop 1440×900 and 1280×800, tablet 1024×768 and
   768×1024, phone 390×844 and 320×568, plus 844×390 landscape. Test breakpoint
   neighbours for each changed layout; preserve the contract's full size matrix.
4. Inspect light/dark/system, mouse/keyboard/coarse touch, focus order/return,
   actual 200% zoom and enlarged text, reduced motion, forced colours, long labels,
   and open overlays. Check software keyboard/assistive technology on real devices.
5. Run mandatory checks and affected feature suites. Inspect generated PDFs/images
   independently of editor screenshots. Record failures and fix them before commit.
6. Search for obsolete design code in the changed area: literals/aliases, unused
   selectors/components/imports, old fonts/icons/artwork, duplicate motion, docs,
   generated/PWA references and dependencies. Confirm dynamic consumers before
   deleting. Keep a named exception for document output and genuine visual data.
7. Record exact revision, routes/states, sizes/themes, commands, results, screenshots,
   output comparisons and remaining limitations. Inspect the diff and commit the
   bounded piece only after its required gates pass; keep working copies reviewable.

## Family completion and rollback

The final comparison covers every route and every inventory source/state across
all five web products, including custom controls inside editors. Require no
unreviewed token/component variants, no unresolved required feature gate and no
obsolete authoritative design references. Rebuild social/PWA imagery from the real
finished product. Verify standalone copies and offline/local assets independently.

Keep old feature behavior during each visual slice and use local Git commits as
rollback boundaries. Revert a failed slice rather than introducing a competing
skin or hiding a feature. Shared changes carry migration notes and are revalidated
in every affected app. Do not perform a coordinated public release until the
family comparison and user-requested review are complete.

Reference execution has completed reading/recovery and file acquisition/processing
states. Continue with long lists/layers/history, then close the remaining base gates above. Production
work starts with the shared adapters and Cloakyard home in the stated order.

### Execution update — 2026-10-13

The reading/recovery reference piece is implemented and validated in Cloakyard.
Canonical `reading.html`, `recovery.html` and `pages.mjs` now travel in the pinned
standalone bundle. Evidence covers both themes, all size classes, 200% text stress,
keyboard/no-JS navigation, failed retry/save, real session restore, exact UTF-8
download and dirty-navigation protection. This closes the reference deliverable,
not production policy, persistence or cross-browser approval.

The subsequent file checkpoint below completes upload/drop and progress/cancel/retry
at reference level. Next: long lists/layers/history, nested overlays,
remaining editor-specific controls and device/browser gates. Detailed review still
precedes shared production adapters and the product order above. Remove replaced
legacy code and maintained references within each adopted slice, as required by
the per-piece checklist; do not delete still-used production styles during review.

### File input and processing reference — 2026-10-13

The file specimen was grounded in these existing consumers before defining its anatomy:

- PDF `src/components/FileDropZone.tsx` supplies caller-specific accepted formats,
  multiple-file mode and an encrypted-file replacement state; its input reset
  permits choosing the same file again. `ProgressBar.tsx` reports completed/total
  units and handles unknown totals. Preserve the distinction between acquisition,
  encryption recovery and processing.
- IMG `src/components/DropZone.tsx` supports browse/drop/paste, single/batch modes
  and selected previews. HEIC/HEIF uses local decoding, including empty MIME types;
  changed files cancel stale previews and release resources. Retain these features
  and define visible unsupported/denied-clipboard feedback in the shared state map.
- Resume `src/components/CloakWorkbenchLanding.tsx` loads saved JSON through
  `onLoadFile`, alongside blank/sample/resume actions. This is a saved-document
  workflow, not an image importer; preserve validation and draft protection.

Define one shared shell with explicit Browse, optional Paste, format/help copy,
selected filename/size and remove/change actions. Keep the drop affordance useful
on touch and keyboard. Cover idle, drag-over, selected, invalid, busy, cancelled,
failed, retry and complete; distinguish unknown progress from measured progress.
The reference must clearly name any simulated outcome and must not suggest it
has decoded or validated a real PDF/image when it has only read a sample file.

Acceptance includes browse/drop parity, same-file reselection, long names, invalid
selection preserving prior work, duplicate submission, cancellation during work,
late results after replacement, focus/live announcements and resource disposal.
Repeat the full responsive/theme/text matrix. Product format, encryption, codec,
model and output tests remain rollout gates. Keep obsolete drop-zone status bars,
palette overrides and spinner references on the removal list for their actual
product migration, after verifying every consumer.

The reference implementation now lives in canonical `files.html` and `files.mjs`.
It reads local UTF-8 text with actual `FileReader` byte counts, retains partial
preview on cancellation/error, rejects stale completions and bounds preview memory.
Browse, drop and paste have one validation path. It uses the existing Air buttons,
checkboxes, type, surfaces and theme tokens. No additional dependency or production
import was introduced. The reference-only pause/interruption/unknown-total controls
make otherwise brief states inspectable without inventing progress.

Evidence is in `validation.md` and `evidence/air-03-files-2026-10-13.json`: 68
responsive/theme/text cases, nine deterministic lifecycle tests, 27 interaction
observations and six screenshots. Browser/OS permission and physical-device parity
remain open. All bundles pin both new assets; standalone checks now include missing
file-behavior and altered file-markup probes. Each new product inherits the complete
contract and reference, not a sibling-repository runtime dependency.

### Next bounded piece — lists, layers and history

Audit the actual Resume repeated-entry groups, PDF page/object/history controls and
IMG layers/history first. Define long-name/empty/selected/disabled/busy/error rows,
search/filter/no-results, keyboard selection and safe rename/reorder/undo. Reorder
needs explicit controls as well as dragging; focus must survive removal, filtering
and restoration. Cover small/large lists and compact row actions without creating
per-app selection colours, density scales or bespoke overlays. Extend the existing
menu/dialog adapters where appropriate, then run the same responsive/theme/input,
feature, output and portable-bundle gates. Keep real product adoption separate from
reference completion, and remove replaced legacy code only within an adopted slice.

### Base closure and first implementation — 2026-10-13

The final collection pass closes the remaining shared reference interactions.
`DESIGN_FREEZE.md` supersedes the earlier “next bounded piece” recommendation.
**Next is visual lock, then AIR-04: shared foundation + Cloakyard home.** It is not
another open-ended round of component studies. Preserve the complete per-product
phase scope and all outstanding engine/device/feature gates.

Source audit for collections (no product behavior changed in this pass):

- IMG `src/editor/LayersList.tsx`: preserve reversed Fabric stacking order, stable
  IDs, transient-tool exclusion and filter access. Replace the row `role=button`
  containing nested actions, coral selection and small controls with separate
  Air selection/actions; add explicit reorder alternatives. `HistoryScrubber.tsx`
  stays bound to real snapshots/jumpToStep, with compact undo/redo on mobile.
- PDF `src/editor/panels/OrganizeTool.tsx`: preserve pending order/deletion/rotation,
  its existing up/down actions, reset and Apply transaction, at-least-one-page
  guard, thumbnail disposal and document-ID protection during async blank scanning.
- Resume `src/components/DragList.tsx`: retain existing move controls, current-item
  ref and protected two-step removal; use contextual accessible names and Air target
  sizes. Do not invent multi-selection or a new history model for structured entries.

The standalone reducer proves sample invariants; it does not migrate any of these
engines. Product processing/async/error and complete specialised-widget states stay
on their implementation acceptance lists. Keep true document output outside Air CSS.

### Rollout checkpoint — 2026-10-13

The final review and design lock are complete. Homepage implementation is committed
as `39c08f9`; the following refinement replaces generic product glyphs with the
real marks. CloakPDF entry/search/intake/policy/encrypted recovery/PWA notices are
implemented with evidence in that repository. Next is the standalone utility
shell plus global loading/error recovery, followed by the editor and every panel.
This supersedes the earlier “next is visual lock” note; do not reopen design approval.

The real Shaders reference passes fresh desktop/tablet/phone theme, arrival, pointer,
idle, keyboard, reduced-motion, offscreen and unavailable-GPU checks. Production
currently uses the finite SVG arrival. Live activation still needs its separate
payload/GPU/device performance evidence. Keep physical-touch and assistive acceptance
open and preserve pending full-product feature gates. No push/deployment occurred.

### Live light and PDF recovery checkpoint — 2026-10-13

The user's follow-up explicitly requested the missing shader. The real Cloakyard
hero now uses the shared, locally bundled Shaders runtime, with production payload
and lifecycle checks recorded in `validation.md`. Physical power/thermal coverage
remains open; the homepage is no longer SVG-only.

PDF utility headers and global error/loading recovery are implemented. Next is
standalone file lists/actions/progress/results and landscape handling, followed by
editor chrome and every specialised panel. Keep the existing orientation overlay
visible in the pending inventory until the utilities work fully in landscape.

### PDF constructors checkpoint — 2026-10-13

CloakPDF `aba5643`: Merge and Images to PDF now share production file-queue controls, Air actions,
segments, error/progress and persistent result states. All six utility entries work
in landscape, so the obsolete orientation overlay has been removed. This supersedes
the previous orientation note. Sorting/manual order, explicit moves, Undo/focus,
duplicate/late delivery and real output order have evidence in CloakPDF's
`docs/air/evidence/constructors-2026-10-13.json`. The canonical Air bundle is unchanged.

Next bounded pieces, in order:

1. Extract Images file summary, selection controls, thumbnail results and download
   states; inspect empty/error/all/partial selection and actual PNG/ZIP outputs.
2. Password fields/permissions and signature certificate fields/results. Preserve
   encryption/signature behavior, secrets handling and existing disclosures.
3. Compare input/replacement/results and desktop AI consent/model/chat states.
4. Editor chrome, each panel, canvas, overlays and exports, then IMG → Resume → Drop.

Use shared controls for every custom state. Remove replaced legacy selectors and
references within each piece. Keep physical touch/software keyboard and assistive
speech gates open; passing emulation or desktop browser tests does not close them.

### 2026-10-14 Extract Images checkpoint

CloakPDF `b25ae2c` adopts Air for the complete extraction flow and shared file
identity. Selection, full-resolution PNG/ZIP output, empty/error/encrypted/busy
states, cancellation/replacement, focus recovery and late-download suppression
are validated. 176 geometry cases span every contract size, both themes and root
text enlargement; representative screenshots and native Safari/Firefox 200% zoom
were reviewed. Required checks, 355 units, all six standalone production workflows,
build/dead-code and portable design integrity pass. Detailed evidence lives in PDF's
`docs/air/validation.md`. Physical/assistive and loaded-model AI gates remain open.

Next bounded piece: **Password options/results**, including both add/remove modes,
permission controls, visibility, wrong-password recovery and encrypted/decrypted
output fidelity. Then Signature, Compare, AI and every editor surface. Keep the
canonical Air spec pinned; shared corrections return to Cloakyard first.

### 2026-10-14 Password checkpoint

CloakPDF `5770f7b` adopts Air for add/remove fields, visibility, permission choices,
file detection and result/recovery. Original encryption/decryption algorithms and
permission defaults/bits are preserved. Detection cancellation, replacement,
error-input retention, duplicate dispatch and late-delivery guards are exercised.
Production output tests verify AES-256/permissions, exact source-stream equality,
wrong/empty-password handling and the editor handoff.

264 state/size/theme/text geometry observations plus 44 final icon checks pass;
representative visual reviews and native Safari/Firefox 200% zoom are recorded.
Required checks, 355 units, six standalone production flows, dead-code/build/PWA
and design/portability checks pass. Physical/assistive acceptance remains open.
The product fallback focus rule now lets the canonical field-action inset win;
no shared token/contract change was needed. Replaced visual code was removed.

Next bounded piece: **Digital Signature options/results**, covering certificate
import/generation, identity and passphrase fields, signing/recovery, signed-output
validity and source fidelity. Then Compare, AI and every editor surface. See the
active TODO for the complete bounded checklist and the PDF validation record for
evidence. Keep Air pinned; proposed shared changes return upstream first.

### 2026-10-14 Digital Signature checkpoint

CloakPDF `109baea` implements certificate import/generation, single-contour fields,
loaded/existing metadata, signing and recovery with pinned Air primitives. Dead
visual code and redundant state/imports are removed. Worker cancellation, import
replacement before an old read resolves, duplicate/late-output guards and focus
recovery pass. Padding and Unicode certificate/CMS encoding fixes preserve actual
signed-output integrity; independent OpenSSL CMS and exact source streams verify it.

All six production standalone workflows, 359 units, format/lint/type, dead-code,
build/PWA/129-asset limits, inventory/source/portability and canonical sync pass.
484 geometry observations cover eleven responsive sizes, themes and enlarged text;
representative screenshots, native Safari/Firefox 200% zoom, reduced motion and
forced colours are reviewed. Physical and assistive acceptance remains open.

Next bounded piece: **Compare inputs/results**. Audit both files, all views,
navigation, summaries, failure/retry and cancellation. Verify changed/identical/
unequal-length PDFs, preserve document pixels and clean up every partial resource.
The central TODO includes explicit dead/dangling-code removal and feature gates.
Then AI and every editor surface. Shared changes must return upstream; this slice
keeps Air 1.0.0 unchanged.
