# Cloakyard Air — full UX refresh

Status: **active — AIR-04 committed; CloakPDF entry implemented, device acceptance remains** · Direction: **Air** · Started: **2026-10-11**

Resume from [the saved handoff](docs/air/RESUME.md). The
[implementation plan](docs/air/IMPLEMENTATION_PLAN.md) defines rollout order,
commit slices and acceptance gates. Detailed design review is complete. AIR-04 is committed as `39c08f9`; CloakPDF entry
is committed as `dc20fe6` after local verification. Remaining device acceptance and deeper product
surfaces stay open. No deployment or push has occurred.

Goal: refresh the complete web family, preserve all features, enforce one portable
design language, and commit each bounded piece only after its validation passes.
KERR's app and native macOS UI are outside this redesign. No deployment or push is
part of the current work. All repositories use branch `codex/air-refresh`.

## Working rules

- `[ ]` pending, `[-]` in progress, `[x]` complete with evidence. A new document or
  token file does not mean the app is migrated. Do not check off untested states.
- Every UI source is tracked in [the surface inventory](docs/air/surface-inventory.md).
  Add newly discovered routes, custom components and states before implementing.
- Every code piece follows implement → inspect → feature-test → record → commit.
  Test failures and unavailable tests stop that piece's commit. Keep unrelated
  user changes out. Never substitute a screenshot for functional verification.
- Per-app migrations may need several commits. Complete shared foundations first;
  carry any shared corrections back to all migrated apps before advancing.
- After the initial Air refinements land, include a legacy-design cleanup pass in
  each migrated piece before its validation and commit. Track remaining findings
  in Phase 7; replacing a screen does not finish its migration while obsolete
  design code or authoritative references remain.
- Evidence belongs in `docs/air/validation.md`; large screenshots may stay in
  task-owned output with exact paths recorded. Record actual viewport/theme/state.

## Current priority — validate the first implementation (2026-10-13)

The user authorized one final glance followed by implementation. The delegated
review is complete and Air 1.0.0 is locked. The gallery navigation correction
passes phone/tablet/desktop in both themes. AIR-04 now imports the canonical
bundle and implements the complete Cloakyard directory. See the dated validation
record for passing checks and the two outstanding device/assistive checks; do not
claim those passed. The user subsequently authorized committing this local piece
with the device checks recorded, then continuing the rollout.

- [x] Define a recognisable family composition/material/selection language beyond a generic card grid.
- [x] Tighten optical spacing, typography, icon alignment, radii, fields and elevation rules.
- [x] Define light and dark as equally deliberate themes, including every interactive state.
- [x] Build reviewable landing/editor/custom-control examples across desktop, tablet and phone.
- [x] Specify purposeful playful motion with exact timing, interruption, keyboard and reduced-motion rules.
- [x] Validate the representative refined reference and synchronize the portable contract and bundle; [coverage and remaining gates](docs/air/validation.md).
- [x] Refine landing text enlargement, compact navigation and short-landscape composition;
      validate container/text bounds, native no-JS navigation and preserve single-contour fields.
- [x] Refine dropdown anatomy and the actual open picker: inset chevron, shared
      option surfaces/checkmark/focus, disabled rows, keyboard behavior, viewport
      scrolling and enlarged select text. Validate reference, tool, paper and export
      selects. See the 2026-10-12 select/motion evidence.
- [ ] Validate the custom select in target browser engines; where native
      `base-select` is unavailable, adopt an established accessible adapter and
      verify the same Air appearance before any production rollout.
- [x] Strengthen the finite light arrival and completion acknowledgement; verify
      both themes, responsive rendering, interruption, keyboard immediacy, idle
      behavior and reduced motion. User visual review remains open.
- [x] Establish Cloakyard as the explicit canonical source; document inheritance,
      pin bundle provenance to the exact contract, and reject mismatched revisions.
      Synchronize both standalone validators and use a content-versioned stylesheet URL.
- [x] Refine field/choice anatomy and working states, including validation recovery,
      read-only/disabled/multiline, mixed checkbox groups and native radio segments.
      Shared component typography is relative; single-contour focus is preserved.
      See [component refinement matrix](design/air/COMPONENTS.md) and validation evidence.
- [x] Add compound search/clear/unit fields and an explicitly simulated action-state
      study for busy/success/error/retry/cancel. Validate stable geometry, keyboard
      focus, single contours, invalid drafts, retained applied values and long labels.
      See the 2026-10-12 compound-fields/action-states evidence.
- [ ] Validate real production async adapters: duplicate submission, cancellation,
      stale results/races, truthful progress and preserved work on failure. The
      manual state study defines appearance and interaction, not real file processing.
- [x] Build real popover, tooltip and action/context-menu specimens with Air
      surfaces and accessible primitive behavior. Validate 56 size/theme/text
      configurations, invalid rename, safe confirmation, focus handoffs and recovery.
      See the 2026-10-12 floating-controls evidence; sample actions are local only.
- [x] Define and validate collection rows, long names, filtered selection, custom
      Select, explicit reorder, rename, reversible removal and history; 76 layout
      cases, 16 nested-dialog cases and six model tests. Submenu Escape and stacked
      dirty-draft confirmations preserve focus and work.
- [ ] Repeat nested overlays/Select on real product operations, physical touch,
      software keyboards, assistive technology and Safari/Firefox.
- [x] Package floating and collection references as independent lazy modules with licenses,
      content revisions, failure/retry handling and standalone integrity guards.
- [-] Extend relative typography and enlarged-text validation through shared fields,
  custom controls, editor chrome, dialogs and the reference documentation controls.
  Shared primitive specimens and enlarged export traversal now pass; custom
  editor chrome/controls remain. Preserve document/canvas output dimensions;
  do not mistake root-font stress for browser zoom.
- [x] Add explicit privacy/long-reading and recovery-page compositions to the reference,
      using the same navigation, reading measure, action hierarchy and both themes.
      Validate 136 viewport/theme/text combinations, keyboard/no-JS navigation,
      retained work, save/restore, exact text download and unsaved navigation.
      See the 2026-10-13 reading/recovery evidence; product policies and real
      persistence/processing adapters still require their own validation.
- [x] Define and exercise shared file intake/progress in a standalone reference:
      real browse/text reading, drop/paste handler parity, same-file reselection,
      invalid selection preservation, known/unknown progress, cancellation/retry,
      late-result guards and focus recovery. Validate 68 viewport/theme/text cases,
      27 interaction observations and nine lifecycle tests. Study interruptions
      are labelled; actual product formats and engines remain rollout gates.
- [ ] Validate file adapters in real products: encrypted/corrupt PDF, HEIC/HEIF
      including empty MIME types, batch images, résumé JSON/schema/draft protection,
      clipboard permissions, resource disposal, export and processing failures.
- [x] Consolidate the final base candidate and map every remaining check to its
      owning implementation in [DESIGN_FREEZE.md](docs/air/DESIGN_FREEZE.md).
- [x] Review and lock the detailed system before product migration; user-authorized final review 2026-10-13.
- [x] Start AIR-04 immediately after lock: shared runtime foundation and the complete
      Cloakyard home, including KERR link-only treatment, legacy cleanup and all gates.
      No further broad specimen pass is planned.
- [x] Build the actual Shaders-based Air light treatment: custom overlapping
      planes, deliberate pointer response, finite arrival and local assets.
      Light/dark and all seven viewport classes pass the reference checks.
      Reduced motion, still artwork and simulated unsupported/constrained graphics
      retain the fallback. See the recorded motion evidence.
- [ ] Review and approve the working light treatment before locking the system.
      Measure physical-device GPU/battery/thermal behaviour, Safari/Firefox and
      slower-network startup; the 369 kB gzip study payload is not yet a production
      budget approval.
- [x] Validate shared-reference press/hover, sheet/dialog interruption, completion
      feedback, keyboard immediacy, focus and live reduced-motion changes. All 42
      PDF/IMG/Resume dialog viewport/theme cases pass. See [motion review](docs/air/motion-review.md).
- [ ] Repeat motion validation on production adapters and real touch devices;
      cover Safari/Firefox and layered overlays. Reference tooltips/popovers now
      have keyboard/hover/reduced-motion checks. Shader local startup,
      idle and visibility checks pass; physical-device costs remain open.
- [x] Refine Resume's study from the full section audit: rich writing, repeated
      entries and partial dates; replace speculative formatting controls with
      actual template/primary-colour/paper choices and preserve direct export/save.
      Representative study validated; full product templates, nested bullets and
      import/export remain product migration gates. See the validation record.
- [x] Remove superseded cues and unused code from the current Air reference:
      obsolete light geometry, unused rail spacer, old workspace class naming,
      duplicate inline motion handlers and timing literals. Record the search scope.
- [ ] Repeat legacy-design searches and cleanup throughout each app as it migrates,
      including custom components, styles, assets, dependencies and documentation.

## Phase 0 — scope, baseline, and full-surface audit

- [x] Confirm Air direction and create the persistent refresh goal.
- [x] Inspect clean git state and create isolated feature branches in all five repos.
- [x] Read existing design contracts and repository instructions.
- [x] Inventory UI files and existing test/build commands.
- [x] Baseline format/lint/type checks: Cloakyard, PDF, IMG, Resume.
- [x] Baseline Drop site check/build.
- [x] Baseline required unit/logic suites: PDF 355/355, IMG 470/470 and Resume
      288/288 including browser/template tests. See the 2026-10-12 checkpoint.
- [ ] Investigate any recurrence of Resume's historical entry/focus/export timing
      failures without weakening assertions. Latest serial suite passes 288/288
      in 386.58s; the earlier 286/288 result is superseded. Entry failure capture
      now saves UI state/screenshots before rethrowing; no root-cause fix is claimed.
- [x] Inspect representative real Resume/PDF/IMG editors before further design; [audit and limits](docs/air/existing-editor-audit.md).
- [-] Inspect PDF desktop/laptop/mobile editor, every tool panel, standalone utilities and overlays. All 22 default panels inspected at desktop/light and phone/dark; date picker and conditional signature/annotation states inspected. Remaining states/utilities are tracked in PDF’s `docs/air/editor-audit.md`.
- [-] Inspect IMG desktop/laptop/mobile editor, every tool panel, custom colour/curve controls and AI states. All 26 default desktop/light panels and 25 phone/dark tools inspected; selected layer, colour DOM and AI consent audited. Remaining states and the Cancel/re-entry finding are tracked in IMG’s `docs/air/editor-audit.md`.
- [-] Inspect Resume desktop/laptop/mobile editor, every section, template/ATS/format/export overlays. All 13 populated sections measured at desktop/laptop/tablet/phone in both themes; date/year, logo, colour, options, template search and all four review tabs inspected. Tablet touch targets and small contact typography need migration fixes; remaining states/exports are tracked in Resume's `docs/air/editor-audit.md`.
- [x] Inspect Drop website, download flow, privacy page and 404 at every layout
      class. Completed baseline: 90 layouts, 24 header journeys, 370 text pairs,
      12 enlarged-text cases and source review of all 18 production files. Findings
      remain migration work; see Phase 6 and Drop's `docs/air/website-audit.md`.
- [ ] Inspect narrow/landscape phone handling, software keyboard and 200% zoom.
- [ ] Audit focus/keyboard/touch, reduced motion, dark mode and long-content cases.
- [ ] Record findings with source locations and concrete validation coverage.

## Phase 1 — portable Air contract and enforcement

- [x] Write the complete family contract: foundations, custom controls, states, layouts, accessibility, motion and exceptions.
- [x] Replace/create each repository's DESIGN.md, including Drop's website specification.
- [x] Preserve domain invariants and output-format exceptions in product appendices.
- [x] Add exact-copy contract synchronization and drift checks; no sibling dependency at runtime.
- [x] Add canonical versioned tokens and shared CSS component primitives (opt-in; product migration pending).
- [ ] Map existing token/Tailwind aliases to Air; eliminate competing palettes/type/radius scales.
- [-] Add a portable component reference covering controls and all applicable states. Representative editors are reviewable; full custom-widget/state coverage remains.
- [x] Enforce adoption instructions for current and future apps through repository guidance.
- [x] Add static conformance checks with a narrow documented content/visual-data exception list.
- [-] Add CI/local validation entry points and screenshot baseline policy. Contract/inventory CI is installed; runtime style and screenshot gates follow with the shared bundle.
- [x] Validate the opt-in bundle in isolated directories: all five products pass
      contract/token/HTML/module integrity plus negative drift checks. The latest
      checkpoint adds overlay-bundle cases; counts are in the validation record.
      Flat and nested-site references load their own CSS, motion and shader assets
      in the browser. No app dependencies or sibling checkouts are needed.
- [ ] Validate portable production integration as each app adopts the bundle.
- [x] Commit the verified contract/reference foundation in all five repositories; see ledger.

## Phase 2 — Cloakyard family home

- [x] Apply shared typography, surfaces, controls, navigation, focus and spacing.
- [x] Replace the technical hero/pipeline with the Air promise and restrained light treatment.
- [x] Refresh product rows; retain correct destinations, platform, status and privacy truth.
- [x] Use each product’s real local SVG mark at a consistent 36px; verify eleven dimensions in both themes.
- [x] Replace KERR's entire illustrated preview with a concise exploration link.
- [x] Refresh principles, footer, mobile navigation and long-link handling.
- [x] Keep source, author, licence, privacy and family links correct.
- [x] Update metadata/theme colour, social artwork and README where affected.
- [x] Inspect every specified viewport plus dark/reduced-motion/no-effect fallbacks.
- [x] Validate all links/anchors, keyboard focus, initial/return hash navigation and no runtime errors.
- [x] Check/type/build, 76 layouts, Chromium journeys, Safari/Firefox and 13 destination checks pass.
      Physical touch and screen-reader interaction remain open; user authorized the local commit with those gaps recorded.
- [x] Recheck the actual Shaders reference: six size/theme cases, finite arrival/pointer response,
      idle rest, reduced-motion no-download, offscreen disposal and unavailable-GPU fallback.
      Production SVG arrival passes desktop/phone with and without reduced motion.
- [x] Activate the real shader in the homepage hero following the user's explicit request.
      Production checks: 22 size/theme cases, idle/device cleanup, native Safari,
      294.3 kB gzip lazy chunk, 350 kB enforced ceiling; local graphics timing recorded.
- [ ] Complete physical mobile GPU/battery/thermal acceptance for the live shader.
      Viewport emulation and queue-fence timings do not complete this device gate.
- [ ] Complete physical touch and screen-reader navigation and record results.

## Phase 3 — CloakPDF reference product

- [x] Landing, file input, searchable toolkit rows, policy, common navigation/footer and encrypted-file recovery.
      88 layout cases, search/routing, synthetic standalone workflows and mobile editor checks pass.
- [x] Update/offline notices use shared Air states; twelve layout/theme/text cases and busy focus verified.
- [x] Global error boundary, route loading and standalone utility header/recovery adapters.
      132 utility header + 88 recovery/loading cases, keyboard recovery and all six
      synthetic standalone output workflows pass; physical/assistive checks remain.
- [x] Standalone utility outer shell and requirement/eligibility headings.
- [x] Merge/Images constructors: shared queue, sorting/manual order, explicit/keyboard moves,
      removal/Undo, busy/error/result states and guarded editor/download delivery.
      112 layouts and actual reordered outputs pass; physical/assistive gates remain.
- [x] Shared utility actions, segments, errors/progress and responsive landscape entry.
      All six non-AI workflows, desktop/mobile editor and interaction checks pass.
- [x] Extract Images and shared selected-file identity: native selection, thumbnails,
      PNG/ZIP output, empty/recovery, measured scan cancellation and guarded downloads.
      176 geometry cases, real output/lifecycle regressions and native 200% zoom pass.
- [x] Password options/results: Air fields, explicit permissions, detection/recovery,
      guarded work, true output feedback and immediate mismatch correction.
      264 state layouts + 44 final field geometry checks, native 200% zoom and
      encrypted/decrypted output fidelity pass; physical/assistive gates remain.
- [x] Digital Signature options/results: shared Air certificate controls, metadata,
      trust disclosures, cancellation/recovery and independently verified output.
      484 geometry observations, native 200% zoom, Unicode/CMS/source fidelity and
      dead-code checks pass; physical/assistive gates remain.
- [x] Compare inputs/results: Air file context, modes, page navigation and recovery;
      cancellable rendering and complete resource cleanup. Committed `f1d99d5`.
- [x] AI setup and model tiers: native Air choices, bundle estimates and one loading owner (`74e32ed`).
- [x] AI consent/progress/error, details, cache actions, model switching and shared
      modal frame implemented (`747aa44`); 268 layouts, real model lifecycle and
      cross-browser keyboard/zoom reviewed. Physical/assistive gates remain open.
- [x] Ask PDF chat, measured indexing, source-page links and recoverable errors;
      448 layouts, real model lifecycle and native browser zoom pass.
      Physical/assistive acceptance remains open; see the completed slice below.
- [x] Editor compact toolbar, tool rail/search, mobile picker and shared page stepper.
- [ ] Properties panel, page context, overview grid and thumbnails.
- [ ] Canvas surround, document shadow, selection handles, text selection, zoom/pan and context overlays.
- [ ] Shared actions, fields, selects, segments, colour picker, date/time, signature and callouts.
- [ ] Every editor panel listed in the surface inventory, including advanced/disclosed controls.
- [-] Export modal: all six formats, native choices, PDF modifiers and busy/error/retry
  implemented (PDF `5f8ab8c`); 320 layouts, real outputs/redaction and
  keyboard/zoom pass. Physical/assistive acceptance remains open.
- [-] Modal coverage: shared frame and AI consent/model choice/details implemented.
  Export and command-palette interiors are implemented (PDF `5f8ab8c`, `343bc00`);
  editor notifications and physical/assistive acceptance remain pending.
  Entry PWA prompt is implemented above; editor integration acceptance remains.
- [ ] Mobile tool picker, canvas/panel split, expanded preview, short-height and landscape behaviour.
- [ ] Feature sweep: annotate, signatures, stamps, crop/rotate/resize, organise/reorder/duplicate/delete.
- [ ] Feature sweep: redaction/smart erase, metadata/scrub, forms/autofill, links/bookmarks/attachments, OCR.
- [ ] Standalone sweep: merge, images→PDF, extract images, compare, password, digital signature, Ask PDF.
- [ ] Verify undo/redo, cancellation, replacement/close, file errors, encrypted PDFs and long documents.
- [ ] Verify exported PDF/image content and document fidelity; retain destructive-operation disclosures.
- [ ] Run check, dead-code, all units, build, applicable smoke/extended/AI browser suites.
- [ ] Inspect desktop/laptop/tablet/phone light/dark, touch/keyboard/reduced motion, 200% zoom.
- [ ] Update PWA/social screenshots and product documentation.
- [ ] Record full evidence and commit each verified piece.

## Phase 4 — CloakIMG

- [ ] Landing/header/footer, drop/start flows, features/privacy and error/reload states.
- [ ] Editor top bar/rail/search/properties, image canvas, stage host and mobile more menu.
- [ ] Layers, history list/scrubber, compare, file properties, batch view and privacy audit.
- [ ] All fields/buttons/selects/segments, colour picker, histogram/levels/HSL/curves and numeric units.
- [ ] All tool panels/stages in the inventory, including preview/apply/cancel and empty/invalid states.
- [ ] AI scope/consent/download/cached/ready/error/cancel/retry for segmentation, face and depth.
- [ ] Export formats/options/metadata/privacy/progress and error/recovery flows.
- [ ] Mobile full tool access, canvas/panel split, short screens, landscape and software keyboard.
- [ ] Feature sweep: adjust, filters, levels/HSL, time-of-day, relight, blur, background removal.
- [ ] Feature sweep: crop/resize/perspective, frames/borders, passport/visa layouts and print/PDF.
- [ ] Feature sweep: retouch/spot heal, masks/faces/redaction, text/shapes/draw/pen, emoji/watermark/images.
- [ ] Validate layers, reorder, undo/redo, compare, apply/cancel, batch, import HEIC and all export formats.
- [ ] Keep pixel colours/alpha/output fidelity and AI consent/canvas-pool invariants intact.
- [ ] Run check, all tests, build/asset limits, tool sweep and applicable audit/probe scripts.
- [ ] Inspect all required layout classes, themes and input/motion modes; update PWA/social assets.
- [ ] Record full evidence and commit each verified piece.

## Phase 5 — CloakResume

- [ ] Landing/start blank/sample/load/restore, capabilities, privacy and footer.
- [ ] Editor header, section rail/picker/panel, canvas/preview pagination, zoom and format scope.
- [ ] Every content section: profile/contact, experience, education, skills, projects, certifications,
      languages, interests, awards, custom, stats and job description.
- [ ] Repeated entry cards, drag/reorder controls, rich text, month/year fields, logo/colour pickers.
- [ ] Correct tablet touch sizing and 10px desktop contact selectors; include calendar,
      rich-text, clear/reorder and review actions in the 44px target sweep.
- [ ] Template gallery/preview, paper size, typography/formatting controls and overflow toolbar.
- [ ] ATS overview/keywords/insights/parse preview, writing review, field jumps and issue states.
- [ ] Confirm, privacy, bottom sheet, reload prompt, validation and error boundary.
- [ ] Mobile edit/preview split, section navigation, short-height/landscape and software keyboard.
- [ ] Test all 17 templates, A4/Letter, pagination, long content and image/logo boundaries.
- [ ] Preserve template-specific colours/fonts/layout and printable/exported document geometry.
- [ ] Verify new/load/save/restore/JSON and PDF export, cancellation, unsaved edits and malformed input.
- [ ] Run check, all logic/browser/template suites and production build.
- [ ] Inspect all required layouts/themes/input/motion modes; update PWA/social assets.
- [ ] Record full evidence and commit each verified piece.

## Phase 6 — CloakDrop website

- [x] Complete the existing-site baseline source/visual/functional audit: 18 production
      sources plus the opt-in Air stylesheet, 90 normal layout cases, 24 header journeys,
      370 opaque-background text pairs and 12 enlarged-root-font cases. Evidence in
      `cloakdrop/docs/air/website-audit.md`; this does not mark production as migrated.
- [ ] Resolve the baseline dark skip-link contrast, enlarged-text home/404 clipping,
      40px touch targets, tablet hero spacing, keyboard motion and no-JS menu findings.
- [ ] Replace/remove the recorded unused style tokens/classes, old band artwork and
      maintained editorial-design references as each surface migrates.

- [ ] Refresh shared header, hero, product/craft/privacy sections, download/install guidance and footer.
- [ ] Preserve native app screenshots as product evidence; apply Air only to surrounding website UI.
- [ ] Privacy and 404 use the same Air reading and navigation patterns.
- [ ] Preserve accurate supported OS, architecture, signing/release status and download links.
- [ ] Remove obsolete motion/hero geometry only when unused; preserve accessibility and anchors.
- [ ] Inspect all required viewport classes, dark mode, keyboard/touch/reduced motion and zoom.
- [ ] Run asset sync, Astro check and production build; verify links and policy content.
- [ ] Verify no Swift/native changes; record evidence and commit.

## Phase 7 — legacy design cleanup after redesign

Begin after the initial refinements land, repeat within each app's migration, and
finish with a family-wide search after all redesigned surfaces are in place. Cover
Cloakyard, CloakPDF, CloakIMG, CloakResume and CloakDrop's website, including editor
interiors, custom controls, canvas chrome and less-visible states.

- [ ] Inventory legacy design findings by repository and source location; record
      replacement/removal, remaining work and verified exceptions in the audit evidence.
- [ ] Search for obsolete tokens, palettes, fonts, spacing/radius/shadow scales,
      breakpoint/theme overrides, hardcoded styles and compatibility aliases.
      Replace live UI uses with Air primitives and remove unused definitions.
- [ ] Find duplicate or abandoned components, stylesheets/selectors, imports,
      hooks, feature flags, conditional branches and commented-out UI experiments.
      Check routes, dynamic imports and generated class names before deleting.
- [ ] Remove superseded animation/keyframe/shader code and dependencies that are
      unused after migration; keep motion aligned with Air and reduced-motion rules.
- [ ] Audit old icons, illustrations, fonts, screenshots, social/PWA artwork and
      asset-generation scripts. Replace active product imagery and remove orphaned
      assets only after checking their runtime, metadata and documentation consumers.
- [ ] Remove stale design directions and references from contributor instructions,
      README files, comments, examples, component studies and other maintained docs.
      Keep DESIGN.md authoritative and synchronize any portable-contract corrections.
- [ ] Update tests, fixtures and visual baselines that encode superseded UI only
      after validating the replacement; preserve feature and accessibility assertions.
- [ ] Remove obsolete packages/configuration and refresh lockfiles, build inputs
      and PWA/precache references where affected; verify no broken imports or asset URLs.
- [ ] Preserve document/template styling, user content colours, exported output,
      KERR and native macOS exceptions. Retain useful historical audit evidence as
      clearly labelled history, never as current design guidance.
- [ ] Run available dead-code checks and repository-required format/lint/type,
      feature tests and builds for each cleanup piece. Inspect affected controls
      and states at desktop/laptop/tablet/mobile sizes in light and dark themes,
      including keyboard, touch and reduced motion; commit only after passing.
- [ ] Repeat legacy-name/style/reference searches across all five repositories.
      Record search coverage and explain remaining matches; no unexplained obsolete
      design code or conflicting instructions may remain at final sign-off.

## Phase 8 — family-wide regression and completion

- [ ] Compare all landing pages together at the same widths/themes.
- [ ] Compare controls, editors/canvases, tool panels and overlays across the three web apps.
- [ ] Review every surface inventory entry; none may remain unreviewed without a named reason.
- [ ] Re-run affected feature suites after shared corrections and inspect generated outputs.
- [ ] Check all contract/token hashes and eliminate stale authoritative Workbench instructions.
- [ ] Validate new-app adoption from the portable bundle in an independent directory.
- [ ] Check fonts/assets/privacy requests, startup/build budgets and shader fallbacks.
- [ ] Confirm KERR is unchanged and its main-site listing has no preview.
- [ ] Final per-app checks/builds, visual evidence, clean git state and commit ledger.
- [ ] Mark the persistent goal complete only after every required item is verified.

### PDF modal and chat checkpoints

- [x] Export: six native format choices, all PDF options/compression levels, full
      filenames, busy/error/retry, focus return and exact real output validation.
      All six formats burn pending redaction; working source/history unchanged.
      Existing processors do not support cancellation: protect preparation with
      explicit status until settlement. No invented page-range or rename controls.
      PDF `5f8ab8c`; compact evidence in its `docs/air/evidence/export-2026-10-14.json`.
- [x] Command palette: shared compound search, readable category/result rows,
      active indicator, hints, empty recovery, IME guard and responsive focus return.
      Real tool and Undo/Redo/Reset handoffs, 192 layouts, short/enlarged recovery,
      forced colours and native Safari/Firefox 200% zoom pass. No dependencies.
      PDF `343bc00`; evidence in `docs/air/evidence/palette-2026-10-14.json`.
      Palette has no dialog-opening commands; no invented actions were added.
- [-] Export keyboard and trigger return pass in Chromium/Safari/Firefox, including
  200% browser zoom. Global editor shortcuts cannot mutate work behind dialogs.
  Command-palette interior and tool/history handoffs also pass (`343bc00`).
  Physical touch/software-keyboard, real OS IME and assistive speech gates stay open.
- [ ] Review all required sizes/themes, enlarged text, touch targets, short
      landscape, reduced motion/forced colours and actual browser zoom per slice.
- [ ] Remove each replaced interior's obsolete selectors, helpers and imports;
      run dead-code, required checks and applicable feature/output tests, save
      compact evidence, then commit. Do not add dependencies without a real need.
- [x] Ask PDF conversation, indexing, citations and recovery implemented and
      validated locally; physical/assistive acceptance remains open.
- [x] Editor header and tool navigation, including compact phone/tablet toolbar,
      mobile picker, keyboard paths, short-height layouts and preserved state.
- [ ] Next bounded piece: properties/page context/overview/thumbnails, then canvas surround and
      every remaining editor panel and overlay with the same commit gates.

### Completed PDF slices — AI setup and model dialogs

- [x] Setup/tier selection and bundle estimates, one return-visitor loader,
      partial-cache guard, native radios and real cold/warm/swap paths (`74e32ed`).
- [x] Shared Air frame and phone sheet; consent/loading/error/retry/cancel; model
      metadata; memory release; confirmed cache/index deletion and recovery;
      loaded-model actions and pending tier selection (`747aa44`).
- [x] Preserve modal ownership through exit; immediate keyboard/reduced motion;
      native radio single Tab stop; Safari link traversal and trigger return.
- [x] Inspect 268 layout cases in both themes at 16/32px root text, all Air sizes
      and dialog breakpoint neighbors. Native Safari/Firefox 200% zoom inspected.
- [x] Validate real model loads, warm return, PDF questions/extraction, tier swap,
      cancel/reopen, explicit RAM release/reload and existing document recovery.
      CacheStorage denial and IDB transaction abort remain retryable; successful
      deletion removes real disposable test records and readiness flags.
- [x] Remove old modal skin, unused animation presets, estimated-percentage helper,
      unused single-model API and duplicate details owners. Net production change:
      **791 lines removed**, zero dependencies; Ask PDF 596.20/179.08 kB raw/gzip
      versus 611.72/181.88 kB before the modal slice.
- [x] Format/lint/types, dead-code, 366 units, production build/127-asset limits,
      design/portability and applicable editor/modal/AI browser suites pass.
      Compact evidence is in PDF `docs/air/evidence/ai-modals-2026-10-14.json`.
- [ ] Physical touch/software-keyboard and assistive speech acceptance remain open.
      These checkpoints do not complete Ask PDF, the editor or the family refresh.

### Completed PDF slice — Compare inputs and results

CloakPDF `f1d99d5`; evidence: `docs/air/evidence/compare-2026-10-14.json`.

- [x] Migrate both inputs, persistent file names, both views, diff visibility,
      page/thumbnail navigation, summary and every recovery state to Air.
- [x] Preserve source bytes and page geometry; verify real pixel changes,
      transparent identical overlays and unequal page counts/sizes.
- [x] Cancel and release reads/tasks/renders/encoders and every partial URL;
      prevent late results, preserve input on failure and restore focus.
- [x] Inspect 484 layout observations plus representative screenshots, coarse
      targets, native Safari/Firefox 200%, reduced motion and forced colours.
- [x] Remove old pipeline/skins, unused average and stepper variants; pass dead-code,
      366 units, six standalone workflows, both editor smoke suites and build/design
      checks. Keep larger local screenshot sets outside Git to limit evidence growth.

Physical touch/software keyboard and screen-reader acceptance remain open.

## Commit ledger

### Completed PDF slice — Digital Signature options and results

Committed in CloakPDF `109baea`; evidence and passing output are in that repository's
`docs/air/evidence/signature-2026-10-14.json` and companion checks log.

- [x] Migrate certificate import/generation, single-contour fields, password
      visibility, existing/loaded identity, disclosures, metadata and recovery.
- [x] Preserve and independently verify generated/imported signatures, Unicode
      names, certificate chains, empty passwords, ByteRange and exact source streams.
- [x] Guard duplicate/late signing; terminate cancelled certificate workers and
      allow replacement imports before obsolete file reads resolve. Preserve focus.
- [x] Review 484 geometry observations in all contract sizes/themes/enlarged text,
      representative screenshots, native Safari/Firefox 200% zoom and forced colours.
- [x] Remove replaced visual code and redundant async state/imports; prevent a
      cancelled import leaving a dangling action guard. Dead-code scan passes.
- [x] Pass check/type, 359 units, six production standalone flows, build/PWA/129-asset
      limits, inventory, design integrity, 17 portability assertions and canonical sync.

Physical touch/software keyboard and screen-reader acceptance remain open.
AI and every editor surface remain in scope; this is not a completed PDF migration.

### Completed PDF slice — Password options and results

Committed in CloakPDF `5770f7b`; evidence and passing output are in that repository's
`docs/air/evidence/password-2026-10-14.json` and companion checks log.

- [x] Audit and migrate add/remove fields, visibility, permission choices,
      detection, selected-file states, success and retry to pinned Air controls.
- [x] Preserve AES-256/permission bits and source streams through protection and
      unlocking; verify wrong/empty-password handling and real editor handoff.
- [x] Guard duplicate/late delivery, ignore obsolete detection after cancellation,
      preserve drafts during errors and restore intake/field focus.
- [x] Review all contract sizes in both themes/enlarged text, native Safari/Firefox
      200% zoom, forced colours and reduced motion. Correct page fallback focus
      overriding the canonical field action; no shared contract change was needed.
- [x] Remove replaced skins/mono headings/tinted icons/disclosure code, update
      inventory and evidence; pass 355 units, six standalone production workflows,
      check/dead-code/build/PWA/135-asset limits, design integrity and portability.

Physical touch/software keyboard and screen-reader acceptance remain open. The
complete PDF migration, including every editor surface, is still in progress.

### Completed PDF slice — Extract Images

Committed in CloakPDF `b25ae2c`; evidence and passing output are in that repository's
`docs/air/evidence/extract-2026-10-14.json` and companion checks log.

- [x] Migrate selected-file summary, native image selection/previews, bulk controls,
      selected count, PNG/ZIP actions and success/error/empty states to Air.
- [x] Preserve image bytes/order and selection on download failure; guard duplicate
      or late delivery, cancel obsolete scans and restore meaningful focus.
- [x] Inspect light/dark across the full viewport/text matrix, keyboard selection,
      native zoom, long names, no-images/corrupt/encrypted input and busy states.
- [x] Verify individual PNG and partial/all ZIP contents, cancellation/replacement,
      shared non-AI file-summary consumers and all six standalone regressions.
- [x] Remove replaced styles/references, update inventory/evidence, run required
      checks and commit the bounded piece.

Physical touch/software keyboard, screen-reader speech and loaded-model AskPDF
integration remain on their explicit gates; this is not a completed PDF migration.

### Completed PDF slice — constructors and shared utility controls

Committed in CloakPDF `aba5643`; evidence and passing test output are in that
repository’s `docs/air/evidence/constructors-2026-10-13.json` and companion log.

- [x] Merge and Images to PDF: one Air file queue; wrapped names, optional previews,
      sorting, drag/keyboard/visible moves, focus-safe removal and persistent Undo.
- [x] Shared utility actions, segmented choices, errors and measured progress use
      the pinned Air skins; preserve processing, output and secondary editor hand-offs.
- [x] Preserve inputs on failure; guard duplicate processing and late delivery
      after navigation. Show truthful completion without resetting it on a timer.
- [x] Remove the standalone-only orientation gate after landscape checks; editor
      already supports landscape. Verify all six non-AI utilities remain reachable.
- [x] Validate both constructors' populated/error/result states at all contract
      sizes/themes plus enlarged text, keyboard/coarse input, sorting/reorder/undo,
      output page counts/order and editor hand-offs. Run required checks before commit.
- [x] Audit replaced classes/motion and record evidence. Other utility-specific
      option/result bodies and AI states remain separate upcoming pieces.

Governance commits (no product runtime changes): Cloakyard `8d5dcea`, CloakPDF
`5a1755f`, CloakIMG `9cd1200`, CloakDrop `5133124`. Each passed its applicable
checks. Resume had an earlier serial 288/288 pass followed by focus/export/entry
timing failures; its gate stayed closed until the fresh full pass recorded below.
The Air refinement
03 design checkpoint is recorded in Cloakyard's git history after reference checks.
No product implementation commits. Native code and KERR are unchanged.

Design/audit checkpoints: Cloakyard `721911c` established refinement 03;
CloakPDF `4830570` records the complete default-panel audit and synchronized opt-in
reference after format/lint/type, dead-code, 355 units and production build passed.
The family signature/dense-control follow-up is recorded in Cloakyard git history.
These commits do not migrate production UI or waive remaining feature gates.

CloakDrop `4124a5b` saves its complete website baseline audit and opt-in refinement
03 bundle. Astro check/build, asset sync, integrity, isolated portability and
inventory idempotence pass. Baseline UX failures remain migration requirements;
no production website or native code was changed.

The 2026-10-12 commit-all checkpoint saves the refined reference after fresh gates:

| Repository  | Commit                                                      | Validation                                                                           |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Cloakyard   | `340aee8` reference; implementation plan in this checkpoint | Check/build, exact sync, 50 family portability assertions; reference visual evidence |
| CloakPDF    | `f960092`                                                   | Check, dead-code, 355 units, TypeScript/build/PWA, asset limit                       |
| CloakIMG    | `2a639c4`                                                   | Check, 470 tests, TypeScript/build/PWA, asset limit                                  |
| CloakResume | `5367f46`                                                   | Check, full serial 288/288, TypeScript/build/PWA, failure capture                    |
| CloakDrop   | `9340c6d`                                                   | Asset sync, Astro check and three-route build                                        |

All local reference/contract checks pass. These are reference/audit/tooling commits,
not product migrations; no push or deployment. The implementation plan defines
shared-adapter adoption and small product slices with the same per-commit gates.

The 2026-10-13 file-reference checkpoint defines portable intake, actual byte
progress, cancellation/retry and stale-result handling, with 68 layout cases,
27 interaction observations and nine lifecycle tests. All required product gates
and 70 isolated portability assertions pass. Sibling final checkpoints: PDF
`fe090e8`, IMG `d514ae6`, Resume `60947b9`, Drop `de00cb2`. Detailed evidence,
limitations and the Resume log are in `docs/air/validation.md`. Production
adoption and detailed visual sign-off remain open.

### Final base candidate — 2026-10-13

- Cloakyard: this checkpoint contains collections, nested overlays, custom Select,
  shared rules, verified evidence and `DESIGN_FREEZE.md`.
- Portable copies: PDF `dea80e8`, IMG `68b0828`, Resume `4fb514c`, Drop `f44a492`.
- Contract `c6ec55c0fe59`, CSS `80fb336bb4eb`, collections `0bbea11f0a18`.
- All required checks pass; 355 PDF, 470 IMG and 288 Resume tests pass. Six model
  tests, 75 portability assertions and the reference interaction/layout checks pass.
- Detailed visual approval is pending. Next after lock: AIR-04 shared foundation
  and Cloakyard home. No product runtime adoption, push or deployment in this checkpoint.

### 2026-10-13 design lock checkpoint

- Cloakyard `ea26823`, PDF `e59bcd5`, IMG `0182ec0`, Resume `b91e39e`, Drop `f507724`: reviewed Air baseline and gallery navigation correction, all synchronized.
- AIR-04 home implementation, cleanup and evidence are included in the user-authorized local commit; physical-touch and screen-reader acceptance remain open. Production preview: `http://127.0.0.1:8131/`.
- Root check/type/build, sibling format/lint/type and Drop Astro checks pass; bundle checks and the preceding unchanged-runtime suite evidence are recorded in validation.md.

### Completed PDF slice — Ask PDF conversation

Committed in CloakPDF `12b11b5`; evidence and passing logs are recorded in that
repository. Cloakyard check/type/build, six-repository exact sync, design integrity
and portability checks also pass.

- [x] Air transcript, single-contour labelled composer, normal author/status labels,
      readable markdown and locally scrolling code/tables; real source-page links.
- [x] Actual page/passage progress, explicit retry/no-text recovery, partial answer
      retention, protected next drafts, IME-aware sending and focus return.
- [x] Stable model readiness, per-attempt/session ownership, late-result isolation
      after replacement/navigation, source URL cleanup and reader-owned scrolling.
- [x] 448 viewport/theme/text layouts; native Safari/Firefox keyboard and actual
      200% zoom; real model initial/warm answers, extraction, tier swap and memory
      release/reload; AI modal storage/download/recovery regression.
- [x] Remove unused InfoCallout and orphan selector, weighted-progress helper,
      obsolete comments and replaced skins. Net 216 production lines removed; no
      dependencies. Check/dead-code, 366 units, build/PWA/assets, design and
      portability pass. Evidence: PDF `docs/air/evidence/chat-2026-10-14.json`.

Physical touch/software keyboard, real OS IME and assistive speech remain open.
Underlying indexing is not abortable; obsolete results are discarded on replacement.
This completes the bounded chat implementation, not the full PDF/family migration.
Next: editor header and tool navigation, then every remaining editor interior.

### Completed PDF slice — Compact toolbar and editor navigation

CloakPDF commit: `38dbc8b`. Evidence is in that repository's
`docs/air/evidence/navigation-2026-10-14.json`.

- [x] One 64px toolbar at normal text size, with no filename/page-count subtitle.
      Tablet/phone disclose the filename and home action from the document mark;
      paging, undo/redo and export stay available. Pending marks use a small badge.
- [x] Air labelled rail, neutral selection, full-name mobile tool list, labelled
      search and clear/empty states; expand/split retains the document and tool.
- [x] Correct laptop/short-landscape breakpoints; immediate tool navigation and
      focus return; palette commands wait for modal cleanup; busy/modal history guards.
- [x] 176 layout cases plus four long-filename cases, both themes and 200% text;
      native Safari/Firefox keyboard and actual 200% zoom; nine browser suites,
      366 units, check/dead-code, build/PWA/asset limits and portability checks.
- [x] Remove replaced header/mobile/rail styling, duplicate page stepper and
      orphan motion selectors. No dependencies; portable product appendix updated.

Physical touch/software keyboard, OS IME and assistive speech acceptance stay open.
Inspector, overview/thumbnails, canvas chrome and tool interiors remain pending.
Next: properties/page context and page collections; retain the same per-piece gates.
